import axios from "axios";
import AboutSection from "../aboutSection/aboutSection";
import CategoriesSection from "../categoriesSection/categoriesSection";
// import Destination from "../destination/destination";
import FaqSection from "../faqSection/faqSection";
import FeatureSection from "../featureSection/featureSection";
import FeedBacks from "../feedBacks/feedBacks";
import HomeBanner from "../homeBanner/homeBanner";
import NewsSection from "../newsSection/newsSection";
import StepSection from "../stepSection/stepSection";
import { useState, useEffect } from "react";
import { API_Link } from "../api/api";

const Home = ({
  data,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
  data10,
}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}/section/menu/36`);
    setItems(response);
  };
  

  return (
    <>
      <div className="nav_bg" style={{ marginTop: "-50px" }}>
        <HomeBanner data={data} />
        <FeatureSection data={data2} />
        <FeedBacks data={items} />
        {/* <Destination data={data4} /> */}
        <AboutSection data={data5} />
        <CategoriesSection data={data6} />
        <StepSection data={data7} />
        {/* <NewsSection data={data8} /> */}
        <FaqSection data={data9} data2={data10} />
      </div>
    </>
  );
};

export default Home;
