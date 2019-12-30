import React from "react";

const SubTitle = ({text}) => {
    return (
        <p style={subStyle}><b>{text}</b></p>
    )
};

const subStyle = {
    fontSize: "15px",
    color: "#2B2B2B"
};
export default SubTitle;