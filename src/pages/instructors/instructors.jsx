import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { API_Link } from "../../components/api/api";

const Instructors = ({ data }) => {
  //let contents = data.content;
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}/teachers/info`);
    setContents(response.data);
  };
  return (
    <div className="instructors-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <div className="breadcrumb-wrap style-01">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h3 className="title">{data?.title}</h3>
                <p className="details">{data?.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="our-team-area-wrapper">
        <div className="our-team-inner">
          <div className="container custom-container-01">
            <div className="row column-gap-50">
              {contents?.map((item) => {
                return (
                  <div className="col-md-6 col-lg-6 col-xl-4" key={item.id}>
                    <Link to={`/teacher-details/${item.id}`}>
                      <div className="single-team-item style-03">
                        <div className="thumbnail">
                          <img src={item.url} alt={item.image} />
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="#" tabIndex={-1}>
                              {item.title}
                            </a>
                          </h4>
                          <p className="designation">{item.designation}</p>
                          {/* <p className="paragraph">{item.description}</p> */}
                        </div>
                        <div className="hover-content">
                          <div className="btn-wrap">
                            <div className="btn-common btn-active">
                              Read More
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;
