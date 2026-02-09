import CardContainer from "../../components/cardContainer/cardContainer";

const AboutInstructor = ({ data, data2, data3, data4 }) => {
  let contents = data.content;
  let contents2 = data4.content;
  return (
    <div className="team-details-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <section className="about-section-area-wrapper section-bottom-space">
        <div className="container custom-container-01">
          <div className="row align-items-center row-reverse">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h3 className="content-title">{data?.title}</h3>
                <p className="paragraph">
                  {data?.desc}
                  <br />
                  {data?.desc2}
                </p>
                <div className="check-point-wrap">
                  <p className="details-title">{data?.title2}</p>
                  <ul className="ul check-point-list style-01 v-02">
                    {contents?.map((item, indx) => {
                      return (
                        <li className="single-check-point" key={indx}>
                          <span className="icon-wrap">
                            <i className="fa-solid fa-check icon" />
                          </span>
                          <span className="content">
                            <span className="text">{item}</span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="offset-xl-1 col-lg-6 col-md-7 col-xl-4">
              <div className="single-instructor-details-wrap">
                <div className="thumb">
                  <img src={data2?.imageLink} alt="image" />
                </div>
                <div className="content">
                  <div className="badge-box">
                    <span className="badges">{data2?.badge}</span>
                  </div>
                  <h4 className="title">{data2?.title}</h4>
                  <p className="paragraph">
                    {data2?.position}
                    <span className="ex">{data2?.companyName}</span>
                  </p>
                  <div className="student-review">
                    <div className="student-wrap">
                      <span className="number">{data2?.studentNum}</span>
                      <span className="text">{data2?.text}</span>
                    </div>
                    <div className="review-wrap">
                      <span className="number">{data2?.rating}</span>
                      <span className="text">{data2?.ratingNum} reviews</span>
                    </div>
                  </div>
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
          </div>
        </div>
      </section>
      <section className="testimonial-area-wrapper section-top-space">
        <div className="testimonial-inner-bg">
          <div className="container custom-container-01">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title-wrapper text-center">
                  <h4 className="section-title">{data3?.title}</h4>
                  <p className="description">{data3?.desc}</p>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-lg-12">
                <div
                  className="slick-main global-slick-init"
                  data-infinite="true"
                  data-arrows="true"
                  data-fade="false"
                  data-speed={500}
                  data-dots="false"
                  data-slidestoshow={3}
                  data-slidestoscroll={1}
                  data-swipetoslide="true"
                  data-autoplay="true"
                  data-autoplayspeed={2500}
                  data-responsive='[
                              {"breakpoint": 1367,"settings": {"slidesToShow": 3}},
                              {"breakpoint": 992,"settings": {"slidesToShow": 2}},
                              {"breakpoint": 600, "settings": {"slidesToShow": 1}}
                              ]'
                >
                  <div className="slick-item">
                    <div className="testimonial-single-items style-01 v-02  no-border">
                      <div className="feedback-wrap">
                        <ul className="ul feedback-icon-list">
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <p className="feedback-text">
                          “I able to prove potential employers that i have a
                          solid understanding of computers &amp; hardware- and
                          started to receive real, viable job offers”.
                        </p>
                      </div>
                      <div className="client-and-quote">
                        <div className="client-details">
                          <div className="thumb">
                            <img
                              src="assets/img/sections/testimonial/tesi-01.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <p className="client-name">Savannah Nguyen</p>
                            <p className="designation">
                              Central African Republic
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="testimonial-single-items style-01 v-02  no-border">
                      <div className="feedback-wrap">
                        <ul className="ul feedback-icon-list">
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <p className="feedback-text">
                          “I able to prove potential employers that i have a
                          solid understanding of computers &amp; hardware- and
                          started to receive real, viable job offers”.
                        </p>
                      </div>
                      <div className="client-and-quote">
                        <div className="client-details">
                          <div className="thumb">
                            <img
                              src="assets/img/sections/testimonial/testi-02.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <p className="client-name">Kathryn Murphy</p>
                            <p className="designation">Monaco</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="testimonial-single-items style-01 v-02  no-border">
                      <div className="feedback-wrap">
                        <ul className="ul feedback-icon-list">
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <p className="feedback-text">
                          “I able to prove potential employers that i have a
                          solid understanding of computers &amp; hardware- and
                          started to receive real, viable job offers”.
                        </p>
                      </div>
                      <div className="client-and-quote">
                        <div className="client-details">
                          <div className="thumb">
                            <img
                              src="assets/img/sections/testimonial/testi-03.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <p className="client-name">Kristin Watson</p>
                            <p className="designation">Guinea</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="testimonial-single-items style-01 v-02  no-border">
                      <div className="feedback-wrap">
                        <ul className="ul feedback-icon-list">
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <p className="feedback-text">
                          “I able to prove potential employers that i have a
                          solid understanding of computers &amp; hardware- and
                          started to receive real, viable job offers”.
                        </p>
                      </div>
                      <div className="client-and-quote">
                        <div className="client-details">
                          <div className="thumb">
                            <img
                              src="assets/img/sections/testimonial/testi-02.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <p className="client-name">Savannah Nguyen</p>
                            <p className="designation">
                              Central African Republic
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <h2>Card Slider .....</h2>
          </div>
        </div>
      </section>

      <section className="course-area-wrapper section-top-space">
        <div className="container custom-container-01">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title-wrapper text-center">
                <h4 className="section-title">{data4?.title}</h4>
                <p className="description">{data4?.subtitle}</p>
              </div>
            </div>
          </div>
          <div className="row mt-5row column-gap">
            <CardContainer data={contents2} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutInstructor;
