import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import Footer from "../components/Footer";
import imageLogo2 from "../images/thumb2.webp";
import Smallhumbnail from "../assets/Small_thumbnail.png";
import Up from "../assets/Thumb up.png";
import Down from "../assets/Thumb_down.png";
import GameLogo from "../assets/Logo.png";
import PlayButton from "../assets/Play_button.png";
import Thumbnail from "../assets/Thumbnail.png";
import Background_Image from "../images/dum_image.jpg";
import Iframe from "react-iframe";
import CustomeHeader from "../components/CustomeHeader";
import Layout from "../components/Layout";

import g1 from "../images/g1.png";
import g3 from "../images/g3.jpg";
import g4 from "../images/g4.jpg";
import g5 from "../images/g5.jpg";
import g6 from "../images/g6.jpg";
import g7 from "../images/g7.jpg";
import g8 from "../images/g8.jpg";
import g9 from "../images/g9.jpg";
import DescriptionText from "../components/DescriptionText";

const images_array = [g1, g3, g9, g5, g6, g7, g8, g4];

const GameDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [game, setGames] = useState(null);
  const [showIframe, setShowIframe] = useState(false);
  const gameRef = useRef(null);
  const [value, setValue] = useState("");
  const [gamesFiltered, setSearchedGames] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    axios
      .get("http://144.126.253.65:3000/customer/get-games?skip=0&limit=30")
      .then((res) => setGames(res?.data?.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (value?.length > 0) {
      axios
        .get(
          `http://144.126.253.65:3000/customer/get-games?skip=0&limit=10&search=${value}`
        )
        .then((res) => {
          setSearchedGames(res?.data?.data);
        })
        .catch((e) => console.log(e));
    } else {
      setSearchedGames([]);
    }
  }, [value]);

  return (
    <>
      <CustomeHeader
        searchValue={value}
        onChange={(e) => {
          setValue(e?.target?.value);
        }}
        onClick={() => {
          setOpenSidebar((pre) => !pre);
        }}
      />
      <Layout sidebar openSidebar={openSidebar}>
        <div className="App">
          {gamesFiltered?.length > 0 ? (
            <div className="gamelist">
              {gamesFiltered?.map((item) => {
                return (
                  <div
                    className="thumb-box222"
                    onClick={() => {
                      navigate(`/game/${item?.title?.split(" ")?.join("-")}`, {
                        state: {
                          data: item,
                        },
                      });
                    }}
                  >
                    <img src={imageLogo2} alt="thumb" />
                    <div className="cart-title-main">
                      <h3 className="card-title">{item?.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <div className="content-seaction">
                <div className="video-section">
                  <div className="left-section">
                    {showIframe ? (
                      <iframe
                        src={
                          location?.state?.data?.gameFile
                            ? location?.state?.data?.gameFile
                            : "https://html5.gamedistribution.com/7515a97275174b77ae426d512d8ea6ed/"
                        }
                        title="ff"
                        id="game_iframe"
                        allow="autoplay"
                        className="iframe_style"
                        allowfullscreen={true}
                      />
                    ) : (
                      <>
                        <div
                          className="iframe_style_12"
                          style={{
                            position: "relative",
                          }}
                        >
                          <div
                            className="iframe_style_1"
                            style={{
                              backgroundImage: `url(${Background_Image})`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              filter: `blur(2px)`,
                              opacity: 0.5,
                              position: "absolute",
                            }}
                          ></div>

                          <div
                            style={{
                              top: 50,
                              left: 0,
                              right: 0,
                              filter: `blur(0px)`,
                            }}
                          >
                            <div className="thumbnail_container">
                              <img
                                src={GameLogo}
                                alt="S"
                                className="detail_img_game"
                                style={{
                                  height: 80,
                                  opacity: 1,
                                  filter: `blur(0px)`,
                                }}
                              />
                            </div>
                            <div className="thumbnail_container1">
                              <img
                                src={Thumbnail}
                                alt="thumb"
                                style={{
                                  height: 120,
                                  width: 180,
                                  borderRadius: 10,
                                  opacity: 1,
                                  filter: `blur(0px)`,
                                }}
                              />
                              <img
                                src={PlayButton}
                                alt="play_button"
                                onClick={() => {
                                  gameRef?.current?.play();
                                  setShowIframe(true);
                                }}
                                style={{
                                  height: 40,
                                  width: 140,
                                  marginTop: 20,
                                  cursor: "pointer",
                                  opacity: 1,
                                  filter: `blur(0px)`,

                                  // top: 50,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="iframe_bottom">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={Smallhumbnail}
                          alt="iframe_thumb"
                          className="thumb_image"
                        />
                        <span
                          style={{
                            marginLeft: 15,
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          {location?.state?.data?.title}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: 20,
                          }}
                        >
                          <img src={Up} alt="up" height={25} width={25} />
                          <span
                            style={{
                              marginLeft: 10,
                              color: "black",
                              fontWeight: "bold",
                            }}
                          >
                            1258
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <img src={Down} alt="down" height={25} width={25} />
                          <span
                            style={{
                              marginLeft: 10,
                              color: "black",
                              fontWeight: "bold",
                            }}
                          >
                            49
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <button onClick={(ev) => {}}>click</button>

                  // <div className="right-section">
                  //   {game?.slice(0, 8)?.map((item) => {
                  //     return (
                  //       <div className="thumb-box">
                  //         <a href="#">
                  //           <img src={imageLogo2} alt="thumb" />
                  //           <div className="cart-title-main">
                  //             <h3 className="card-title">{item?.title}</h3>
                  //           </div>
                  //         </a>
                  //       </div>
                  //     );
                  //   })}
                  // </div> */}
                </div>

                {/* <div className="gamelist">
              {game?.map((item) => {
                return (
                  item?.primaryTag === location.state.data.primaryTag && (
                    <div className="thumb-box">
                      <a href="#">
                        <img src={imageLogo2} alt="thumb" />
                        <div className="cart-title-main">
                          <h3 className="card-title">{item?.title}</h3>
                        </div>
                      </a>
                    </div>
                  )
                );
              })}
            </div> */}

                <div className="gamelist12">
                  {game?.map((item, index) => {
                    return (
                      <div className="thumb-box">
                        <a href="#">
                          <img src={images_array[index % 5]} alt="thumb" />
                          <div className="cart-title-main">
                            <h3 className="card-title">{item?.title}</h3>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>

                <div className="content-text-section">
                  <p>{location?.state?.data?.metaDescription}</p>
                </div>
              </div>
            </>
          )}
          <DescriptionText />

          <Footer />
          <div
            style={{
              marginBottom: 10,
            }}
          />
        </div>
      </Layout>
    </>
  );
};

export default GameDetails;
