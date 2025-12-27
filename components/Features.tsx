'use client'

import { useEffect, useRef, useState } from 'react'

const products = [
  {
    name: 'CRM',
    subtitle: 'Back End',
    description: 'Transform your admissions journey with our "Lead-to-LMS" workflow—seamlessly converting inquiries into enrolled, digitally-enabled students.',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: [
      'Auto-Provisioning: Automatic Google Workspace account creation and Year Group Classroom enrollment',
      'Admissions Analytics: Track conversion rates from inquiry to enrolled student',
      'Financial Integration: Link Google Classroom access to fee payment status',
      'Lead Management: Comprehensive inquiry tracking and pipeline management'
    ],
  },
  {
    name: 'LMS',
    subtitle: 'Real-Time Pedagogy',
    description: 'Go beyond basic LMS functionality with our "Real-Time Pedagogy" update—designed specifically for British Curriculum attainment tracking.',
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: [
      'Live Attainment Mapping: Map assignments to British Curriculum Attainment Targets',
      'Submission Velocity Tracking: Identify students struggling with workload',
      'Automated Criteria Creation: Auto-generate Assessment Criteria in ERPNext',
      'Grade Sync & Student Collaboration: Seamless gradebook integration'
    ],
  },
  {
    name: 'Analytics',
    subtitle: 'Predictive Insights',
    description: 'Transform your data into predictive, actionable intelligence with our "Whole Child" analytics approach.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [
      'The "Whole Child" Dashboard: Combined view with Risk of Underachievement indicators',
      'Teacher Workload Analytics: Visualize feedback frequency and marking turnaround',
      'KHDA/ADEK Readiness Views: One-click regulatory inspection dashboards for UAE',
      'Custom Dashboards & Real-time Reports: Flexible reporting with export options'
    ],
  },
]

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.feature-card')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sora mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive suite of tools designed specifically for educational institutions
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              data-index={index}
              className={`feature-card group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {product.icon}
              </div>

              {/* Title */}
              <div className="mb-2">
                <h3 className="text-xl font-bold font-sora text-gray-900">{product.name}</h3>
                <span className="text-sm text-gray-500">{product.subtitle}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">{product.description}</p>

              {/* Features List */}
              <ul className="space-y-2 mb-4">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center text-primary-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
