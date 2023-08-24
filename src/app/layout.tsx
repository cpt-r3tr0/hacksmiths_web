import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home:: Hacksmiths - Goldmiths Computing Society',
  description: 'Hacksmiths is the Goldsmiths Computing Society. We are a group of students who are passionate about technology and want to share our knowledge with others. We run workshops, hackathons, and socials.',
  keywords: 'hacksmiths, goldsmiths, computing, society, hackathon, workshop, social, london, university, students, technology, coding, programming, hack, code, learn, teach, share, collaborate, community, open source, open, source, github, git, discord, slack, facebook, twitter, instagram, linkedin, youtube, github, gitlab, bitbucket, medium, dev.to, twitch, discord, slack, facebook, twitter, instagram, linkedin, youtube, github, gitlab, bitbucket, medium, dev.to, twitch, discord, slack, facebook, twitter, instagram, linkedin, youtube, github, gitlab, bitbucket, medium, dev.to, twitch, discord, slack, facebook, twitter, instagram, linkedin, youtube, github, gitlab, bitbucket, medium, dev.to, twitch, discord, slack, facebook, twitter, instagram, linkedin, youtube, github, gitlab, bitbucket, medium, dev.to, twitch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
