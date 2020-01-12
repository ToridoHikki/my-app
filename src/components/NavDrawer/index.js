import React from "react";
import {Button} from "react-bootstrap";
import * as Icons from "react-icons/all";

class NavDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
        }
    }

    handleClick = () => {
        const {isExpanded} = this.state;
        this.setState({
            isExpanded: !isExpanded,
        });
    };

    renderDrawer = () => {
        const {isExpanded} = this.state;
        if (isExpanded) {
            return (
                <div style={overlayStyle}>
                    <div onClick={this.handleClick}>
                        <Icons.FaWindowClose style={Object.assign(iconStyle, {float: "right"})}/>
                    </div>
                </div>
            );
        }
    };

    render() {
        return (
            <div className="fixed-top">
                <div style={alignRightStyle}>
                    <div style={drawerStyle}>
                        {this.renderDrawer()}
                        <div onClick={this.handleClick}>
                            <Icons.TiThMenu style={Object.assign(iconStyle, {margin: "1 em"})}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const overlayStyle = {
    position: "relative",
    backgroundColor: "#666868",
    height: "100vh",
    width: "300px",
};
const iconStyle = {
    height: "1.5em",
    width: "1.5em                ",
};

const drawerStyle = {
    marginLeft: "auto",
};

const alignRightStyle = {
    display: "flex",
};

export default NavDrawer;
