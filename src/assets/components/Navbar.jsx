import { useState } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/Saajbari/"
              className="text-2xl font-serif font-bold text-primary"
              id="logo-link"
            >
              SAAJBARI
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="/Saajbari/"
                className="nav-link px-3 rounded-md text-sm font-medium relative overflow-hidden group"
              >
                Home
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </a>
              <a
                href="/Saajbari/#services"
                className="nav-link px-3 rounded-md text-sm font-medium relative overflow-hidden group"
              >
                Services
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </a>
              <a
                href="/Saajbari/#about"
                className="nav-link px-3 rounded-md text-sm font-medium relative overflow-hidden group"
              >
                About
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </a>
              <a
                href="/Saajbari/#contact"
                className="group relative inline-block px-6 py-2 rounded-full text-sm font-medium bg-primary text-white transition-all duration-300 overflow-hidden"
              >
                <span className="absolute left-0 bottom-0 w-full h-0 bg-white transition-all duration-300 group-hover:h-full group-hover:border-primary group-hover:border-2 rounded-full"></span>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                  Contact
                </span>
              </a>
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
          <a
            href="/Saajbari/"
            onClick={handleMobileLinkClick}
            className="nav-link block px-3 py-2 rounded-md text-base font-medium hover:text-primary"
          >
            Home
          </a>
          <a
            href="/Saajbari/#services"
            onClick={handleMobileLinkClick}
            className="nav-link block px-3 py-2 rounded-md text-base font-medium hover:text-primary"
          >
            Services
          </a>
          <a
            href="/Saajbari/#about"
            onClick={handleMobileLinkClick}
            className="nav-link block px-3 py-2 rounded-md text-base font-medium hover:text-primary"
          >
            About
          </a>
          <a
            href="/Saajbari/#contact"
            onClick={handleMobileLinkClick}
            className="nav-link block px-3 py-2 rounded-md text-base font-medium hover:text-primary"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
