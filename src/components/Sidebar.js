import React, { useEffect, useState } from "react";
import axios from "axios";

import Puzzle from "../assets/Puzzle_Icon1.png";
import Education from "../assets/Education_icon_top_bar.png";
import Car from "../assets/Car_Icon_top_bar.png";
import Bike from "../assets/Bike_icon.png";
import Gun from "../assets/Gun_Icon.png";
import GamePad from "../assets/Gamepad_icon.png";
import BasketBall from "../assets/Basketball_Icon.png";
import Girl from "../assets/Girl_icon.png";
import Ace from "../assets/Ace_card_icon.png";
import Kids from "../assets/Kids_Icon.png";
import Action from "../assets/Action_Icon.png";
import Adventure from "../assets/Adventure_Icon.png";
import Arcade from "../assets/Arcade_Icon.png";
import Board from "../assets/Board.png";
import Casino from "../assets/Casino_Icon.png";
import Casual from "../assets/Casual_Icon.png";
import Sports from "../assets/Sports_Icon.png";
import Random from "../assets/Random_icon.png";
import { useNavigate } from "react-router";

const sidebar_tags_icons = [
  Education,
  Bike,
  Gun,
  GamePad,
  Kids,
  Puzzle,
  Car,
  BasketBall,
  Ace,
  Girl,
  Action,
  Adventure,
  Arcade,
  Board,
  Casino,
  Casual,
  Sports,
  Random,
];

const Sidebar = ({ openSidebar }) => {
  const [tagsData, setTagsData] = useState();
  const navigate = useNavigate();

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    axios
      .get("http://144.126.253.65:3000/customer/get-tags")
      .then((res) => setTagsData(res?.data?.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      className="sidebar_style"
      style={{
        display: !openSidebar && windowSize?.[0] < 768 && "none",
      }}
    >
      <h3
        style={{
          marginLeft: 20,
          marginTop: -5,
        }}
      >
        CATEGORIES
      </h3>
      {tagsData?.map((tag, index) => {
        return (
          <div
            className="sidebar_tags_style"
            onClick={() => {
              navigate(`/tag/${tag?.title}`, {
                state: {
                  data: tag?._id,
                  name: tag?.title,
                  description: tag?.description,
                },
              });
            }}
          >
            <img
              src={sidebar_tags_icons[index % 18]}
              alt={tag?.title}
              style={{
                height: 20,
                width: 20,
                marginRight: 10,
              }}
            />
            <span
              style={{
                fontSize: 16,
              }}
            >
              {tag?.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
