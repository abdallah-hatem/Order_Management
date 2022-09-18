// import React from "react";
// import { useTranslation } from "react-i18next";
// import ButtonComponent from "../ButtonComponent/ButtonComponent";
// import DateInput from "../DateInput/DateInput";
// import FormComponent from "../FormComponent/FormComponent";
// import InputComponent from "../InputComponent/InputComponent";

// function SearchBar({
//   handleChange,
//   children,
//   handleSubmit,
//   data = [],
//   listView = false,
//   showButton = true,
//   buttonTitle = "Search",
//   buttonWidth = "100px",
//   colWidth = "8",
//   width,
//   containerWidth,
//   labelWidth,
//   dateData = [],
//   startDate,
//   endDate,
//   setValidDate,
//   values,
//   title,
//   hideCard = true,
//   hideHeader,
//   CardTitle,
//   hideDays,
// }) {
//   const { t } = useTranslation();

//   return (
//     <FormComponent
//       title={CardTitle}
//       hideCard={hideCard}
//       hideHeader={hideHeader}
//     >
//       {title && (
//         <h3
//           className="m-0 mt-5"
//           style={{ textAlign: "center", fontSize: "22px" }}
//         >
//           {t(title)}
//         </h3>
//       )}

//       <div
//         className={
//           !listView
//             ? `d-flex ${
//                 data.length === 1 && !dateData ? "" : "justify-content-between"
//               } align-items-center flex-wrap`
//             : `col-lg-${colWidth}`
//         }
//       >
//         {data.map((el) => (
//           <InputComponent
//             label={t(el.label)}
//             hideLabel={el.hideLabel}
//             placeholder={t(el.placeholder)}
//             chooseOptions={el.chooseOptions}
//             textArea={el.textArea}
//             options={el.options}
//             type={el.type}
//             handleChange={el.handleChange}
//             // width={!listView && width}
//             // width={width}
//             name={el.name}
//             value={el.value}
//             disabled={el.disabled}
//             labelWidth={el.labelWidth || labelWidth}
//             // labelWidth={"100%"}
//             containerWidth={containerWidth}
//             children={el.children}
//             removeContainer={el.removeContainer}
//             width={width}
//           />
//         ))}

//         {dateData.length > 0 &&
//           dateData.map((el, index) => (
//             <InputComponent
//               labelWidth={labelWidth}
//               hideLabel={el.hideLabel}
//               width={width}
//               containerWidth={containerWidth}
//               label={el.label}
//             >
//               <DateInput
//                 hideDays={hideDays}
//                 dateData={[dateData[index]]}
//                 startDate={startDate}
//                 endDate={endDate}
//                 values={values}
//                 setValidDate={setValidDate}
//               />
//             </InputComponent>
//           ))}

//         {children}

//         {showButton && (
//           <ButtonComponent
//             style={{
//               width: buttonWidth,
//               float: listView && "right",
//               marginLeft: data.length === 1 && 15,
//             }}
//             onClick={handleSubmit}
//             title={t(buttonTitle)}
//           />
//         )}
//       </div>
//     </FormComponent>
//   );
// }

// export default SearchBar;
import React from "react"
import { useTranslation } from "react-i18next"
import ButtonComponent from "../ButtonComponent/ButtonComponent"
import DateInput from "../DateInput/DateInput"
import FormComponent from "../FormComponent/FormComponent"
import InputComponent from "../InputComponent/InputComponent"


function SearchBar({
  handleChange,
  children,
  handleSubmit,
  data = [],
  listView = false,
  showButton = true,
  buttonTitle = "Search",
  buttonWidth = "100px",
  colWidth = "8",
  width,
  containerWidth,
  labelWidth,
  dateData = [],
  startDate,
  endDate,
  setValidDate,
  values,
  title,
  hideCard = true,
  hideHeader,
  CardTitle,
  hideDays,
}) {
  const { t } = useTranslation()

  return (
    <FormComponent title={CardTitle} hideCard={hideCard} hideHeader={hideHeader}>
      {title && (
        <h3 className="m-0 mt-5" style={{ textAlign: "center", fontSize: "22px" }}>
          {t(title)}
        </h3>
      )}

      <div
        className={
          !listView
            ? `d-flex ${
                data.length === 1 && !dateData ? "" : "justify-content-between"
              } align-items-center flex-wrap`
            : `col-lg-${colWidth}`
        }
      >
        {data.map((el) => (
          <InputComponent
            label={t(el.label)}
            hideLabel={el.hideLabel}
            placeholder={t(el.placeholder)}
            chooseOptions={el.chooseOptions}
            textArea={el.textArea}
            options={el.options}
            type={el.type}
            handleChange={el.handleChange}
            // width={!listView && width}
            // width={width}
            name={el.name}
            value={el.value}
            disabled={el.disabled}
            labelWidth={el.labelWidth || labelWidth}
            // labelWidth={"100%"}
            containerWidth={containerWidth}
            children={el.children}
            removeContainer={el.removeContainer}
            width={width}
          />
        ))}

        {dateData.length > 0 &&
          dateData.map((el, index) => (
            <InputComponent
              labelWidth={labelWidth}
              hideLabel={el.hideLabel}
              width={width}
              containerWidth={containerWidth}
              label={el.label}
            >
              <DateInput
                hideDays={hideDays}
                dateData={[dateData[index]]}
                startDate={startDate}
                endDate={endDate}
                values={values}
                setValidDate={setValidDate}
              />
            </InputComponent>
          ))}

        {children}

        {showButton && (
          <ButtonComponent
            style={{
              width: buttonWidth,
              float: listView && "right",
              marginLeft: data.length === 1 && 15,
            }}
            onClick={handleSubmit}
            title={t(buttonTitle)}
          />
        )}
      </div>
    </FormComponent>
  )
}

export default SearchBar
