import React, { useContext } from "react";
import "./Works.css";
import iitpatna from "../../src/assets/images/iitpatna.png";
import IITJammu from "../../src/assets/images/IITJammu.png";
import BECIL from "../../src/assets/images/BECIL.png";
import IITH from "../../src/assets/images/IITH.png";
import SynergyLogo from "../../src/assets/images/SynergyLogo.png";

// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  //   const theme = useContext(themeContext);
  //   const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <h1 className="text-xl not-italic font-bold leading-9 font-heebo title-font sm:text-xl text-center text-white my-10">
            <span className="font-heebo text-primary text-xl sm:text-[40px] text-white">
              Research & &nbsp;
              <span className=" border-secondary text-red-500  ">
                Development <br />
              </span>
              <span className="text-white pt-4"> Partnership </span>
            </span>
          </h1>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 90 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={BECIL} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={IITJammu} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={SynergyLogo} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={IITH} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={iitpatna} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
