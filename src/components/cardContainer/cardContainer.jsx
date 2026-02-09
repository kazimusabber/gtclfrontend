const CardContainer = ({ data }) => {
  return (
    <>
      {data?.map((item, indx) => {
        return (
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3" key={indx}>
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
                <p className="tag">{item.title}</p>
                <h3 className="title">
                  <a href="#">{item.title}</a>
                </h3>
                <div className="meta-box">
                  <div className="left-content">
                    <div className="feedback">
                      <i className="fas fa-star icon" />
                      <span className="text">
                        {item.rating} ({item.ratingNum})
                      </span>
                    </div>
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
                      <div className="feedback">
                        <i className="fa-solid fa-user-group icon" />
                        <span className="text">{item.studentsNum}</span>
                      </div>
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
    </>
  );
};

export default CardContainer;
