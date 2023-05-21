import React, { useEffect, useState } from "react";
import Logo from "../images/logo.png";
import FinalLogo from "../images/final_logo.png";

import MobileLogo from "../images/mobile-logo.png";

import RunImage from "../images/gg-removebg-preview.png";
import axios from "axios";
import { useNavigate } from "react-router";

const COLORS = ["#ffc01b", "#00d97b", "#00d0fd", "#e25151", "#9a3aad"];
const COLORS2 = ["#e25151", "#9a3aad", "#ffc01b", "#00d97b", "#00d0fd"];

const Header = ({ searchValue, onChange }) => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(1);
  const [tagsData, setTagsData] = useState(null);
  const [game, setGames] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get("http://144.126.253.65:3000/customer/get-tags?skip=0&limit=20")
      .then((res) => setTagsData(res?.data?.data))
      .catch((e) => console.log(e));

    axios
      .get("http://144.126.253.65:3000/customer/get-games?skip=0&limit=20")
      .then((res) => setGames(res?.data?.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <header className="main-header">
      <div className="mobile-logo-res">
        <img
          src={FinalLogo}
          alt="Logo"
          style={{
            height: 50,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      <div
        className="options_row1 hide_tags "
        style={{
          // display: "flex",
          // flexWrap: "wrap",
          marginLeft: "2%",
        }}
      >
        <div className="options-row1">
          {tagsData
            ?.filter((tag) => tag?.addToMenu)
            ?.slice(0, 6)
            ?.map((tag, index) => {
              return (
                index % 2 !== 0 && (
                  <div
                    className="option-list"
                    style={{
                      cursor: "pointer",
                    }}
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
                      src={RunImage}
                      style={{
                        color: "white",
                        height: 25,
                        width: 25,
                        marginLeft: -6,
                      }}
                      alt="icons"
                    />
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: 12,
                        color: COLORS[index % 5],
                        marginLeft: 5,
                      }}
                    >
                      {tag?.title}
                    </p>
                  </div>
                )
              );
            })}
        </div>
        <div className="options-row1">
          {tagsData
            ?.filter((tag) => tag?.addToMenu)
            ?.slice(6, 12)
            ?.map((tag, index) => {
              return (
                index % 2 !== 0 && (
                  <div
                    className="option-list"
                    style={{
                      cursor: "pointer",
                    }}
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
                      src={RunImage}
                      style={{
                        color: "white",
                        height: 25,
                        width: 25,
                        marginLeft: -6,
                      }}
                      alt="icons"
                    />
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: 12,
                        color: COLORS[index % 5],
                        marginLeft: 5,
                      }}
                    >
                      {tag?.title}
                    </p>
                  </div>
                )
              );
            })}
        </div>
      </div>

      <div>
        <img
          src={FinalLogo}
          alt="Logo"
          className="hide_on_mobile"
          style={{
            height: 80,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      {/* <div id="search" className="tabcontent">
            <form>
              <div className="search-form">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={onChange}
                />
              </div>
            </form>
          </div> */}

      {currentTab !== 3 && (
        <div
          className="options_row1 hide_tags"
          // style={{
          //   width: "40%",
          // }}
        >
          <div className="options-row1">
            {tagsData
              ?.filter((tag) => tag?.addToMenu)
              ?.slice(0, 6)
              ?.map((tag, index) => {
                return (
                  index % 2 === 0 && (
                    <div
                      className="option-list"
                      style={{
                        cursor: "pointer",
                      }}
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
                        src={RunImage}
                        style={{
                          color: "white",
                          height: 25,
                          width: 25,
                          marginLeft: -6,
                        }}
                        alt="icons"
                      />

                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 12,
                          color: COLORS2[index % 5],
                          marginLeft: 5,
                        }}
                      >
                        {tag?.title}
                      </p>
                    </div>
                  )
                );
              })}
          </div>

          <div className="options-row1">
            {tagsData
              ?.filter((tag) => tag?.addToMenu)
              ?.slice(6, 12)
              ?.map((tag, index) => {
                return (
                  index % 2 === 0 && (
                    <div
                      className="option-list"
                      style={{
                        cursor: "pointer",
                      }}
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
                        src={RunImage}
                        style={{
                          color: "white",
                          height: 25,
                          width: 25,
                          marginLeft: -6,
                        }}
                        alt="icons"
                      />

                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 12,
                          color: COLORS2[index % 5],
                          marginLeft: 5,
                        }}
                      >
                        {tag?.title}
                      </p>
                    </div>
                  )
                );
              })}
          </div>
        </div>
      )}

      {currentTab === 3 && (
        <div id="search" className="">
          <form>
            <div className="search-form">
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={onChange}
              />
            </div>
          </form>
        </div>
      )}

      <div id="search" className="hide_search_div">
        <form>
          <div className="search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={onChange}
            />
          </div>
        </form>
      </div>

      <div className="add-more-div">
        {currentTab !== 3 && (
          <button
            className="add-more-btn"
            onClick={() => {
              setCurrentTab(3);
            }}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="18"
              viewBox="0 0 995 1024"
            >
              <path
                fill="#fff"
                d="M813.593 460.991c0 196.967-156.72 357.158-349.247 357.158s-349.188-160.193-349.188-357.158c0-196.967 156.663-357.102 349.188-357.102s349.247 160.134 349.247 357.102zM966.499 935.363l-165.316-168.958c73.664-84.708 114.024-192.64 114.024-305.413 0-254.178-202.262-460.992-450.861-460.992-248.543 0-450.746 206.815-450.746 460.992 0 254.234 202.203 461.051 450.746 461.051 94.156 0 184.33-29.772 261.237-86.13l169.073 172.83c9.507 9.847 22.316 15.257 35.979 15.257 13.492 0 26.244-5.407 35.864-15.2 19.868-20.208 19.868-53.169 0-73.436z"
              ></path>
            </svg>
          </button>
        )}

        {currentTab === 3 && (
          <button className="add-more-btn" onClick={() => setCurrentTab(1)}>
            <span
              style={{
                fontSize: 22,
                color: "white",
              }}
            >
              X
            </span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
