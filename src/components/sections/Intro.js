import React from 'react';

import profileImg from '../../assets/images/profile2.jpg';
const Intro = () => {
  return (
    <section className="intro" id="intro">
      <div className="profileImg">
        <img
          src={profileImg}
          alt="Profile"
          className='profileImg'
          // style={{
          //   height: 468,
          //   width: 360,
          //   border: 3,
          // }}
        />
      </div>
      <div className="inroText">
        <h1>Hi, I'm Linda.</h1>
        <h2>Full Stack Developer</h2>
        <p className="aboutMe">
          Welcome to my portfolio! So glad you are here. 
        </p>
        <p>
          I am a tech enthusiast with a diverse professional career. I have had the privilege collaborating with some amazing teams and I have also worked on solo projects. Whether it's breathing new life into e-commerce platforms, designing engaging mobile applications, or crafting eye-catching logos and branding materials, I approach each project with a commitment to excellence. My goal is to ensure that every piece of work not only aligns seamlessly with the client's brand and objectives but also leaves a lasting impression on their audience. These experiences have strengthened my adaptability, honed my attention to detail, and deepened my creative prowess, making me all the more eager to tackle exciting new challenges
        </p>
        <p>
        So, let's connect! Whether you have a project in mind or just want to chat about all things tech, I'm here. Together, we'll bring your digital dreams to life.
        </p>
      </div>
    </section>
  );
};

export default Intro;
