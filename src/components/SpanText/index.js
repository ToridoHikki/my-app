import React from "react";

const SpanText = ({helloText, text}) => {
    return (
        <h1 style={spanTextStyle}><span style={helloTextStyle}>{helloText}</span>{text} </h1>
    )
};
const spanTextStyle = {
    color: "#2B2B2B"
};
const helloTextStyle = {
    color: "#CA0500"

};
export default SpanText;
//change SpanText => Header