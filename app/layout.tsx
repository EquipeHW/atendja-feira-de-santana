import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AtendJá Feira de Santana',
  description: 'AtendJá Feira de Santan',
  generator: 'HW Digital',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
