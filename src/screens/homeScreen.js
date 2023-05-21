import { useEffect, useState } from "react";
import Header from "../components/Header";
import SwiperCore, { EffectFlip, Navigation, Pagination } from "swiper";
import Footer from "../components/Footer";
import { arr, arr2, arr3 } from "../dummyData/index";
import Slider from "react-slick";
import { useNavigate } from "react-router";
import DescriptionText from "../components/DescriptionText";
import axios from "axios";
import imageLogo from "../images/im.jpg";
import imageLogo2 from "../images/game_image.jpg";
import imageLogo3 from "../images/image_game2.jpg";
import CustomeHeader from "../components/CustomeHeader";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

import g1 from "../images/g1.png";
import g3 from "../images/g3.jpg";
import g4 from "../images/g4.jpg";
import g5 from "../images/g5.jpg";
import g6 from "../images/g6.jpg";
import g7 from "../images/g7.jpg";
import g8 from "../images/g8.jpg";
import g9 from "../images/g9.jpg";

const images_array = [g1, g3, g9, g5, g6, g7, g8, g4];

SwiperCore.use([EffectFlip, Navigation, Pagination]);
const HomeScreen = () => {
  const navigate = useNavigate();

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [tagsData, setTagsData] = useState(null);
  const [homeTags, setHomeTags] = useState(null);

  const [game, setGames] = useState(null);
  const [value, setValue] = useState("");
  const [gamesFiltered, setSearchedGames] = useState(null);

  const [settingsData, setSettings] = useState(null);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);

    axios
      .get("http://144.126.253.65:3000/customer/get-tags?skip=0")
      .then((res) => setTagsData(res?.data?.data))
      .catch((e) => console.log(e));

    axios
      .get("http://144.126.253.65:3000/customer/get-home-tags")
      .then((res) => setHomeTags(res?.data?.data))
      .catch((e) => console.log(e));

    axios
      .get("http://144.126.253.65:3000/customer/get-games?skip=0")
      .then((res) => setGames(res?.data?.data))
      .catch((e) => console.log(e));

    axios
      .get("http://144.126.253.65:3000/customer/get-settings")
      .then((res) => setSettings(res?.data?.data))
      .catch((e) => console.log(e));

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const getSlidesNumber = () => {
    if (windowSize?.[0] > 767 && windowSize?.[0] < 1001) {
      return 5;
    } else if (windowSize?.[0] > 1001 && windowSize?.[0] < 1300) {
      return 7;
    } else if (windowSize?.[0] > 500 && windowSize?.[0] < 767) {
      return 3;
    } else if (windowSize?.[0] < 500) {
      return 2;
    } else {
      return 9;
    }
  };

  console.log("homeTagshomeTags === ", homeTags);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

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
      />
      <Layout sidebar>
        <div className="App">
          {gamesFiltered?.length > 0 ? (
            <div class="gamelist">
              {gamesFiltered?.map((item) => {
                return (
                  <div
                    class="thumb-box"
                    onClick={() => {
                      navigate(`/game/${item?.title?.split(" ")?.join("-")}`, {
                        state: {
                          data: item,
                        },
                      });
                    }}
                  >
                    <img src={imageLogo2} alt="thumb" />
                    <div class="cart-title-main">
                      <h3 class="card-title">{item?.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              {homeTags?.[0]?.tags?.map((tag, index) => {
                return (
                  <div
                    style={{
                      marginTop: 10,
                    }}
                  >
                    <div
                      style={{
                        cursor: "pointer",
                        marginTop: 10,
                        marginBottom: 10,
                        display: "flex",
                        justifyContent: "space-between",
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
                      <span
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          marginRight: 20,
                        }}
                      >
                        {tag?.title}{" "}
                      </span>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: "bold",
                          color: "#F2EA15",
                        }}
                      >
                        View more
                      </span>
                    </div>
                    <div>
                      <Slider {...settings}>
                        {game
                          ?.filter((game, index) => {
                            return game?.primaryTag === tag?._id;
                          })
                          ?.map((item) => {
                            return (
                              <img
                                onClick={() => {
                                  navigate(
                                    `/game/${item?.title
                                      ?.split(" ")
                                      ?.join("-")}`,
                                    {
                                      state: {
                                        data: item,
                                      },
                                    }
                                  );
                                }}
                                className="fetaured_games_slider1"
                                src={images_array[index % 8]}
                                alt="dd"
                              />
                            );
                          })}
                      </Slider>
                    </div>
                  </div>
                );
              })}

              {/* <div
                style={{
                  background: "white",
                  padding: 50,
                  marginTop: 50,
                }}
                dangerouslySetInnerHTML={{
                  __html: settingsData?.[0]?.homeDescription,
                }}
              /> */}

              {/* <DescriptionText /> */}
              {/* <Footer /> */}
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

export default HomeScreen;
