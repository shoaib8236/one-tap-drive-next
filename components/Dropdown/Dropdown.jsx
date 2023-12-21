"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { BiChevronDown } from "react-icons/bi";
import cl from "./dropdown.module.scss";

const Dropdown = (props) => {
  const {
    children,
    title = "Open me",
    btnClassName = "",
    contentClassName = "",
    className = "",
    position = null,
  } = props;

  const dropdownRef = useRef(null);
  const contentRef = useRef(null);

  const [open, setOpen] = useState(false);

  const onOpenDropdown = useCallback(() => {
    if (open) {
      contentRef.current.classList.add(cl.exit_animation);
      let timer = setTimeout(() => {
        contentRef.current.classList.remove(cl.exit_animation);
        setOpen(false);
      }, 200);
      return () => clearTimeout(timer);
    }
    setOpen(true);
  }, [open]);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (open) {
          contentRef.current.classList.add(cl.exit_animation);
          let timer = setTimeout(() => {
            contentRef.current.classList.remove(cl.exit_animation);
            setOpen(false);
          }, 200);
          return () => clearTimeout(timer);
        }
      }
    };

    if (dropdownRef.current) {
      document.addEventListener("mousedown", onClickOutside);
      return () => {
        document.removeEventListener("mousedown", onClickOutside);
      };
    }
  }, [open]);

  return (
    <div ref={dropdownRef} className={`${cl.wrapper} ${className}`}>
      <button
        onClick={onOpenDropdown}
        className={`${cl.action} ${btnClassName}`}
      >
        {title} <BiChevronDown className={`${open ? cl.rotate : cl.normal}`} />
      </button>

      {open && (
        <div
          ref={contentRef}
          className={`${cl.content} ${
            position === "right" ? cl.position_right : ""
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  btnClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  className: PropTypes.string,
  position: PropTypes.string,
};
