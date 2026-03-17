import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, ShieldAlert } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const HoverChatbot = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const messagesEndRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // UI Messages for the chat window
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: 'bot', 
      text: "Hi there! I'm Omi (Odessey Messaging Interface). I can help you find destinations, plan your trip, or take you to the Arcade. What's on your mind today?" 
    }
  ]);

  // Hidden conversation history strictly formatted for Ollama
  const [chatHistory, setChatHistory] = useState([]);

  // System prompt that defines the bot's personality and routing rules
  const systemPrompt = {
    role: 'system',
    content: `You are 'Omi' (Odessey Messaging Interface), a helpful and friendly travel concierge for the Odessey website. 
    Your job is to answer travel questions and suggest destinations in India.
    
    STRICT FORMATTING RULES:
    - NEVER use markdown formatting like **bold**, *italics*, or ### headers. Keep your text completely plain, clean, and conversational.
    - Keep responses relatively short and easy to read in a small chat window.

    STRICT ROUTING RULES (USE THESE RARELY):
    - ONLY include the exact tag [NAV_PLAN] if the user explicitly gives a command like "plan my trip", "book a ticket", or "take me to the planner". Do NOT use this tag when you are simply describing a location.
    - ONLY include the exact tag [NAV_ARCADE] if the user explicitly asks to play games, earn rupees, or go to the arcade.
    - ONLY include the exact tag [NAV_EXPERIENCE] if the user explicitly asks to browse curated experiences or destination grids.
    
    SECURITY RULES:
    - Never ask for or accept confidential information like credit card numbers, passwords, or government IDs. Refuse politely if asked.
    - Do not engage in negative, hateful, or harmful discussions.`
  };

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const userMessage = { id: Date.now(), sender: 'user', text: userText };
    
    // 1. Update UI and Context
    setMessages(prev => [...prev, userMessage]);
    const newContext = [...chatHistory, { role: 'user', content: userText }];
    setChatHistory(newContext);
    
    setInput("");
    setIsTyping(true);

    try {
      // 2. Call Local Ollama API
      const response = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama3', // Change this if you are using mistral, phi3, etc.
          messages: [systemPrompt, ...newContext],
          stream: false
        })
      });

      if (!response.ok) throw new Error("Network response was not ok");
      
      const data = await response.json();
      let botRawText = data.message.content;

      // 3. Check for Strict Routing Tags injected by the LLM
      let routeAction = null;
      if (botRawText.includes('[NAV_PLAN]')) routeAction = '/plan';
      else if (botRawText.includes('[NAV_ARCADE]')) routeAction = '/arcade';
      else if (botRawText.includes('[NAV_EXPERIENCE]')) routeAction = '/experience';

      // 4. Aggressively clean the text so the user doesn't see tags or accidental markdown
      let cleanText = botRawText
        .replace(/\[NAV_PLAN\]|\[NAV_ARCADE\]|\[NAV_EXPERIENCE\]/g, '') // Remove routing tags
        .replace(/\*\*/g, '') // Strip bold markdown
        .replace(/\*/g, '')   // Strip italic markdown
        .replace(/#/g, '')    // Strip header markdown
        .trim();

      // 5. Update UI with the bot's cleaned response
      const botMessage = { id: Date.now() + 1, sender: 'bot', text: cleanText };
      setMessages(prev => [...prev, botMessage]);
      setChatHistory([...newContext, { role: 'assistant', content: cleanText }]);

      // 6. Execute Navigation if the LLM explicitly requested it based on user command
      if (routeAction) {
        setTimeout(() => {
          navigate(routeAction);
        }, 1500); 
      }

    } catch (error) {
      console.error("Ollama connection error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: 'bot', 
        text: "I'm having trouble connecting to my AI brain right now! Please make sure Ollama is running locally on port 11434 with CORS enabled.",
        isWarning: true
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999 }}>
      
      {/* --- THE CHAT WINDOW --- */}
      {isOpen && (
        <div style={{ 
          position: 'absolute', bottom: '70px', right: '0', 
          width: window.innerWidth < 400 ? 'calc(100vw - 60px)' : '380px', 
          height: '550px', backgroundColor: 'white', borderRadius: '24px', 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid #e5e7eb',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          animation: 'chatFadeIn 0.3s ease-out'
        }}>
          
          {/* Header */}
          <div style={{ backgroundColor: '#111827', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ backgroundColor: '#16a34a', padding: '8px', borderRadius: '50%' }}><Bot size={20} color="white" /></div>
              <div>
                <h3 style={{ color: 'white', fontSize: '16px', fontWeight: 'bold', margin: 0 }}>Omi</h3>
                <span style={{ color: '#4ade80', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '8px', height: '8px', backgroundColor: '#4ade80', borderRadius: '50%', display: 'inline-block' }}></span> Odessey Messaging Interface
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}><X size={20} /></button>
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column', gap: '15px' }} className="hide-scrollbar">
            {messages.map(msg => (
              <div key={msg.id} style={{ display: 'flex', flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-end', gap: '8px' }}>
                {msg.sender === 'bot' && <div style={{ width: '28px', height: '28px', backgroundColor: '#111827', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Bot size={14} color="white" /></div>}
                
                <div style={{ 
                  backgroundColor: msg.sender === 'user' ? '#16a34a' : msg.isWarning ? '#fee2e2' : 'white', 
                  color: msg.sender === 'user' ? 'white' : msg.isWarning ? '#991b1b' : '#374151', 
                  padding: '12px 16px', borderRadius: '16px', 
                  borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                  borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                  maxWidth: '85%', fontSize: '14px', lineHeight: '1.5',
                  boxShadow: msg.sender === 'bot' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                  border: msg.sender === 'bot' && !msg.isWarning ? '1px solid #e5e7eb' : 'none',
                  whiteSpace: 'pre-wrap'
                }}>
                  {msg.isWarning && <ShieldAlert size={16} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'text-bottom' }}/>}
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '28px', height: '28px', backgroundColor: '#111827', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Bot size={14} color="white" /></div>
                <div style={{ backgroundColor: 'white', padding: '12px 16px', borderRadius: '16px', borderBottomLeftRadius: '4px', border: '1px solid #e5e7eb', display: 'flex', gap: '4px' }}>
                  <div className="typing-dot" style={{ width: '6px', height: '6px', backgroundColor: '#9ca3af', borderRadius: '50%' }}></div>
                  <div className="typing-dot" style={{ width: '6px', height: '6px', backgroundColor: '#9ca3af', borderRadius: '50%', animationDelay: '0.2s' }}></div>
                  <div className="typing-dot" style={{ width: '6px', height: '6px', backgroundColor: '#9ca3af', borderRadius: '50%', animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} style={{ padding: '15px', backgroundColor: 'white', borderTop: '1px solid #e5e7eb', display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Ask Omi about destinations..." 
              style={{ flex: 1, padding: '12px 15px', borderRadius: '50px', border: '1px solid #e5e7eb', fontSize: '14px', outline: 'none', backgroundColor: '#f9fafb' }}
            />
            <button type="submit" disabled={!input.trim() || isTyping} style={{ backgroundColor: input.trim() && !isTyping ? '#16a34a' : '#e5e7eb', color: 'white', border: 'none', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: input.trim() && !isTyping ? 'pointer' : 'not-allowed', transition: 'background 0.2s' }}>
              <Send size={18} style={{ marginLeft: '2px' }} />
            </button>
          </form>
        </div>
      )}

      {/* --- THE FLOATING ACTION BUTTON (FAB) --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          backgroundColor: '#111827', color: 'white', border: 'none', 
          width: '60px', height: '60px', borderRadius: '50%', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          cursor: 'pointer', boxShadow: '0 10px 25px rgba(17, 24, 39, 0.4)',
          transition: 'transform 0.2s ease', transform: isOpen ? 'scale(0.9)' : 'scale(1)'
        }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes chatFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .typing-dot {
          animation: bounce 1.4s infinite ease-in-out both;
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default HoverChatbot;