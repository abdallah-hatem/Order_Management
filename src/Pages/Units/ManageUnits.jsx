import React, { useEffect, useState } from "react"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import MasterTable from "../../Web Components/MasterTable/MasterTable"
import { DELETE_UNIT, GET_UNITS } from "./Api"

function ManageUnits() {
  const [data, setData] = useState()

  useEffect(() => {
    GET_UNITS().then((data) => setData(data))
  }, [])

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

  function handleDelete(e) {
    const id = e.data.id
    DELETE_UNIT(id)
  }

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
        searchPanel={false}
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
      />
    </FormComponent>
  )
}

export default ManageUnits
