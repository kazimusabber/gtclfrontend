import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API_Link } from "../api/api";
import "./register-style.css";

const RegisterForm = () => {
  const [student_name, setName] = useState("");
  const [father_name, setFatherName] = useState("");
  const [mobile, setMobileNumber] = useState("");
  const [last_education_level, setEducation] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [dataItems, setDataItems] = useState([]);
  
  
  useEffect(() => {
    getDataItems();
  }, []);
  
  const getDataItems = async () => {
    const response = await axios.get(`${API_Link}/courses/info`);
    setDataItems(response.data);
    
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("student_name", student_name);
      formData.append("father_name", father_name);
      formData.append("mobile", mobile);
      formData.append("last_education_level", last_education_level);
      formData.append("address", address);
      formData.append("email", email);
      formData.append("course", course);

      await axios.post(`${API_Link}/register/info`, formData);

      console.log("Submisson Successful !!");
      toast.success("Form Submitted Successfully !");

      setName(" ");
      setFatherName(" ");
      setMobileNumber(" ");
      setEducation(" ");
      setAddress(" ");
      setEmail(" ");
      setCourse(" ");
    } catch (err) {
      console.error(err.message);
      toast.error("Form Submitted Faild !");
    }
  };
  return (
    <div>
      <section className="contact-form-area-wrapper section-bottom-space">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="apply-form-inner">
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="contact-form">
                      <form className="form" onSubmit={handleSubmit}>
                        <div className="part">
                          <h5 className="title">Register Information</h5>
                          <div className="form-element">
                            <div className="row">
                              <div className="col-lg-6">
                                <i className="fa-solid fa-user" />
                                <input
                                  type="text"
                                  placeholder="Full name"
                                  required=""
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </div>
                              <div className="col-lg-6">
                                <i className="fa-solid fa-user" />
                                <input
                                  type="text"
                                  placeholder="Father name"
                                  required=""
                                  onChange={(e) =>
                                    setFatherName(e.target.value)
                                  }
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
                                  onChange={(e) =>
                                    setMobileNumber(e.target.value)
                                  }
                                />
                              </div>
                              <div className="col-lg-6">
                                <div className="edu_level">
                                  <select
                                    value={last_education_level}
                                    onChange={(e) =>
                                      setEducation(e.target.value)
                                    }
                                  >
                                    <option>Select Education Level</option>
                                    <option value="8pass">8-Pass</option>
                                    <option value="SSC">SSC</option>
                                    <option value="HSC">HSC</option>
                                    <option value="OTHERS">OTHERS</option>
                                  </select>
                                </div>
                                {/* <input
                                  type="text"
                                  placeholder="Last education level"
                                  required=""
                                  onChange={(e) => setEducation(e.target.value)}
                                /> */}
                              </div>
                            </div>
                          </div>
                          <div className="form-element">
                            <div className="row">
                              <div className="col-lg-6">
                                <i className="fa-solid fa-email" />
                                <input
                                  type="text"
                                  placeholder="Email"
                                  required=""
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                              <div className="col-lg-6">
                                <div className="edu_level">
                                    <select
                                      value={course}
                                      onChange={(e) =>
                                        setCourse(e.target.value)
                                      }
                                    >
                                      <option>Select Course</option>
                                      {dataItems?.map((item, index) => (
                                         <option value="{item.title}" key={index}>{item.title}</option>
                                         ))}
                                    </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-submit text-right">
                          <button
                            type="submit"
                            className="btn-common btn-active"
                          >
                            Submit
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
        </div>
      </section>
    </div>
  );
};

export default RegisterForm;
