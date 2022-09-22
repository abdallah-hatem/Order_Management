import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
// import { ImageUploader } from "../../Web Components/ImageUploader/ImageUploader"
import AddFormComponent from "../../Web Components/AddFormComponent/AddFormComponent"
import { ADD_PRODUCT } from "./Api"
import SearchBar from "../../Web Components/SearchBar/SearchBar"
import { Popup } from "devextreme-react/popup"
import { GET_UNITS } from "../Units/Api"
import { GET_CATEGORIES } from "../Categories/Api"

function AddProduct() {
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

  const defaultSizeVals = useRef({
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
  })

  ////////////// Colors ///////////////////

  const defaultColorValues = useRef({
    color_id: "",
    color_name: "",
  })
  const [colorValues, setColorValues] = useState(defaultColorValues.current)
  const [item_colors, setItem_colors] = useState([])
  const [addedColors, setAddedColors] = useState([])

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

  const [sizeVals, setSizeVals] = useState(defaultSizeVals.current)

  const [values, setValues] = useState(defaultValues.current)

  const [popUp, setPopUp] = useState(false)

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  function handleSizeChange(e, el) {
    setSizeVals((prev) => ({
      ...prev,
      [e.target.name]: !sizeVals[`${el.name}`],
    }))
  }
  useEffect(() => {
    setValues((prev) => ({ ...prev, item_Sizes: [sizeVals] }))
  }, [sizeVals])

  function handleSubmit(e) {
    // for (const [key, value] of Object.entries(values)) {
    //   if (!value) {
    //     alert(t("Fill the inputs"))
    //   }
    // }

    // ADD_PRODUCT({
    //   item_no: 0,
    //   item_name: "sanf kham API",
    //   SN: "700035",
    //   model: "AKRAM",
    //   unit_id: 0,
    //   cat_id: 0,
    //   price: 10.0,
    //   type: 0,
    //   VAT: 14,
    //   Barcode: "146464784",
    //   Details: "some details",
    //   item_Sizes: [{ s: "true", m: "true", l: "true", xl: "true", xxl: "true" }],
    //   item_colors: [
    //     { color_id: 120, color_name: "Red" },
    //     { color_id: 122, color_name: "Blue" },
    //     { color_id: 144, color_name: "White" },
    //   ],
    // })

    ADD_PRODUCT(values)
  }

  const { t, i18n } = useTranslation()

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
  ]

  const DataCol2 = [
    {
      label: "SN :",
      placeholder: "SN",
      handleChange,
      name: "SN",
      value: values["SN"],
    },
    {
      label: "Category :",
      placeholder: "Category",
      handleChange,
      name: "category_id",
      chooseOptions: true,
      options: categoryOptions,
    },
    {
      label: "Unit :",
      placeholder: "Unit",
      handleChange,
      name: "unit_id",
      chooseOptions: true,
      options: unitOptions,
    },
    {
      label: "Product Details :",
      placeholder: "Product Details",
      handleChange,
      name: "Details",
      value: values["Details"],
      textArea: true,
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
    // {
    //   label: "Color Name :",
    //   placeholder: "Color Name",
    //   handleChange,
    //   name: "color_name",
    //   value: values["color_name"],
    // },
    {
      label: "Color :",
      removeContainer: true,
      component: (
        <button
          className="button-34"
          style={{
            backgroundColor: colorValues.color,
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

  //////////// Tables ///////////////

  // const columns = [
  //   {
  //     field: "supplier",
  //     caption: "Supplier",
  //     options,
  //   },
  //   {
  //     field: "supplier_price",
  //     caption: "Supplier Price",
  //     dataType: "number",
  //   },
  // ]

  // const data = [
  //   {
  //     supplier: "",
  //     supplier_price: "",
  //   },
  // ]

  const colorData = [
    {
      label: "Color :",
      children: (
        <input
          style={{ width: "50px", height: "35px" }}
          type="color"
          name="color_id"
          defaultValue={"#37a000"}
          value={colorValues.color_id.hex}
          onChange={handleColorChange}
        />
      ),
    },
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
    console.log(values)
  }, [values])

  return (
    <>
      <FormComponent title={"Add Product"}>
        <AddFormComponent
          hideCard
          buttonTitle="Save"
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
          <SearchBar
            listView
            hide
            CardTitle="Add Inventory"
            data={colorData}
            buttonTitle="Add"
            handleSubmit={handleColorSubmit}
            colWidth="10"
            labelWidth="200px"
            width={"60%"}
          />
        )}
      />
    </>
  )
}

export default AddProduct
