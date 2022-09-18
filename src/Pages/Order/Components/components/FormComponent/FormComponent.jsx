import React from "react";
import "./FormComponent.css";

import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from "shards-react";
import LoadingPanel from "../LoadingPanel";

function FormComponent({ children, title, loading, onHiding = () => {} }) {
  return (
    <Card small className="mb-4 container">
      <LoadingPanel loading={loading} onHiding={onHiding} />
      <CardHeader
        style={{ backgroundColor: "white" }}
        className="border-bottom"
      >
        <h6 className="m-0">{title}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>{children}</Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default FormComponent;
