export default function About() {
  const features = [
    {
      title: 'Expert Engineering',
      description: 'Our team of certified engineers brings decades of experience in industrial automation.',
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'We use the latest automation technologies and industry-standard solutions.',
    },
    {
      title: 'Nordic Excellence',
      description: 'Based in the Nordic region, we understand local industry requirements and standards.',
    },
    {
      title: 'End-to-End Solutions',
      description: 'From initial consultation to ongoing support, we handle every aspect of your project.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Why Choose Nordic Automation?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 25 years of experience in the Nordic industrial automation market, 
              we have established ourselves as the trusted partner for companies seeking 
              to modernize and optimize their manufacturing processes.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our commitment to excellence, combined with deep technical expertise and 
              understanding of Nordic industry standards, ensures that your automation 
              projects are delivered on time, within budget, and exceed expectations.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Certified & Compliant</h3>
                <p className="text-gray-600">ISO 9001 certified with full regulatory compliance</p>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm" aria-hidden="true">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}