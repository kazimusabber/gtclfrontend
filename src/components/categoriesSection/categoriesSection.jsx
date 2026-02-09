import axios from "axios";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { API_Link } from "../api/api";
import "./categoriesSection-style.css";

const CategoriesSection = ({ data }) => {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesResponse, teachersResponses] = await Promise.all([
          axios.get(`${API_Link}/courses/info`),
          axios.get(`${API_Link}/teachers/info`),
        ]);

        setCourses(coursesResponse.data);
        setTeachers(teachersResponses.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  let contents2 = data.content2;
  return (
    <section className="category-section-area">
      <div className="container custom-container-01">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrapper d-flex justify-content-between">
              <div className="theme-section-title">
                <span className="subtitle">{data?.subtitle}</span>
                <h4 className="title">{data?.title}</h4>
              </div>
              {/*<ul className="nav nav-pills">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link active"
                    data-bs-toggle="pill"
                    data-bs-target="#discipline"
                  >
                    Courses
                  </a>
                </li>
                 <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#collage"
                  >
                    Teachers
                  </a> 
                </li>
              </ul>*/}
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="discipline">
            <div className="row">
              {courses?.map((item) => {
                return (
                  <div
                    className="destination-single-item style-01 shadow col-md-2 mr-1 text-center"
                    key={item.id}
                  >
                    <Link to={`/course-details/${item.id}`}>
                      <div className="thumbnail">
                        <img src={item.url} alt="photo" height="70px;" width="auto"/>
                      </div>
                      <h6 className="name"> {item.title} </h6>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tab-pane fade" id="collage">
            <div className="destination-items-wrap">
              {teachers.map((item) => {
                return (
                  <div
                    className="destination-single-item style-01"
                    key={item.id}
                  >
                    <Link to={`/teacher-details/${item.id}`}>
                      <div className="thumbnail">
                        <img src={item.url} alt="photo" />
                      </div>
                      <h6 className="name">{item.title}</h6>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
