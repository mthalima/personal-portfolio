import React from "react";
import Headline from "../components/Headline";

import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="headline">
          <h2>
            Hello there!
            <br />
            I'm <span className="meunome">Matheus</span>,<br />
            <p>
              <Headline />
            </p>
          </h2>
        </div>
        <div className="prompt"></div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="skillLine"></div>
        <ol className="list">
          <li className="item">
            <h2>Web Front-end</h2>
            <span>
              Html | CSS | ReactJS | Redux | Tailwind | MaterialUI |
              StyledComponents
            </span>
          </li>

          <li className="item">
            <h2>Mobile</h2>
            <span>React Native | Redux | Expo | Axios | React Navigation</span>
          </li>

          <li className="item">
            <h2>Back-end</h2>
            <span>Laravel | Mysql | NodeJS</span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>Javascript | Typescript | Python | PHP</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
