import { AiOutlineHome, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { useEffect, useRef, useState } from "react";

import { cssObj, searchBoxOpened, searchBoxClosed } from "./style.css";
import { CAR_ARR } from "./constant";

export const NavBar = () => {
  const [search, setSearch] = useState("");

  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false);
  const [isTirgerred, setIsTriggered] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchAnimation, setIsSearchAnimation] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTirgerred) {
      setIsSearchOpen(true);
      setIsSearchAnimation(true);
      return;
    }
    setIsSearchAnimation(false);
    timer = setTimeout(() => setIsSearchOpen(false), 400);
    return () => {
      clearTimeout(timer);
    };
  }, [isTirgerred]);

  const filteredCars = CAR_ARR.filter((car) => search.length && car.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <nav className={cssObj.wrapper}>
      <h1 className={cssObj.heading}>DashBoard</h1>
      <div className={cssObj.inputContainer}>
        <div className={cssObj.container}>
          <div className={cssObj.testContainer}>
            <button
              type="button"
              className={cssObj.iconButton}
              onClick={() => {
                setIsTriggered((prevValue) => !prevValue);
              }}
            >
              {isSearchAnimation ? <AiOutlineClose /> : <AiOutlineSearch />}
            </button>
            {(isSearchOpen || isSearchAnimation) && (
              <div className={isSearchAnimation ? searchBoxOpened : searchBoxClosed}>
                <input
                  className={cssObj.inputBox}
                  placeholder="입력하세요"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                {Boolean(filteredCars.length) &&
                  filteredCars?.map((car, index) => index < 3 && <button key={car.name}>{car.name}</button>)}
              </div>
            )}
          </div>
        </div>
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
    </nav>
  );
};
