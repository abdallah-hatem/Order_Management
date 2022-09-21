import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
// import { ImageUploader } from "../../Web Components/ImageUploader/ImageUploader"
import CheckboxGroup from "react-checkbox-group"
import AddFormComponent from "../../Web Components/AddFormComponent/AddFormComponent"
import { ADD_PRODUCT } from "./Api"

function AddProduct() {
  const defaultValues = useRef({
    item_name: "",
    SN: "",
    model: "",
    unit: "",
    category: "",
    price: "",
    type: "",
    VAT: "",
    Barcode: "",
    image: "",
    igt: "",
    product_details: "",
    image_path: "",
    // color: "#37a000",
    color_name: "",
    // color_details: "",
    item_Sizes: [],
  })

  const defaultSizeVals = useRef({
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
  })
  const [sizeVals, setSizeVals] = useState(defaultSizeVals.current)

  const [values, setValues] = useState(defaultValues.current)

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

    ADD_PRODUCT({
      item_no: 0,
      item_name: "sanf kham API",
      SN: "700035",
      model: "AKRAM",
      unit_id: 0,
      cat_id: 0,
      price: 10.0,
      type: 0,
      VAT: 14,
      Barcode: "146464784",
      Details: "some details",
      item_Sizes: [{ s: "true", m: "true", l: "true", xl: "true", xxl: "true" }],
      item_colors: [
        { color_id: 120, color_name: "Red" },
        { color_id: 122, color_name: "Blue" },
        { color_id: 144, color_name: "White" },
      ],
    })

    // ADD_PRODUCT(values)
  }

  const { t, i18n } = useTranslation()

  const categoryOptions = [
    {
      label: "Electronics",
      value: "electronics",
    },
    {
      label: "Food",
      value: "food",
    },
  ]

  const unitOptions = [
    {
      label: "Piece",
      value: "piece",
    },
    {
      label: "Lbs",
      value: "lbs",
    },
    {
      label: "KG",
      value: "kg",
    },
  ]

  const typeOptions = [
    {
      label: t("Raw Materials"),
      value: "Raw Materials",
    },
    {
      label: t("Semi-raw Materials"),
      value: "Semi-raw Materials",
    },
    {
      label: t("Final Product"),
      value: "Final Product",
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
      handleChange,
      name: "price",
      value: values["price"],
    },
    // {
    //   label: "Image :",
    //   // placeholder: "Image",
    //   handleChange: handleChange,
    //   name: "image",
    //   value: values["image"],
    //   component: <ImageUploader />,
    // },
    {
      label: "IGT :",
      placeholder: "IGT",
      handleChange: handleChange,
      name: "igt",
      value: values["igt"],
    },
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
      name: "category",
      chooseOptions: true,
      options: categoryOptions,
    },
    {
      label: "Unit :",
      placeholder: "Unit",
      handleChange,
      name: "unit",
      chooseOptions: true,
      options: unitOptions,
    },
    {
      label: "Product Details :",
      placeholder: "Product Details",
      handleChange,
      name: "product_details",
      value: values["product_details"],
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
      handleChange,
      name: "category",
      chooseOptions: true,
      options: typeOptions,
    },
    {
      label: "Color Name :",
      placeholder: "Color Name",
      handleChange,
      name: "color_name",
      value: values["color_name"],
    },
    // {
    //   label: "Color Name :",
    //   component: <>Color</>,
    // },

    // {
    //   label: "Color :",
    //   removeContainer: true,
    //   component: (
    //     <button
    //       className="button-34"
    //       style={{
    //         backgroundColor: values.color,
    //         border:"1px solid gray",
    //         color: values.color === "#ffffff" && "gray",
    //         // width:80,
    //         // height:35
    //       }}
    //       onClick={() => setPopUp(true)}
    //     >
    //       {t("Add Color")}
    //     </button>
    //   ),
    // },
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

  // const colorData = [
  //   {
  //     label: "Color :",
  //     children: (
  //       <input
  //         style={{ width: "50px", height: "35px" }}
  //         type="color"
  //         name="color"
  //         defaultValue={"#37a000"}
  //         value={values.color.hex}
  //         onChange={handleChange}
  //       />
  //     ),
  //   },
  //   {
  //     label: "Color Name :",
  //     placeholder: "Color Name",
  //     name: "color_name",
  //     handleChange,
  //     value: values["color_name"],
  //   },
  //   // {
  //   //   label: "Color details :",
  //   //   placeholder: "Color details",
  //   //   name: "color_details",
  //   //   handleChange,
  //   //   value: values["color_details"],
  //   // },
  // ]

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

      {/* <Popup
        title={t("Color")}
        height={"80vh"}
        visible={popUp}
        hideOnOutsideClick
        onHiding={() => setPopUp(false)}
        contentRender={() => (
          <SearchBar
            listView
            hide
            showButton={false}
            CardTitle="Add Inventory"
            data={colorData}
            buttonTitle="Save"
            handleSubmit={handleSubmit}
            colWidth="10"
            labelWidth="200px"
            width={"60%"}
          />
        )}
      /> */}
    </>
  )
}

export default AddProduct
