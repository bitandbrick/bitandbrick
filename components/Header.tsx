'use client'

import { useState, useEffect } from 'react'

const products = [
  { name: 'CRM', description: 'Lead-to-LMS Workflow', href: '#features' },
  { name: 'LMS', description: 'Real-Time Pedagogy', href: '#features' },
  { name: 'Analytics', description: 'Predictive Insights', href: '#features' },
]

const solutions = [
  { name: 'British Curriculum', description: 'Key Stages & Attainment Targets', href: '#solutions' },
  { name: 'American Curriculum', description: 'Standards-Based Grading & MAP', href: '#solutions' },
  { name: 'International Baccalaureate', description: 'Inquiry-Based Learning', href: '#solutions' },
  { name: 'Indian Curriculum', description: 'CBSE/ICSE & Board Excellence', href: '#solutions' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg animated-gradient flex items-center justify-center">
                <span className="text-white font-bold text-xl font-sora">B</span>
              </div>
              <span className={`font-sora font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                Bit<span className="text-primary-500">and</span>Brick <span className="text-sm font-normal text-gray-600">SmartClassroom Portal</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center space-x-1 font-medium transition-colors py-2 ${
                isScrolled ? 'text-gray-700 hover:text-primary-500' : 'text-gray-700 hover:text-primary-500'
              }`}>
                <span>Products</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 pt-2 w-72">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in">
                    {products.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex flex-col px-4 py-3 hover:bg-primary-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">{item.name}</span>
                        <span className="text-sm text-gray-500">{item.description}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center space-x-1 font-medium transition-colors py-2 ${
                isScrolled ? 'text-gray-700 hover:text-primary-500' : 'text-gray-700 hover:text-primary-500'
              }`}>
                <span>Solutions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex flex-col px-4 py-3 hover:bg-primary-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">{item.name}</span>
                        <span className="text-sm text-gray-500">{item.description}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#features" className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary-500' : 'text-gray-700 hover:text-primary-500'
            }`}>
              Features
            </a>

            <a href="#" className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary-500' : 'text-gray-700 hover:text-primary-500'
            }`}>
              Pricing
            </a>

            <a href="#" className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary-500' : 'text-gray-700 hover:text-primary-500'
            }`}>
              Resources
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#contact" className="font-medium text-gray-700 hover:text-primary-500 transition-colors">
              Contact
            </a>
            <a href="#cta" className="btn-primary">
              Request Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="py-4 space-y-4">
              {/* Products */}
              <div className="px-4">
                <p className="font-semibold text-gray-900 mb-2">Products</p>
                <div className="space-y-2 pl-4">
                  {products.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-600 hover:text-primary-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="px-4">
                <p className="font-semibold text-gray-900 mb-2">Solutions</p>
                <div className="space-y-2 pl-4">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-600 hover:text-primary-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="px-4 space-y-2">
                <a href="#features" className="block text-gray-700 hover:text-primary-500" onClick={() => setIsMobileMenuOpen(false)}>
                  Features
                </a>
                <a href="#" className="block text-gray-700 hover:text-primary-500">
                  Pricing
                </a>
                <a href="#" className="block text-gray-700 hover:text-primary-500">
                  Resources
                </a>
              </div>

              <div className="px-4 pt-4 border-t border-gray-100 space-y-3">
                <a href="#contact" className="block text-center py-2 text-gray-700 hover:text-primary-500" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </a>
                <a href="#cta" className="btn-primary w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
