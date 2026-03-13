import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins, Raleway } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600'],
  variable: '--font-poppins'
})
const raleway = Raleway({ 
  subsets: ['latin'], 
  weight: ['900'],
  variable: '--font-raleway'
})

export const metadata = {
  title: 'Wimbo.ai - AI Music Pre-Production Studio',
  description: 'Test vocals, dialects, and arrangements with AI vocal artists before you spend a single shilling in the studio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${raleway.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Raleway:wght@900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-background text-text-primary antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
