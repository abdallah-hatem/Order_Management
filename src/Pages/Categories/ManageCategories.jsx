import React, { useEffect, useState } from "react"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import MasterTable from "../../Web Components/MasterTable/MasterTable"

import { GET_CATEGORY } from "./Api"

function ManageCategories() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    GET_CATEGORY()
      .then((data) => setData(data))
      .then(() => setLoading(false))
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
      <FormComponent loading={loading} title="Manage Categories">
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
