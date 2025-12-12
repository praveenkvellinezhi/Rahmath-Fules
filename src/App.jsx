import HomePage from "./Features/Home/Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ServicePage from "./Features/Service/Pages/ServicePage";
import AboutPage from "./Features/About/Pages/AboutPage";
import ContactPage from "./Features/Contact/Pages/ContactPage";
import BlogPage from "./Features/Blog/Pages/BlogPage";

function App() {
  return (
    <>
   
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Services" element={<ServicePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Blogs" element={<BlogPage />} />




          
        </Route>
      </Routes>
    </>
  );
}

export default App;
