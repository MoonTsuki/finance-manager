import Nav from "react-bootstrap/Nav";
import React from "react";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  // maybe keep for routing?
  return (
    <div className={css.root}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home" style={{ color: "#007bff" }}>
          Active
        </Nav.Link>
        <Nav.Link
          eventKey="link-1"
          href="/portfolio"
          style={{ color: "#bfa975", backgroundColor: "white" }}
        >
          Link
        </Nav.Link>
        <Nav.Link style={{ color: "#bfa975" }} eventKey="link-2">
          Link
        </Nav.Link>
        <Nav.Link style={{ color: "#bfa975" }} eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
