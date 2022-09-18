import React, { useEffect, useState } from "react"
import { GET_PRODUCTS } from "../Services/Api/Api"
import FormComponent from "../Web Components/FormComponent/FormComponent"
import MasterTable from "../Web Components/MasterTable/MasterTable"
import { useNavigate } from "react-router-dom"
import { Column, Button } from "devextreme-react/data-grid"
import { Popup } from "devextreme-react/popup"
import ScrollView from "devextreme-react/scroll-view"
import { useTranslation } from "react-i18next"
import AddInventory from "./AddInventory"
import UpdateInventories from "./UpdateInventories"

function ManageInventories() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [data, setData] = useState([
    {
      id: "1",
      name: "inventory 1",
      type: "Raw Materials",
    },
  ])

  const [editOpen, setEditOpen] = useState(false)

  useEffect(() => {
    // GET_PRODUCTS().then((data) => setData(data))
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
      // cellRender: (data) => (
      //   <span
      //     onClick={(e) => {
      //       navigate(`/product-details/${data.data.id}`)
      //       e.preventDefault()
      //     }}
      //     style={{ cursor: "pointer", color: "#37a000" }}
      //   >
      //     {data.value}
      //   </span>
      // ),
    },
    {
      field: "type",
      caption: "Type",
    },
  ]

  return (
    <>
      <FormComponent title="Manage Inventories">
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
        >
          {/* <Column type="buttons" width={120}>
            <Button
              hint={t("Update")}
              icon={"edit"}
              visible={true}
              disabled={false}
              onClick={() => setEditOpen(true)}
              name={"Update"}
            />

            <Button name={"delete"} />
          </Column> */}
        </MasterTable>
      </FormComponent>

      {/* <Popup
        title={t("Update")}
        height={"80vh"}
        visible={editOpen}
        hideOnOutsideClick={true}
        onHiding={() => setEditOpen(false)}
        contentComponent={() => <UpdateInventories />}
      ></Popup> */}
    </>
  )
}

export default ManageInventories
