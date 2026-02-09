import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { API_Link } from "../api/api";

const HomeBanner = ({ data }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async (req, res) => {
    const response = await axios.get(`${API_Link}/section/menu/36/1`);
    setItems(response.data);
  };

  const getString = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <section className="banner-area home-01">
      <div className="container custom-container-01">
        <div className="banner-wrapper">
          <div className="row">
            {items?.map((item) => {
              return (
                <div className="d-flex justify-content-between">
                  <div className="col-xl-7 col-lg-10">
                    <div
                      className="banner-inner"
                    >
                      <h6 className="title">{getString(item._heading)}</h6>
                      <p>{item._sub_heading}</p>
                      <div className="header-btn">
                        <div className="btn-wrap">
                          <Link
                            to={`/company-details/${item._id}`}
                            className="btn-common flat-btn btn-active"
                          >
                            {item._button}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="thumbnail">
                      <img src="" className="element-01" alt="" />
                      <img src="" className="element-02" alt="" />
                      <img
                        src={data?.image3}
                        className="element-03"
                        alt="vector"
                      />
                      <img
                        src={data?.image4}
                        className="element-04"
                        alt="plane"
                      />
                      <img
                        src={data?.image5}
                        className="element-05"
                        alt="location"
                      />
                      <img
                        src={item._url}
                        className="banner-img"
                        alt="Student"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
