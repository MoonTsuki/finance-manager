import PieChart from "../../component/PieChart/PieChart.js";
import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar.js";
import css from "./PortfolioPage.module.css";

function PortfolioPage() {
  // maybe keep for routing?
  return (
    <div className={css.root}>
      <div className={css.sidebar}>
        <Sidebar />
      </div>
      <div className={css.body}>
        <h1 className={css.heading}>Portfolio List</h1>
        <div className={css.chart}>
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
