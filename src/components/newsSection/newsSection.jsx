import NewsSectionimage2 from "../../assets/img/icon/calander.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_Link } from "../api/api";
const NewsSection = ({ data }) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getBlogItems();
  }, []);

  const getBlogItems = async () => {
    const response = await axios.get(`${API_Link}/section/menu/36/0`);
    setContents(response.data);
    //console.log(response);
  };
  return (
    <section className="news-section-area margin-top-110">
      <div className="container custom-container-01">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="theme-section-title desktop-center text-center">
              <span className="subtitle"> News</span>
              <h4 className="title"> News & Events </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {contents?.map((item, indx) => {
            return (
              <div className="col-md-6 col-lg-4" key={indx}>
                <div className="blog-grid-item">
                  <div className="thumbnail">
                    <img src={item._url} alt="" className="border-radius-20" />
                  </div>
                  <div className="content">
                    <ul className="post-categories">
                      <li>
                        <img src={NewsSectionimage2} alt="" />
                        {item.createdAt}
                      </li>
                      {/* <li>{item.time}</li> */}
                    </ul>
                    <h4 className="title">{item._title}</h4>
                    <div className="btn-wrap">
                      <a href={`/news-details/${item._id}`} className="more-btn">
                        Read More <i className="fa-solid fa-angle-right icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
