import React, { useEffect, useState } from "react"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import MasterTable from "../../Web Components/MasterTable/MasterTable"

import { DELETE_INVENTORY, GET_INVENTORIES, UPDATE_INVENTORY } from "./Api"

function ManageInventories() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    GET_INVENTORIES()
      .then((data) => setData(data))
      .then(() => setLoading(false))
  }, [])

  ///// Handle Update//////
  const [updatedData, setUpdatedData] = useState("")

  function handleUpdate(e) {
    const updatedData = e.changes[0].key
    console.log(updatedData)
    setUpdatedData(updatedData)
  }

  useEffect(() => {
    // delete updatedData.stock_typ
    setUpdatedData(updatedData)

    UPDATE_INVENTORY(updatedData)
  }, [updatedData])
  //////////////////

  function handleDelete(e) {
    const id = e.data.id
    DELETE_INVENTORY({
      id: id,
    })
  }

  const columns = [
    {
      field: "id",
      caption: "ID",
      visible: false,
      allowEditing: false,
    },
    {
      field: "name",
      caption: "Name",
    },
    {
      field: "type",
      caption: "Type",
    },
  ]

  useEffect(() => {
    data && console.log(data, "data")
  }, [data])

  return (
    <FormComponent loading={loading} title="Manage Inventories">
      <MasterTable
        allowDelete
        allowUpdate
        ColoredRows
        editingMode="popup"
        popupTitle="Update Inventory"
        onRowRemoving={(e) => handleDelete(e)}
        onSaving={(e) => handleUpdate(e)}
        searchPanel={false}
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
      />
    </FormComponent>
  )
}

export default ManageInventories
