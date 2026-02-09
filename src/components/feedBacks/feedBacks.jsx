import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { API_Link } from "../api/api";

const FeedBacks = ({ data }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async (req, res) => {
    const response = await axios.get(`${API_Link}/stories/items`);
    setItems(response.data);
  };

  const contents = data.content;
  return (
    <section className="feedback-section margin-top-110">
      <div className="container custom-container-01">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="theme-section-title desktop-center text-center">
              <span className="subtitle">{data?.subtitle}</span>
              <h4 className="title">
                {data?.title} <br /> {data?.title2}
                <svg
                  className="title-shape"
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
          </div>
        </div>
        <div className="row">
          {items?.map((item,index) => {
            return (

              <>
              {index == 0 ?
              <div className="col-lg-6 col-md-6 col-sm-6" key={item.id}>
                <div className="image-box-item">
                  <div className="thumbnail">
                    <iframe
                      width="100%"
                      height="400"
                      src={item.url}
                      title="Greenland Training Centre Ltd."
                      
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="thumbnail"
                    ></iframe>
                    <Link className="video-play-btn mfp-iframe" to={item.link} target="_blank">
                      <svg
                        width={14}
                        height={25}
                        viewBox="0 0 14 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.124 12.6362L0.364909 24.7606L0.36491 0.511875L13.124 12.6362Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                    <div className="content">
                      <h6 className="title">{item.name}</h6>
                      <p>{item.sub_title}</p>
                    </div>
                  </div>
                </div>
              </div>
              : 
              <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
                <div className="image-box-item">
                  <div className="thumbnail">
                    <iframe
                      width="100%"
                      height="400"
                      src={item.url}
                      title="Greenland Training Centre Ltd."
                      
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="thumbnail"
                    ></iframe>
                    <Link className="video-play-btn mfp-iframe" to={item.link} target="_blank">
                      <svg
                        width={14}
                        height={25}
                        viewBox="0 0 14 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.124 12.6362L0.364909 24.7606L0.36491 0.511875L13.124 12.6362Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                    <div className="content">
                      <h6 className="title">{item.name}</h6>
                      <p>{item.sub_title}</p>
                    </div>
                  </div>
                </div>
              </div>
              }
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeedBacks;
