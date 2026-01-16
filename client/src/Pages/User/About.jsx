import Layout from "./Layout/Layout.jsx";
import Banner from '../../Components/User/About/Banner.jsx';
import Logosection from '../../Components/User/Home/Logosection.jsx';
import Experience from '../../Components/User/About/Experience.jsx';
import Success from '../../Components/User/Home/Success.jsx';
import Mission from '../../Components/User/About/Mission.jsx';
import Experts from '../../Components/User/About/Experts.jsx';
import Ceo from '../../Components/User/About/Ceo.jsx';
import Chooseus from '../../Components/User/About/Chooseus.jsx';
import Assosiatesection from '../../Components/User/Home/Assosiatesection.jsx';
import Contact from "../../Components/User/Home/Contact.jsx";

function About() {
  return (
    <Layout>
      <Banner />
      <Logosection />
      <Experience />
      <Success/>
      <Mission />
      <Experts />
      <Ceo />
      <Chooseus />
      <Assosiatesection />
      <Contact />      
    </Layout>
  )
}

export default About  