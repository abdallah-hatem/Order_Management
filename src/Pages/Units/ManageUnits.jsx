import React, { useEffect, useState } from "react"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import MasterTable from "../../Web Components/MasterTable/MasterTable"
import { DELETE_UNIT, GET_UNITS, UPDATE_UNIT } from "./Api"

function ManageUnits() {
  const [data, setData] = useState()
  const [updatedData, setUpdatedData] = useState("")

  const [loading, setLoading] = useState(true)

  // Get Units
  useEffect(() => {
    GET_UNITS()
      .then((data) => setData(data))
      .then(() => setLoading(false))
  }, [])

  function handleDelete(e) {
    const id = e.data.id
    DELETE_UNIT({
      id: id,
    })
  }

  ///// Handle Update//////
  function handleUpdate(e) {
    const updatedData = e.changes[0].key
    console.log(updatedData,"update Data")
    setUpdatedData(updatedData)
  }

  useEffect(() => {
    delete updatedData.stock_typ
    setUpdatedData(updatedData)

    UPDATE_UNIT(updatedData)
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
    data && console.log(data,"data")
  }, [data])

  return (
    <FormComponent loading={loading} title="Manage Units">
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
