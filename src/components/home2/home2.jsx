import Marquee from "react-fast-marquee";
import AboutPosterSection from "../aboutPosterSection/aboutPosterSection";
import CounterWrap from "../counterWrap/counterWrap";
import Arrow_image from "../../assets/img/icon/arrow-right.svg";
import NewsSection from "../newsSection/newsSection";
import Slider from "react-slick";
import Poster_image from "../../assets/img/sections/courses/courses-01.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home2-style.css";

const Home2 = ({
  data,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
}) => {
  let images = data.content;
  let marquee_image = data2.content;
  let contents = data4.content;
  let contents2 = data5.content;
  let contents3 = data6.content;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="nav_bg">
        <section className="banner-area home-two">
          <div className="container custom-container-01">
            <div className="banner-wrapper">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="banner-inner">
                    <p className="subtitle">
                      <img src={data?.imageLink} alt="celebrate-icon" />
                      {data?.subtitle}
                    </p>
                    <h1 className="title">
                      Learn <span>{data?.highlights}</span> {data?.title}
                    </h1>
                    <p>{data?.desc}</p>
                    <div className="header-btn">
                      <div className="btn-wrap">
                        <a href="#0" className="btn-common flat-btn">
                          {data?.buttonContent}
                        </a>
                      </div>
                      <div className="btn-wrap desktop-right margin-left-20">
                        <a href="#0" className="more-btn style-01">
                          {data?.buttonContent2}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  {images?.map((item, indx) => {
                    return (
                      <div className="thumbnail" key={indx}>
                        <img
                          src={item.imageLink}
                          alt="Ellipse"
                          className={item.className}
                        />
                      </div>
                    );
                  })}

                  <div className="enrolled">
                    <div className="icon">
                      <img src={data?.imageLink2} alt="" />
                    </div>
                    <div className="content">
                      <h6 className="title">{data?.heading}</h6>
                      <p>{data?.sub_heading}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="client-section">
          <div className="container custom-container-01">
            <h4 className="client-title">
              {data?.title}
              <span>{data?.subtitle}</span>
            </h4>
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div
                  className="slick-main slick-main global-slick-init dots-style-03 dots-space"
                  style={{ maxWidth: "900px" }}
                >
                  <Marquee>
                    {marquee_image?.map((item, indx) => {
                      return (
                        <div className="slick-item" key={indx}>
                          <div className="brand-item">
                            <img src={item} alt="koc university" />
                          </div>
                        </div>
                      );
                    })}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="courses-section-area">
          <div className="container custom-container-01">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrapper d-flex justify-content-between">
                  <div className="theme-section-title">
                    <span className="subtitle">{data3?.subtitle}</span>
                    <h4 className="title">{data3?.title}</h4>
                  </div>
                  <div className="btn-wrap">
                    <a href="course.html" className="btn-common fill-btn">
                      {data3?.buttonContent}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-wrapper">
                  <div className="slick-main slick-main global-slick-init dots-style-03 dots-space">
                    <Slider {...settings}>
                      <div className="slick-item">
                        <div className="course-single-item">
                          <div className="thumbnail">
                            <img src={Poster_image} alt="" />
                          </div>
                          <div className="content">
                            <p className="instructor">Harverd University</p>
                            <h6 className="course-name">
                              Become Ethereum Blockchain Developer
                            </h6>
                            <div className="ratings">
                              <div className="icon">
                                <img src="assets/img/icon/star.png" alt="" />
                                <span>4.8 (756)</span>
                              </div>
                              <h6 className="price">$25.50</h6>
                            </div>
                          </div>
                          <div className="overlay-content">
                            <p className="instructor">Leslie Alexander</p>
                            <h6 className="course-name">
                              Beginner friendly web development course A2Z
                            </h6>
                            <p>
                              We have professional alliance's with leading
                              Universities Colleges around the world.
                            </p>
                            <div className="duration">
                              <div className="user">
                                <img
                                  src="assets/img/icon/2people.png"
                                  alt="group"
                                />
                                <span>548796</span>
                              </div>
                              <div className="hours">
                                <img
                                  src="assets/img/icon/clock.png"
                                  alt="clock-image"
                                />
                                <span>23 hr 54 min</span>
                              </div>
                            </div>
                            <div className="video-wrap">
                              <a
                                className="video-popup mfp-iframe"
                                href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                              >
                                <svg
                                  width={15}
                                  height={16}
                                  viewBox="0 0 15 16"
                                  fill="none"
                                >
                                  <path
                                    d="M2.61196 0.352787C1.16948 -0.474644 0 0.203197 0 1.86558V14.1332C0 15.7973 1.16948 16.4742 2.61196 15.6476L13.3345 9.49828C14.7775 8.67055 14.7775 7.32952 13.3345 6.50199L2.61196 0.352787Z"
                                    fill="white"
                                  />
                                </svg>
                              </a>
                              <span>Watch Intro</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="slick-item">
                        <div className="course-single-item">
                          <div className="thumbnail">
                            <img src={Poster_image} alt="" />
                          </div>
                          <div className="content">
                            <p className="instructor">Harverd University</p>
                            <h6 className="course-name">
                              Become Ethereum Blockchain Developer
                            </h6>
                            <div className="ratings">
                              <div className="icon">
                                <img src="assets/img/icon/star.png" alt="" />
                                <span>4.8 (756)</span>
                              </div>
                              <h6 className="price">$25.50</h6>
                            </div>
                          </div>
                          <div className="overlay-content">
                            <p className="instructor">Leslie Alexander</p>
                            <h6 className="course-name">
                              Beginner friendly web development course A2Z
                            </h6>
                            <p>
                              We have professional alliance's with leading
                              Universities Colleges around the world.
                            </p>
                            <div className="duration">
                              <div className="user">
                                <img
                                  src="assets/img/icon/2people.png"
                                  alt="group"
                                />
                                <span>548796</span>
                              </div>
                              <div className="hours">
                                <img
                                  src="assets/img/icon/clock.png"
                                  alt="clock-image"
                                />
                                <span>23 hr 54 min</span>
                              </div>
                            </div>
                            <div className="video-wrap">
                              <a
                                className="video-popup mfp-iframe"
                                href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                              >
                                <svg
                                  width={15}
                                  height={16}
                                  viewBox="0 0 15 16"
                                  fill="none"
                                >
                                  <path
                                    d="M2.61196 0.352787C1.16948 -0.474644 0 0.203197 0 1.86558V14.1332C0 15.7973 1.16948 16.4742 2.61196 15.6476L13.3345 9.49828C14.7775 8.67055 14.7775 7.32952 13.3345 6.50199L2.61196 0.352787Z"
                                    fill="white"
                                  />
                                </svg>
                              </a>
                              <span>Watch Intro</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="slick-item">
                        <div className="course-single-item">
                          <div className="thumbnail">
                            <img src={Poster_image} alt="" />
                          </div>
                          <div className="content">
                            <p className="instructor">Harverd University</p>
                            <h6 className="course-name">
                              Become Ethereum Blockchain Developer
                            </h6>
                            <div className="ratings">
                              <div className="icon">
                                <img src="assets/img/icon/star.png" alt="" />
                                <span>4.8 (756)</span>
                              </div>
                              <h6 className="price">$25.50</h6>
                            </div>
                          </div>
                          <div className="overlay-content">
                            <p className="instructor">Leslie Alexander</p>
                            <h6 className="course-name">
                              Beginner friendly web development course A2Z
                            </h6>
                            <p>
                              We have professional alliance's with leading
                              Universities Colleges around the world.
                            </p>
                            <div className="duration">
                              <div className="user">
                                <img
                                  src="assets/img/icon/2people.png"
                                  alt="group"
                                />
                                <span>548796</span>
                              </div>
                              <div className="hours">
                                <img
                                  src="assets/img/icon/clock.png"
                                  alt="clock-image"
                                />
                                <span>23 hr 54 min</span>
                              </div>
                            </div>
                            <div className="video-wrap">
                              <a
                                className="video-popup mfp-iframe"
                                href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                              >
                                <svg
                                  width={15}
                                  height={16}
                                  viewBox="0 0 15 16"
                                  fill="none"
                                >
                                  <path
                                    d="M2.61196 0.352787C1.16948 -0.474644 0 0.203197 0 1.86558V14.1332C0 15.7973 1.16948 16.4742 2.61196 15.6476L13.3345 9.49828C14.7775 8.67055 14.7775 7.32952 13.3345 6.50199L2.61196 0.352787Z"
                                    fill="white"
                                  />
                                </svg>
                              </a>
                              <span>Watch Intro</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="slick-item">
                        <div className="course-single-item">
                          <div className="thumbnail">
                            <img src={Poster_image} alt="" />
                          </div>
                          <div className="content">
                            <p className="instructor">Harverd University</p>
                            <h6 className="course-name">
                              Become Ethereum Blockchain Developer
                            </h6>
                            <div className="ratings">
                              <div className="icon">
                                <img src="assets/img/icon/star.png" alt="" />
                                <span>4.8 (756)</span>
                              </div>
                              <h6 className="price">$25.50</h6>
                            </div>
                          </div>
                          <div className="overlay-content">
                            <p className="instructor">Leslie Alexander</p>
                            <h6 className="course-name">
                              Beginner friendly web development course A2Z
                            </h6>
                            <p>
                              We have professional alliance's with leading
                              Universities Colleges around the world.
                            </p>
                            <div className="duration">
                              <div className="user">
                                <img
                                  src="assets/img/icon/2people.png"
                                  alt="group"
                                />
                                <span>548796</span>
                              </div>
                              <div className="hours">
                                <img
                                  src="assets/img/icon/clock.png"
                                  alt="clock-image"
                                />
                                <span>23 hr 54 min</span>
                              </div>
                            </div>
                            <div className="video-wrap">
                              <a
                                className="video-popup mfp-iframe"
                                href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                              >
                                <svg
                                  width={15}
                                  height={16}
                                  viewBox="0 0 15 16"
                                  fill="none"
                                >
                                  <path
                                    d="M2.61196 0.352787C1.16948 -0.474644 0 0.203197 0 1.86558V14.1332C0 15.7973 1.16948 16.4742 2.61196 15.6476L13.3345 9.49828C14.7775 8.67055 14.7775 7.32952 13.3345 6.50199L2.61196 0.352787Z"
                                    fill="white"
                                  />
                                </svg>
                              </a>
                              <span>Watch Intro</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="features-section home-two section-bottom-space">
          <AboutPosterSection data={data4} data2={contents} />
        </section>

        <section className="counter-area-wrapper">
          <div className="counter-section-area">
            <div className="container custom-container-01">
              <div className="row">
                <div className="col-lg-12">
                  <div className="counter-section-inner style-01">
                    {contents2?.map((item, indx) => {
                      return <CounterWrap data={item} key={indx} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="category-section-area">
          <div className="container custom-container-01">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="theme-section-title desktop-center">
                  <span className="subtitle">{data6?.subtitle}</span>
                  <h4 className="title">{data6?.title}</h4>
                </div>
              </div>
            </div>
            <div className="row">
              {contents3?.map((item, indx) => {
                return (
                  <div className="col-md-6 col-lg-4" key={indx}>
                    <div className="category-item">
                      <div className="categories-inner">
                        <div className="content-wrap">
                          <div className="icon">
                            <img src={item.imageLink} alt="" />
                          </div>
                          <div className="content">
                            <h4 className="title">{item.title}</h4>
                            <p>{item.courseNumber}</p>
                          </div>
                        </div>
                        <div className="icon">
                          <img src={Arrow_image} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="features-section style-01 margin-top-110 home-two">
          <div className="container custom-container-01">
            <div className="row align-items-center row-reverse">
              <div className="col-lg-6">
                <div className="thumbnail">
                  <img src={data7?.imageLink} alt="" />
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="theme-section-title">
                  <span className="subtitle">{data7?.subtitle}</span>
                  <h4 className="title">
                    {data7?.title} <br /> {data7?.title2}
                    <svg
                      className="title-shape style-03 active"
                      width={255}
                      height={15}
                      viewBox="0 0 355 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="path"
                        d="M351.66 12.6362C187.865 -6.32755 49.6478 6.37132 3.41142 12.6362"
                        stroke="#764AF1"
                        strokeWidth={3}
                        strokeLinecap="square"
                      />
                      <path
                        className="path"
                        d="M351.66 13C187.865 -5.96378 49.6478 6.73509 3.41142 13"
                        stroke="#764AF1"
                        strokeWidth={3}
                        strokeLinecap="square"
                      />
                      <path
                        className="path"
                        d="M2.5 5.5C168.5 2.0001 280.5 -1.49994 352.5 8.49985"
                        stroke="#FFC44E"
                        strokeWidth={3}
                        strokeLinecap="square"
                      />
                    </svg>
                  </h4>
                  <p>{data7?.desc}</p>
                  <p>{data7?.desc2}</p>
                </div>
                <div className="btn-wrap margin-top-60">
                  <a href="courses.html" className="btn-common fill-btn">
                    {data7?.buttonContent}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-section margin-top-110">
          <img
            src={data8?.imageLink}
            className="testimonial-shape"
            alt="Graduation Paper"
          />
          <div className="container custom-container-01">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="theme-section-title desktop-center text-center">
                  <h4 className="title">{data8?.title}</h4>
                  <p>{data8?.desc}</p>
                </div>
              </div>
            </div>
            <h2>Card SLider ....</h2>
            {/* <div className="row">
              <div className="col-lg-12">
                <div
                  className="slick-main slick-main global-slick-init dots-style-03 dots-space"
                  data-infinite="true"
                  data-arrows="true"
                  data-fade="false"
                  data-speed={500}
                  data-slidestoshow={3}
                  data-slidestoscroll={1}
                  data-swipetoslide="true"
                  data-autoplay="true"
                  data-autoplayspeed={2500}
                  data-dots="true"
                  data-responsive='[
                              {"breakpoint": 1367,"settings": {"slidesToShow": 3}},
                              {"breakpoint": 992,"settings": {"slidesToShow": 2}},
                              {"breakpoint": 600, "settings": {"slidesToShow": 1}}
                              ]'
                >
                  <div className="slick-item">
                    <div className="testimonial-single-items style-01">
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
                        <div className="quote">
                          <i className="fa-solid fa-quote-right icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="testimonial-single-items style-01">
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
                        <div className="quote">
                          <i className="fa-solid fa-quote-right icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="testimonial-single-items style-01">
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
                            <p className="client-name">Savannah Nguyen</p>
                            <p className="designation">
                              Central African Republic
                            </p>
                          </div>
                        </div>
                        <div className="quote">
                          <i className="fa-solid fa-quote-right icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="testimonial-single-items style-01">
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
                            <p className="client-name">Savannah Nguyen</p>
                            <p className="designation">
                              Central African Republic
                            </p>
                          </div>
                        </div>
                        <div className="quote">
                          <i className="fa-solid fa-quote-right icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <NewsSection data={data9} />
      </div>
    </>
  );
};

export default Home2;
