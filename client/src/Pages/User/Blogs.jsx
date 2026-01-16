import Layout from "./Layout/Layout.jsx";
import Banner from '../../Components/User/Blogs/Banner.jsx';
import Blogsection from '../../Components/User/Blogs/Blogsection.jsx';
import Assosiatesection from "../../Components/User/Home/Assosiatesection.jsx";
import ContactSection from "../../Components/User/contact/ContactSection.jsx";


function Blogs() {
  return (
    <Layout>
      <Banner />  
      <Blogsection /> 
      <Assosiatesection />
      <ContactSection />
    </Layout>
  )
}

export default Blogs  