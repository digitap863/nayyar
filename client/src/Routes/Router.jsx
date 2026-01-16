import React from 'react'
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from '../Components/Loader.jsx';
import NotFound from '../Pages/User/NotFound.jsx';
// import ServiceList from '../Pages/Admin/ServiceList.jsx';



const Home = lazy(() => import("../Pages/User/Home.jsx"))
const About = lazy(() => import("../Pages/User/About.jsx"))
const Contact = lazy(() => import("../Pages/User/Contact.jsx"))
const Blogs = lazy(() => import("../Pages/User/Blogs.jsx"))





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


        <Route path='*' element={<NotFound />} />
        <Route path='/404' element={<NotFound />} />



        {/* <Route element={<AdminPublicRoutes />}>
          <Route path="/admin" element={<Login />} />
        </Route>

        <Route element={<AdminPrivateRoutes />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/service" element={<ServiceForm />} />
          <Route path="/admin/servicelist" element={<ServiceList />} />

          <Route path="/admin/blog" element={<BlogForm />} />
          <Route path="/admin/bloglist" element={<BlogList />} />
        </Route> */}

      </Routes>
    </Suspense>

  )
}

export default MainRouter;
