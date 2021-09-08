import React, { useState } from "react";
import Header from "./Header.jsx";
import GridSection from "./GridSection.jsx";

const Dashboard = (props) => {
    const { sidebar } = props;
    return (
        <div className={`col ${sidebar} ? mainContent : mainContent`}>
            <Header className="col m-0"/>
            <h1 className="fs-5 exception card-title mb-4">Dashboard Home</h1>
            <GridSection className="col"/>
        </div>
    )
}
export default Dashboard;