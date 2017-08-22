import React, {Component} from "react";
import TableRow from './TableRow';
import "./styles/styles.css";
import Util from "./Util";
import HeaderCell from "./HeaderCell";
import R from 'ramda';


// will be moved to config
const hours = 24;
const days = 7;


class TimeTable extends Component {

    constructor(props) {
        super(props);

        this.state = {componentState: this.initState()}
    }

    render() {
        let tableHeaderItems = Util.generateSequence(hours).map((hour) =>
            <HeaderCell
                key={hour}
                hour={hour}
                handleHeaderCellClick={R.curry(this.handleHeaderCellClick)(hour)}/>
        );

        let tableRows = Util.generateSequence(days, 1).map((day) =>
            <TableRow
                key={day}
                day={day}
                handleCellClick={R.curry(this.handleCellClick)(day)}
                handleRowLeadingCellClick={R.curry(this.handleRowLeadingCellClick)(day)}
                {...this.state}
            />
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

    initState() {
        let hoursCollection = {};
        Util.generateSequence(days, 1).map((day) => {
            hoursCollection[day] = {};
            Util.generateSequence(hours).map((hour) =>
                hoursCollection[day][hour] = false
            );
        });

        return hoursCollection;
    }

    handleCellClick(day, action, e) {
        action();
    }

    handleHeaderCellClick(hour, e) {
        // let newState = this.state.componentState.map((day) => {
        //     return day.map((hour) => !hour)
        // });
        //
        // this.setState({ componentState: newState });
    }

    handleRowLeadingCellClick(day, e) {
        // this.state.componentState[day] = this.state.componentState[day].map((hourState) => !hourState);
        //
        // this.setState({ componentState: this.state.componentState });
    }
}

export default TimeTable;
