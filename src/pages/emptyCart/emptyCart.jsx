import { Link } from "react-router-dom";

import Brocher from "../../assets/Greenland_Training_Center_Brochure.pdf";

const EmptyCart = ({ data }) => {
  return (
    <div>
      <div className="error-wrapper nav_bg" style={{height:"auto"}}>
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-12">
              <div className="error-inner">
                <div className="row align-items-center row-reverse">
                  
                  <div className="col-lg-9">
                    <iframe
                      src={Brocher}
                      width={"100%"}
                      height={700}
                      frameborder="0"
                    />
                  </div>
                  <div className="col-lg-3">
                    <div className="content text-center">
                      <h5 className="title">Brochure</h5>
                      <div className="btn-wrap">
                        <Link
                          to={Brocher}
                          className="btn-common add-to-cart btn-active" download="Greenland_Training_Center_Brochure"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Download
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
