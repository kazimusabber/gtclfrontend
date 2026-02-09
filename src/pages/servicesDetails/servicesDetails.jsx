import axios from "axios";
import { useState, useEffect } from "react";

import { API_Link } from "../../components/api/api";

const ServicesDetails = ({ data, data2, data3 }) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}/achieve/info`);
    setContents(response.data);
    console.log(response.data);
  };
  //let contents = data2.content;
  return (
    <div className="services-details-wrapper page-section-bottom-space nav_bg">
      {/* <DetailsSection data={data} /> */}

      <section className="about-section-area-wrapper section-bottom-space">
        <div className="container custom-container-01">
          {contents?.map((item, indx) => {
            return  (
              <div className={`row align-items-center`} key={item.id}>
                <div className="col-lg-6 col-md-6">
                  <div className="about-content">
                    <h2> {item.title} </h2>
                    <p className="paragraph" style={{textAlign:"justify"}}>{item.description}</p>
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-6">
                  <div className="thumbnail ">
                    <div className="text-center mt-20">
                      <img src={item.url} alt={item.image}  style={{marginTop:"30px"}}/>
                    </div>
                  </div>
                </div>
                
              </div>
            ) ;
          })}
        </div>
      </section>

      {/* <DetailsSection data={data3} /> */}
    </div>
  );
};

export default ServicesDetails;
