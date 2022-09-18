import { useState } from "react";

import { Card, CardBody, CardHeader } from "reactstrap";

import "devextreme/dist/css/dx.light.css";
import { useTranslation } from "react-i18next";

import "devextreme/dist/css/dx.light.css";
import LoadingPanel from "../LoadingPanel";
const PageLayout = ({ children, loading, onHiding, title }) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Card className="container card-user">
        <CardHeader
          style={{
            backgroundColor: "white",
            textAlign: i18n.language === "en" ? "left" : "right",
            width: "100%",
          }}
        >
          <h4>{t(title)} </h4>
        </CardHeader>
        <CardBody>
          <LoadingPanel loading={loading} onHiding={onHiding} />
          {children}
        </CardBody>
      </Card>
    </div>
  );
};

export default PageLayout;
