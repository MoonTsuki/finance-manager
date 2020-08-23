import Card from "../CardComponent/CardComponent";
import Col from "react-bootstrap/Col";
import React from "react";
import Row from "react-bootstrap/Row";
import css from "./CardGroupComponent.module.css";

const CardGroupComponent = () => {
  return (
    <div className={css.root}>
      <Col>
        <Row>
          <Card />
          <Card />
        </Row>
        <Row>
          <Card />
          <Card />
        </Row>
      </Col>
    </div>
  );
};

export default CardGroupComponent;
