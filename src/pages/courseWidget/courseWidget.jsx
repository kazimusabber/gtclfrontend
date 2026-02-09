const CourseWidget = ({ data }) => {
  let contents = data.content;
  return (
    <div className="all-course-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
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
      <section className="course-area-wrapper">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              <div className="widget-wrapper">
                <div className="single-widget-item">
                  <h4 className="title">{data?.subtitle}</h4>
                  <div className="form">
                    <div className="form-element">
                      <select name="" id="">
                        <option disabled="" selected="" hidden="">
                          Select
                        </option>
                        <option value="Canada">Web Design</option>
                        <option value="America">Hacking</option>
                        <option value="London">Design</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="single-widget-item">
                  <ul className="category-wrap">
                    <li className="single-category-item">
                      <label className="radio-btn-wrapper">
                        <input
                          type="radio"
                          name="category"
                          className="checkbox"
                        />
                        <span className="checkmark" />
                        <span className="content">
                          <span className="left">{data?.time}</span>
                        </span>
                      </label>
                    </li>
                    <li className="single-category-item">
                      <label className="radio-btn-wrapper">
                        <input
                          type="radio"
                          name="category"
                          className="checkbox"
                        />
                        <span className="checkmark" />
                        <span className="content">
                          <span className="left">{data?.time}</span>
                        </span>
                      </label>
                    </li>
                    <li className="single-category-item">
                      <label className="radio-btn-wrapper">
                        <input
                          type="radio"
                          name="category"
                          className="checkbox"
                        />
                        <span className="checkmark" />
                        <span className="content">
                          <span className="left">{data?.time}</span>
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-xl-9">
              <div className="row column-gap-50">
                {contents?.map((item, indx) => {
                  return (
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                      <div className="single-course-item">
                        <div className="thumbnail zoom-in">
                          <div
                            className="background-image"
                            style={{
                              backgroundImage: `url(${item.imageLink})`,
                            }}
                          />
                        </div>
                        <div className="contact">
                          <p className="tag">{item.tag}</p>
                          <h3 className="title">
                            <a href="#">{item.title}</a>
                          </h3>
                          <div className="meta-box">
                            <div className="left-content">
                              <di className="feedback">
                                <i className="fas fa-star icon" />
                                <span className="text">
                                  {item.rating} ({item.ratingNum})
                                </span>
                              </di>
                            </div>
                            <div className="right-content">
                              <p className="price">${item.price}</p>
                            </div>
                          </div>
                        </div>
                        <div className="hover-option">
                          <div className="contact">
                            <p className="tag">{item.tag}</p>
                            <h3 className="title">
                              <a href="#">{item.title}</a>
                            </h3>
                            <p className="paragraph">{item.desc}</p>
                            <div className="meta-box">
                              <div className="left-content">
                                <di className="feedback">
                                  <i className="fa-solid fa-user-group icon" />
                                  <span className="text">
                                    {item.studentsNum}
                                  </span>
                                </di>
                              </div>
                              <div className="right-content">
                                <i className="fa-solid fa-clock icon" />
                                <span className="duration">{item.time}</span>
                              </div>
                            </div>
                            <div className="video-play-wrapper">
                              <a
                                className="video-play-btn mfp-iframe"
                                href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                              >
                                <svg
                                  width={14}
                                  height={25}
                                  viewBox="0 0 14 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.124 12.6362L0.364909 24.7606L0.36491 0.511875L13.124 12.6362Z"
                                    fill="white"
                                  />
                                </svg>
                              </a>
                              <p className="text">Watch Intro</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="pagination">
                    <ul className="pagination-list">
                      <li>
                        <a href="#" className="page-number able left-arrow">
                          PREV
                        </a>
                      </li>
                      <li>
                        <a href="#" className="page-number current">
                          01
                        </a>
                      </li>
                      <li>
                        <a href="#" className="page-number">
                          02
                        </a>
                      </li>
                      <li>
                        <a href="#" className="page-number">
                          03
                        </a>
                      </li>
                      <li>
                        <a href="#" className="page-number able right-arrow">
                          NEXT
                        </a>
                      </li>
                    </ul>
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

export default CourseWidget;
