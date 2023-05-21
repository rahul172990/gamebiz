import React from "react";

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
import { useNavigate } from "react-router";

const header_tags_array = [
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
];

const HeaderTags = ({ tagsData }) => {
  const navigate = useNavigate();

  return (
    <div className="header_tags_container">
      {tagsData?.map((tag, index) => {
        return (
          <div className="header_tags_div">
            <img
              src={header_tags_array[index]}
              alt={header_tags_array[index]}
              className="header_tags_icons"
              onClick={() => {
                navigate(`/tag/${tag?.title}`, {
                  state: {
                    data: tag?._id,
                    name: tag?.title,
                    description: tag?.description,
                  },
                });
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HeaderTags;
