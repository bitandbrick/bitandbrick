import Link from 'next/link'

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Blog Post */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-sora text-gray-900 mb-4">
            Bridging the Gap: Why Modern Schools Struggle with Curriculum-Specific Data (And How to Fix It)
          </h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <span>By Maker Murtaza</span>
            <span>•</span>
            <span>BitandBrick Education Platform</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            In the competitive landscape of international education—particularly within the UAE—the choice of curriculum is a defining feature of a school&apos;s identity. Whether it is the rigour of the British GCSEs, the growth-centric American Common Core, the holistic International Baccalaureate (IB), or the academic excellence of the Indian CBSE, each framework brings its own set of standards, benchmarking, and reporting hurdles.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            However, for most school leaders and IT coordinators, this variety creates a massive, hidden pain point: <strong className="text-gray-900">The Data Fragmentation Trap</strong>.
          </p>

          <h2 className="text-3xl font-bold font-sora text-gray-900 mt-12 mb-6">
            The Problem: "Data Islands"
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Most schools are currently operating with "Data Islands." You have your external benchmarking scores (like GL Assessment or NWEA MAP) sitting in one portal, your daily pedagogy happening in Google Classroom, and your administrative records tucked away in a legacy ERP.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The result?
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-primary-500 font-bold mr-3">•</span>
              <span className="text-lg text-gray-700"><strong>Teacher Burnout:</strong> Teachers spend up to 40% of their time manually copying grades from one system to another.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 font-bold mr-3">•</span>
              <span className="text-lg text-gray-700"><strong>Reporting Lag:</strong> By the time a report card is generated, the data is often six weeks old.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 font-bold mr-3">•</span>
              <span className="text-lg text-gray-700"><strong>Regulatory Stress:</strong> Preparing for KHDA or ADEK inspections becomes a frantic scramble to "prove" progress with spreadsheets that don&apos;t talk to each other.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold font-sora text-gray-900 mt-12 mb-6">
            How BitandBrick Solves the Curriculum "Handshake"
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At BitandBrick, we realized that a "one-size-fits-all" approach doesn&apos;t work for international schools. Our ecosystem—comprising <strong>ERPNext (The Brain)</strong>, <strong>Google Classroom (The Hands)</strong>, and <strong>Looker Studio (The Eyes)</strong>—is specifically engineered to bridge the gap for these four major frameworks.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold font-sora text-gray-900 mb-4">
              1. The British Challenge: Attainment vs. Potential
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              In the British system, the pain point is often the disconnect between CAT4 potential and classroom attainment. BitandBrick automates this handshake. We pull GL Assessment data into Looker Studio and map it directly against Google Classroom grades, giving leaders a real-time "Value-Added" view.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold font-sora text-gray-900 mb-4">
              2. The American Challenge: Standards-Based Growth
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              American schools struggle with mapping daily assignments to specific Common Core strands. BitandBrick solves this by allowing teachers to tag assignments in GC, which then auto-populates a standards-based gradebook in ERPNext, visualized alongside NWEA MAP growth scores.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold font-sora text-gray-900 mb-4">
              3. The IB Challenge: The Complexity of Criteria
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The IB is notoriously data-heavy, requiring schools to track ATL skills, CAS, and specific 1-7 criteria. BitandBrick removes the manual overhead by providing dedicated modules for MYP and DP mapping, ensuring that inquiry-based learning is backed by structured data.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold font-sora text-gray-900 mb-4">
              4. The Indian Challenge: Board Compliance & Benchmarking
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              For CBSE and ICSE schools, the pain point is often the sheer volume of compliance and high-stakes benchmarking (like ASSET). We automate the generation of Transfer Certificates and Board-pattern reports, allowing educators to focus on competitive excellence rather than paperwork.
            </p>
          </div>

          <h2 className="text-3xl font-bold font-sora text-gray-900 mt-12 mb-6">
            From Friction to Flow
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The goal of BitandBrick is to move schools from <strong className="text-red-600">Friction</strong> (manual data entry and siloed reports) to <strong className="text-green-600">Flow</strong> (automated syncs and predictive insights).
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            When your data is unified, you don&apos;t just see a grade; you see a student&apos;s journey. You identify the Year 7 student who is "Exceeding" in British English but "Emerging" in Math before the end-of-term assessment even arrives.
          </p>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white mt-12">
            <h3 className="text-2xl font-bold font-sora mb-4">
              Ready to transform your institution&apos;s data strategy?
            </h3>
            <p className="text-lg mb-6">
              Empower your teachers and impress your regulators with a platform designed for the curriculum you actually teach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#cta"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                Schedule Demo
              </Link>
              <Link
                href="/#solutions"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-2xl font-sora">
              MM
            </div>
            <div>
              <h4 className="text-lg font-bold font-sora text-gray-900">Maker Murtaza</h4>
              <p className="text-gray-600">Founder, BitandBrick Education Platform</p>
              <p className="text-gray-600 mt-2">Passionate about bridging the gap between educational technology and curriculum-specific needs in international schools.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
