"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    // This will only run on the client side
    setCurrentPath(window.location.pathname);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="container flex justify-between p-8">
      <nav>
        <ul className="flex gap-9">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className={`hover:text-accent transition-colors cursor-pointer font-medium relative ${
                  currentPath === item.path ? "text-accent" : ""
                }`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.name}
              </Link>
              {/* {(hoveredItem === index || currentPath === item.path) && (
                <div className="absolute -top-1 -left-2 bg-accent w-2 h-2"></div>
              )} */}
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <span>Email: </span>
        <a href="mailto:contact@steven.net" className="text-accent">
          contact@steven.net
        </a>
      </div>
    </header>
  );
};

export default Header;
