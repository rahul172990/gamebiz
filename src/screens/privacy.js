import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomeHeader from "../components/CustomeHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Privacy = () => {
  const [privacyDescription, setPrivacyDescription] = useState(null);
  useEffect(() => {
    axios
      .get("http://144.126.253.65:3000/customer/get-settings?skip=0&limit=10")
      .then((res) => {
        setPrivacyDescription(res?.data?.data?.[0]?.privacyDescription);
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
          dangerouslySetInnerHTML={{ __html: privacyDescription }}
        />
        <Footer />
      </Layout>
    </>
  );
};

export default Privacy;
