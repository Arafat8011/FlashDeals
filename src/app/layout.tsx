import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="transition duration-300 ease-in-out">
      <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
