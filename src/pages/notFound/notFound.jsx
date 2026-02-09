import { Link } from "react-router-dom";

const NotFound = ({ data }) => {
  return (
    <div className="error-wrapper nav_bg">
      <div className="container custom-container-01">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-inner">
              <div className="row align-items-center row-reverse">
                <div className="offset-lg-1 col-lg-5">
                  <div className="content">
                    <h5 className="title">{data?.title}</h5>
                    <span className="text">{data?.desc}</span>
                    <div className="btn-wrap">
                      <Link
                        to="/"
                        className="btn-common add-to-cart btn-active"
                      >
                        {data?.buttonContent}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img src={data?.imageLink} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
