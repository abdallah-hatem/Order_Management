// import React, { useCallback, useEffect, useRef, useState } from "react"
// import { useTranslation } from "react-i18next"
// import AddFormComponent from "../../Web Components/AddFormComponent/AddFormComponent"
// import FormComponent from "../../Web Components/FormComponent/FormComponent"
// import { ImageUploader } from "../../Web Components/ImageUploader/ImageUploader"
// import CheckboxGroup from "react-checkbox-group"
// import { useParams } from "react-router-dom"
// import { GET_PRODUCTS_COLORS, GET_PRODUCT_BY_ID } from "./Api"
// import { GET_CATEGORY } from "../Categories/Api"
// import { GET_UNITS } from "../Units/Api"

// function ProductDetails() {
//   // const defaultValues = useRef({
//   //   item_name: "",
//   //   SN: "",
//   //   model: "",
//   //   unit: "",
//   //   category: "",
//   //   price: "",
//   //   type: "",
//   //   VAT: "",
//   //   Barcode: "",
//   //   image: "",
//   //   igt: "",
//   //   Details: "",
//   //   image_path: "",
//   //   // color: "#37a000",
//   //   color_name: "",
//   //   // color_details: "",
//   //   sizes: [],
//   // })

//   const [values, setValues] = useState({})
//   const [sizes, setSizes] = useState([])
//   console.log(sizes)

//   const { id } = useParams()

//   useEffect(() => {
//     GET_PRODUCT_BY_ID(id).then((data) => setValues(data[0]))
//     GET_PRODUCTS_COLORS(id).then((data) => console.log(data, "COLORS"))

//     // GET_PRODUCT_BY_ID(id).then((data) => console.log(data))
//   }, [])

//   const handleChange = useCallback((e) => {
//     setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
//   }, [])

//   useEffect(() => {
//     setValues((prev) => ({ ...prev, item_sizes: sizes }))
//   }, [sizes])

//   function handleSubmit(e) {
//     // for (const [key, value] of Object.entries(values)) {
//     //   if (!value) {
//     //     alert(t("Fill the inputs"))
//     //   }
//     // }
//     // UPDATE_PRODUCT(id, values)
//   }

//   const { t, i18n } = useTranslation()

//   const [units, setUnits] = useState()
//   const [categories, setCategories] = useState()

//   // Get Units
//   useEffect(() => {
//     GET_UNITS().then((data) => setUnits(data))
//   }, [])

//   // Get Categories
//   useEffect(() => {
//     GET_CATEGORY().then((data) => setCategories(data))
//   }, [])

//   const categoryOptions = categories?.map((el) => ({ label: el.Name, value: el.id }))

//   const unitOptions = units?.map((el) => ({ label: el.Name, value: el.id }))

//   const typeOptions = [
//     {
//       label: t("Raw Materials"),
//       value: "Raw Materials",
//     },
//     {
//       label: t("Semi-raw Materials"),
//       value: "Semi-raw Materials",
//     },
//     {
//       label: t("Final Product"),
//       value: "Final Product",
//     },
//   ]

//   const sizeValues = [
//     { name: "xxl", label: "XXLarge", value: values.xxl },
//     { name: "xl", label: "XLarge", value: values.xl },
//     { name: "l", label: "Large", value: values.l },
//     { name: "m", label: "Medium", value: values.m },
//     { name: "s", label: "Small", value: values.s },
//   ]

//   const DataCol1 = [
//     {
//       label: "Product Name :",
//       placeholder: "Product Name",
//       handleChange,
//       name: "item_name",
//       value: values["item_name"],
//     },
//     {
//       label: "Model :",
//       placeholder: "Model",
//       handleChange,
//       name: "model",
//       value: values["model"],
//     },
//     {
//       label: "Sale Price :",
//       placeholder: "Sale Price",
//       handleChange,
//       name: "price",
//       value: values["price"],
//     },
//     // {
//     //   removeContainer: true,
//     //   component: (
//     //     <img
//     //       style={{ height: 180, width: 180 }}
//     //       src="https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//     //       alt="pic"
//     //     ></img>
//     //   ),
//     // },
//     // {
//     //   label: "Image :",
//     //   // placeholder: "Image",
//     //   handleChange: handleChange,
//     //   name: "image",
//     //   value: values["image"],
//     //   component: <ImageUploader />,
//     // },
//     // {
//     //   label: "IGT :",
//     //   placeholder: "IGT",
//     //   handleChange: handleChange,
//     //   name: "igt",
//     //   value: values["igt"],
//     // },
//     {
//       label: "Barcode / QR-code :",
//       placeholder: "Barcode",
//       name: "Barcode",
//       value: values["Barcode"],
//       handleChange: handleChange,
//     },
//     {
//       label: "Sizes :",
//       handleChange: handleChange,
//       removeContainer: true,
//       component: (
//         <div className="border p-2 rounded">
//           <CheckboxGroup name="sizes" value={sizes} onChange={setSizes}>
//             {(Checkbox) => (
//               <div className="d-flex justify-content-between flex-wrap">
//                 {sizeValues.map((el) => (
//                   <label style={{ minWidth: "100px", cursor: "pointer" }}>
//                     <Checkbox value={el.value} /> {el.label}
//                     {/* <input
//                       type="checkbox"
//                       name={el.name}
//                       defaultChecked={el.value}
//                       value={el.value}
//                       // onChange={(e) => setSizes(e.target.value)}
//                     />
//                     {el.label} */}
//                   </label>
//                 ))}
//               </div>
//             )}
//           </CheckboxGroup>
//         </div>
//       ),
//     },
//   ]

