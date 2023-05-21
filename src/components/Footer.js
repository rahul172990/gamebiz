import React from "react";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer class="footer">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <div>
          <span
            onClick={() => {
              navigate("/about");
            }}
            className="footer_point"
          >
            About
          </span>{" "}
          | <span>Free Games For You</span>
        </div>

        <div>
          <span
            onClick={() => {
              navigate("/contact");
            }}
            className="footer_point"
          >
            Contact
          </span>{" "}
          |{" "}
          <span
            onClick={() => {
              navigate("/privacy");
            }}
            className="footer_point"
          >
            Privacy
          </span>{" "}
          | Gamebiz.com ©2023
        </div>
      </div>

      {/* <ul>
        <li>
          <a href="*">Terms & Condition</a>
        </li>
        <li>
          <a href="*">Privacy</a>
        </li>
        <li>
          <a href="*">Cookies Policy</a>
        </li>
      </ul> */}
    </footer>
  );
};

export default Footer;
