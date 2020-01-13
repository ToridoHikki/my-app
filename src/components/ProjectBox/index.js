import React from "react";
import {Col} from "react-bootstrap";
import {MDBContainer} from 'mdbreact';

class ProjectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
        }
    }

    toggleHover = () => {
        const {isHover} = this.state;
        this.setState({
            isHover: !isHover,
        });
        console.log(isHover);
    };

    render() {
        const {topic, text} = this.props;
        return (
            <MDBContainer onMouseEnter={this.toggleHover}
                          onMouseLeave={this.toggleHover}
                          style={this.state.isHover ? afterHover : {}}
                          className="d-md-flex">
                <div className="text-wrap" style={projectBoxStyle}>
                    <h5>{topic}</h5>
                    <div>{text}</div>
                </div>
            </MDBContainer>
        );
    }
};
const projectBoxStyle = {
    width: "180px",
    height: "180px",
};
const afterHover = {
    backgroundColor: "yellow",
};
export default ProjectBox;
