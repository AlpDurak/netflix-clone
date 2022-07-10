import Image from "next/image";
import Link from "next/link";

import Logo from "/assets/netflix-logo.png";
import Avatar from "/assets/avatar-1.png";

import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [navbarDynamicClass, setNavbarDynamicClass] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  if (clientWindowHeight > 5 && navbarDynamicClass !== "scrolled") {
    setNavbarDynamicClass("scrolled");
  } else if (clientWindowHeight <= 5 && navbarDynamicClass === "scrolled") {
    setNavbarDynamicClass("");
  }

  return (
    <nav className={navbarDynamicClass}>
      <div className="navbar-left_container">
        <Image src={Logo} width={92.5} height={25} />
        <ul className="navbar-links">
          <li className="navbar-link active">
            <Link href="/browse">
              <a>Home</a>
            </Link>
          </li>
          <li className="navbar-link">
            <Link href="/browse/genre/83">
              <a>TV Shows</a>
            </Link>
          </li>
          <li className="navbar-link">
            <Link href="/browse/genre/34399">
              <a>Movies</a>
            </Link>
          </li>
          <li className="navbar-link">
            <Link href="/latest">
              <a>New & Popular</a>
            </Link>
          </li>
          <li className="navbar-link">
            <Link href="/browse/my-list">
              <a>My List</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right_container">
        <Icon icon="ph:magnifying-glass-bold" color="white" fontSize={24} />
        <Link href="/Kids">
          <a className="navbar-link_alwaysActive">Kids</a>
        </Link>
        <Icon icon="ep:bell-filled" color="white" fontSize={24} />
        <div className="profile-container">
          <Image
            className="profile-image"
            src={Avatar}
            width={32}
            height={32}
          />
          <Icon icon="octicon:triangle-down-16" color="white" fontSize={20} />
        </div>
      </div>
    </nav>
  );
}