//   const DataCol2 = [
//     {
//       label: "SN :",
//       placeholder: "SN",
//       handleChange,
//       name: "SN",
//       value: values["SN"],
//     },
//     {
//       label: "Category :",
//       placeholder: "Category",
//       name: "category",
//       chooseOptions: true,
//       options: categoryOptions,
//       handleChange,
//     },
//     {
//       label: "Unit :",
//       placeholder: "Unit",
//       handleChange,
//       name: "unit",
//       chooseOptions: true,
//       options: unitOptions,
//     },
//     {
//       label: "Product Details :",
//       placeholder: "Product Details",
//       handleChange,
//       name: "Details",
//       value: values["Details"],
//       textArea: true,
//     },
//     {
//       label: "VAT :",
//       placeholder: "VAT",
//       handleChange,
//       name: "VAT",
//       type: "number",
//       value: values["VAT"],
//     },
//     {
//       label: "Type :",
//       placeholder: "Choose type",
//       handleChange,
//       name: "category",
//       chooseOptions: true,
//       options: typeOptions,
//     },
//     {
//       label: "Color Name :",
//       placeholder: "Color Name",
//       handleChange,
//       name: "color_name",
//       value: values["color_name"],
//     },
//     // {
//     //   label: "Color :",
//     //   removeContainer: true,
//     //   component: (
//     //     <button
//     //       className="button-34"
//     //       style={{
//     //         backgroundColor: values.color,
//     //         border:"1px solid gray",
//     //         color: values.color === "#ffffff" && "gray",
//     //         // width:80,
//     //         // height:35
//     //       }}
//     //       onClick={() => setPopUp(true)}
//     //     >
//     //       {t("Add Color")}
//     //     </button>
//     //   ),
//     // },
//   ]

//   useEffect(() => {
//     console.log(values)
//   }, [values])

//   return (
//     <>
//       <FormComponent title={"Update Product"}>
//         <AddFormComponent
//           hideCard
//           buttonTitle="Update"
//           title="Add Customer"
//           DataCol1={DataCol1}
//           DataCol2={DataCol2}
//           handleSubmit={handleSubmit}
//           handleChange={handleChange}
//           values={values}
//           countryChooser={false}
//           regionChooser={false}
//           labelWidth="100%"
//           width={"100%"}
//         />
//       </FormComponent>
//     </>
//   )
// }

// export default ProductDetails

import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
// import { ImageUploader } from "../../Web Components/ImageUploader/ImageUploader"
import AddFormComponent from "../../Web Components/AddFormComponent/AddFormComponent"
import {
  ADD_PRODUCT,
  GET_PRODUCTS_COLORS,
  GET_PRODUCT_BY_ID,
  UPDATE_PRODUCT,
} from "./Api"
import SearchBar from "../../Web Components/SearchBar/SearchBar"
import { Popup } from "devextreme-react/popup"
import { GET_UNITS } from "../Units/Api"
import { GET_CATEGORIES } from "../Categories/Api"
import { useParams } from "react-router-dom"
import { ScrollView } from "devextreme-react"
import ButtonComponent from "../../Web Components/ButtonComponent/ButtonComponent"

