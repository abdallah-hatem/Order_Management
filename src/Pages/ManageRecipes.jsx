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

function ManageRecipes() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [data, setData] = useState([
    {
      id: "1",
      recipe_name: "recipe 1",
      item: "Item 1",
      quantity: 10,
      cost: 2000,
    },
  ])

  const [editOpen, setEditOpen] = useState(false)

  useEffect(() => {
    // GET_PRODUCTS().then((data) => setData(data))
  }, [])

  const itemOptions = [
    {
      label: "Item 1",
      value: "Item 1",
    },
    {
      label: "Item 2",
      value: "Item 2",
    },
    {
      label: "Item 3",
      value: "Item 3",
    },
  ]

  const columns = [
    {
      field: "id",
      caption: "ID",
      visible: false,
      allowEditing: false,
    },
    {
      field: "recipe_name",
      caption: "Recipe Name",
    },
    {
      field: "item",
      caption: "Item",
      options: itemOptions,
    },
    {
      field: "quantity",
      caption: "Quantity",
      dataType: "number",
    },
    {
      field: "cost",
      caption: "Cost",
      dataType: "number",
    },
    {
      field: "total",
      caption: "Total",
      dataType: "number",
      allowEditing: false,
      calculateCellValueHandle: (rowData) => rowData.quantity * rowData.cost,
    },
  ]

  return (
    <>
      <FormComponent title="Manage Recipes">
        <MasterTable
          allowDelete
          allowUpdate
          ColoredRows
          editingMode="popup"
          popupTitle="Update Recipes"
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

export default ManageRecipes
