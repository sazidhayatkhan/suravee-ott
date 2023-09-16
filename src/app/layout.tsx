"use client"
import Navbar from '@/views/appbars/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {usePathname} from 'next/navigation'
const inter = Inter({ subsets: ['latin'] })
import { QueryClient, QueryClientProvider } from 'react-query';
export const metadata: Metadata = {
  title: 'Suravee',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient();
  const pathname = usePathname()
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
      <body className={inter.className}>
        {
          pathname ==='/search' ? '' : <Navbar/>
        }
        <div className='bg-gray-800'>
          {children}
        </div>
      </body>
      </QueryClientProvider>
    </html>
  )
}
