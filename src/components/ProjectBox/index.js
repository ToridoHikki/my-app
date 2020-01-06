import React from "react";

const ProjectBox = ({url, topic, text}) => {
    return (
        <div>
            <a href={url}>
                <div>
                    <h5>{topic}</h5>
                    <div>{text}</div>
                </div>
            </a>
        </div>
);
};

export default ProjectBox;