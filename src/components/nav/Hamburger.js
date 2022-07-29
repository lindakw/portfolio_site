import React from "react";

function Hamburger() {
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>

      <style jsx>{`
        .hamburger {
          width: 2rem;
          height: 2rem;
          display: flex;
          justify-content: space-around;
          flex-flow: column nowrap;
          z-index: 10;
          display: none;
          margin-top: 15px;
        }

        .burger {
          width: 2rem;
          height: 0.5rem;
          margin-bottom: 2px;
          border-radius: 10px;
          background-color: black;
          transform-origin: 1px;
          transition: all 0.3s linear;
        }

        @media screen and (max-width: 767px) {
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </>
  );
}

export default Hamburger;
