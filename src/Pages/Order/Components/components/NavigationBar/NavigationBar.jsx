import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RemoveFromLocalStorage } from "../../services/localStorageService";
import "./NavigationBar.css";
function NavigationBar() {
  let navigate = useNavigate();

  const [currentRoute, setCurrentRoute] = useState("");

  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    setCurrentRoute(location.pathname);
  }, [location]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log(i18n.language);
  }, [i18n.language]);
  const toggle = () => {
    document
      .getElementById("displayedlist")
      .classList.toggle("transition-list");
    document.getElementById("touch").classList.toggle("collapsed");
  };
  let pages = useRef([
    { name: "Items", route: "/items", Onclick: toggle },
    { name: "Orders", route: "/orders", Onclick: toggle },
    { name: "Production order", route: "/production-order", Onclick: toggle },
    {
      name: "Recipes",
      route: "/recipes",
      Onclick: toggle,
      // navigate("/login");
    },
    {
      name: "logout",
      route: "/login",
      Onclick: () => {
        toggle();
        RemoveFromLocalStorage("user");
        // navigate("/login");
      },
    },
  ]);
  return (
    <nav
      className={"   NavbarDraw "}
      style={{
        /*  position:
          screenSize.dynamicWidth < 1000 && getRoutes().route == "/"
            ? ""
            : screenSize.dynamicWidth > 1000
            ? "absolute"
            : "",*/
        // position: screenSize.dynamicWidth < 1000 ? "" : "absolute",
        //  opacity: screenSize.dynamicWidth < 1000 && getRoutes().route == "/" ? 1 : 0.6,
        backgroundColor: "transparent",
      }}
      id="mynav"
    >
      <div className="container">
        <div className="mainclass ">
          <div>
            <div className="Logo-size" style={{ cursor: "pointer" }}>
              <img
                onClick={() => navigate.push("/")}
                src={logo}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              onClick={() =>
                i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
              }
              className=" log-out-icon"
            >
              {t("lang")}
            </div>
            {window.location.pathname !== "/login" ? (
              <>
                <input
                  style={{ display: "none" }}
                  id="check02"
                  type="checkbox"
                  name="menu"
                />
                <div className="collabse-button" onClick={toggle}>
                  <button
                    className="navbar-toggler collapsed"
                    type="button"
                    id="touch"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <ul className="DropDownList2" id={"displayedlist"}>
          {pages.current.map((ele) => (
            <li
              onClick={ele?.Onclick}
              className={currentRoute === ele.route ? "active-page" : ""}
            >
              <Link to={ele.route}>{ele.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
