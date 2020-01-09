import React from "react";

const ProjectBox = ({url, topic, text}) => {
    return (
        <div className="border border-dark" >
            <a href={url}>
                <div style={projectBoxStyle}>
                    <h5>{topic}</h5>
                    <div>{text}</div>
                </div>
            </a>
        </div>
);
};
const projectBoxStyle = {
    marginTop:"0.5rem",
    marginBottom:"0.5rem",
    textAlign:"center",
};
export default ProjectBox;