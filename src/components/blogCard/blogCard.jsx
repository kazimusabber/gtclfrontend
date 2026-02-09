const BlogCard = ({ data }) => {
  return (
    <div className="row">
      {data?.map((item, indx) => {
        return (
          <div className="col-sm-6 col-md-6 col-lg-6" key={indx}>
            <div className="blog-grid-item-02">
              <div className="thumbnail">
                <img src={item.imageLink} alt="" />
                <a href="#" className="tag">
                  <img src={item.tag_icon} alt="Tag" />
                  {item.tag}
                </a>
              </div>
              <div className="content">
                <ul className="post-categories">
                  <li>
                    <img src={item.companyIcon} alt="" />
                    {item.companyName}
                  </li>
                  <li>
                    <img src={item.calanderIcon} alt="" />
                    {item.date}
                  </li>
                </ul>
                <h4 className="title">
                  <a href="blog-single.html">{item.title}</a>
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
