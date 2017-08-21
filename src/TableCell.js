import React, {Component} from "react";
import Util from "./Util";

class TableCell extends Component {
    render() {
        const minutesInHour = 60;
        const intervalsPerHour = 4;

        let intervals = Util.generateSequence(intervalsPerHour)
            .map((number) => number * (minutesInHour / intervalsPerHour))
            .map((interval) =>
                <td data-day={this.props.day} data-hour={this.props.hour} data-minute={interval}/>
            );

        return (
            <div>
                {intervals}
            </div>
        )
    }
}

export default TableCell