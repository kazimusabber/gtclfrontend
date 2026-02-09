import CardContainer from "../../components/cardContainer/cardContainer";

const AllCourses = ({ data }) => {
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
            <div className="col-lg-12">
              <div className="filter-wrapper">
                <form className="form">
                  <div className="form-element">
                    <div className="row">
                      <div className="col-sm-2 col-md-2 col-lg-2">
                        <span className="title">Category</span>
                        <select name="" id="">
                          <option disabled="" selected="" hidden="">
                            Select
                          </option>
                          <option value="Canada">Web Design</option>
                          <option value="America">Hacking</option>
                          <option value="London">Design</option>
                        </select>
                      </div>
                      <div className="col-sm-2 col-md-2 col-lg-2">
                        <span className="title">Duration</span>
                        <select name="" id="">
                          <option disabled="" selected="" hidden="">
                            Select
                          </option>
                          <option value="Canada">1 Hour</option>
                          <option value="America">2 Hours</option>
                          <option value="London">3 Hours</option>
                        </select>
                      </div>
                      <div className="col-sm-2 col-md-2 col-lg-2">
                        <span className="title">Tutor</span>
                        <select name="" id="">
                          <option disabled="" selected="" hidden="">
                            Select
                          </option>
                          <option value="Canada"> Google</option>
                          <option value="America">Apple</option>
                          <option value="London">Amazon</option>
                        </select>
                      </div>
                      <div className="col-sm-2 col-md-2 col-lg-2">
                        <span className="title">Level</span>
                        <select name="" id="">
                          <option disabled="" selected="" hidden="">
                            Select
                          </option>
                          <option value="Canada">Beginner</option>
                          <option value="America">Intermediate</option>
                          <option value="London">Advance</option>
                        </select>
                      </div>
                      <div className="col-sm-2 col-md-2 col-lg-1">
                        <span className="title">Language</span>
                        <select name="" id="">
                          <option disabled="" selected="" hidden="">
                            Select
                          </option>
                          <option value="Canada">English</option>
                          <option value="America">Arabic</option>
                          <option value="London">Bangla</option>
                        </select>
                      </div>
                      <div className="offset-lg-1 col-sm-2 col-md-2 col-lg-2">
                        <div className="btn-wrap">
                          <button
                            type="submit"
                            className="btn-common btn-active"
                          >
                            filter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row column-gap-50">
            <CardContainer data={contents} />
            {/* <div className="col-sm-6 col-md-4 col-xl-3">
              <div className="single-course-item">
                <div className="thumbnail zoom-in">
                  <div
                    className="background-image"
                    style={{ backgroundImage: "url(assets/img/course/01.png)" }}
                  />
                </div>
                <div className="contact">
                  <p className="tag">Harverd University</p>
                  <h3 className="title">
                    <a href="#">Become Ethereum Blockchain Developer</a>
                  </h3>
                  <div className="meta-box">
                    <div className="left-content">
                      <di className="feedback">
                        <i className="fas fa-star icon" />
                        <span className="text">4.8 (756)</span>
                      </di>
                    </div>
                    <div className="right-content">
                      <p className="price">$25.50</p>
                    </div>
                  </div>
                </div>
                <div className="hover-option">
                  <div className="contact">
                    <p className="tag">Harverd University</p>
                    <h3 className="title">
                      <a href="#">Become Ethereum Blockchain Developer</a>
                    </h3>
                    <p className="paragraph">
                      We have professional alliance's with leading Universities
                      Colleges around the world.
                    </p>
                    <div className="meta-box">
                      <div className="left-content">
                        <di className="feedback">
                          <i className="fa-solid fa-user-group icon" />
                          <span className="text">548796</span>
                        </di>
                      </div>
                      <div className="right-content">
                        <i className="fa-solid fa-clock icon" />
                        <span className="duration">23 hr 54 min</span>
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
            </div> */}
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
      </section>
    </div>
  );
};

export default AllCourses;
