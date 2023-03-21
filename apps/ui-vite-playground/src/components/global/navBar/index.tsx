import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";

import { cssObj } from "./style.css";

export const NavBar = () => {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false);
  return (
    <nav>
      <div className={cssObj.container}>
        <h1 className={cssObj.heading}>DashBoard</h1>
        <div className={cssObj.iconContainer}>
          <button type="button" className={cssObj.iconButton}>
            <AiOutlineHome />
          </button>
          <button type="button" className={cssObj.iconButton}>
            <AiOutlineSearch />
          </button>
          <button type="button" className={cssObj.iconButton}>
            <GoThreeBars />
          </button>
        </div>
      </div>
    </nav>
  );
};
