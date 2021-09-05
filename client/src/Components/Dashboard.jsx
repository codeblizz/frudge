import React, { useState } from "react";
import Header from "./Header.jsx";
import GridSection from "./GridSection.jsx";

const Dashboard = () => {
    return (
        <div className="allParagraph card mainContent">
            <Header />
            <div className="allParagraph card-body container"> 
                <GridSection />
            </div>
        </div>
    )
}
export default Dashboard;