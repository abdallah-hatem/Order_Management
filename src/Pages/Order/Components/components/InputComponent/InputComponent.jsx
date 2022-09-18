import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
function InputComponent({
  label,
  name,
  value,
  type = "text",
  handleChange,
  required,
  errorMessage = "",
  onBlur,
  placeholder,
  id,
  disabled = false,
  onFocus,
}) {
  const { t, i18n } = useTranslation();

  return (
    <div
    // style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
    >
      <div
        className="squared-input-container"
        style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
      >
        <label style={{ padding: "10px" }} id="domain-label">
          {t(label)}
        </label>
        <input
          onChange={handleChange}
          type={type}
          onBlur={onBlur}
          name={name}
          value={value}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          onFocus={onFocus}
        />

        {errorMessage ? (
          <div className="error-text">{t(errorMessage)}</div>
        ) : null}
      </div>
    </div>
  );
}

export default InputComponent;
