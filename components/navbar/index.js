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
    // sets window height so we are able to see how much the website is scrolled
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    // just some classic scroll event handling
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // if the window was scrolled more then 5px and it wasnt scrolled more then 5px before it adds the scrolled class to the navbar
  if (clientWindowHeight > 5 && navbarDynamicClass !== "scrolled") {
    setNavbarDynamicClass("scrolled");

    // if it wasnt wasnt scrolled more then 5px but it has the scrolled class it removes the class
  } else if (clientWindowHeight <= 5 && navbarDynamicClass === "scrolled") {
    setNavbarDynamicClass("");
  }

  return (
    <nav className={navbarDynamicClass}>
      <div className="navbar-left_container">
        {/* Netflix Logo */}
        <Image alt="Netflix Logo" src={Logo} width={92.5} height={25} />
        <ul className="navbar-links">
          {/* Navbar Links */}
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
        {/* Search Icon (functionality may be added in future versions) */}
        <Icon icon="ph:magnifying-glass-bold" color="white" fontSize={24} />
        {/* Netflix For Kids Link (not a real path for now) */}
        <Link href="/Kids">
          <a className="navbar-link_alwaysActive">Kids</a>
        </Link>
        {/* Notifications Button (functionality may be added in future versions) */}
        <Icon icon="ep:bell-filled" color="white" fontSize={24} />
        {/* Profile (functionality may be added in future versions) */}
        <div className="profile-container">
          <Image
            alt="Profile Image"
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
