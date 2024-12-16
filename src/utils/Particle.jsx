import React from "react";
import "./particle.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const Stars = () => {
  return (
    <div className=" relative h-[100vh]  ring-offset-white overflow-hidden">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title" className="mt-10 md:mt-20">
        <h1 className=" text-7xl md:text-8xl lg:text-9xl">Adrian Enis</h1>
        <h3 className="text-6xl mt-5 md:text-7xl lg:text-8xl">Front end developer</h3>
        <div className=" flex justify-around text-7xl mt-8 md:w-[40%] mx-auto md:text-8xl ">
          <a href="#">
            <i className="bi bi-linkedin "></i>
          </a>
          <a href="#" className="">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stars;
