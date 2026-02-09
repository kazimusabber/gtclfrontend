const CourseAsProduct = ({ data, data2 }) => {
  return (
    <div className="col-md-7 col-lg-5 col-xl-4">
      <div className="course-as-product-wrap">
        <div className="thumbnail">
          <img src={data?.imageLink} alt="" />
          <a
            className="video-play-btn mfp-iframe"
            href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
          >
            <img src={data?.imageLink2} alt="" />
          </a>
        </div>
        <div className="content">
          <div className="price-and-enroll">
            <span className="price">${data?.price}</span>
            <span className="enroll">{data?.enrolledNum} Enrolled</span>
          </div>
          <div className="btn-wrap">
            <a href="#" className="btn-common add-to-cart">
              {data?.buttonContent}
            </a>
            <a href="#" className="btn-common add-to-cart btn-active">
              {data?.buttonContent2}
            </a>
          </div>
          <p className="garunte-tag"> {data?.graunteTag} </p>
          <div className="feature-wrap">
            <h5 className="feature-title">{data?.featureTitle}</h5>
            <ul className="ul check-point-list style-01 v-03">
              {data2?.map((item, indx) => {
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
          <div className="bar">
            <img src={data?.imageLink3} alt="" />
          </div>
          <div className="conclution-text">
            <h5 className="feature-title">{data?.featureTitle2}</h5>
            <p className="paragraph">{data?.desec}</p>
            <div className="btn-wrap">
              <a href="#" className="btn-common add-to-cart">
                {data?.buttonContent3}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAsProduct;
