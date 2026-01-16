import Layout from "./Layout/Layout.jsx";
import Banner from '../../Components/User/contact/Banner.jsx';
import ContactSection from '../../Components/User/contact/ContactSection.jsx';
import Faq from "../../Components/User/Home/Faq.jsx";


function Contact() {
  return (
    <Layout>
      <Banner />  
      <ContactSection />
      <Faq />
      
    </Layout>
  )
}

export default Contact  