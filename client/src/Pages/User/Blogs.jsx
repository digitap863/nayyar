import Layout from "./Layout/Layout.jsx";
import Banner from '../../Components/User/Blogs/Banner.jsx';
import Blogsection from '../../Components/User/Blogs/Blogsection.jsx';
import Assosiatesection from "../../Components/User/Home/Assosiatesection.jsx";
import ContactSection from "../../Components/User/contact/ContactSection.jsx";
import Contact from "../../Components/User/Home/Contact.jsx";

function Blogs() {
  return (
    <Layout>
      <Banner />  
      <Blogsection /> 
      <Assosiatesection />
      {/* <ContactSection /> */}
      <Contact />
    </Layout>
  )
}

export default Blogs  