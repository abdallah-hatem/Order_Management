import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
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

  useEffect(() => {
    if (!GetFromLocalStorage("user")) {
      navigate("/login")
    }

    // console.log(GetFromLocalStorage("user"));
  }, []);

  return (
    <Layout />
  );
}

export default App;
