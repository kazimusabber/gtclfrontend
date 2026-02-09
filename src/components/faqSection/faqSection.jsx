import axios from "axios";
import { useState, useEffect } from "react";
import FaqWrap from "../faqWrap/faqWrap";

import { API_Link } from "../api/api";

const FaqSection = ({ data }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async (req, res) => {
    const response = await axios.get(`${API_Link}/faq/info`);
    setItems(response.data);
  };

  return (
    <section className="faq-section-area">
      <div className="container custom-container-01">
        <div className="row">
          <div className="col-lg-6">
            <div className="theme-section-title">
              <span className="subtitle">{data?.subtitle}</span>
              <h4 className="title">{data?.title}</h4>
            </div>
            <div className="faq-content">
              <h6 className="subtitle">
                {data?.desc} <br />
                {data?.desc2}
              </h6>
              <div className="btn-wrap">
                <a href="/contact-us" className="btn-common flat-btn">
                  {data?.buttonContent}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion-wrapper">
              {/* accordion wrapper */}
              <FaqWrap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
