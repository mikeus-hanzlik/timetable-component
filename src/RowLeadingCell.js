import React, {Component} from "react";
import Util from "./Util";

class RowLeadingCell extends Component {

    constructor(props) {
        super(props);

        this.day = props.day;
    }

    render() {
        return (
            <th className="day">{Util.getDayName(this.day)}</th>
        );
    }
}

export default RowLeadingCell