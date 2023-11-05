import type { Metadata } from 'next'
import '../styles/global.scss'
import Layout from '@/components/layout/Layout'


export const metadata: Metadata = {
  title: 'Light | VR',
  description: 'All about VR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>{children}</Layout>
  )
}
