import React, {Component} from "react";
import Util from "./Util";
import TableCell from "./TableCell";

class TableRow extends Component {
    render() {
        const hours = 24;

        let rowCells = Util.generateSequence(hours).map((hour) =>
            <TableCell day={this.props.day} hour={hour}/>
        );
        return (
            <tr>
                <th className="day" data-day={this.props.day} data-hour="all">{this.props.day}</th>
                {rowCells}
            </tr>
        )
    }
}

export default TableRow;