import '../styles/globals.css'
import Header from "./Header"
import Hero from './Hero'
import About from './About'
import WorkExperience from './WorkExperience'
import Skills from './Skills'
import Projects from './Projects'
import ContactMe from './ContactMe'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className='z-25'>
          <Header />
        </div>
        <div className='snap-y h-screen snap-normal z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-[#fceee9]/20 scrollbar-thumb-[#fceee9]'>
          <section id='hero' className='snap-start'>
            <Hero />
          </section>
          <section id='/about' className='snap-start'>
            <About />
          </section>
          <section id='/experience' className='snap-start'>
            <WorkExperience />
          </section>
          <section id='/skills' className='snap-start'>
            <Skills />
          </section>
          <section id='/projects'>
            <Projects />
          </section>
          <section className='snap-center'>
            <ContactMe />
          </section>
        </div>
        {children}
      </body>
    </html>
  )
}
