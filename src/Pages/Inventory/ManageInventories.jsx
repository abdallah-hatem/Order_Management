import React, { useEffect, useState } from "react"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import MasterTable from "../../Web Components/MasterTable/MasterTable"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { GET_INVENTORIES } from "./Api"

function ManageInventories() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    GET_INVENTORIES()
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
        searchPanel={false}
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
      />
    </FormComponent>
  )
}

export default ManageInventories
