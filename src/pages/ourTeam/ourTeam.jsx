const OurTeam = ({ data, data2, data3 }) => {
  let contents = data.content;
  let contents2 = data2.content;
  return (
    <div className="our-team-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <div className="breadcrumb-wrap style-01">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h3 className="title">{data?.title}</h3>
                <p className="details">{data?.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="our-team-single-details-wrap section-bottom-space">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-wrap">
                <img src={data?.imageLink} alt="" />
                <div className="badge-wrap">
                  <span className="numb">{data?.badgeNum}</span>
                  <span className="text">{data?.badgeText}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <p className="quote">
                  <i className="fa-solid fa-quote-left icon" />
                  {data?.desc2}
                </p>
                <p className="paragraph">{data?.desc3}</p>
                <p className="paragraph">{data?.desc4}</p>
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
                <div className="btn-wrap">
                  <a href="#" className="btn-common btn-new">
                    {data?.buttonContent}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-team-area-wrapper section-top-space section-bottom-space">
        <div className="our-team-inner">
          <div className="container custom-container-01">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title-wrapper text-center">
                  <h4 className="section-title">{data2?.title}</h4>
                  <p className="description">{data2?.desc}</p>
                </div>
              </div>
            </div>
            <div className="row column-gap-50">
              {contents2?.map((item, indx) => {
                return (
                  <div className="col-md-6 col-lg-4" key={indx}>
                    <div className="single-team-item style-02">
                      <div className="thumbnail">
                        <img src={item.imageLink} alt="team image" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="#" tabIndex={-1}>
                            {item.title}
                          </a>
                        </h4>
                        <p className="designation">{item.position}</p>
                        <p className="email">
                          <span className="icon-wrap">
                            <i className="fa-regular fa-envelope icon" />
                          </span>
                          <span className="text">{item.email}</span>
                        </p>
                      </div>
                      <div className="hover-content">
                        <h4 className="title">
                          <a href="#" tabIndex={-1}>
                            {item.title}
                          </a>
                        </h4>
                        <p className="designation">{item.position}</p>
                        <p className="paragraph">{item.desc}</p>
                        <ul className="ul social-media-list style-01 color-02">
                          <li className="single-social-item">
                            <a href="#" tabIndex={-1}>
                              <i className="fa-brands fa-instagram icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#" tabIndex={-1}>
                              <i className="fa-brands fa-facebook-f icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#" tabIndex={-1}>
                              <i className="fa-brands fa-youtube icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#" tabIndex={-1}>
                              <i className="fa-brands fa-linkedin-in icon" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section-area-wrapper section-top-space">
        <div className="container custom-container-01">
          <div className="row align-items-center">
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
                  {data3.title}
                  <br />
                  {data3.subtitle}
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

export default OurTeam;
