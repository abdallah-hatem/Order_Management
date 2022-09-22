import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import { GetFromLocalStorage } from "./Services/localStorageService";
import axios from "axios";



function App() {
  const { i18n } = useTranslation();
  if (i18n.language === "en-US") {
    i18n.init();
    document.documentElement.setAttribute("lang", "en");
    i18n.changeLanguage("en");
  }

  let navigate = useNavigate();



  const location = useLocation()
  const [currentRoute, setCurrentRoute] = useState("")
  useEffect(() => {
    setCurrentRoute(location.pathname)
  }, [location])


  useEffect(() => {
    if (!GetFromLocalStorage("user")) {
      navigate("/login")

    }
  }, []);

  const [hidden, setHidden] = useState(true)
  useEffect(() => {
    currentRoute !== "/login" ? setHidden(false) : setHidden(true)
  }, [currentRoute])

  return (
    <Layout hidden={hidden} />
  );
}

export default App;
