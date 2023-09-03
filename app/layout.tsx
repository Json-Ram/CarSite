import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Rent Exotic',
  description: 'Rent affordable exotic cars.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
