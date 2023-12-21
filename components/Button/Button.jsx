import React from "react";
import cl from "./Button.module.scss";

const Button = (props) => {
  const {
    theme = "",
    children,
    onClick = () => {},
    withIcon = false
  } = props;

  return (
    <button onClick={onClick} className={`${cl.theme_btn} ${cl[theme]} ${withIcon ? cl.with_icon : ''}`}>
      {children}
    </button>
  );
};

export default Button;
