import React, { useEffect, useState } from 'react'
import Layout from "./Layout/Layout.jsx";
import Banner from '../../Components/User/Home/Banner.jsx';
import Logosection from '../../Components/User/Home/Logosection.jsx';
import Bussineess from '../../Components/User/Home/Bussineess.jsx';
import Success from '../../Components/User/Home/Success.jsx';
import Growth from '../../Components/User/Home/Growth.jsx';
import Setting from '../../Components/User/Home/Setting.jsx'
import Testimonials from '../../Components/User/Home/Testimonials.jsx';
import Contact from '../../Components/User/Home/Contact.jsx';
import Assosiatesection from '../../Components/User/Home/Assosiatesection.jsx';
import Faq from '../../Components/User/Home/Faq.jsx';
import Insight from '../../Components/User/Home/Insight.jsx';


function Home() {

  return (
    <Layout>
      <Banner />
      <Logosection />
      <Bussineess/>
      <Success/>
      <Growth />
      <Setting />
      <Testimonials />
      <Contact />
      <Assosiatesection />
      <Faq />
      <Insight />
    </Layout>
  )
}

export default Home
