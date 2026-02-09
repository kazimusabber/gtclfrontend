import axios from "axios";
import { useState, useEffect } from "react";
import CounterUp from "../counterUp/counterUp";
import { Link } from "react-router-dom";
import { API_Link } from "../api/api";

const AboutSection = () => {
  const [items, setItems] = useState([]);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getItems();
    getCounter();
  }, []);

  const getCounter = async () => {
    const response = await axios.get(`${API_Link}/counter/info/`);
    setContents(response.data);
  };

  const getItems = async () => {
    const response = await axios.get(`${API_Link}/section/menu/36/2`);
    setItems(response.data);
  };

  return (
    <section className="about-section-area section-top-space about-home-02">
      <div className="container custom-container-01">
        {items?.map((item) => {
          return (
            <div className="row">
              <div className="col-lg-6 col-md-12" key={item._id}>
                <div className="theme-section-title">
                  <span className="subtitle">{item._sub_title}</span>
                  <h4 className="title">
                    {item._title}
                    <svg
                      className="title-shape style-01"
                      width={355}
                      height={15}
                      viewBox="0 0 355 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="path"
                        d="M351.66 12.6362C187.865 -6.32755 49.6478 6.37132 3.41142 12.6362"
                        stroke="#764AF1"
                        strokeWidth={3}
                        strokeLinecap="square"
                      />
                      <path
                        className="path"
                        d="M351.66 13C187.865 -5.96378 49.6478 6.73509 3.41142 13"
                        stroke="#764AF1"
                        strokeWidth={3}
                        strokeLinecap="square"
                      />
                      <path
                        className="path"
                        d="M2.5 5.5C168.5 2.0001 280.5 -1.49994 352.5 8.49985"
                        stroke="#FFC44E"
                        strokeWidth={3}
                        strokeLinecap="square"
                      />
                    </svg>
                  </h4>
                </div>
                <div className="about-content-wrap">
                  <p>{item._description}</p>
                </div>
                <div className="counter-section-inner style-a">
                  {contents?.map((item, indx) => {
                    return (
                      <div
                        className={`single-counterup ${
                          indx == 0
                            ? "color-01"
                            : indx == 1
                            ? "color-02"
                            : "color-03"
                        }`}
                        key={indx}
                      >
                        <div className="content-wrap">
                          <div className="odo-area d-flex">
                            <h3
                              className={`odometer odo-title  ${
                                indx == 1
                                  ? "style-01"
                                  : indx == 2
                                  ? "style-02"
                                  : ""
                              }`}
                              data-odometer-final={15}
                            >
                              <CounterUp data={item.count} />
                            </h3>
                          </div>
                          <div className="content">
                            <h6 className="subtitle">{item.title}</h6>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="header-btn">
                  <div className="btn-wrap">
                    <Link
                      to={"/Registration"}
                      className="btn-common flat-btn btn-active"
                    >
                      {item._button}
                    </Link>
                  </div>
                </div>
              </div>
                  
              <div className="col-lg-6 col-md-12">
                <div className="thumbnail">
                  <img src={item._url} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
