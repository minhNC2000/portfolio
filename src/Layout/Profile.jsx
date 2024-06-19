import React from "react";
import "../Assets/scss/Layout/profile.scss";

import "../Assets/scss/responsive.scss";

import avatar from "../Assets/images/avatar.jpg";
import fb from "../Assets/icon/fb.svg";
import zalo from "../Assets/icon/zalo.svg";
import tiktok from "../Assets/icon/TikTok.svg";
import github from "../Assets/icon/github.svg";
import { Drafts, FileDownload, PhoneIphone, Place } from "@mui/icons-material";
const Profile = () => {
  const handleDownload = () => {
    const link =
      "https://drive.google.com/file/d/1byaYV7M-tb3xNjnvDJWGDvfEksxWZShB/view?usp=sharing";

    // Create a new link element
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.download = "filename.ext"; // specify the download file name

    // Error handling
    a.onerror = function () {
      console.error("Failed to download the file.");
    };

    // Simulate a click on the link
    a.click();
  };

  return (
    <div className="profile">
      <img src={avatar} alt="avatar" className="avatar" />
      <h1>Nguyễn Công Minh </h1>
      <p>Intern Frontend</p>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/minh.nc.2000/"
          target="blank"
          rel="noreferrer"
        >
          <img src={fb} alt="facebook" />
        </a>
        <a href="https://zalo.me/0834262000" target="blank" rel="noreferrer">
          <img src={zalo} alt="zalo" />
        </a>
        <a
          href="https://www.tiktok.com/@minhnc2000"
          target="blank"
          rel="noreferrer"
        >
          <img src={tiktok} alt="tiktok" />
        </a>
        <a href="https://github.com/minhNC2000" target="blank" rel="noreferrer">
          <img src={github} alt="github" />
        </a>
      </div>
      <div className="info">
        <div className="phone">
          <div className="icon">
            <PhoneIphone />
          </div>
          <div className="info-content_wrap">
            <p>Phone</p>
            <a href="tel:0834262000">0834262000</a>
          </div>
        </div>
        <div className="line"></div>
        <div className="email">
          <div className="icon">
            <Drafts />
          </div>
          <div className="info-content_wrap">
            <p>Email</p>
            <a href="mailto:nguyencongminhm@gmail.com">
              nguyencongminhm@gmail.com
            </a>
          </div>
        </div>
        <div className="line"></div>
        <div className="location">
          <div className="icon">
            <Place />
          </div>
          <div className="info-content_wrap">
            <p>Location</p>
            <a
              href="https://www.google.com/maps/place/Ph%C3%BAc+T%C3%A2n,+Ho%C3%A0n+Ki%E1%BA%BFm,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0373552,105.8514637,16z/data=!3m1!4b1!4m6!3m5!1s0x3135abc6ea141745:0x9cee2bb9b2a0022!8m2!3d21.0372674!4d105.8569193!16s%2Fg%2F122qmlx4?entry=ttu"
              target="blank"
            >
              Phúc Tân, Hà Nội
            </a>
          </div>
        </div>
        <div className="line"></div>
        <button className="download" onClick={handleDownload}>
          <FileDownload />
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Profile;
