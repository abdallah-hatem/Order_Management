import React, { useCallback, useRef, useState } from "react"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import SearchBar from "../../Web Components/SearchBar/SearchBar"
import { ADD_INVENTORY } from "./Api"

function AddInventory() {
  const { t, i18n } = useTranslation()

  const defaultValues = useRef({
    name: "",
    stock_typ: "",
  })

  const [values, setValues] = useState(defaultValues.current)
  useEffect(() => {
    console.log(values)
  }, [values])

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  function handleSubmit(e) {
    // for (const [key, value] of Object.entries(values)) {
    //   if (!value) {
    //     alert(t("Fill the inputs"))
    //   }
    // }

    ADD_INVENTORY(values)
  }

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

  const inventoryData = [
    {
      label: "Inventory Name :",
      placeholder: "Inventory Name",
      name: "name",
      value: values["name"],
      handleChange,
    },
    {
      label: "Inventory Type :",
      placeholder: "Inventory Type",
      name: "stock_typ",
      chooseOptions: true,
      options: typeOptions,
      handleChange,
    },
  ]

  return (
    <SearchBar
      listView
      CardTitle="Add Inventory"
      hideCard={false}
      data={inventoryData}
      buttonTitle="Add"
      handleSubmit={handleSubmit}
      colWidth="10"
      labelWidth="200px"
      width={"60%"}
    />
  )
}

export default AddInventory
