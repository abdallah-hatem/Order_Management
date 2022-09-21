import React from "react"
import "./FormComponent.css"

import { Card, CardHeader, CardBody } from "shards-react"
import { useTranslation } from "react-i18next"
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation"
// import Button from "react-bootstrap/Button"
// import Card from "react-bootstrap/Card"

function FormComponent({
  children,
  title,
  style = {
    // margin: "auto",
    // display: "flex",
    // flexDirection: "column",
  },
  hideHeader = false,
  content,
  hideCard = false,
  loading = false,
}) {
  const { t, i18n } = useTranslation()
  return !hideCard ? (
    <div style={style}>
      <Card small className="mb-4">
        <CardHeader
          style={{
            backgroundColor: "white",
            textAlign: i18n.language === "ar" && "right",
            // justifyContent: i18n.language === "ar" && "right",
            display: hideHeader && "none",
          }}
          className="border-bottom"
        >
          {content ? (
            // put button in the header div
            <div className="d-flex justify-content-between">
              <h6 className="m-0">{t(title)}</h6>
              {content}
            </div>
          ) : (
            <h6 className="m-0">{t(title)}</h6>
          )}
        </CardHeader>
        <CardBody>
          {!loading ? (
            <div style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}>
              {children}
            </div>
          ) : (
            <LoadingAnimation />
          )}
        </CardBody>
      </Card>
    </div>
  ) : (
    children
  )
  // <div className="col p-4 m-auto">
  //   <Card
  //     style={{
  //       boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  //       textAlign: i18n.language === "ar" && "right",
  //     }}
  //   >
  //     <Card.Header>
  //       <h6 className="m-0" style={{ color: "#374767" }}>
  //         {title}
  //       </h6>
  //     </Card.Header>
  //     <Card.Body>{children}</Card.Body>
  //   </Card>
  // </div>
}

export default FormComponent
