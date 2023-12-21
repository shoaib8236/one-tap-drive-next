"use client";

import Image from "next/image";
import cl from "./header.module.scss";
import Dropdown from "../Dropdown/Dropdown";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const [isStick, setIsStick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = headerRef.current.offsetHeight;

      const scrollPosition = window.scrollY || window.pageYOffset;

      if (scrollPosition >= headerHeight && !isStick) {
        setIsStick(true);
      } else {
        setIsStick(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef]);

  return (
    <header ref={headerRef} className={`${cl.layout} ${isStick ? cl.stick : ''}`}>
      <div className={`content_wrap`}>
        <div className={cl.links_container}>
          <div className={cl.logo}>
            <Image
              height={26.09}
              width={180}
              src={"/logo.png"}
              layout="responsive"
            />
          </div>
          <ul className={cl.links}>
            <li className={cl.link_item}>
              <Dropdown title="Rent a car">
                <div className={cl.dropdown_links}>
                  <Dropdown position="right">
                    <div className={cl.dropdown_links}>
                      <Link href="/dubai"> Dubai </Link>
                      <Link href="/deep-sea-fishing"> Deep Sea Fishing </Link>
                      <Link href="/abu-dhabi"> Abu Dhabi </Link>
                    </div>
                  </Dropdown>
                </div>
              </Dropdown>
            </li>
            <li className={cl.link_item}>
              <Dropdown title="Car brand">
                <div className={cl.dropdown_links}>
                  <Dropdown position="right">
                    <div className={cl.dropdown_links}>
                      <Link href="/dubai"> Dubai </Link>
                      <Link href="/deep-sea-fishing"> Deep Sea Fishing </Link>
                      <Link href="/abu-dhabi"> Abu Dhabi </Link>
                    </div>
                  </Dropdown>
                </div>
              </Dropdown>
            </li>
            <li className={cl.link_item}>
              <Dropdown title="Car with driver">
                <div className={cl.dropdown_links}>
                  <Dropdown position="right">
                    <div className={cl.dropdown_links}>
                      <Link href="/dubai"> Dubai </Link>
                      <Link href="/deep-sea-fishing"> Deep Sea Fishing </Link>
                      <Link href="/abu-dhabi"> Abu Dhabi </Link>
                    </div>
                  </Dropdown>
                </div>
              </Dropdown>
            </li>
            <li className={cl.action}>
              <Link href={"/login"}>Login</Link>
              <Link href={"/signup"}>Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
