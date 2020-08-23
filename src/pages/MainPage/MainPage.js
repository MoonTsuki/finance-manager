import CardGroupComponent from "../../component/CardGroupComponent/CardGroupComponent";
import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar.js";
import css from "./MainPage.module.css";

function MainPage() {
  // maybe keep for routing?
  return (
    <div className={css.root}>
      <div className={css.sidebar}>
        <Sidebar />
      </div>
      <div className={css.body}>
        <h1 className={css.heading}>Welcome to Finance App</h1>
        <CardGroupComponent />
      </div>
    </div>
  );
}

export default MainPage;
