import CardContainer from "../../components/cardContainer/cardContainer";

const ShopCart = ({ data, data2, data3 }) => {
  let contents = data.content;
  let contents2 = data3.content;
  return (
    <div className="course-details-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <div className="breadcrumb-wrap style-01">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h3 className="title">{data?.title}</h3>
                <p className="details">{data?.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-container-01">
        <div className="row">
          <div className="col-lg-8">
            <div className="similler-course-list-wrap mt-0">
              <ul className="ul simillar-course-list style-02 mt-0">
                {contents?.map((item, indx) => {
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
                                {item.rate} ({item.ratingNum})
                              </span>
                            </div>
                            <div className="enrolled-wrap">
                              <i className="fa-solid fa-user-group icon" />
                              <span className="text">
                                {item.studentsNum} Enrolled
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="right-content">
                          <span className="remove">{item.buttonContent}</span>
                          <span className="price">${item.price}</span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="checkout-wrap">
              <span className="total">{data2?.total}</span>
              <span className="price">${data2?.price}</span>
              <span className="text">{data2?.desc}</span>
              <div className="copun-box">
                <input type="text" placeholder="Enter coupon" />
                <button type="submit">{data2?.buttonContent}</button>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn-common btn-active">
                  {data2?.buttonContent2}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5row column-gap">
          <h4 className="section-title-2">{data3?.title}</h4>

          <CardContainer data={contents2} />
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
