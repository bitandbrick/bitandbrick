'use client'

import { useEffect, useRef, useState } from 'react'

const solutions = [
  {
    name: 'For Schools (K-12)',
    description: 'Complete school management solution designed for K-12 institutions with parent engagement and comprehensive administrative tools.',
    gradient: 'from-blue-500 to-cyan-500',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: [
      'Parent Portal with real-time updates',
      'Attendance Tracking with SMS alerts',
      'Digital Report Cards generation',
      'School Bus Management with GPS',
      'Fee Management & Collection',
      'Timetable & Scheduling',
    ],
  },
  {
    name: 'For Universities',
    description: 'Scalable higher education platform supporting complex academic structures, research management, and multi-campus operations.',
    gradient: 'from-purple-500 to-indigo-500',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    features: [
      'Multi-campus Management',
      'Course & Credit System',
      'Research Portal Integration',
      'Alumni Network Management',
      'Placement Cell Module',
      'Library Management System',
    ],
  },
  {
    name: 'For Coaching Centers',
    description: 'Specialized platform for tutoring centers and test preparation institutes with batch management and performance analytics.',
    gradient: 'from-orange-500 to-red-500',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    features: [
      'Batch Management System',
      'Test Series & Mock Exams',
      'Performance Analytics',
      'Student Ranking System',
      'Study Material Distribution',
      'Doubt Resolution Portal',
    ],
  },
  {
    name: 'For Training Institutes',
    description: 'Comprehensive solution for corporate training and vocational institutes with certification tracking and skill assessments.',
    gradient: 'from-emerald-500 to-teal-500',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'Corporate Training Programs',
      'Certification Management',
      'Skill Assessment Tools',
      'Trainer Scheduling',
      'Progress Tracking',
      'Compliance & Reporting',
    ],
  },
]

export default function Solutions() {
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

    const cards = document.querySelectorAll('.solution-card')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="solutions" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
            Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sora mb-4">
            Tailored for Every{' '}
            <span className="gradient-text">Institution Type</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you&apos;re a school, university, coaching center, or training institute, we have the perfect solution for you
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.name}
              data-index={index}
              className={`solution-card group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-primary-300 transition-all duration-500 hover:shadow-xl ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold font-sora text-gray-900 mb-2">
                    {solution.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <a
                      href="#cta"
                      className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                    >
                      Learn more about this solution
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
