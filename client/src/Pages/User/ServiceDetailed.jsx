
import Layout from "./Layout/Layout.jsx";
import Banner from '../../Components/User/Services/Banner.jsx';
import Servicethree from '../../Components/User/ServiceDetail/Servicethree.jsx';
import Contact from "./Contact.jsx";
import Faq from "../../Components/User/Home/Faq.jsx";


function ServiceDetail() {
  return (
    <Layout>
      <Banner />  
      <Servicethree />
      <Contact />
      <Faq />
    </Layout>
  )
}

export default ServiceDetail  