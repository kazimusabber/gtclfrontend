const Destination = ({ data }) => {
  let contents = data.content;
  return (
    <section className="margin-top-110 section-bottom-space">
      <div className="destination-section">
        <img
          src={data?.imageLink}
          className="shape-01 wow animate__animated animate__delay-1s animate__fadeInUp"
          alt="mountant"
        />
        <div className="plane-wrap">
          <img src={data?.imageLink2} className="shape-02" alt="mountant" />
        </div>
        <div className="container custom-container-01">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="theme-section-title desktop-center text-center">
                <h4 className="title"> {data?.title} </h4>
                <p>{data?.desc}</p>
              </div>
            </div>
          </div>
          <div className="destination-items-wrap">
            {contents?.map((item, indx) => {
              return (
                <div className="destination-single-item shadow" key={indx}>
                  <div className="thumbnail">
                    <img src={item.imageLink} alt="" />
                  </div>
                  <h6 className="name">{item.title}</h6>
                </div>
              );
            })}
          </div>
          <div className="btn-wrap desktop-center margin-top-40 text-center">
            <a href="contact.html" className="btn-common fill-btn style-01">
              {data?.buttonContent}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
