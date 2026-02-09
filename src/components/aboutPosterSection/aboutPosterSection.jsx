import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { API_Link } from "../api/api";
//{ data, data2 }

const AboutPosterSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}/section/menu/37/1`);
    setData(response.data);
  };
  return (
    <div className="container custom-container-01">
      {data?.map((item) => {
        return (
          <div className="row align-items-center" key={item._id}>
            <h1 className="content-title mb-5">{item?._heading}</h1>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                
                <div className="paragraph" dangerouslySetInnerHTML={{__html: item?._description}}></div>
                <div className="icon-box-with-text-wrap">
                  {/* <ul className="ul icon-box-with-text style-01">
                    {item2?.map((item, indx) => {
                      return (
                        <li className="single-icon-box-with-text" key={indx}>
                          <div className="icon-wrap color-01">
                            <img src={item.imageLink} alt="" />
                          </div>
                          <div className="content">
                            <p className="text">{item.desc}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul> */}
                </div>
                <div className="btn-wrap">
                  <Link to="/contact-us" className="btn-common btn-new">
                    {item?._button}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="thumbnail" style={{marginTop:"-230px"}}>
                  <img src={item?._url} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutPosterSection;
