const ApplyOnline = ({ data }) => {
  let contents = data.content;
  return (
    <div className="contact-us-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <div className="breadcrumb-wrap style-01">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h3 className="title">{data?.title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="apply-form-area-wrapper">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="apply-form-inner">
                <div className="row justify-content-between">
                  <div className="col-lg-12">
                    <div className="contact-form">
                      <form className="form">
                        <div className="part">
                          <h5 className="title">{data?.subtitle}</h5>
                          <div className="form-element">
                            <div className="row">
                              <div className="col-md-4 col-lg-4">
                                <i className="fa-solid fa-user" />
                                <input
                                  type="text"
                                  placeholder="Full name"
                                  required=""
                                />
                              </div>
                              <div className="col-md-4 col-lg-4">
                                <i className="fa-solid fa-envelope-open" />
                                <input
                                  type="email"
                                  placeholder="Email address"
                                  required=""
                                />
                              </div>
                              <div className="col-md-4 col-lg-4">
                                <i className="fa-solid fa-phone" />
                                <input
                                  type="tel"
                                  placeholder="Phone number"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-element">
                            <div className="row">
                              <div className="col-md-4 col-lg-4">
                                <i className="fa-sharp fa-solid fa-earth-americas" />
                                <select name="" id="">
                                  <option disabled="" selected="" hidden="">
                                    Nationality
                                  </option>
                                  <option value="Canada">Canada</option>
                                  <option value="America">America</option>
                                  <option value="London">London</option>
                                </select>
                              </div>
                              <div className="col-md-4 col-lg-4">
                                <i className="fa-solid fa-calendar-days" />
                                <div className="ui calendar datepicker">
                                  <div className="ui input left">
                                    <input
                                      type="text"
                                      placeholder="Date of birth"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-lg-4">
                                <i className="fa-solid fa-user" />
                                <select name="" id="">
                                  <option disabled="" selected="" hidden="">
                                    Gender
                                  </option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="part">
                          <h5 className="title">
                            {data?.desc}
                            <span className="sub">{data?.subdesc}</span>
                          </h5>
                          <ul className="ul selection-list">
                            {contents?.map((item, indx) => {
                              return (
                                <li key={indx}>
                                  <input type="radio" name="country" />
                                  <div className="thumb">
                                    <img src={item.imageLink} alt="" />
                                  </div>
                                  <div className="content">
                                    <h5 className="title">{item.title}</h5>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="part">
                          <h5 className="title">{data?.title2}</h5>
                          <div className="form-element">
                            <div className="row">
                              <div className="col-md-4 col-lg-4">
                                <i className="fa-sharp fa-solid fa-earth-americas" />
                                <select name="" id="">
                                  <option disabled="" selected="" hidden="">
                                    Study level
                                  </option>
                                  <option value="beginner">Beginner</option>
                                  <option value="intermediate">
                                    Intermediate
                                  </option>
                                  <option value="advance">Advance</option>
                                </select>
                              </div>
                              <div className="col-md-4 col-lg-4">
                                <i className="fa-solid fa-user" />
                                <select name="" id="">
                                  <option disabled="" selected="" hidden="">
                                    Subject
                                  </option>
                                  <option value="english">English</option>
                                  <option value="bangla">Bangla</option>
                                </select>
                              </div>
                              <div className="col-md-4 col-lg-4">
                                <i className="fa-solid fa-calendar-days" />
                                <div className="ui calendar datepicker">
                                  <div className="ui input left">
                                    <input
                                      type="text"
                                      placeholder="Start date"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-submit text-right">
                            <button
                              type="submit"
                              className="btn-common btn-active"
                            >
                              {data?.buttonContent}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyOnline;
