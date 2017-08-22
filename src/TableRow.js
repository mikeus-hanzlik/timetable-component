import React, {Component} from "react";
import Util from "./Util";
import TableCell from "./TableCell";
import RowLeadingCell from "./RowLeadingCell";

class TableRow extends Component {

    constructor(props) {
        super(props);

        this.intervalsPerHour = props.intervalsPerHour;
        this.day = props.day;
    }

    render() {
        const hours = 24;
        const minutesInHour = 60;
        let intervalsPerHour = this.intervalsPerHour;

        let generateIntervals = (day, hour) => Util.generateSequence(intervalsPerHour)
            .map((number) => number * (minutesInHour / intervalsPerHour))
            .map((interval) => <TableCell day={day} hour={hour} minute={interval} key={`${day}:${hour}:${interval}`}/>);

        let rowCells = Util.generateSequence(hours).map((hour) =>
            generateIntervals(this.day, hour)
        );

        return (
            <tr>
                <RowLeadingCell day={this.day} />
                {rowCells}
            </tr>
        );
    }
}

export default TableRow;