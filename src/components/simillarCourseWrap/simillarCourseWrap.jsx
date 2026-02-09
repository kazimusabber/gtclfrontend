const SimillarCourseWrap = ({ data, data2 }) => {
  return (
    <div className="similler-course-list-wrap">
      <h3 className="details-title">{data?.title}</h3>
      <ul className="ul simillar-course-list">
        {data2?.map((item, indx) => {
          return (
            <li className="single-simillar-course-item" key={indx}>
              <div className="thumb">
                <img src={item.imageLink} alt="" />
              </div>
              <div className="content">
                <div className="left-content">
                  <h4 className="title">
                    <a href="#">{item.title}</a>
                  </h4>
                  <div className="rating-and-enrolled">
                    <div className="rating-wrap">
                      <span className="star">
                        <i className="fa-solid fa-star icon" />
                      </span>
                      <span className="nubm">
                        {item.rating} ({item.ratingNum})
                      </span>
                    </div>
                    <div className="enrolled-wrap">
                      <i className="fa-solid fa-user-group icon" />
                      <span className="text">{item.enrolledNum} Enrolled</span>
                    </div>
                  </div>
                </div>
                <div className="right-content">
                  <span className="price">${item.price}</span>
                  <span className="favourite-icon icon-wrap">
                    <i className="fa-regular fa-heart icon" />
                    <i className="fa-solid fa-heart icon" />
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SimillarCourseWrap;
