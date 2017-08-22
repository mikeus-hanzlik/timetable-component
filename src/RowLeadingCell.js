import React, {Component} from "react";
import Util from "./Util";

class RowLeadingCell extends Component {

    constructor(props) {
        super(props);

        this.day = props.day;
        this.handleClick = props.handleClick;
    }

    render() {
        return (
            <th className="day" onClick={this.handleClick}>{Util.getDayName(this.day)}</th>
        );
    }
}

export default RowLeadingCell