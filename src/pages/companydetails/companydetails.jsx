// import BlogCard from "../blogCard/blogCard";
// import BlogrightSection from "../blogrightSection/blogrightSection";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_Link } from "../../components/api/api";
//import "./blogDetails-style.css";

const CompanyDetails = () => {
  // let contents = data.content;
  // let contents2 = data.content2;
  // let blog_content = data2.content;
  // let blog_card = data3.content;

  const [contents, setContents] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(`${API_Link}/section/content/${id}`);
    console.log(response.data);
    setContents(response.data);
  };

  const getString = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <div className="blog-details-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <section className="blog-details-section">
        <div className="container custom-container-01">
          <div className="row">
            <h2 className="text-center">{getString(contents._heading ?? "")}</h2>
            <div className="col-lg-12">
              <div className="blog-grid-item-02 style-02 blog-details">
                <h3 className="main-title">{contents._title}</h3>
              </div>
              <div className="blog-details-content">
                <p dangerouslySetInnerHTML={{__html: contents._description}}></p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyDetails;
