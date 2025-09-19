import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Process Automation', href: '#services' },
      { name: 'Control Systems', href: '#services' },
      { name: 'Industrial IoT', href: '#services' },
      { name: 'System Integration', href: '#services' },
    ],
    support: [
      { name: '24/7 Support', href: '#contact' },
      { name: 'Maintenance', href: '#services' },
      { name: 'Training', href: '#services' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm" aria-hidden="true">NA</span>
              </div>
              <span className="text-xl font-bold">Nordic Automation</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of industrial automation solutions in the Nordic region. 
              Transforming manufacturing processes through innovation and expertise.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium text-white">Address:</span> Storgata 123, 0184 Oslo, Norway
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-white">Phone:</span> +47 22 12 34 56
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-white">Email:</span> contact@nordicautomation.no
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <nav aria-label="Company links">
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <nav aria-label="Services links">
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nordic Automation. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <nav aria-label="Legal links">
                <ul className="flex space-x-6 text-sm text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors duration-200">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors duration-200">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors duration-200">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}