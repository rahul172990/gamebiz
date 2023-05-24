import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import SearchIcon from "../assets/Search_Icon.png";

import RunImage from "../images/gg-removebg-preview.png";
import axios from "axios";
import { useNavigate } from "react-router";
import { type } from "@testing-library/user-event/dist/type";
import HeaderTags from "./HeaderTags";
import ListIcon from "@mui/icons-material/List";
const COLORS = ["#ffc01b", "#00d97b", "#00d0fd", "#e25151", "#9a3aad"];
const COLORS2 = ["#e25151", "#9a3aad", "#ffc01b", "#00d97b", "#00d0fd"];

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
const CustomeHeader = ({ searchValue, onChange, onClick }) => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(1);
  const [tagsData, setTagsData] = useState(null);
  const [game, setGames] = useState(null);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const getTagsCount = () => {
    // if (windowSize?.innerWidth > 1024 && windowSize?.innerWidth < 1600) {
    //   console.log("xscsc 1200");
    //   return 3;
    // }
    // if (windowSize?.innerWidth > 1900) {
    //   console.log("xscsc 1600");

    //   return 5;
    // }

    if (windowSize?.innerWidth > 767 && windowSize?.innerWidth < 1001) {
      return 2;
    } else if (windowSize?.innerWidth > 1001 && windowSize?.innerWidth < 1350) {
      return 3;
    } else if (windowSize?.innerWidth > 1350 && windowSize?.innerWidth < 1800) {
      return 4;
    } else {
      return 5;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get("http://144.126.253.65:3000/customer/get-tags?skip=0&limit=10")
      .then((res) => setTagsData(res?.data?.data))
      .catch((e) => console.log(e));

    axios
      .get("http://144.126.253.65:3000/customer/get-games?skip=0&limit=20")
      .then((res) => setGames(res?.data?.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    getTagsCount();
  }, [windowSize?.innerWidth]);

  return (
    <header className="header_style">
      <div className="menu-style">
        <div className="show_menu" onClick={onClick}>
          <ListIcon fontSize="large" />
        </div>
        <div>
          <img
            src={Logo}
            alt="logo"
            className="header_logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
      <div className="hide_headerTags">
        <HeaderTags tagsData={tagsData} />
      </div>
      <div className="hide_headerTags">
        <div className="header_search">
          <input
            placeholder="Search..."
            style={{
              height: 35,
              width: "70%",
              outline: "none",
              borderRadius: "50%",
              border: "none",
            }}
            value={searchValue}
            onChange={onChange}
          />
          <img
            src={SearchIcon}
            alt="search_icons"
            style={{
              height: 20,
              width: 20,
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default CustomeHeader;
