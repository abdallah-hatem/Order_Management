import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ActionsButtons({ buttons = [], style }) {
  const { t } = useTranslation();

  return (
    <div style={style}>
      {buttons.map((el) => (
        <Link
          to={el.path || ""}
          className={el.class}
          style={{ margin: 5 }}
          onClick={el.handleClick}
        >
          <i class={el.iconClass}> </i>
          {t(el.title)}
        </Link>

        // <a href={el.path} className={el.class} style={{ margin: 5 }}>
        //   <i class={el.iconClass}> </i>
        //   {t(el.title)}
        // </a>
      ))}
    </div>
  );
}

export default ActionsButtons;
