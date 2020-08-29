import Nav from "react-bootstrap/Nav";
import React from "react";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  // maybe keep for routing?
  return (
    <div className={css.root}>
      <Nav
        defaultActiveKey="/home"
        className="flex-column"
        onSelect={(selected) => {
          console.log(selected);
        }}
      >
        <Nav.Link href="/home" className={css.navLink}>
          Home
        </Nav.Link>
        <Nav.Link eventKey="link-1" href="/portfolio" className={css.navLink}>
          Link
        </Nav.Link>
        <Nav.Link eventKey="disabled" className={css.navLink} disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
