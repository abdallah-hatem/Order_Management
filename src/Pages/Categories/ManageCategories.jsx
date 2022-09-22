import React, { useEffect, useState } from "react"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import MasterTable from "../../Web Components/MasterTable/MasterTable"

import { DELETE_CATEGORY, GET_CATEGORIES, UPDATE_CATEGORY } from "./Api"

function ManageCategories() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    GET_CATEGORIES()
      .then((data) => setData(data))
      .then(() => setLoading(false))
  }, [])

  function handleDelete(e) {
    const id = e.data.id
    DELETE_CATEGORY({
      id: id,
    })
  }

  const [updatedData, setUpdatedData] = useState("")

  ///// Handle Update//////
  function handleUpdate(e) {
    const updatedData = e.changes[0].key
    console.log(updatedData)
    setUpdatedData(updatedData)
  }

  useEffect(() => {
    delete updatedData.stock_typ
    setUpdatedData(updatedData)

    UPDATE_CATEGORY(updatedData)
  }, [updatedData])
  //////////////////

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
          onRowRemoving={(e) => handleDelete(e)}
          onSaving={(e) => handleUpdate(e)}
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
