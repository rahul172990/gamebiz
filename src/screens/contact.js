import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomeHeader from "../components/CustomeHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Contact = () => {
  const [termDescription, setTermDescription] = useState(null);
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
      <CustomeHeader />
      <Layout>
        <div
          style={{
            background: "white",
            padding: 50,
          }}
          dangerouslySetInnerHTML={{ __html: termDescription }}
        />
      </Layout>
      <Footer />
    </>
  );
};

export default Contact;
