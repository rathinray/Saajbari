import React from "react";

const Footer = () => (
  <footer className="bg-dark text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
        <div>
          <h3 className="text-xl font-serif font-bold mb-4">SAAJBARI</h3>
          <p className="text-gray-400 mb-4">
            Creating unforgettable moments with exquisite event planning and
            decoration services.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            {/* <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Pinterest"
            >
              <i className="fab fa-pinterest-p"></i>
            </a> */}
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
               onClick={() => {
                
                const section = document.getElementById('services');
                if (section) {
                 
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Services
              </a>
            </li>
            {/* 
            <li>
              <a
                href="#portfolio"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Portfolio
              </a>
            </li>
            */}
            <li>
              <a
                onClick={() => {
                  const section = document.getElementById('about');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Wedding Planning
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Birthday Parties
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Corporate Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Catering Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Photography
              </a>
            </li>
          </ul>
        </div>

        {/*
        <div>
          <h4 className="font-serif font-bold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for event inspiration and special
            offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-primary w-full"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-opacity-90 px-4 py-2 rounded-r-lg transition-all"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
        */}
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2025 Saajbari. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-400 hover:text-primary text-sm transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-primary text-sm transition-colors"
          >
            Terms of Service
          </a>
          {/* <a
            href="#"
            className="text-gray-400 hover:text-primary text-sm transition-colors"
          >
            Sitemap
          </a> */}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;