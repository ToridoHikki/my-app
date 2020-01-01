import React from "react";

const TopicText = ({text}) => {

    return (
        <div style={topicTextStyle}><b>{text}</b></div>
    )
};

const topicTextStyle = {
    fontSize: "20px",
    color: "#2B2B2B",
    transform: "rotate(-90deg)",
    position: "absolute",
    top: "50%",
    left: "9%",
};

export default TopicText;
//change => vertical title