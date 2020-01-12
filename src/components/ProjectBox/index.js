import React from "react";
import {Col} from "react-bootstrap";

const ProjectBox = ({topic, text}) => {
    return (
            <div style={projectBoxStyle}>
                <h5>{topic}</h5>
                <div>{text}</div>
            </div>

);
};
const projectBoxStyle = {
    textAlign:"center",
    marginLeft:"0.5rem",
    marginRight:"0.5rem",
    marginTop:"0.5rem",
    marginBottom:"4rem",
};
export default ProjectBox;