function ProductDetails() {
  const defaultValues = useRef({
    item_name: "",
    SN: "",
    model: "",
    unit_id: "",
    category_id: 0,
    price: "",
    type: "",
    VAT: "",
    Barcode: "",
    Details: "",
    item_colors: [],
    item_Sizes: [],
    // image_path: "",
    // image: "",
  })

  ////////////// Colors ///////////////////

  const defaultColorValues = useRef({
    color_id: "",
    color_name: "",
  })
  const [colorValues, setColorValues] = useState(defaultColorValues.current)
  const [item_colors, setItem_colors] = useState([])
  const [addedColors, setAddedColors] = useState([])

  const [loading, setLoading] = useState(true)

  function handleColorSubmit() {
    colorValues.color_id = Math.floor(Date.now() * Math.random())
    setItem_colors((prev) => [...prev, colorValues])
    setAddedColors((prev) => [...prev, colorValues.color_name])
    setColorValues(() => ({ color_id: "#fffff", color_name: "" }))
  }
  const handleColorChange = useCallback((e) => {
    setColorValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  useEffect(() => {
    setValues((prev) => ({ ...prev, item_colors }))
  }, [item_colors])

  useEffect(() => {
    console.log(item_colors)
  }, [item_colors])

  /////////////////////////////////

  ////////////// Sizes ///////////////////

  const defaultSizeVals = useRef({
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
  })

  const [sizeVals, setSizeVals] = useState(defaultSizeVals.current)
  console.log(sizeVals, "sizeVals")

  const [values, setValues] = useState("")

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  function handleSizeChange(e, el) {
    setSizeVals((prev) => ({
      ...prev,
      [e.target.name]: !sizeVals[`${el.name}`],
    }))
  }
  // useEffect(() => {
  //   setValues((prev) => ({ ...prev, item_Sizes: [sizeVals] }))
  // }, [sizeVals])

  /////////////////////////////////

  ////////////// Get Product Details ///////////////////

  const { id } = useParams()

  useEffect(() => {
    GET_PRODUCT_BY_ID(id).then((data) => setValues(data[0]))

    GET_PRODUCTS_COLORS(id)
      .then((data) => console.log(data, "COLORS"))
      .then(() => setLoading(false))
    // GET_PRODUCT_BY_ID(id).then((data) => console.log(data))
  }, [])

  useEffect(() => {
    setSizeVals({
      s: values.s,
      m: values.m,
      l: values.l,
      xl: values.xl,
      xxl: values.xxl,
    })
  }, [loading])

  /////////////////////////////////

  const { t, i18n } = useTranslation()
  const [popUp, setPopUp] = useState(false)

  function handleSubmit(e) {
    const finalData = {
      id: values.id,
      item_name: values.item_name,
      SN: values.SN,
      model: values.model,
      unit_id: values.unit_id,
      cat_id: values.cat_id,
      price: values.price,
      type: values.itemtypes,
      VAT: values.VAT,
      Barcode: values.Barcode,
      Details: values.Details,
      item_Sizes: [
        {
          s: values.s,
          m: values.m,
          l: values.l,
          xl: values.xl,
          xxl: values.xxl,
        },
      ],
      // item_colors: [
      //   {
      //     color_id: 1010,
      //     color_name: "RED",
      //   },
      // ],
    }

    // console.log(finalData,"finalData")

    UPDATE_PRODUCT(finalData)
  }

  const [units, setUnits] = useState()
  const [categories, setCategories] = useState()

  // Get Units
  useEffect(() => {
    GET_UNITS().then((data) => setUnits(data))
  }, [])

  // Get Categories
  useEffect(() => {
    GET_CATEGORIES().then((data) => setCategories(data))
  }, [])

  const categoryOptions = categories?.map((el) => ({ label: el.Name, value: el.id }))

  const unitOptions = units?.map((el) => ({ label: el.Name, value: el.id }))

  const defValUnit = unitOptions?.filter((el) => el.value === values.unit_id)

  const typeOptions = [
    {
      label: t("Raw Materials"),
      value: 0,
    },
    {
      label: t("Semi-raw Materials"),
      value: 1,
    },
    {
      label: t("Final Product"),
      value: 2,
    },
  ]

  const sizeValues = [
    { name: "xxl", label: "XXLarge" },
    { name: "xl", label: "XLarge" },
    { name: "l", label: "Large" },
    { name: "m", label: "Medium" },
    { name: "s", label: "Small" },
  ]

  const DataCol1 = [
    {
      label: "Product Name :",
      placeholder: "Product Name",
      handleChange,
      name: "item_name",
      value: values["item_name"],
    },
    {
      label: "Model :",
      placeholder: "Model",
      handleChange,
      name: "model",
      value: values["model"],
    },
    {
      label: "Sale Price :",
      placeholder: "Sale Price",
      name: "price",
      type: "number",
      value: values["price"],
      handleChange,
    },
    // {
    //   label: "Image :",
    //   // placeholder: "Image",
    //   handleChange: handleChange,
    //   name: "image",
    //   value: values["image"],
    //   component: <ImageUploader />,
    // },
    // {
    //   label: "IGT :",
    //   placeholder: "IGT",
    //   handleChange: handleChange,
    //   name: "igt",
    //   value: values["igt"],
    // },
    {
      label: "Barcode / QR-code :",
      placeholder: "Barcode",
      name: "Barcode",
      value: values["Barcode"],
      handleChange: handleChange,
    },
    {
      label: "Sizes :",
      handleChange: handleChange,
      removeContainer: true,
      component: (
        <div className="border p-2 rounded">
          <div className="d-flex justify-content-between flex-wrap">
            {sizeValues.map((el) => (
              <label style={{ minWidth: "100px", cursor: "pointer" }}>
                <input
                  // defaultChecked={[]}
                  checked={sizeVals[`${el.name}`]}
                  type="checkbox"
                  name={el.name}
                  value={sizeVals[`${el.name}`]}
                  onChange={(e) => handleSizeChange(e, el)}
                />
                {el.label}
              </label>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Color :",
      removeContainer: true,
      component: (
        <button
          className="button-34"
          style={{
            backgroundColor: "#37a000",
            border: "1px solid gray",
            color: colorValues.color === "#ffffff" && "gray",
            // width:80,
            // height:35
          }}
          onClick={() => setPopUp(true)}
        >
          {t("Add Color")}
        </button>
      ),
    },
  ]

  const DataCol2 = [
    {
      label: "SN :",
      placeholder: "SN",
      name: "SN",
      value: values["SN"],
      handleChange,
    },
    {
      label: "Category :",
      placeholder: "Category",
      name: "category_id",
      chooseOptions: true,
      options: categoryOptions,
      handleChange,
    },
    {
      label: "Unit :",
      placeholder: "Unit",
      name: "unit_id",
      defaultValue: defValUnit && defValUnit.length > 0 && defValUnit[0].label,
      chooseOptions: true,
      options: unitOptions,
      handleChange,
    },
    {
      label: "VAT :",
      placeholder: "VAT",
      handleChange,
      name: "VAT",
      type: "number",
      value: values["VAT"],
    },
    {
      label: "Type :",
      placeholder: "Choose type",
      name: "type",
      chooseOptions: true,
      options: typeOptions,
      handleChange,
    },
    {
      label: "Product Details :",
      placeholder: "Product Details",
      handleChange,
      name: "Details",
      value: values["Details"],
      textArea: true,
    },
  ]

  //////////// Tables ///////////////

  const colorData = [
    // {
    //   label: "Color :",
    //   children: (
    //     <input
    //       style={{ width: "50px", height: "35px" }}
    //       type="color"
    //       name="color_id"
    //       defaultValue={"#37a000"}
    //       value={colorValues.color_id.hex}
    //       onChange={handleColorChange}
    //     />
    //   ),
    // },
    {
      label: "Color Name :",
      placeholder: "Color Name",
      name: "color_name",
      value: colorValues["color_name"],
      handleChange: handleColorChange,
    },
    {
      label: "Added Colors :",
      placeholder: "Added Colors",
      name: "added_colors",
      value: addedColors,
      textArea: true,
      handleChange: handleColorChange,
    },
  ]

  useEffect(() => {
    console.log(values, "values")
  }, [values])

  return (
    <>
      <FormComponent loading={loading} title={"Update Product"}>
        <AddFormComponent
          hideCard
          buttonTitle="Update"
          title="Add Customer"
          DataCol1={DataCol1}
          DataCol2={DataCol2}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
          countryChooser={false}
          regionChooser={false}
          labelWidth="100%"
          width={"100%"}
        />
      </FormComponent>

      <Popup
        title={t("Color")}
        height={"80vh"}
        visible={popUp}
        hideOnOutsideClick
        onHiding={() => setPopUp(false)}
        contentRender={() => (
          <ScrollView width="100%" height="100%">
            <SearchBar
              listView
              hide
              CardTitle="Add Inventory"
              data={colorData}
              showButton={false}
              // buttonTitle="Add"
              // handleSubmit={handleColorSubmit}
              colWidth="10"
              labelWidth="200px"
              width={"60%"}
            >
              {addedColors.length > 0 && (
                <ButtonComponent
                  style={{ width: "150px", float: "right", backgroundColor: "red" }}
                  title="remove last color"
                  onClick={() => {
                    setAddedColors((prev) => prev.slice(0, -1))
                    setItem_colors((prev) => prev.slice(0, -1))
                    console.log(values)
                  }}
                />
              )}
              <ButtonComponent
                style={{ width: "100px", float: "right" }}
                title="Add color"
                disable={
                  colorValues["color_name"].length === 0 ||
                  colorValues["color_name"].replace(/\s+/g, "").length === 0
                }
                onClick={handleColorSubmit}
              />
            </SearchBar>
          </ScrollView>
        )}
      />
    </>
  )
}

export default ProductDetails
