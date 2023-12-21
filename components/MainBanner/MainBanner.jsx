"use client";
import React from "react";

import cl from "./MainBanner.module.scss";
import Button from "../Button/Button";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const MainBanner = (props) => {
  return (
    <>
      <div className={cl.wrapper}>
        <div className={cl.content}>
          <h1>
            <Flip left cascade>
              Rent a Car in <span className={cl.primary}>Dubai.</span>
            
            </Flip>
          </h1>
          <Fade>
            <p>
              Explore our wide range of rental cars in Dubai and experience the
              luxury and convenience.
            </p>
          </Fade>
          <div className={cl.search}>
            <input placeholder="Search here..." type="text" /> <Button>Search</Button>
          </div>
        </div>
      </div>
      <div className={cl.services}>
        <div className={cl.item}>
          <Flip left cascade>
            <h2>VARIETY OF CARS</h2>
          </Flip>
          <Fade top>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              diam eiusmod tempor magna aliqua sed ut enim ad minim veniam, quis
              nostrud.
            </p>
          </Fade>
          <Button theme="light_primary">Learn more</Button>
        </div>
        <div className={cl.item}>
          <Flip left cascade>
            <h2>VARIETY OF CARS</h2>
          </Flip>

          <Fade top>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              diam eiusmod tempor magna aliqua sed ut enim ad minim veniam, quis
              nostrud.
            </p>
          </Fade>
          <Button theme="light_primary">Learn more</Button>
        </div>
        <div className={cl.item}>
          <Flip left cascade>
            <h2>VARIETY OF CARS</h2>
          </Flip>
          <Fade top>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              diam eiusmod tempor magna aliqua sed ut enim ad minim veniam, quis
              nostrud.
            </p>
          </Fade>
          <Button theme="light_primary">Learn more</Button>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
