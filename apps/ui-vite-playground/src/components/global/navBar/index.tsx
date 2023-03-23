import { AiOutlineHome, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";

import { cssObj } from "./style.css";

export const NavBar = () => {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav>
      <div className={cssObj.container}>
        <h1 className={cssObj.heading}>DashBoard</h1>
        <div className={cssObj.iconContainer}>
          <button type="button" className={cssObj.iconButton}>
            <AiOutlineHome />
          </button>

          <input className={isSearchOpen ? cssObj.searchBoxClosed : cssObj.searchBoxOpened} />
          <button
            type="button"
            className={cssObj.iconButton}
            onClick={() => {
              setIsSearchOpen((prevValue) => !prevValue);
            }}
          >
            {isSearchOpen ? <AiOutlineSearch /> : <AiOutlineClose />}
          </button>
          <button
            type="button"
            className={cssObj.iconButton}
            onClick={() => {
              setIsDropBoxOpen((prevValue) => !prevValue);
            }}
          >
            <GoThreeBars />
          </button>
        </div>
      </div>
    </nav>
  );
};
