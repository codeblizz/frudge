import React from "react";
import Header from "./Header.jsx";
import GridSection from "./GridSection.jsx";

const DocumentPage = (props) => {
    const { sidebar } = props;
    return (
        <div className={`${sidebar} ? main-content col : main-content`}>
            <Header className="col m-0"/>
            <GridSection className="col"/>
        </div>
    )
}
export default DocumentPage;