import BlogCard from "../blogCard/blogCard";
import BlogrightSection from "../blogrightSection/blogrightSection";

const BlogSection = ({ data, data2, data3 }) => {
  let contents = data.content;

  return (
    <div className="out-services-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
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
      <section className="blog-grid-sectin">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-items-wrap">
                <BlogCard data={contents} />
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
                            <a
                              href="#"
                              className="page-number able right-arrow"
                            >
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
            <BlogrightSection data={data2} data2={data3} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
