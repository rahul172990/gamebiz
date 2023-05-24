import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import CustomeHeader from "../components/CustomeHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import imageLogo2 from "../images/game_image.jpg";
import ReactPaginate from "react-paginate";

import g1 from "../images/g1.png";
import g3 from "../images/g3.jpg";
import g4 from "../images/g4.jpg";
import g5 from "../images/g5.jpg";
import g6 from "../images/g6.jpg";
import g7 from "../images/g7.jpg";
import g8 from "../images/g8.jpg";
import g9 from "../images/g9.jpg";
import DescriptionText from "../components/DescriptionText";
import { Pagination, Stack, TablePagination } from "@mui/material";

const images_array = [g1, g3, g9, g5, g6, g7, g8, g4];

const GamesByTag = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [tagData, setTagData] = useState(null);
  const [game, setGames] = useState(null);
  const [totalGamesCount, setTotalGamesCount] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);

  const [limit, setLimit] = useState(10);
  const [value, setValue] = useState("");
  const [gamesFiltered, setSearchedGames] = useState(null);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (newPage) => {
    console.log("ppppppp === ", newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event?.target?.value, 10));
    setPage(0);
  };

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://144.126.253.65:3000/customer/get-games-by-tag/${
  //         location?.state?.data
  //       }?skip=${10 * page}&limit=10`
  //     )
  //     .then((res) => {
  //       setData(res?.data?.data);
  //     })
  //     .catch((e) => console.log(e));
  // }, [page]);

  useEffect(() => {
    axios
      .get(
        `http://144.126.253.65:3000/customer/get-games-by-tag/${location?.state?.data}`
      )
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((e) => console.log(e));

    axios
      .get(
        `http://144.126.253.65:3000/customer/get-tags/${location?.state?.data}`
      )
      .then((res) => {
        setTagData(res?.data?.data);
      })
      .catch((e) => console.log(e));

    axios
      .get(
        `http://144.126.253.65:3000/customer/get-games?skip=0&limit=${limit}`
      )
      .then((res) => {
        setGames(res?.data?.data);
        setTotalGamesCount(res?.data?.totalCount);
      })
      .catch((e) => console.log(e));
  }, [location?.state?.data]);

  useEffect(() => {
    if (value?.length > 0) {
      axios
        .get(
          `http://144.126.253.65:3000/customer/get-games?skip=0&limit=${limit}&search=${value}`
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
              <div>
                <h1
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 20,
                  }}
                >
                  {location?.state?.name} on Gamebiz.com
                </h1>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {data?.map((game, index) => {
                    return (
                      <>
                        <div
                          className="games-list-tag"
                          // style={{
                          //   backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Lt8KybgRoo0iTYG-lGrea5GLEXaT0Jrqaxr57mybw&usqp=CAU&ec=48665699")`,
                          // }}
                          onClick={() => {
                            navigate(
                              `/game/${game?.title?.split(" ")?.join("-")}`,
                              {
                                state: {
                                  data: game,
                                },
                              }
                            );
                          }}
                        >
                          <img
                            src={images_array[index % 5]}
                            alt="gg"
                            style={{
                              height: "100%",
                              width: "100%",
                              borderRadius: 10,
                            }}
                          />
                          {/* {game?.title} */}
                        </div>
                      </>
                    );
                  })}
                </div>

                <div></div>
              </div>

              {/* <div
                style={{
                  background: "white",
                  padding: 50,
                  marginTop: 50,
                }}
                dangerouslySetInnerHTML={{ __html: tagData?.description }}
              /> */}

              {/* <TablePagination
                component="div"
                count={data?.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}

              <DescriptionText />

              <Footer />
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default GamesByTag;
