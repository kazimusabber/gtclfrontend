const CourseDescription = ({ data, data2 }) => {
  return (
    <div className="about-course">
      <h3 className="details-title">{data?.title}</h3>
      <p className="paragraph">{data?.desc}</p>
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
  );
};

export default CourseDescription;
