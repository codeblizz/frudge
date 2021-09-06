import React from "react";

class ShowInfo extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const { onClick, show } = this.props;
        return (
            <div className="">
                <div className={`showInfo-${show}`}>
                    <h1 className="d-flex justify-content-center mb-2">All your finances in one place.</h1>
                    <p className="d-flex justify-content-center mb-4 text-break">
                        Find out how our team of highly qualified financial consultants can help
                        you achieve your financial goals.
                    </p>
                    <div className="d-flex justify-content-center bthInfo">
                        <button className="d-flex justify-content-center btn btn-outline-light" onClick={onClick}>View Dashboard</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowInfo;