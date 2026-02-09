
import Layout from "./Layout/Layout.jsx";
import Banner from '../../Components/User/Services/Banner.jsx';
import Servicetwo from '../../Components/User/Services/Servicetwo.jsx';
import Insight from "../../Components/User/Home/Insight.jsx";


function ServiceDetail() {
  return (
    <Layout>
      <Banner />  
      <Servicetwo />
      <Insight />
      
    </Layout>
  )
}

export default ServiceDetail  