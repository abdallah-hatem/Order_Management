import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import MasterTable from "../../Web Components/MasterTable/MasterTable"
import SearchBar from "../../Web Components/SearchBar/SearchBar"

function InventoryReceive() {
  const { t } = useTranslation()

  const defaultValues = useRef({
    inventory_name: "",
    type: "",
  })

  const [values, setValues] = useState(defaultValues.current)

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  function handleSubmit(e) {
    // e.preventDefault();

    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"))
        return
      }
    }
  }

  //   const options = [
  //     {
  //       label: "Active",
  //       value: "active",
  //     },
  //     {
  //       label: "Inactive",
  //       value: "inactive",
  //     },
  //   ]

  const inventroyOptions = [
    {
      label: "Invetory1",
      value: "Invetory1",
    },
    {
      label: "Invetory2",
      value: "Invetory2",
    },
  ]

  const itemsOptions = [
    {
      label: "Item1",
      value: "Item1",
    },
    {
      label: "Item2",
      value: "Item2",
    },
    {
      label: "Item3",
      value: "Item3",
    },
  ]

  const columns = [
    {
      field: "choose_item",
      caption: "Choose Item",
      options: itemsOptions,
    },
    {
      field: "choose_inventory",
      caption: "Choose Inventory",
      options: inventroyOptions,
    },
    {
      field: "amount",
      caption: "Amount",
      dataType: "number",
    },
  ]

  const tableData = [{}]

  useEffect(() => {
    console.log(values)
  }, [values])

  return (
    <>
      <FormComponent title="Inventory Receive">
        <MasterTable
          allowAdd
          allowDelete
          allowUpdate
          ColoredRows
          searchPanel={false}
          columnChooser={false}
          // dataSource={tableData}
          colAttributes={columns}
          //   options={options}
        />
      </FormComponent>
    </>
  )
}

export default InventoryReceive
