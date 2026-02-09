import CounterUp from "../counterUp/counterUp";

const CounterWrap = ({ data }) => {
  return (
    <div className="single-counterup">
      <div className="image-wrap">
        <img src={data.url} alt="" />
      </div>
      <div className="content-wrap">
        <div className="odo-area">
          <h3 className="odometer odo-title">
            <CounterUp data={data.count} />
          </h3>
        </div>
        <div className="content">
          <h6 className="subtitle">{data.title}</h6>
        </div>
      </div>
    </div>
  );
};

export default CounterWrap;
