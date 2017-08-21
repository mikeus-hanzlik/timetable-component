import React, {Component} from "react";
import TableRow from './TableRow';
import "./styles/styles.css";
import Util from "./Util";

class TimeTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            aaa: ''
        };
    }

    render() {
        const hours = 24;
        const days = 7;

        let tableHeaderItems = Util.generateSequence(hours).map((hour) =>
            <th colSpan="4" data-day="0" data-hour={hour}>{hour}</th>
        );

        let tableRows = Util.generateSequence(days, 1).map((day) =>
            <TableRow day={day}/>
        );

        return (
            <div className="timePeriodSelector">
                <table>
                    <thead>
                    <tr>
                        <td className="corner"/>
                        {tableHeaderItems}
                    </tr>
                    </thead>
                    <tbody>
                    {tableRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TimeTable;
