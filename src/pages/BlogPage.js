import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, X, Search, Tag, Sparkles, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- EXPANDED & ELABORATED BLOG DATA (10 COMPREHENSIVE POSTS) ---
const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Packing for the Himalayas",
    author: "Rohan Das",
    date: "March 2, 2026",
    category: "Travel Tips",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    excerpt: "Layering is an art form. From thermal inners to waterproof shells, here is exactly what you need to pack to survive and thrive in high altitudes.",
    content: "Packing for the Himalayas can be daunting. The weather in high-altitude regions like Spiti, Ladakh, or Uttarakhand can shift from a blistering, sunny 15°C to a bone-chilling -5°C within a matter of hours. The secret to staying comfortable without overpacking? The three-layer system.\n\nFirst, always start with a good moisture-wicking Base Layer. Avoid cotton at all costs, as it traps sweat, cools down rapidly, and makes you feel freezing. Opt for high-quality merino wool or synthetic blends that draw moisture away from your skin.\n\nSecond is your Mid-Layer, which is designed for insulation. Think thick fleece jackets or a lightweight, highly compressible down puffer jacket. This layer traps your body heat. \n\nFinally, your Outer Layer must be a windproof and waterproof hard shell. A Gore-Tex jacket is your best friend here, protecting you from sudden snow flurries or biting mountain winds.\n\nBeyond clothing, do not underestimate the importance of footwear. Invest in waterproof trekking boots with excellent ankle support, and break them in before your trip to avoid blisters. Pack smart, keep your backpack as light as possible, stay hydrated to prevent acute mountain sickness (AMS), and the mountains will reward you with the trip of a lifetime!"
  },
  {
    id: 2,
    title: "7 Hidden Gems in South India You Must Visit in 2026",
    author: "Priya Sharma",
    date: "February 25, 2026",
    category: "Destinations",
    readTime: "10 min read",
    img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    excerpt: "Skip the crowded beaches of Goa and the busy streets of Ooty. Discover these untouched paradises hidden in the southern peninsula.",
    content: "While Munnar, Coorg, and Pondicherry are undeniably beautiful, they have become heavily commercialized over the years. If you are looking for true tranquility and untouched landscapes, South India still holds many incredible secrets.\n\n1. Vattakanal, Tamil Nadu: Often called 'Little Israel,' this misty village near Kodaikanal is famous for its dense pine forests, Israeli cafes, and the stunning Dolphin's Nose viewpoint.\n\n2. Gandikota, Andhra Pradesh: Known as the Grand Canyon of India, the massive gorge carved by the Penna river is a breathtaking sight. It is the perfect spot for off-grid camping under a canopy of stars.\n\n3. Maravanthe, Karnataka: A spectacular, unique stretch of highway where you drive with the roaring Arabian Sea on one side and the calm Souparnika River on the other.\n\n4. Dhanushkodi, Tamil Nadu: An eerie, abandoned ghost town at the very tip of the Pamban Island. Destroyed by a cyclone in 1964, the ruins against the turquoise waters of the Indian Ocean are hauntingly beautiful.\n\n5. Ponmudi, Kerala: A lesser-known hill station near Trivandrum offering 22 hairpin bends, lush tea estates, and misty valleys without the massive crowds of Wayanad.\n\n6. Skandagiri, Karnataka: Famous among night trekkers, this hill offers an incredible experience of walking above the clouds at sunrise, just a couple of hours away from Bangalore.\n\n7. Agumbe, Karnataka: Known as the Cherrapunji of the South, this high-altitude rainforest is a haven for wildlife photographers and King Cobra enthusiasts. \n\nThese destinations offer a raw, unfiltered look at India's diverse landscapes. Make sure to visit them respectfully and sustainably before the rest of the world finds out!"
  },
  {
    id: 3,
    title: "How to Travel Sustainably: A Beginner's Guide",
    author: "Kavya Menon",
    date: "February 18, 2026",
    category: "Guides",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    excerpt: "Traveling the world shouldn't cost the earth. Learn how to minimize your carbon footprint and support local communities on your next trip.",
    content: "Sustainable travel is no longer just a buzzword; it's an absolute necessity. As travelers, it is our core responsibility to protect the fragile ecosystems and communities we love to visit. But where do you start?\n\nThe easiest and most impactful way to start is by eliminating single-use plastics from your packing list. Carry a high-quality reusable water bottle equipped with a built-in filter (like a LifeStraw), and bring your own cloth tote bags for local shopping. \n\nSecond, consciously support the local economy. Skip the massive, international hotel chains and opt for locally-owned homestays, eco-lodges, or family-run guesthouses. Not only does this keep your money circulating within the local community, but it also provides you with a vastly more authentic cultural experience and home-cooked meals.\n\nThird, rethink your transportation. While flights are fast, trains and buses drastically reduce your carbon footprint and offer a much better view of the country. If you must fly, look into carbon offset programs.\n\nFinally, be incredibly mindful of wildlife tourism. Avoid any attractions that exploit animals for human entertainment, such as elephant riding, tiger petting, or monkey shows. Choose ethical, observation-only safaris in national parks where the animals roam free. Take only memories, leave only footprints."
  },
  {
    id: 4,
    title: "Introducing Odessey's Smart Trip Discoverer",
    author: "Odessey Team",
    date: "February 10, 2026",
    category: "Company News",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    excerpt: "We are thrilled to launch our new AI-powered Trip Discoverer. Answer 6 quick questions and find your perfect getaway instantly.",
    content: "Planning a trip can often be more stressful than the trip itself. With endless destinations to choose from, hundreds of blogs to read, and countless reviews to cross-check, decision fatigue is a real problem for modern travelers. That's exactly why we built the Odessey Trip Discoverer.\n\nOur new tool acts as your personal digital travel agent. By answering six simple, intuitive questions about your preferred travel vibe, landscape, duration, and companions, our proprietary algorithm instantly scans hundreds of curated Indian destinations to match you with your perfect trip.\n\nHow does it work? If you select 'Solo', 'Mountains', and 'Adventure', the engine knows to bypass romantic resorts in Udaipur and instead curates high-altitude treks in Spiti Valley or paragliding hubs in Bir Billing. It even weights your activity preferences to ensure the destination actually supports what you want to do.\n\nWhether you are looking for a deeply spiritual solo retreat in Varanasi or a chaotic, fun-filled weekend with friends in Goa, the Discoverer handles the heavy lifting. Once you find your match, one click imports it into our Custom Itinerary builder. Try it out today on our Discover page and let the adventure begin!"
  },
  {
    id: 5,
    title: "Mastering the Art of Solo Travel in India",
    author: "Aman Singh",
    date: "January 28, 2026",
    category: "Travel Tips",
    readTime: "9 min read",
    img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80",
    excerpt: "Solo travel is empowering but requires preparation. Here are the top safety tips and mindset shifts you need for your first solo trip.",
    content: "Traveling alone across India is one of the most rewarding, intense, and transformative experiences you can have. It teaches you deep resilience, forces you entirely out of your comfort zone, and opens you up to meeting incredible people you would otherwise ignore if you were in a group.\n\nSafety is, naturally, the primary concern for first-timers. The golden rules are simple: Always share your live location and itinerary with a trusted friend or family member. Try to schedule your arrivals in new cities during daylight hours. Book your first night's accommodation in advance so you aren't wandering around a new place with your luggage. Most importantly, trust your gut—if a situation, a taxi, or a person feels off, walk away immediately.\n\nBut beyond the logistics of safety, solo travel requires a massive mindset shift. It's perfectly okay to feel lonely sometimes; it's part of the process. Embrace the quiet moments. Sit in a local cafe with a book, strike up a conversation with a shopkeeper, or stay in a backpacker hostel where you can instantly meet like-minded travelers in the common room.\n\nPack incredibly light—you are the only one carrying your bags. Walk with confidence, even if you are lost. The world is much kinder and far more accommodating than the news leads us to believe."
  },
  {
    id: 6,
    title: "A Culinary Tour of Rajasthan: Beyond Dal Bati Churma",
    author: "Neha Gupta",
    date: "January 15, 2026",
    category: "Destinations",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1606491956689-2ea28c674675?auto=format&fit=crop&w=800&q=80",
    excerpt: "Rajasthan's food is as vibrant as its culture. Dive into the spicy, royal, and rich flavors of the desert state.",
    content: "When we think of Rajasthani cuisine, the iconic Dal Bati Churma instantly comes to mind. But the culinary heritage of the Rajputs goes much deeper, heavily influenced by the arid climate, the scarcity of water, and the warrior lifestyle of its ancestors.\n\nBecause fresh vegetables were historically scarce in the desert, locals relied heavily on lentils, beans, milk, and buttermilk. A classic example is Ker Sangri, a tangy, spicy sabzi made from desert beans and berries that can last for days without spoiling. When paired with hot Bajre ki Roti and garlic chutney, it is an absolute revelation.\n\nFor meat lovers, Laal Maas is legendary. Originating from the royal kitchens of Mewar, this fiery mutton curry is cooked with a staggering amount of mathania chilies, giving it a striking, intimidating red color and a smoky flavor that is best enjoyed with roomali roti.\n\nStreet food is equally vibrant. You cannot visit Jodhpur without eating their famous Mirchi Bada (giant chili fritters), or Bikaner without indulging in authentic, spicy Bikaneri Bhujia. \n\nFinally, the sweets. Rajasthani desserts are incredibly rich, usually soaked in pure ghee and sugar syrup. Look out for Ghevar in Jaipur during the monsoon festivals, or the decadent Mawa Kachori—a sweet pastry stuffed with khoya and dry fruits. Come hungry, because Rajasthan feeds you like royalty."
  },
  {
    id: 7,
    title: "Working From the Mountains: The Digital Nomad Guide to Manali",
    author: "Vikram Iyer",
    date: "January 05, 2026",
    category: "Guides",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    excerpt: "Want to swap your office cubicle for a view of the snow-capped Himalayas? Here is everything you need to know about working remotely from Manali.",
    content: "The 'work from anywhere' revolution has turned the Himalayas into the ultimate office space. Old Manali, with its towering pines, rushing rivers, and hipster cafes, has quickly become the digital nomad capital of India. But moving your laptop to 6,500 feet requires some preparation.\n\nInternet Connectivity: The most crucial factor. While major telecom operators like Jio and Airtel provide decent 4G coverage in Manali, it can be spotty during bad weather. The good news? Almost all long-stay hostels and coliving spaces (like AltLife or Zostel) now have high-speed fiber broadband with power backups. Always confirm the internet speeds with your host before booking.\n\nAccommodation: Skip the expensive hotels. Opt for coliving spaces or homestays in nearby villages like Vashisht, Dharamkot, or Naggar. These cater specifically to remote workers, offering quiet work desks, communal kitchens, and a built-in community of freelancers and entrepreneurs.\n\nThe Routine: Working from the mountains is about balance. Wake up early for a quick hike, log in for your meetings, work from a cafe serving fresh apple pie, and log off in time to watch the sunset over the Dhauladhar range. Be warned: the mountain air is incredibly relaxing, so discipline is key to actually getting work done!"
  },
  {
    id: 8,
    title: "Monsoon Magic: Why Goa in July is a Brilliant Idea",
    author: "Maria & Tom",
    date: "December 20, 2025",
    category: "Destinations",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1514222325250-13f34e5ced2e?auto=format&fit=crop&w=800&q=80",
    excerpt: "Most people avoid Goa during the rains, but they are missing out. The monsoon transforms the state into a lush, quiet, and incredibly romantic paradise.",
    content: "Goa from November to February is a chaotic playground of beach parties, crowded shacks, and heavy traffic. But when the monsoon hits in June, the tourists vanish, the beach shacks pack up, and Goa breathes a sigh of relief. It transforms into an impossibly green, deeply romantic paradise.\n\nWhile swimming in the ocean is strictly prohibited due to rough currents, the monsoon unlocks an entirely different side of Goa. This is the perfect time to rent a scooter and drive through the hinterlands. The paddy fields glow neon green, the smell of wet red earth fills the air, and the swollen rivers are a sight to behold.\n\nAdventure seekers should head to the Bhagwan Mahavir Wildlife Sanctuary to witness the spectacular Dudhsagar Waterfalls at its absolute peak, roaring with monsoon rain. \n\nFinancially, it's a steal. Luxury heritage villas and 5-star resorts slash their prices by up to 50%. You can spend your days sitting on a massive balcony, watching the rain pour down over the palm trees, drinking hot vindaloo soup, and reading a book in absolute silence. Monsoon Goa is Goa's best-kept secret."
  },
  {
    id: 9,
    title: "The Golden Triangle: A First-Timer's Ultimate Itinerary",
    author: "Arjun Desai",
    date: "December 05, 2025",
    category: "Guides",
    readTime: "11 min read",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    excerpt: "Delhi, Agra, and Jaipur. The classic route that showcases the absolute best of India's history, architecture, and chaos.",
    content: "If you only have one week in India, the Golden Triangle is the undisputed champion of itineraries. Connecting the capital city of Delhi, the romantic city of Agra, and the royal capital of Jaipur, this route is a crash course in India's glorious history.\n\nDays 1-2: Delhi. Start in Old Delhi. Take a rickshaw through the chaotic, spice-scented lanes of Chandni Chowk, visit the imposing Red Fort, and find peace at the Jama Masjid. On day two, explore New Delhi's wide avenues, the towering Qutub Minar, and the stunning Humayun's Tomb.\n\nDay 3: Agra. Take the early morning Gatimaan Express train from Delhi to Agra (it takes just 100 minutes). Head straight to the Taj Mahal to catch it at sunrise before the massive crowds arrive. Spend the afternoon exploring the Agra Fort, the prison where Emperor Shah Jahan spent his final days gazing at the Taj.\n\nDays 4-6: Jaipur. Drive or take the train to the Pink City. Dedicate an entire day to the massive Amer Fort and the floating Jal Mahal. Spend your next day shopping in the incredibly vibrant local bazaars for textiles and jewelry, and make sure to photograph the iconic Hawa Mahal (Palace of Winds).\n\nThis route is well-connected, tourist-friendly, and visually staggering. Hire local, government-approved guides at the monuments—the stories of the Mughal and Rajput empires bring the stones to life!"
  },
  {
    id: 10,
    title: "New Feature Alert: Real-Time Collaborative Itineraries",
    author: "Odessey Team",
    date: "November 15, 2025",
    category: "Company News",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    excerpt: "Say goodbye to messy group chats. You can now plan your trips collaboratively with your friends directly inside the Odessey app.",
    content: "We all know the pain of planning a group trip. The endless WhatsApp threads, the conflicting opinions on hotels, the lost links to that one cafe someone recommended... it usually ends in frustration before the trip even begins.\n\nToday, we are solving that problem with the launch of Collaborative Itineraries. Just like a Google Doc, you can now invite your friends, family, or partner to your Odessey Trip Planner via a simple secure link.\n\nOnce they join, everyone can add destinations, vote on hotels, leave comments on specific days, and build the schedule together in real-time. You can assign days to different people, track shared budgets, and lock the itinerary once everyone agrees.\n\nWe believe travel is about connection, and that connection should start the moment you begin dreaming about your trip. Log in to your dashboard and invite a co-traveler to your next adventure today!"
  }
];

const BlogPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = ['All', 'Travel Tips', 'Destinations', 'Guides', 'Company News'];

  // Filter logic
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '80px' }}>
      
      {/* --- HERO SECTION --- */}
      <div style={{ 
        backgroundColor: '#111827', padding: '120px 20px 60px 20px', 
        textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', opacity: 0.05 }}><BookOpen size={300} /></div>
        
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(22, 163, 74, 0.2)', color: '#4ade80', padding: '6px 14px', borderRadius: '50px', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
            <Sparkles size={16} /> The Odessey Journal
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '20px', lineHeight: '1.2' }}>
            Inspiring Your Next <span style={{ color: '#16a34a' }}>Adventure</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#9ca3af', lineHeight: '1.6' }}>
            Expert travel tips, destination guides, and the latest news from the Odessey team to help you travel smarter.
          </p>
        </div>
      </div>

      {/* --- FILTER & SEARCH BAR --- */}
      <div style={{ maxWidth: '1200px', margin: '-30px auto 40px auto', padding: '0 20px', position: 'relative', zIndex: 20 }}>
        <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #e5e7eb' }}>
          
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', flex: 1 }}>
            {categories.map(cat => (
              <button 
                key={cat} onClick={() => setActiveCategory(cat)}
                style={{ 
                  padding: '10px 20px', borderRadius: '50px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s', border: 'none',
                  backgroundColor: activeCategory === cat ? '#16a34a' : '#f3f4f6', 
                  color: activeCategory === cat ? 'white' : '#4b5563' 
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', width: window.innerWidth < 768 ? '100%' : '300px' }}>
            <Search size={18} color="#9ca3af" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" placeholder="Search articles..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '12px 15px 12px 45px', borderRadius: '50px', border: '1px solid #e5e7eb', fontSize: '14px', outline: 'none', backgroundColor: '#f9fafb', boxSizing: 'border-box' }}
            />
          </div>

        </div>
      </div>

      {/* --- BLOG GRID --- */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {filteredPosts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '30px' }}>
            {filteredPosts.map((post) => (
              <div 
                key={post.id} onClick={() => setSelectedPost(post)}
                style={{ backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e5e7eb', cursor: 'pointer', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s, box-shadow 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} onMouseEnter={(e)=>e.currentTarget.style.transform='scale(1.05)'} onMouseLeave={(e)=>e.currentTarget.style.transform='scale(1)'}/>
                  <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', color: '#16a34a', padding: '6px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Tag size={12} /> {post.category}
                  </div>
                </div>

                <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '13px', color: '#6b7280', marginBottom: '15px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {post.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {post.readTime}</span>
                  </div>
                  
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#111827', marginBottom: '10px', lineHeight: '1.4' }}>{post.title}</h3>
                  <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6', marginBottom: '25px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', flex: 1 }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f3f4f6', paddingTop: '20px', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px' }}>
                        {post.author.charAt(0)}
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: '#374151' }}>{post.author}</span>
                    </div>
                    <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 20px', color: '#6b7280' }}>
            <Search size={40} color="#d1d5db" style={{ margin: '0 auto 15px auto' }} />
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151' }}>No articles found</h3>
            <p>Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>

      {/* --- FULL POST READING MODAL --- */}
      {selectedPost && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'rgba(17, 24, 39, 0.8)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 20px', overflowY: 'auto' }}>
          
          <div style={{ backgroundColor: 'white', width: '100%', maxWidth: '800px', borderRadius: '24px', overflow: 'hidden', position: 'relative', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', animation: 'slideUp 0.3s ease-out forwards', marginBottom: '40px' }}>
            
            <button 
              onClick={() => setSelectedPost(null)} 
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white', zIndex: 10, transition: 'background 0.2s' }}
              onMouseEnter={(e)=>e.currentTarget.style.background='rgba(0,0,0,0.8)'} onMouseLeave={(e)=>e.currentTarget.style.background='rgba(0,0,0,0.5)'}
            >
              <X size={24} />
            </button>

            <div style={{ height: '400px', position: 'relative' }}>
              <img src={selectedPost.img} alt={selectedPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(17,24,39,0.9), transparent)' }} />
            </div>

            <div style={{ padding: '40px 50px', marginTop: '-100px', position: 'relative', zIndex: 5 }}>
              <span style={{ backgroundColor: '#16a34a', color: 'white', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', display: 'inline-block' }}>
                {selectedPost.category}
              </span>
              
              <h1 style={{ fontSize: '36px', fontWeight: '900', color: 'white', marginBottom: '25px', lineHeight: '1.2' }}>{selectedPost.title}</h1>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingBottom: '30px', borderBottom: '1px solid #e5e7eb', marginBottom: '30px', color: '#6b7280', fontSize: '14px', fontWeight: '500' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#111827' }}><User size={16} color="#16a34a" /> {selectedPost.author}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> {selectedPost.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> {selectedPost.readTime}</span>
              </div>

              <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151', whiteSpace: 'pre-line' }}>
                <p style={{ fontSize: '22px', fontStyle: 'italic', color: '#111827', marginBottom: '30px', borderLeft: '4px solid #16a34a', paddingLeft: '20px' }}>
                  "{selectedPost.excerpt}"
                </p>
                {selectedPost.content}
              </div>

              <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
                 <button onClick={() => navigate('/plan')} style={{ padding: '16px 30px', borderRadius: '50px', backgroundColor: '#111827', color: 'white', fontSize: '16px', fontWeight: 'bold', border: 'none', cursor: 'pointer', transition: 'background 0.3s' }} onMouseEnter={e=>e.currentTarget.style.backgroundColor='#374151'} onMouseLeave={e=>e.currentTarget.style.backgroundColor='#111827'}>
                   Plan A Trip Inspired By This
                 </button>
              </div>

            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;