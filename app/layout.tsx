import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const _geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const zenitha = localFont({
  src: '../public/fonts/Zenitha-Classic.otf',
  variable: '--font-zenitha',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sudipta Chatterjee | Full-Stack Developer',
  description: 'Full-stack web developer specializing in MERN stack, PHP, and modern web technologies. Explore my projects and experience.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_geist.variable} ${_geistMono.variable} ${zenitha.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
