import axios from "axios";
import { useState, useEffect } from "react";

import { API_Link } from "../api/api";

const Footer = ({ data }) => {
  const [dataItems, setDataItems] = useState([]);

  useEffect(() => {
    getDataItems();
  }, []);

  const getDataItems = async () => {
    const response = await axios.get(`${API_Link}/footer/item`);
    console.log(response.data);
    setDataItems(response.data);
  };

  const parseHtmlToList = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const listItems = Array.from(doc.body.querySelectorAll("li")).map(
      (li) => li.textContent
    );
      console.log(listItems);
    return listItems;
  };

  const setDate = () => {
    const presentDate = new Date();
    const year = presentDate.getFullYear();
    return year;
  };

  return (
    <footer className="footer-area style-01">
      <div className="footer-top">
        <div className="container custom-container-01">
          <div className="footer-middle">
            <div className="row">
              {dataItems?.map((item, indx) => (
                <div className="col-lg-4 col-md-4 col-sm-4" key={indx}>
                  <div className="footer-widget widget widget_nav_menu">
                    <h4 className="widget-headline">{item.header}</h4>
                    <div dangerouslySetInnerHTML={{__html: item.list}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-area-inner">
                <p>{`© ${setDate()} GTCL. All rights reserved | Developed By Softin`}</p>
                <div className="footer-social-area">
                  <ul className="social-icon-02">
                    <li>
                      <a href="https://www.facebook.com/GreenlandTraining" target="_blank">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@GreenlandTrainingCentreLtd.">
                        <i className="fab fa-youtube" target="_blank"/>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/greenland-training-centre-limited-7603a4300/">
                        <i className="fab fa-linkedin-in" target="_blank"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
