import React from "react";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJquery,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiHeroku,
  SiLinkedin,
  SiSolidity,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      {" "}
      <h3>My Skills</h3>
      <ul className="skill_icons">
        <li className="skill_icon">
          <SiJavascript style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiJquery style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiReact style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiHtml5 style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiCss3 style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiBootstrap style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiNodedotjs style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiExpress style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiFirebase style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiMongodb style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiMysql style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiGit style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiGithub style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiHeroku style={{ margin: 15 }} />
        </li>
        <li className="skill_icon">
          <SiPostman style={{ margin: 15 }} />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
