import axios from "axios";
import { useState, useEffect } from "react";

import { API_Link } from "../../components/api/api";

const Gallery = ({ data }) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}/gallery/info`);
    setContents(response.data);
  };

  //let contents = data.content;
  return (
    <div className="out-services-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <div className="breadcrumb-wrap style-01">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h3 className="title">Gallery</h3>
                {/* <p className="details">{data?.desc}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="our-services-area-wrapper">
        <div className="our-team-inner">
          <div className="container custom-container-01">
            <div className="row column-gap-50">
              {contents?.map((item) => {
                return (
                  <div className="col-md-6 col-lg-4" key={item.id}>
                    <div className="single-our-services-item style-01" style={{padding:"10px 10px 10px"}}>
                      <div className="thumbnail">
                        <img src={item.url} alt={item.image} height="300px;"/>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="#" tabIndex={-1}>
                            {item.title}
                          </a>
                        </h4>
                        <p className="paragraph">{item.description}</p>
                      </div>
                    </div>
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

export default Gallery;
