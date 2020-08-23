import Button from "react-bootstrap/button";
import Card from "react-bootstrap/Card";
import React from "react";
import css from "./CardComponent.module.css";

const CardComponent = () => {
  return (
    <Card className={css.root}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>FIX MY COLORS SOMEONE</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
