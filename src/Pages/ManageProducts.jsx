import React, { useEffect, useState } from "react"
import { GET_PRODUCTS } from "../Services/Api/Api"
import FormComponent from "../Web Components/FormComponent/FormComponent"
import MasterTable from "../Web Components/MasterTable/MasterTable"
import TagBox from "devextreme-react/tag-box"
import { useNavigate } from "react-router-dom"
import { Column, Button } from "devextreme-react/data-grid"
import { useTranslation } from "react-i18next"

function ManageProducts() {
  const { t } = useTranslation()

  const [data, setData] = useState([
    {
      id: "1",
      name: "product 1",
      image:
        "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ])

  const navigate = useNavigate()

  useEffect(() => {
    // GET_PRODUCTS().then((data) => setData(data))
  }, [])

  const columns = [
    {
      field: "id",
      caption: "ID",
      visible: false,
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
      field: "image",
      caption: "Image",
      dataType: "picture",
      alignment: "center",
      cellRender: (data) => (
        <img style={{ width: "100px", heigth: "100x" }} src={data.value} alt="pic" />
      ),
    },
  ]

  return (
    <>
      <FormComponent title="Manage Products">
        <MasterTable
          allowDelete
          ColoredRows
          editingMode="popup"
          searchPanel={false}
          columnChooser={false}
          dataSource={data}
          colAttributes={columns}
        >
          <Column type="buttons" width={120}>
            <Button
              hint={t("Update")}
              icon="edit"
              visible={true}
              onClick={(e) => {
                navigate(`/product-details/${e.row.data.id}`)
              }}
            />

            <Button name="delete" />
          </Column>
        </MasterTable>
      </FormComponent>
    </>
  )
}

export default ManageProducts
