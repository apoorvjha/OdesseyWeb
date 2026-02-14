import React from 'react';
import { Leaf, MapPin, Phone, Mail } from 'lucide-react';


const Footer = () => {
  const footerLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Lodges', href: '/lodges' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Our Vision', href: '/vision' },
    { name: 'Our Mission', href: '/mission' }
  ];


  return (
    <footer className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Leaf className="h-8 w-8 text-green-300" />
              <span className="text-2xl font-bold">Odessey</span>
            </div>
            <p className="text-green-100 text-lg leading-relaxed mb-6 max-w-md">
              Discover pristine landscapes and authentic experiences through sustainable travel.
              We connect you with nature's untouched beauty across India.
            </p>
            <div className="space-y-3 text-green-100">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-300" />
                <span>Eco-friendly destinations across India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-300" />
                <span>+91 9353520020</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-300" />
                <span>hello@odessey.in</span>
              </div>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-green-100 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Stay Connected</h3>
            <p className="text-green-100 mb-4">
              Get updates on new eco-friendly destinations and sustainable travel tips.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>


        {/* Bottom Section */}
        <div className="border-t border-green-600/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 text-sm">
            © 2024 Odessey. All rights reserved. Travel sustainably, explore responsibly.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-green-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-green-200 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="/sustainability" className="text-green-200 hover:text-white text-sm transition-colors">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;