import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import AddFormComponent from "../Web Components/AddFormComponent/AddFormComponent"
import ButtonComponent from "../Web Components/ButtonComponent/ButtonComponent"
import FormComponent from "../Web Components/FormComponent/FormComponent"
import { ImageUploader } from "../Web Components/ImageUploader/ImageUploader"
import InputComponent from "../Web Components/InputComponent/InputComponent"
import MasterTable from "../Web Components/MasterTable/MasterTable"
import CheckboxGroup from "react-checkbox-group"
import SearchBar from "../Web Components/SearchBar/SearchBar"
import InputColor from "react-input-color"
import { Popup } from "devextreme-react/popup"
import { GET_PRODUCT_BY_ID, UPDATE_PRODUCT } from "../Services/Api/Api"

function ProductDetails() {
  const defaultValues = useRef({
    barcode: "",
    product_name: "",
    model: "",
    sale_price: "",
    image: "",
    igt: "",
    sn: "",
    category: "",
    type: "",
    unit: "",
    vat: "",
    product_details: "",
    image_path: "",
    color: {},
    color_name: "",
    color_details: "",
    sizes: [],
  })

  const [values, setValues] = useState(defaultValues.current)
  const [sizes, setSizes] = useState([])
  const [popUp, setPopUp] = useState(false)

  useEffect(() => {
    // GET_PRODUCT_BY_ID().then((data) => setValues(data))
  }, [])

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  useEffect(() => {
    setValues((prev) => ({ ...prev, sizes }))
  }, [sizes])

  function handleSubmit(e) {
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"))
      }
    }

    // UPDATE_PRODUCT(id, values)
  }

  const { t, i18n } = useTranslation()

  const options = [
    {
      label: "Sam",
      value: "Sam",
    },
    {
      label: "Mike",
      value: "Mike",
    },
    {
      label: "Jack",
      value: "Jack",
    },
  ]

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

  const sizeValues = ["XXLarge", "XLarge", "Large", "Medium", "Small"]

  const DataCol1 = [
    {
      label: "Product Name :",
      placeholder: "Product Name",
      handleChange,
      name: "product_name",
      value: values["product_name"],
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
      name: "sale_price",
      value: values["sale_price"],
    },
    {
      removeContainer: true,
      component: (
        <img
          style={{ height: 180, width: 180 }}
          src="https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="pic"
        ></img>
      ),
    },
    {
      label: "Image :",
      // placeholder: "Image",
      handleChange: handleChange,
      name: "image",
      value: values["image"],
      component: <ImageUploader />,
    },
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
      name: "barcode",
      value: values["barcode"],
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
                    <Checkbox value={el} /> {el}
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
      name: "sn",
      value: values["sn"],
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
      name: "vat",
      type: "number",
      value: values["vat"],
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
      label: "Color :",
      removeContainer: true,
      component: (
        <button
          className="button-34"
          style={{ backgroundColor: values.color }}
          onClick={() => setPopUp(true)}
        >
          {t("Add Color")}
        </button>
      ),
    },
  ]

  //////////// Tables ///////////////

  const columns = [
    {
      field: "supplier",
      caption: "Supplier",
      options,
    },
    {
      field: "supplier_price",
      caption: "Supplier Price",
      dataType: "number",
    },
  ]

  const data = [
    {
      supplier: "",
      supplier_price: "",
    },
  ]

  const colorData = [
    {
      label: "Color :",
      children: (
        <input
          style={{ width: "50px", height: "35px" }}
          type="color"
          name="color"
          value={values.color.hex}
          onChange={handleChange}
        />
      ),
    },
    {
      label: "Color Name :",
      placeholder: "Color Name",
      name: "color_name",
      handleChange,
      value: values["color_name"],
    },
    {
      label: "Color details :",
      placeholder: "Color details",
      name: "color_details",
      handleChange,
      value: values["color_details"],
    },
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

        {/* <div className="mt-5">
          <MasterTable
            allowAdd
            allowDelete
            allowUpdate
            ColoredRows
            searchPanel={false}
            columnChooser={false}
            dataSource={data}
            colAttributes={columns}
            options={options}
          />
        </div> */}
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
      ></Popup>
    </>
  )
}

export default ProductDetails
