import React, { useEffect } from "react";
import "./Home.css";

//imported images
import homeImage from "../../assets/homeImage.png";

//import Aos for animations and scroll reveal
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  //Lets initialize Aos and set  the default animation duration
  useEffect(() => {
    Aos.init({
      duration: 300000,
    });
  }, []);

  return (
    <div className="home">
      <div className="secContainer">
        <div data-aos="fade-up" className="homeText">
          <span className="homeSpan">Drive your dream car</span>
          <h1 className="homeTitle">Toyota GR Supra</h1>
          <div className="btns flex">
            <button data-aos="fade-right" className="btn">
              More Details
            </button>
            <button data-aos="fade-left" className="btn primaryBtn">
              Test Drive
            </button>
          </div>
        </div>
        <div data-aos="fade-down-right" className="homeImage">
          <img src={homeImage} alt="Home Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
