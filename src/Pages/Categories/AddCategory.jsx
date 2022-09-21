import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import SearchBar from "../../Web Components/SearchBar/SearchBar"
import { ADD_CATEGORY } from "./Api"

function AddCategory() {
  const { t, i18n } = useTranslation()

  const defaultValues = useRef({
    Name: "",
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

    ADD_CATEGORY(values)
  }

  const data = [
    {
      label: "Category Name :",
      placeholder: "Category Name",
      name: "Name",
      value: values["Name"],
      handleChange,
    },
  ]

  useEffect(() => {
    console.log(values)
  }, [values])

  return (
    <SearchBar
      listView
      CardTitle="Add Category"
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

export default AddCategory
