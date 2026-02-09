import FaqWrap from "../../components/faqWrap/faqWrap";

const FaqPage = ({ data, data2 }) => {
  let contents = data.content;
  return (
    <div className="faq-wrapper single-page-section-top-space nav_bg">
      <div className="faq-inner">
        <div className="container custom-container-01">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="theme-section-title text-center">
                <h4 className="title">{data?.title}</h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7">
              <div className="newsletter style-01">
                <form className="form">
                  <div className="form-element">
                    <input
                      type="text"
                      placeholder="Search question..."
                      className="form-text"
                    />
                    <button type="submit" className="btn-submit">
                      <i className="fa-solid fa-magnifying-glass icon" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="help-category-wrap">
            <div className="row column-gap">
              <div className="col-lg-12">
                <div className="content text-center">
                  <p className="paragraph">{data?.subtitle}</p>
                </div>
              </div>
              {contents?.map((item, indx) => {
                return (
                  <div className="col-sm-6 col-md-4 col-lg-2" key={indx}>
                    <a href="#" className="single-help-category-item">
                      <span className="logo-wrap">
                        <img src={item.imageLink} alt="" />
                      </span>
                      <span className="content">
                        <span className="title">{item.title}</span>
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion-wrapper style-02">
                <FaqWrap />
              </div>
            </div>
          </div>
        </div>
        <div className="ask-question-area-wrap">
          <div className="container custom-container-01">
            <div className="row">
              <div className="col-lg-12">
                <div className="ask-question-inner">
                  <div className="img-wrap">
                    <img src={data2?.imageLink} alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">{data2?.title}</h4>
                    <p className="paragraph">{data2?.desc}</p>
                    <div className="btn-wrap">
                      <a href="#" className="btn-common btn-active">
                        {data2?.buttonContent}
                      </a>
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

export default FaqPage;
