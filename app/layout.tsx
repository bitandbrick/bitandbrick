import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BitandBrick - Transform Your Educational Institution',
  description: 'Comprehensive education management platform for schools, universities, coaching centers, and training institutes. Empower 500+ institutions with CRM, LMS, and analytics solutions.',
  keywords: 'education platform, school management, LMS, CRM, student management, teacher empowerment, educational technology, Dubai, UAE',
  authors: [{ name: 'BitandBrick' }],
  openGraph: {
    title: 'BitandBrick - Transform Your Educational Institution',
    description: 'Comprehensive education management platform for schools, universities, coaching centers, and training institutes.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BitandBrick',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BitandBrick - Transform Your Educational Institution',
    description: 'Comprehensive education management platform for schools, universities, coaching centers, and training institutes.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
