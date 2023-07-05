import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container } from './Container'

function Layout({ children }) {
  return (
    <div  className="bg-slate-900 text-white selection:bg-purple-300/50 selection:text-sky-100">
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}
export default Layout