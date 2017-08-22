import React, {Component} from "react";
import TableRow from './TableRow';
import "./styles/styles.css";
import Util from "./Util";
import HeaderCell from "./HeaderCell";

class TimeTable extends Component {
    render() {
        const hours = 24;
        const days = 7;
        const intervalsPerHour = 1;

        let tableHeaderItems = Util.generateSequence(hours).map((hour) =>
            <HeaderCell intervalsPerHour={intervalsPerHour} hour={hour} key={hour}/>
        );

        let tableRows = Util.generateSequence(days, 1).map((day) =>
            <TableRow intervalsPerHour={intervalsPerHour} day={day} key={day}/>
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
                        <tr/>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TimeTable;
