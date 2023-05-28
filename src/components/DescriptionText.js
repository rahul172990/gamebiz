import axios from "axios";
import React, { useEffect, useState } from "react";

const DescriptionText = ({ data }) => {
  const [settingsData, setSettings] = useState(null);

  useEffect(() => {
    axios
      .get("http://144.126.253.65:3000/customer/get-settings")
      .then((res) => setSettings(res?.data?.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="descriptionText">
      <div
        style={{
          background: "white",
          padding: 50,
          marginTop: 50,
        }}
        dangerouslySetInnerHTML={{
          __html: data,
        }}
      />
      {/* <p>{settingsData?.[0]?.homeDescription}</p> */}
    </div>
  );
};

export default DescriptionText;
