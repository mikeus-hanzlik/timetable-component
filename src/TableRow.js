import React, {Component} from "react";
import Util from "./Util";
import TableCell from "./TableCell";
import RowLeadingCell from "./RowLeadingCell";

class TableRow extends Component {

    constructor(props) {
        super(props);

        this.day = props.day;
        this.handleCellClick = props.handleCellClick;
        this.handleRowLeadingCellClick = props.handleRowLeadingCellClick;
    }

    render() {
        const hours = 24;

        let rowCells = Util.generateSequence(hours).map((hour) =>
            <TableCell
                key={`${this.day}:${hour}`}
                day={this.day}
                hour={hour}
                handleCellClick={this.handleCellClick}
                cellState={this.props.componentState[this.day][hour]}
            />
        );

        return (
            <tr>
                <RowLeadingCell day={this.day} handleClick={this.handleRowLeadingCellClick}/>
                {rowCells}
            </tr>
        );
    }
}

export default TableRow;