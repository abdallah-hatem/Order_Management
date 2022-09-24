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
import ButtonComponent from "../../Web Components/ButtonComponent/ButtonComponent"
import ScrollView from "devextreme-react/scroll-view"


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
    colorValues.color_name = colorValues["color_name"].replace(/\s+/g, "")
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

    ADD_PRODUCT(values)
  }

  const { t, i18n } = useTranslation()

  const [units, setUnits] = useState()
  const [categories, setCategories] = useState()

  useEffect(() => {
    // Get Units
    GET_UNITS().then((data) => setUnits(data))

    // Get Categories
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
      chooseOptions: true,
      options: unitOptions,
      handleChange,
    },
    {
      label: "VAT :",
      placeholder: "VAT",
      name: "VAT",
      type: "number",
      value: values["VAT"],
      handleChange,
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
      placeholder: "No Added Colors",
      name: "added_colors",
      value: addedColors,
      textArea: true,
      disabled: true,
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

export default AddProduct
