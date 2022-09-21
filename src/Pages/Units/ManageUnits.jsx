import React, { useEffect, useState } from "react"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import MasterTable from "../../Web Components/MasterTable/MasterTable"
import { DELETE_UNIT, GET_UNITS } from "./Api"

function ManageUnits() {
  const [data, setData] = useState()
  const [updatedData, setUpdatedData] = useState("")

  // Get Units
  useEffect(() => {
    GET_UNITS().then((data) => setData(data))
  }, [])

  function handleDelete(e) {
    const id = e.data.id
    DELETE_UNIT(id)
  }

  ///// Handle Update//////
  function handleUpdate(e) {
    const updatedData = e.changes[0].key
    setUpdatedData(updatedData)
    console.log(updatedData)
  }

  useEffect(() => {
    delete updatedData.stock_typ
    setUpdatedData(updatedData)
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
      field: "Name",
      caption: "Name",
    },
  ]

  useEffect(() => {
    data && console.log(data)
  }, [data])

  return (
    <FormComponent title="Manage Units">
      <MasterTable
        allowDelete
        allowUpdate
        ColoredRows
        editingMode="popup"
        popupTitle="Update Units"
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

export default ManageUnits
