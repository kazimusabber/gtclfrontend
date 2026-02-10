import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/nice-select.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import {
  Navbar_data,
  Home_data,
  Hometwo_data,
  About_us,
  Our_services,
  Services_details,
  Our_team,
  Instructors_data,
  Contact_us,
  Not_found,
  Cart_empty,
  Country_details,
  Faq_section,
  Shopp_cart,
  Apply_online,
  About_instructor,
  Course_widget,
  Course_details,
  All_courses,
  Blog_section,
  Blogright_section,
  Blog_classic,
  Blog_details,
  Footer_section,
} from "./data/data";
import AboutUs from "./components/aboutUs/aboutUs";
import Gallery from "./pages/ourGallery/ourGallery";
import ServicesDetails from "./pages/servicesDetails/servicesDetails";
import OurTeam from "./pages/ourTeam/ourTeam";
import Instructors from "./pages/instructors/instructors";
import ContactUs from "./components/contactUs/contactUs";
import NotFound from "./pages/notFound/notFound";
import EmptyCart from "./pages/emptyCart/emptyCart";
import CountryDetails from "./pages/countryDetails/countryDetails";
import FaqPage from "./pages/faqPage/faqPage";
import ShopCart from "./pages/shopCart/shopCart";
import ApplyOnline from "./pages/applyOnline/applyOnline";
import AboutInstructor from "./pages/aboutInstructor/aboutInstructor";
import CourseWidget from "./pages/courseWidget/courseWidget";
import AllCourses from "./pages/allCourses/allCourses";
import BlogSection from "./components/blogSection/blogSection";
import BlogClassic from "./components/blogClassic/blogClassic";
import Footer from "./components/footer/footer";
import BlogDetails from "./components/blogDetails/blogDetails";
import Home2 from "./components/home2/home2";
import CourseDetails from "./pages/courseDetails/courseDetails";
import NewsDetails from "./pages/newsDetails/newsDetails";
import TeacherDetails from "./pages/teacherDetails/teacherDetails";
import Accreditation from "./pages/accreditation/accreditation";
import Result from "./pages/result/result";
import RegisterForm from "./components/registerForm/registerForm";
import CompanyDetails from "./pages/companydetails/companydetails";
import Certificate from "./pages/certificate/certificate";

function App() {
  return (
    <>
      <Navbar
        data={Navbar_data[0]}
        data2={Navbar_data[1]}
        data3={Navbar_data[2]}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={Home_data[0]}
              data2={Home_data[1]}
              data3={Home_data[2]}
              data4={Home_data[3]}
              data5={Home_data[4]}
              data6={Home_data[5]}
              data7={Home_data[6]}
              data8={Home_data[7]}
              data9={Home_data[8]}
            />
          }
        />
        <Route
          path="/home-two"
          element={
            <Home2
              data={Hometwo_data[0]}
              data2={Hometwo_data[1]}
              data3={Hometwo_data[2]}
              data4={Hometwo_data[3]}
              data5={About_us[1]}
              data6={Hometwo_data[4]}
              data7={Hometwo_data[5]}
              data8={Hometwo_data[6]}
              data9={Home_data[7]}
            />
          }
        />
        <Route
          path="/about-us"
          element={
            <AboutUs
              data={About_us[0]}
              data2={About_us[1]}
              data3={About_us[2]}
              data4={About_us[3]}
            />
          }
        />
        <Route
          path="/our-services"
          element={<Gallery data={Our_services[0]} />}
        />
        <Route
          path="/services-details"
          element={
            <ServicesDetails
              data={Services_details[0]}
              data2={Services_details[1]}
              data3={Services_details[2]}
            />
          }
        />
        <Route
          path="/team"
          element={
            <OurTeam
              data={Our_team[0]}
              data2={Our_team[1]}
              data3={Our_team[2]}
            />
          }
        />
        <Route
          path="/upcoming-events"
          element={<Instructors data={Instructors_data[0]} />}
        />
        <Route
          path="/about-instructor"
          element={
            <AboutInstructor
              data={About_instructor[0]}
              data2={About_instructor[1]}
              data3={About_instructor[2]}
              data4={About_instructor[3]}
            />
          }
        />
        <Route
          path="/country-details"
          element={
            <CountryDetails
              data={Country_details[0]}
              data2={Country_details[1]}
              data3={Country_details[2]}
            />
          }
        />
        <Route
          path="all-course"
          element={<AllCourses data={All_courses[0]} />}
        />
        <Route
          path="all-course-widget"
          element={<CourseWidget data={Course_widget[0]} />}
        />
        <Route
          path="/course-details"
          element={
            <CourseDetails
              data={Course_details[0]}
              data2={Course_details[1]}
              data3={Course_details[2]}
              data4={Course_details[3]}
              data5={Course_details[4]}
              data6={Course_details[5]}
              data7={Course_details[6]}
            />
          }
        />
        <Route
          path="/apply-online"
          element={<ApplyOnline data={Apply_online[0]} />}
        />
        <Route
          path="/shop-cart"
          element={
            <ShopCart
              data={Shopp_cart[0]}
              data2={Shopp_cart[1]}
              data3={Shopp_cart[2]}
            />
          }
        />
        <Route
          path="/faq"
          element={<FaqPage data={Faq_section[0]} data2={Faq_section[1]} />}
        />
        <Route path="/not-found" element={<NotFound data={Not_found[0]} />} />
        <Route path="/brochure" element={<EmptyCart data={Cart_empty[0]} />} />
        <Route
          path="/blog"
          element={
            <BlogSection
              data={Blog_section[0]}
              data2={Blogright_section[0]}
              data3={Blogright_section[1]}
            />
          }
        />
        <Route
          path="blog-classic"
          element={
            <BlogClassic
              data={Blog_classic[0]}
              data2={Blog_classic[1]}
              data3={Blogright_section[0]}
              data4={Blogright_section[1]}
            />
          }
        />
        <Route
          path="/contact-us"
          element={<ContactUs data={Contact_us[0]} />}
        />
        <Route
          path="blog-details"
          element={
            <BlogDetails
              data={Blog_details[0]}
              data2={Blog_details[1]}
              data3={Blog_details[2]}
              data4={Blogright_section[0]}
              data5={Blogright_section[1]}
              data6={Blog_details[3]}
            />
          }
        />
        <Route path="/teacher-details/:id" element={<TeacherDetails />} />
        <Route path="/news-details/:id" element={<NewsDetails />} />
        <Route path="/course-details/:id" element={<BlogDetails />} />
        <Route path="/accreditation" element={<Accreditation />} />
        <Route path="/result" element={<Result />} />
        <Route path="/registration" element={<RegisterForm />} />
        <Route path="/company-details/:id" element={<CompanyDetails />} />
        <Route
          path="/certificate/:certificateType/:id"
          element={<Certificate />}
        />
      </Routes>
      <Footer data={Footer_section[0]} data2={Footer_section[1]} />
    </>
  );
}

export default App;
