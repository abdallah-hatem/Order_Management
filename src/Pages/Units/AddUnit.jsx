import React, { useCallback, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import SearchBar from "../../Web Components/SearchBar/SearchBar"
import { ADD_UNIT } from "./Api"

function AddUnit() {
  const defaultValues = useRef({
    unit_name: "",
  })

  const [values, setValues] = useState(defaultValues.current)

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  function handleSubmit(e) {
    // for (const [key, value] of Object.entries(values)) {
    //   if (!value) {
    //     alert(t("Fill the inputs"))
    //   }
    // }

    ADD_UNIT(values)
  }

  const data = [
    {
      label: "Unit Name :",
      placeholder: "Unit Name",
      name: "unit_name",
      value: values["unit_name"],
      handleChange,
    },
  ]

  return (
    <SearchBar
      listView
      CardTitle="Add Unit"
      hideCard={false}
      data={data}
      buttonTitle="Add"
      handleSubmit={handleSubmit}
      colWidth="10"
      labelWidth="200px"
      width={"60%"}
    />
  )
}

export default AddUnit
