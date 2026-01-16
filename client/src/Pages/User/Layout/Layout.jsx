import React from 'react'
import Navbar from '../../../Components/User/Common/Navbar.jsx'
import Footer from '../../../Components/User/Common/Footer.jsx'
// import ScrollToTop from '../../../Components/User/Common/ScrollToTop.jsx'

function Layout({children}) {
  return (
    <main className='overflow-hidden bg-[#EFEFEF] '>
        <Navbar />
        {/* <ScrollToTop /> */}
        <div>{children}</div>
        <Footer />
       </main>
  )
}

export default Layout
