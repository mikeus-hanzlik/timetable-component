import React, {Component} from "react";
import Util from "./Util";
import TableCell from "./TableCell";

class TableRow extends Component {
    render() {
        const hours = 24;
        const minutesInHour = 60;
        const intervalsPerHour = 4;

        let generateIntervals = (day, hour) => Util.generateSequence(intervalsPerHour)
            .map((number) => number * (minutesInHour / intervalsPerHour))
            .map((interval) =>
                <TableCell day={day} hour={hour} minute={interval}/>
            );

        let rowCells = Util.generateSequence(hours).map((hour) =>
            generateIntervals(this.props.day, hour)
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