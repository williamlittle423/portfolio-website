import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'William Little',
  description: 'William Little\'s portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-neutral-900' lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
