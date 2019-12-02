import React from "react";
import "./IconSocial.css"

const IconSocial = ({icon, url}) => {
    return (
        <a href={url}  className={"IconSocial"}>
            {icon}
        </a>
    );
};


/*
const iconStyle  = {
  color:"#AD8A54"
};
const IconSocial = ({icon, url}) => {
    return (
        <a href={url}  style={iconStyle}>
            {icon}
        </a>
    );
};

*/

export default IconSocial