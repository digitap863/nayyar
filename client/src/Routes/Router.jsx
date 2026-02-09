import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from '../Components/Loader.jsx';
import NotFound from '../Pages/User/NotFound.jsx';
// import ServiceList from '../Pages/Admin/ServiceList.jsx';
import Login from "../Pages/Admin/Login.jsx";
import AdminPrivateRoutes from "../utils/AdminPrivateRoutes.jsx";
import AdminPublicRoutes from "../utils/AdminPublicRoutes.jsx";



const Home = lazy(() => import("../Pages/User/Home.jsx"))
const About = lazy(() => import("../Pages/User/About.jsx"))
const Contact = lazy(() => import("../Pages/User/Contact.jsx"))
const Blogs = lazy(() => import("../Pages/User/Blogs.jsx"))
const BlogDetail = lazy(() => import("../Pages/User/BlogDetail.jsx"))
const Services = lazy(() => import("../Pages/User/Services.jsx"))

const Dashboard = lazy(() => import("../Pages/Admin/Dashboard.jsx"))
const ServiceList = lazy(() => import("../Pages/Admin/ServiceList.jsx"))
const TestimonialList = lazy(() => import("../Pages/Admin/TestimonialList.jsx"));
const EditTestimonial = lazy(() => import("../Pages/Admin/EditTestimonial.jsx"));
const AddTestimonial = lazy(() => import("../Pages/Admin/AddTestimonial.jsx"));


const BlogList = lazy(() => import("../Pages/Admin/BlogList.jsx"));
const AddBlog = lazy(() => import("../Pages/Admin/AddBlog.jsx"));
const EditBlog = lazy(() => import("../Pages/Admin/EditBlog.jsx"));

const TeamList = lazy(() => import("../Pages/Admin/TeamList.jsx"));
const AddTeam = lazy(() => import("../Pages/Admin/AddTeam.jsx"));
const EditTeam = lazy(() => import("../Pages/Admin/EditTeam.jsx"));
const ServiceDetail = lazy(() => import("../Pages/User/ServiceDetail.jsx"));
const ServiceDetailed = lazy(() => import("../Pages/User/ServiceDetailed.jsx"));

// const Dashboard = lazy(() => import("../Pages/Admin/Dashboard.jsx"))
// const ServiceForm = lazy(() => import("../Pages/Admin/AdminService.jsx"))


function MainRouter() {

  return (
    <Suspense fallback={<Loader />}>
      <Routes>

        {/* user side */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service/:id' element={<ServiceDetail />} />
        <Route path='/service/:id/:slug' element={<ServiceDetailed />} />



        <Route path='*' element={<NotFound />} />
        <Route path='/404' element={<NotFound />} />



        <Route element={<AdminPublicRoutes />}>
          <Route path="/admin" element={<Login />} />
        </Route>

        <Route element={<AdminPrivateRoutes />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/services" element={<ServiceList />} />
          <Route path="/admin/testimonial" element={<AddTestimonial />} />
          <Route path="/admin/testimoniallist" element={<TestimonialList />} />
          <Route path="/admin/testimonial/edit/:id" element={<EditTestimonial />} />
          <Route path="/admin/blog" element={<AddBlog />} />
          <Route path="/admin/bloglist" element={<BlogList />} />
          <Route path="/admin/blog/edit/:id" element={<EditBlog />} />
          <Route path="/admin/team" element={<AddTeam />} />
          <Route path="/admin/teamlist" element={<TeamList />} />
          <Route path="/admin/team/edit/:id" element={<EditTeam />} />
        </Route>

      </Routes>
    </Suspense>

  )
}

export default MainRouter;
