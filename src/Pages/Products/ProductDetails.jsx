import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import AddFormComponent from "../../Web Components/AddFormComponent/AddFormComponent"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import { ImageUploader } from "../../Web Components/ImageUploader/ImageUploader"
import CheckboxGroup from "react-checkbox-group"
import { useParams } from "react-router-dom"
import { GET_PRODUCTS_COLORS, GET_PRODUCT_BY_ID } from "./Api"

function ProductDetails() {
  // const defaultValues = useRef({
  //   item_name: "",
  //   SN: "",
  //   model: "",
  //   unit: "",
  //   category: "",
  //   price: "",
  //   type: "",
  //   VAT: "",
  //   Barcode: "",
  //   image: "",
  //   igt: "",
  //   Details: "",
  //   image_path: "",
  //   // color: "#37a000",
  //   color_name: "",
  //   // color_details: "",
  //   sizes: [],
  // })

  const [values, setValues] = useState({})
  const [sizes, setSizes] = useState([])
  console.log(sizes)

  const { id } = useParams()

  useEffect(() => {
    GET_PRODUCT_BY_ID(id).then((data) => setValues(data[0]))
    GET_PRODUCTS_COLORS(id).then((data) => console.log(data, "COLORS"))

    // GET_PRODUCT_BY_ID(id).then((data) => console.log(data))
  }, [])

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  useEffect(() => {
    setValues((prev) => ({ ...prev, item_sizes: sizes }))
  }, [sizes])

  function handleSubmit(e) {
    // for (const [key, value] of Object.entries(values)) {
    //   if (!value) {
    //     alert(t("Fill the inputs"))
    //   }
    // }
    // UPDATE_PRODUCT(id, values)
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
    { name: "xxl", label: "XXLarge", value: values.xxl },
    { name: "xl", label: "XLarge", value: values.xl },
    { name: "l", label: "Large", value: values.l },
    { name: "m", label: "Medium", value: values.m },
    { name: "s", label: "Small", value: values.s },
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
    //   removeContainer: true,
    //   component: (
    //     <img
    //       style={{ height: 180, width: 180 }}
    //       src="https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    //       alt="pic"
    //     ></img>
    //   ),
    // },
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
          <CheckboxGroup name="sizes" value={sizes} onChange={setSizes}>
            {(Checkbox) => (
              <div className="d-flex justify-content-between flex-wrap">
                {sizeValues.map((el) => (
                  <label style={{ minWidth: "100px", cursor: "pointer" }}>
                    <Checkbox value={el.value} /> {el.label}
                    {/* <input
                      type="checkbox"
                      name={el.name}
                      defaultChecked={el.value}
                      value={el.value}
                      // onChange={(e) => setSizes(e.target.value)}
                    />
                    {el.label} */}
                  </label>
                ))}
              </div>
            )}
          </CheckboxGroup>
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

  useEffect(() => {
    console.log(values)
  }, [values])

  return (
    <>
      <FormComponent title={"Update Product"}>
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
    </>
  )
}

export default ProductDetails
