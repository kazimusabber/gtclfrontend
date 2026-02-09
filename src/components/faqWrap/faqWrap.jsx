import axios from "axios";
import { useState, useEffect } from "react";

import { API_Link } from "../api/api";

const FaqWrap = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async (req, res) => {
    const response = await axios.get(`${API_Link}/faq/info`);
    setItems(response.data);
  };

  return (
    <div id="accordionOne">
      {items.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <a
                  className="collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item.id}`}
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  {item._question}
                </a>
              </h5>
            </div>
            <div
              id={`collapse${item.id}`}
              className="collapse"
              data-bs-parent="#accordionOne"
            >
              <div className="card-body" dangerouslySetInnerHTML={{__html: item._answer}}></div>
            </div>
          </div>
        );
      })}
      {/* <div className="card">
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0">
            <a
              className="collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. Do you offer complete solution for students?
            </a>
          </h5>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          data-bs-parent="#accordionOne"
        >
          <div className="card-body">
            Norway, USA, UK, Germany &amp; Italy is most safest country in the
            world for Bangladeshi students for higer study.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0">
            <a
              className="collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. Which country is safe and better for higher study?
            </a>
          </h5>
        </div>
        <div
          id="collapseThree"
          className="collapse show"
          data-bs-parent="#accordionOne"
        >
          <div className="card-body">
            Norway, USA, UK, Germany &amp; Italy is most safest country in the
            world for Bangladeshi students for higer study.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingFour">
          <h5 className="mb-0">
            <a
              className="collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              4. Which country offer PR after study getting job?
            </a>
          </h5>
        </div>
        <div
          id="collapseFour"
          className="collapse"
          data-bs-parent="#accordionOne"
        >
          <div className="card-body">
            Norway, USA, UK, Germany &amp; Italy is most safest country in the
            world for Bangladeshi students for higer study.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingFive">
          <h5 className="mb-0">
            <a
              className="collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              5. Can i get scholarship with my low cGPA?
            </a>
          </h5>
        </div>
        <div
          id="collapseFive"
          className="collapse"
          data-bs-parent="#accordionOne"
        >
          <div className="card-body">
            Norway, USA, UK, Germany &amp; Italy is most safest country in the
            world for Bangladeshi students for higer study.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingSix">
          <h5 className="mb-0">
            <a
              className="collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              6. Do you allow accomadation for students in abroad?
            </a>
          </h5>
        </div>
        <div
          id="collapseSix"
          className="collapse"
          data-bs-parent="#accordionOne"
        >
          <div className="card-body">
            Norway, USA, UK, Germany &amp; Italy is most safest country in the
            world for Bangladeshi students for higer study.
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FaqWrap;
