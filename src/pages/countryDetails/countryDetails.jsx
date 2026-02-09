const CountryDetails = ({ data, data2, data3 }) => {
  let contents = data.content;
  let contents2 = data2.content;
  return (
    <div className="country-details-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <section className="about-section-area-wrapper section-bottom-space">
        <div className="container custom-container-01">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h3 className="content-title">
                  {data?.title}
                  <br /> {data?.subtitle}
                </h3>
                <p className="paragraph">{data?.desc}</p>
                <ul className="ul check-point-list style-01">
                  {contents?.map((item, indx) => {
                    return (
                      <li className="single-check-point" key={indx}>
                        <span className="icon-wrap">
                          <i className="fa-solid fa-check icon" />
                        </span>
                        <span className="content">
                          <p className="text">{item}</p>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="thumbnail text-right">
                <div className="right-frame">
                  <img src={data?.imageLink} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="institutes-area-wrapper section-top-space section-bottom-space">
        <div className="container custom-container-01">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title-wrapper text-center">
                <h5 className="subtitle">{data2?.subtile}</h5>
                <h4 className="section-title">{data2?.title}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="institutes-inner">
          <div className="container custom-container-01">
            <div className="row">
              <div className="col-lg-12 ml-minus-70">
                <div className="institutes-content-wrap">
                  {contents2.map((item, indx) => {
                    return (
                      <div className="single-institute-item" key={indx}>
                        <div className="logo-wrap">
                          <img src={item} alt="" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-12 mr-70">
                <div className="institutes-content-wrap">
                  {contents2.map((item, indx) => {
                    return (
                      <div className="single-institute-item" key={indx}>
                        <div className="logo-wrap">
                          <img src={item} alt="" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-12 ml-minus-70">
                <div className="institutes-content-wrap">
                  {contents2.map((item, indx) => {
                    return (
                      <div className="single-institute-item" key={indx}>
                        <div className="logo-wrap">
                          <img src={item} alt="" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-area-wrapper section-top-space">
        <div className="container custom-container-01">
          <div className="row align-items-center row-reverse">
            <div className="col-lg-6 col-md-12">
              <div className="thumbnail ">
                <div className="left-frame">
                  <img src={data3?.imageLink} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h3 className="content-title">
                  {data3?.title}
                  <br /> {data3?.subtitle}
                </h3>
                <p className="paragraph">{data3?.desc}</p>
                <p className="paragraph">{data3?.desc2}</p>
                <div className="btn-wrap">
                  <a href="#" className="btn-common btn-new">
                    {data3?.buttonContent}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryDetails;
