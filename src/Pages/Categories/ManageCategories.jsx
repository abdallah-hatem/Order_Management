import React, { useEffect, useState } from "react"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import MasterTable from "../../Web Components/MasterTable/MasterTable"

import { GET_CATEGORY } from "./Api"

function ManageCategories() {
  const [data, setData] = useState()

  useEffect(() => {
    GET_CATEGORY().then((data) => setData(data))
  }, [])

  const columns = [
    {
      field: "id",
      caption: "ID",
      visible: false,
      allowEditing: false,
    },
    {
      field: "category_name",
      caption: "Name",
    },
  ]

  useEffect(() => {
    data && console.log(data, "data")
  }, [data])

  return (
    <>
      <FormComponent title="Manage Categories">
        <MasterTable
          allowDelete
          allowUpdate
          ColoredRows
          editingMode="popup"
          popupTitle="Update Categories"
          searchPanel={false}
          columnChooser={false}
          dataSource={data}
          colAttributes={columns}
        />
      </FormComponent>
    </>
  )
}

export default ManageCategories
