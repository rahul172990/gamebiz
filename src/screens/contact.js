import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomeHeader from "../components/CustomeHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Contact = () => {
  const [termDescription, setTermDescription] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);

  const [value, setValue] = useState("");
  useEffect(() => {
    axios
      .get("http://144.126.253.65:3000/customer/get-settings?skip=0&limit=10")
      .then((res) => {
        setTermDescription(res?.data?.data?.[0]?.termDescription);
      })
      .catch((e) => console.log(e));
  }, []);

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
          <div
            style={{
              background: "white",
              padding: 50,
            }}
            dangerouslySetInnerHTML={{ __html: termDescription }}
          />
          <Footer />
        </div>
      </Layout>
    </>
  );
};

export default Contact;
