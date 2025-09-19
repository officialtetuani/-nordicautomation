import Link from 'next/link'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-16"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Industrial Automation
              <span className="block text-primary-100">Excellence</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-100 max-w-2xl">
              Leading the Nordic region in innovative industrial automation solutions. 
              We transform manufacturing processes through cutting-edge technology and expert engineering.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                aria-describedby="contact-description"
              >
                Get Started Today
              </Link>
              <Link
                href="#services"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              >
                Our Services
              </Link>
            </div>
            <p id="contact-description" className="sr-only">
              Contact us to discuss your industrial automation needs
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-primary-100">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-primary-100">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-primary-100">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-primary-100">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}