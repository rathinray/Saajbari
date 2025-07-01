import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '/public/logo.png'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false)
  }
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
           <Link to="/">
            <img src={logo} alt="SAAJBARI" className="md:w-52 w-32 object-contain" />
           </Link>
          </div>

        

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="/"
                className="nav-link px-3 rounded-md text-sm font-medium relative overflow-hidden group"
              >
                Home
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </a>
              <button
                type="button"
                className="nav-link px-3 rounded-md text-sm font-medium relative overflow-hidden group bg-transparent border-none outline-none cursor-pointer"
                onClick={() => {
                  const section = document.getElementById('services');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Services
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </button>
              <button
                type="button"
                className="nav-link px-3 rounded-md text-sm font-medium relative overflow-hidden group bg-transparent border-none outline-none cursor-pointer"
                onClick={() => {
                  const section = document.getElementById('about');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                About
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </button>
              <button
                type="button"
                className="group relative inline-block px-6 py-2 rounded-full text-sm font-medium text-white bg-primary transition-all duration-300 overflow-hidden border-none outline-none cursor-pointer"
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="absolute left-0 bottom-0 w-full h-0 bg-white transition-all duration-300 group-hover:h-full group-hover:border-primary group-hover:border-2 rounded-full"></span>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                  Contact
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-primary focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with max-height animation */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              handleMobileLinkClick();
            }}
            className="nav-link block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-primary bg-transparent border-none outline-none"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => {
              const section = document.getElementById('services');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
              handleMobileLinkClick();
            }}
            className="nav-link block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-primary bg-transparent border-none outline-none"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => {
              const section = document.getElementById('about');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
              handleMobileLinkClick();
            }}
            className="nav-link block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-primary bg-transparent border-none outline-none"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => {
              const section = document.getElementById('contact');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
              handleMobileLinkClick();
            }}
            className="nav-link block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-primary bg-transparent border-none outline-none"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
