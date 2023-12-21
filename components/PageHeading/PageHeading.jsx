"use client";

import React from "react";
import cl from "./PageHeading.module.scss";
import Fade from "react-reveal/Fade";

const PageHeading = (props) => {
  const { title = "", subtitle = "" } = props;

  return (
    <div className={cl.heading_wrap}>
      <Fade top cascade>
        <h2>{title}</h2>
      </Fade>
      <Fade bottom cascade>
        <p>{subtitle}</p>
      </Fade>
    </div>
  );
};

export default PageHeading;
