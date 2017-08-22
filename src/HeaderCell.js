import React, {Component} from "react";

class HeaderCell extends Component {

    constructor(props) {
        super(props);

        this.hour = props.hour;
        this.intervalsPerHour = props.intervalsPerHour;
    }

    render() {
        return (
            <th colSpan={this.intervalsPerHour}>{this.hour}</th>
        );
    }
}

export default HeaderCell