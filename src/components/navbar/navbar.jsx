import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_Link } from "../api/api";

import "./navbar-style.css";

const Navbar = ({ data}) => {
  const Icon_Logo = `https://glandgroup.com/public/images/0413202208543162568fc7bc454.png`;
  const [dataItems, setDataItems] = useState([]);
  const [isActive, setisActive] = useState(null);
  useEffect(() => {
    getDataItems();
  }, []);

  const getDataItems = async () => {
    const response = await axios.get(`${API_Link}/header/title`);
    setDataItems(response.data);
  };

  const navigate = (id) => {
    setisActive(id);
  };
  let contents = data.content;
  return (
    <>
      <div className="nav-area-wrapper-relative nav_bg">
        <nav className="navbar navbar-area navbar-expand-lg navigation-style-02">
          <div className="container custom-container custom-container-01">
            <div className="responsive-menu">
              <div className="logo-wrapper">
                <Link to="/" className="logo" onClick={() => navigate(null)}>
                  <img
                    src={Icon_Logo}
                    alt="logo"
                    style={{ height: "auto", width: "50%" }}
                  />
                </Link>
              </div>
              <button
                className="navbar-toggler navbar-bs-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#themeim_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="themeim_main_menu">
              <ul className="navbar-nav">
                {dataItems
                  ?.filter((item) => item._isTitle === 1)
                  ?.map((item) => {
                    return (
                      <li
                        className={`menu-item-has-children ${
                          item._isTitle === 1 ? "current-menu-item" : ""
                        }`}
                        key={item._id}
                      >
                        <Link to={item._slug} onClick={() => navigate(item._id)}
        className={isActive == item._id ? "activemenu" : ""}>{item._menu}</Link>
                        
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="nav-right-content">
              <div className="icon-part">
                <ul>
                  <li id="search">
                    <a href="#">
                      <img src="assets/img/icon/search-icon.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="btn-wrap">
                <a href="#" className="btn-common nav-btn">
                  consultation
                </a>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
