import React from "react"
import { useTranslation } from "react-i18next"
import "./style.css"
import Select from "react-select"

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
  textArea = false,
  chooseOptions = false,
  defaultValue,
  options = [],
  containerWidth,
  children = false,
  hideLabel = false,
  labelWidth = "100%",
  width = "100%",
  removeContainer = false,
}) {
  const { t, i18n } = useTranslation()

  return (
    <div
      className="children-cont"
      style={{
        direction: i18n.language === "en" ? "ltr" : "rtl",
        // width: width,
      }}
    >
      <div className={removeContainer ? "child-cont" : "squared-input-container"}>
        <label
          style={{
            textAlign: i18n.language === "ar" && "right",
            display: hideLabel && "none",
            maxWidth: labelWidth,
            minWidth: labelWidth,
            width: labelWidth,
          }}
          // id="domain-label"
        >
          {t(label)}
        </label>
        {textArea ? (
          <textarea
            className="textArea"
            onChange={handleChange}
            type={type}
            onBlur={onBlur}
            name={name}
            value={value}
            placeholder={t(placeholder)}
            id={id}
            disabled={disabled}
            onFocus={onFocus}
            style={{
              width: width,
              minHeight: "62px",
              whiteSpace: "pre-wrap",
            }}
          />
        ) : chooseOptions ? (
          <div
            className="options-cont"
            style={{
              textAlign: i18n.language === "ar" && "right",
              width: width,
            }}
          >
            <Select
              placeholder={t(placeholder)}
              options={options}
              name={name}
              defaultInputValue={defaultValue}
              onChange={(e) => handleChange({ target: { name, value: e.value } })}
            />
          </div>
        ) : children ? (
          <div
            className={removeContainer ? "" : "image-upload-cont"}
            style={{
              textAlign: i18n.language === "ar" && "right",
              width: width,
            }}
          >
            {children}
          </div>
        ) : (
          <input
            onChange={handleChange}
            type={type}
            onBlur={onBlur}
            name={name}
            value={value}
            placeholder={t(placeholder)}
            id={id}
            disabled={disabled}
            onFocus={onFocus}
            style={{
              width: width,
              backgroundColor: disabled && "#eeeeee",
            }}
          />
        )}
        {errorMessage ? <div className="error-text">{t(errorMessage)}</div> : null}
      </div>
    </div>
  )
}

export default React.memo(InputComponent)
