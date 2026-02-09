// import BlogCard from "../blogCard/blogCard";
// import BlogrightSection from "../blogrightSection/blogrightSection";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_Link } from "../api/api";
import "./blogDetails-style.css";

const BlogDetails = ({ data, data2, data3, data4, data5, data6 }) => {
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
    const response = await axios.get(`${API_Link}/courses/info/${id}`);
    console.log(response.data);
    setContents(response.data);
  };

  return (
    <div className="blog-details-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <section className="blog-details-section">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="blog-grid-item-02 style-02 blog-details">
                
                <div>
                  <img src={contents.url} alt={contents.image} />
                </div>
                <h3 className="main-title">{contents.title}</h3>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="blog-details-content">
                

                <div
                  dangerouslySetInnerHTML={{__html: contents.description}}></div>
              </div>
            </div>

            {/* <BlogrightSection data={data4} data2={data5} /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
