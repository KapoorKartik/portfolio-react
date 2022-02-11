import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown.jsx";
import Header from "../Header/Header.jsx";
import p from "../../Assets/p.png";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
  HeroName,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>
              Hello, I'm <br /> <span>Kartik Kapoor</span>
            </h1>
            <h5>Full Stack Web Developer</h5>
            <p>
              Ready for more challenging projects. I'm looking forward to
              getting started with building my career in a company where I can
              make positive impact with my skills and knowledge.
            </p>
          </HeroLeft>

          <HeroRight>
            <Image src={p} alt="man-svgrepo" />
          </HeroRight>
          <HeroName>
            <h1>
              Hello, I'm <br /> <span>Kartik Kapoor</span>
            </h1>
          </HeroName>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
