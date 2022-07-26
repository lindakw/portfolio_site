import React from "react";

import profileImg from "../../assets/images/profile2.jpg";
const Intro = () => {
  return (
    <section className="intro" id="intro">
      <div className="profileImg">
        <img
          src={profileImg}
          alt="Profile Image"
          style={{
            height: 260,
            width: 200,
            borderRadius: 100,
            border: 3,
          }}
        />
        <h1>Hi, hello, I'm Linda.</h1>
        <h2>Full Stack Software Engineer.</h2>
      </div>
    </section>
  );
};

export default Intro;
