import BlogrightSection from "../blogrightSection/blogrightSection";

const BlogClassic = ({ data, data2, data3, data4 }) => {
  let wrapContent = data2.overContent;
  return (
    <div className="blog-classic single-page-section-top-space single-page-section-bottom-space nav_bg">
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

      <section className="blog-grid-section">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  {wrapContent?.map((item, indx) => {
                    return (
                      <div className="blog-grid-item-02 style-01" key={indx}>
                        <div className="thumbnail">
                          <img src={item.imageLink} alt="Group Study" />
                        </div>
                        <div className="content">
                          <ul className="post-categories">
                            {item.content?.map((item, indx) => {
                              return (
                                <li key={indx}>
                                  <img src={item.imageLink} alt="" />
                                  {item.title}
                                </li>
                              );
                            })}
                          </ul>
                          <h4 className="title">
                            <a href="blog-single.html">{item?.title}</a>
                          </h4>
                          <p>{item?.desc}</p>
                          <div className="btn-wrap">
                            <a href="#0" className="more-btn">
                              Read More
                              <i className="fa-solid fa-angle-right icon" />
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-pagination margin-bottom-30 desktop-center mobile-left">
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

            <BlogrightSection data={data3} data2={data4} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogClassic;
