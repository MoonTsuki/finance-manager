import Nav from "react-bootstrap/Nav";
import React from "react";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  // maybe keep for routing?
  return (
    <div className={css.root}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home" style={{ color: "white" }}>
          Home
        </Nav.Link>
        <Nav.Link
          eventKey="link-1"
          href="/portfolio"
          style={{ color: "#bfa975", backgroundColor: "#f0f6f7ff" }}
        >
          Link
        </Nav.Link>
        <Nav.Link style={{ color: "white" }} eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
