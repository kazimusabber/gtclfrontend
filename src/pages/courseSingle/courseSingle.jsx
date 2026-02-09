//import CourseAsProduct from "../../components/courseAsProduct/courseAsProduct";
// import CourseContent from "../../components/courseContent/courseContent";
//import CourseDescription from "../../components/courseDescription/courseDescription";
// import SimillarCourseWrap from "../../components/simillarCourseWrap/simillarCourseWrap";

const CourseSingle = ({ data, data2, data3, data4, data5, data6, data7 }) => {
  //   let contents = data2.content;
  //   let contents2 = data3.content;
  //   let contents3 = data4.content;
  //   let contents4 = data5.content;
  //   let contents5 = data6.content;
  return (
    <div className="course-details-wrapper single-page-section-top-space single-page-section-bottom-space">
      <div className="container custom-container-01">
        {/* <div className="row">
          <div className="col-lg-7 col-xl-8">
            <div className="breadcrumb-wrap style-01">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb-content">
                    <h3 className="title">Test Purpose Heading</h3>
                    <p className="details">
                      This is the Course Details for the Computer & IT related
                      Course, for this category section. I hope this is the best
                      course for the Information and Technology related for the
                      details enroll the course.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="container custom-container-01">
        <div className="row">
          <div className="col-lg-7 col-xl-8">
            <div className="breadcrumb-wrap style-01">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb-content">
                    <h3 className="title">{data?.title}</h3>
                    <p className="details">
                      {data?.desc} <br />
                      {data?.desc2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-derails-inner">
              <div className="feedback-and-review">
                <div className="feedback">
                  <i className="fa-solid fa-star icon active" />
                  <i className="fa-solid fa-star icon active" />
                  <i className="fa-solid fa-star icon active" />
                  <i className="fa-solid fa-star icon active" />
                  <i className="fa-solid fa-star icon" />
                  <span className="numb">{data?.rating}</span>
                </div>
                <span className="rating-review">
                  {data?.ratingNum} ratings <span className="hypen">-</span>
                  <span className="review">{data?.reviewNum} reviews</span>
                </span>
              </div>
              <CourseDescription data={data2} data2={contents} />
              <CourseContent />
              <CourseDescription data={data3} data2={contents2} />
              <CourseDescription data={data4} data2={contents3} />
            </div>
          </div>

          <CourseAsProduct data={data5} data2={contents4} />
        </div>

        <div className="row">
          <div className="col-lg-8">
            <SimillarCourseWrap data={data6} data2={contents5} />

            <div className="instructor-profile-wrap">
              <h3 className="details-title">{data7?.title}</h3>
              <div className="instructor-profile">
                <div className="top-content">
                  <div className="thumb">
                    <img src={data7?.imageLink} alt="" />
                  </div>
                  <div className="details">
                    <h4 className="title">
                      <a href="#">{data7?.instructorTitle}</a>
                    </h4>
                    <span className="post">{data7?.instructorPost}</span>
                  </div>
                </div>
                <div className="bottom-content">
                  <p className="paragraph">{data7?.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CourseSingle;
