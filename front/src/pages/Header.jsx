import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/header.css";
import Sidebar from "../components/header/Sidebar.jsx";
import { useDispatch } from "react-redux";
import { getIsLogout } from "../modules/reduxMemberAxios.js";
import { getUser, removeUser } from "../util/localStorage";

export default function Header({ isHome }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = getUser();

  const [isTop, setIsTop] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    dispatch(getIsLogout());
    alert("로그아웃 되었습니다");
    removeUser();
    navigate("/");
  };

  useEffect(() => {
    const checkScrollPosition = () => {
      setIsTop(window.scrollY < 50);
    };

    if (isHome) {
      checkScrollPosition();
      window.addEventListener("scroll", checkScrollPosition);
      return () => {
        window.removeEventListener("scroll", checkScrollPosition);
      };
    } else {
      setIsTop(false);
    }
  }, [isHome]);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <div
        className={`header ${
          isHome && isTop ? "header-top" : "header-scrolled"
        }`}
      >
        <div className="header-menu" onClick={toggleDrawer(true)}>
          Shop
        </div>
        <div className="header-logo">
          <Link
            to="/"
            className={`${isHome && isTop ? "logo-top" : "logo-scrolled"}`}
          ></Link>
        </div>
        <div className="header-right-menu">
          {userInfo ? (
            <div>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to={"/login"}>Login</Link>
            </div>
          )}
          <div>
            <Link to={"/cart"}>Cart</Link>
          </div>
        </div>
        <div className="sidebar-open" style={{ display: "none" }}></div>
      </div>

      <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}
