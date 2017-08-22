import React, {Component} from "react";

class HeaderCell extends Component {

    constructor(props) {
        super(props);

        this.hour = props.hour;
        this.handleHeaderCellClick = props.handleHeaderCellClick;
    }

    render() {
        return (
            <th onClick={this.handleHeaderCellClick}>{this.hour}</th>
        );
    }
}

export default HeaderCell