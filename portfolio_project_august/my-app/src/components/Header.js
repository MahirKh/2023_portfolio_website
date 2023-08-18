import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import Mahir_Khandaker_Resume from "./MahirKhandaker_Resume_August2023.pdf";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Hi, I'm Mahir</h1>
        <p>
          Recent Biomedical and Electrical Engineering graduate from McMaster
          University with a passion for software development.
        </p>
        <Typed
          className="typed-text"
          strings={[
            "Software Development",
            "Web Development",
            "Object-Oriented Programming",
            "Embedded Software Development",
          ]}
          typeSpeed={30}
          backSpeed={20}
          loop
        />
        {/* <Link smooth={true} to="contacts" className="btn-main-offer" href="#">contact me</Link> */}
        <a
          className="btn-main-offer button"
          href={Mahir_Khandaker_Resume}
          download="Mahir_Khandaker_Resume"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
