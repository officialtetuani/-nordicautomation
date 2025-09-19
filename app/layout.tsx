import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Nordic Automation - Industrial Automation Solutions',
  description: 'Leading provider of industrial automation solutions in the Nordic region. Expert services in process automation, control systems, and industrial digitalization.',
  keywords: 'Nordic automation, industrial automation, process control, SCADA, PLC, industrial digitalization',
  authors: [{ name: 'Nordic Automation' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Nordic Automation - Industrial Automation Solutions',
    description: 'Leading provider of industrial automation solutions in the Nordic region.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}