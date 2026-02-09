const FeatureSection = ({ data }) => {
  let content = data.content;
  return (
    <section className="features-section margin-top-100">
      <img src={data.imageLink} className="shape" alt="graduation cap" />
      <div className="container custom-container-01">
        <div className="row">
          {content?.map((item, indx) => {
            return (
              <div className="col-lg-4 col-md-6" key={indx}>
                <div className="icon-box-item" style={{minHeight:"490px"}}>
                  <div className="icon">
                    <img src={item.imageLink} alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">{item.title}</h4>
                    <p style={{textAlign:"justify",minHeight:"210px"}}>{item.desc}</p>
                  </div>
                  {/* <div className="btn-wrap">
                    <a href="#0" className="more-btn">
                      Learn More <i className="fa-solid fa-angle-right icon" />
                    </a>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
