import React from "react";

const SubTitle  = ({text})=>{
    return (
        <p style={subStyle}>{text}</p>
    )
};

const subStyle = {
    fontSize:"15px",
    color:"#fff"
};
export default SubTitle;