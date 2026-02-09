import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_Link } from "../../components/api/api";

//import CardContainer from "../../components/cardContainer/cardContainer";

const AboutInstructor = ({ data, data2, data3, data4 }) => {
  const [instructors, setInstructors] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(`${API_Link}/teachers/info/${id}`);
    setInstructors(response.data);
  };

  return (
    <div className="blog-details-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <section className="blog-details-section">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-grid-item-02 style-02 blog-details">
                <h3 className="main-title">{instructors.title}</h3>
                <h3>{instructors.designation}</h3>
              </div>
              <div className="blog-details-content">
                {/* <p>{instructors.description}</p> */}
                <div dangerouslySetInnerHTML={{__html: instructors.description}} />
              </div>
            </div>
            <div className="col-lg-4">
             <img src={instructors.url} alt={instructors.image} className ="img-thumbnail"/>
            </div>
            {/* <BlogrightSection data={data4} data2={data5} /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutInstructor;
