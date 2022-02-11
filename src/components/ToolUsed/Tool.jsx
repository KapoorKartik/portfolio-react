import { stackList } from "../../data/ProjectData";
import { ContactWrapper } from "../Contact/ContactElements";
import { Tech, TechImg, TechName, Technologies } from "./ToolElement";

export const Tool = () => {
  return (
    <>
      <ContactWrapper>
        <div id="skill">
          <div className="ToolCard Container">
            <div className="SectionTitle">Skills</div>
            <Technologies>
              {stackList.map((stack, index) => (
                <Tech key={index} className="tech">
                  <TechImg src={stack.img} alt={stack.name} />
                  <TechName>{stack.name}</TechName>
                </Tech>
              ))}
            </Technologies>
          </div>
        </div>
      </ContactWrapper>
    </>
  );
};
