const BlogrightSection = ({ data, data2 }) => {
  let contents = data.content;
  let contens2 = data2.content;
  return (
    <div className="col-lg-4">
      <div className="widget-area">
        <div className="widget widget_search">
          <h2 className="widget-headline">{data?.title}</h2>
          <form action="blog.html" className="search-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <button className="submit-btn" type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
        <div className="widget widget_recent_posts">
          <h4 className="widget-headline">{data?.heading}</h4>
          <ul className="theme-recent-post-wrap">
            {contents?.map((item, indx) => {
              return (
                <li className="theme-recent-post-item" key={indx}>
                  <div className="thumb">
                    <img src={item.imageLink} alt="recent post" />
                  </div>
                  <div className="content">
                    <span className="time">{item.date}</span>
                    <h4 className="title">
                      <a href="blog-single.html">{item.title}</a>
                    </h4>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="widget widget_category">
          <h3 className="widget-headline">{data2?.title}</h3>
          <ul>
            {contens2?.map((item, indx) => {
              return (
                <li key={indx}>
                  <a href="#">
                    {item.title}
                    <span>({item.totalNum})</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogrightSection;
