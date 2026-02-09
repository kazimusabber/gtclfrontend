const DetailsSection = ({ data }) => {
  return (
    <section className="about-section-area-wrapper section-bottom-space">
      <div className="container custom-container-01">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <h3 className="content-title">{data?.title}</h3>
              <p className="paragraph font-weight-600 color-heading">
                {data?.desc}
              </p>
              <p className="paragraph">{data?.desc2}</p>
              <div className="btn-wrap">
                <a href="#" className="btn-common btn-new">
                  {data?.buttonContent}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="thumbnail text-right">
              <img src={data?.imageLink} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
