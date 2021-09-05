import React from "react";
import Header from "./Header.jsx";
import GridSection from "./GridSection.jsx";

const NewsFeedPage = () => {
    return (
        <div className="allParagraph card mainContent">
            <div className="mb-0"><Header /></div>
            <div className="allParagraph card-body container-fluid"> 
                <GridSection />
            </div>
        </div>
    )
}
export default NewsFeedPage;