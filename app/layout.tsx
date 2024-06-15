import type { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/app/providers/authProvider'
import { Loader } from '@/components/ui'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Posts',
	description: 'Posts',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
		 <body className={ inter.className }>
		  <Suspense fallback={ <Loader /> }>
			 <AuthProvider>{ children }</AuthProvider>
		  </Suspense>
		 </body>
		</html>
	)
}

