import React, { useCallback, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import SearchBar from "../Web Components/SearchBar/SearchBar"

function AddInventory() {
  const { t, i18n } = useTranslation()

  const defaultValues = useRef({
    inventory_name: "",
    type: "",
  })

  const [values, setValues] = useState(defaultValues.current)

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  function handleSubmit(e) {
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"))
      }
    }
  }

  const inventoryData = [
    {
      label: "Inventory Name :",
      placeholder: "Inventory Name",
      name: "inventory_name",
      handleChange,
      value: values["inventory_name"],
    },
    {
      label: "Inventory Type :",
      placeholder: "Inventory Type",
      name: "type",
      handleChange,
      value: values["type"],
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
