import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API_Link } from "../api/api";

const ContactUs = ({ data }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(`${API_Link}/company/info`);
    setItems(response.data);
    console.log(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Form Submitted Successfully !");
  };

  return (
    <div className="contact-us-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <div className="breadcrumb-wrap style-01">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h3 className="title">Contact us</h3>
                <p className="details">
                  Contact us if you have any query.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-form-area-wrapper">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="apply-form-inner">
                <div className="row justify-content-between">
                  <div className="col-lg-6">
                    <div className="contact-address">
                      <h3 className="title">Greenland Training Center Ltd.</h3>
                      {items?.map((item, indx) => (
                        <ul className="ul contact-address-list" key={indx}>
                          <li className="single-address-item">
                            <span className="icon-wrap color-01">
                              <i className="fa-sharp fa-solid fa-location-dot icon" />
                            </span>
                            <span className="text"><a href="https://maps.app.goo.gl/J1vcYWNCE1gT99cZ6">{item.address}</a></span>
                          </li>
                          <li className="single-address-item">
                            <span className="icon-wrap color-02">
                              <i className="fa-solid fa-phone icon" />
                            </span>
                            <span className="text">{item.phone}</span>
                          </li>
                          <li className="single-address-item">
                            <span className="icon-wrap color-03">
                              <i className="fa-solid fa-envelope-open icon" />
                            </span>
                            <span className="text">{item.email}</span>
                          </li>
                        </ul>
                      ))}

                      <ul className="ul social-media-list style-01 color-02">
                        <li className="single-social-item">
                          <a href="https://www.facebook.com/GreenlandTraining" tabIndex={-1} target="_blank"> 
                            <i className="fa-brands fa-facebook-f icon" />
                          </a>
                        </li>
                        <li className="single-social-item">
                          <a href="https://www.youtube.com/@GreenlandTrainingCentreLtd." tabIndex={-1} target="_blank">
                            <i className="fa-brands fa-youtube icon" />
                          </a>
                        </li>
                        <li className="single-social-item">
                          <a href="https://www.linkedin.com/in/greenland-training-centre-limited-7603a4300/" tabIndex={-1} target="_blank">
                            <i className="fa-brands fa-linkedin-in icon" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-form">
                      <form className="form" onSubmit={handleSubmit}>
                        <div className="part">
                          <h5 className="title">Primary Information</h5>
                          <div className="form-element">
                            <div className="row">
                              <div className="col-lg-6">
                                <i className="fa-solid fa-user" />
                                <input
                                  type="text"
                                  placeholder="Full name"
                                  required=""
                                />
                              </div>
                              <div className="col-lg-6">
                                <i className="fa-solid fa-envelope-open" />
                                <input
                                  type="email"
                                  placeholder="Email address"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-element">
                            <div className="row">
                              <div className="col-lg-6">
                                <i className="fa-solid fa-phone" />
                                <input
                                  type="tel"
                                  placeholder="Phone number"
                                  required=""
                                />
                              </div>
                              <div className="col-lg-6">
                                <i className="fa-solid fa-user" />
                                <input
                                  type="text"
                                  placeholder="Subject"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-element">
                            <div className="row">
                              <div className="col-lg-12">
                                <textarea
                                  className="textarea"
                                  placeholder="Write description..."
                                  rows={6}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-submit text-right">
                          <button
                            type="submit"
                            className="btn-common btn-active"
                          >
                            {data?.buttonContent}
                          </button>
                          <ToastContainer />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div class="contact-address" style={{marginTop:"20px"}}>
                  <h2 class="title text-center" style={{color:"#ffffff"}}>Head Office Address</h2>
                  <div className="row " style={{marginTop:"40px"}}>
                  
                  <div className="col-md-5">
                    <ul class="ul contact-address-list">
                      <li class="single-address-item">
                        <span class="icon-wrap color-01">
                          <i class="fa-sharp fa-solid fa-location-dot icon"></i>
                        </span>
                        <span class="text" style={{color:"#ffffff",fontSize:"15px"}}>1 Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh.</span>
                      </li>
                    </ul> 
                  </div>


                  <div className="col-md-4">
                    <ul class="ul contact-address-list">
                      <li class="single-address-item">
                        <span class="icon-wrap color-02">
                          <i class="fa-solid fa-phone icon"></i>
                        </span>
                        <span class="text" style={{color:"#ffffff"}}>+880 2 488 102 10 - 17</span>
                      </li>
                    </ul> 
                  </div>


                  <div className="col-md-3">
                    <ul class="ul contact-address-list">
                      <li class="single-address-item">
                        <span class="icon-wrap color-03">
                          <i class="fa-solid fa-envelope-open icon"></i>
                        </span>
                        <span class="text" style={{color:"#ffffff"}}>gland@glandgroup.com</span>
                      </li>
                    </ul> 
                  </div>
                  </div>
                </div>          
            </div>
          </div>
        </div>
      </section>

      {items?.map((item, indx) => (
        <div className="map-wrapper section-top-space" key={indx}>
          <iframe
            className="w-100"
            src={item.map_view}
            height={510}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ))}
    </div>
  );
};

export default ContactUs;
