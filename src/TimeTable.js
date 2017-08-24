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

        this.state = {componentState: TimeTable.initState()};

        this.handleCellClick = this.handleCellClick.bind(this);
        this.handleHeaderCellClick = this.handleHeaderCellClick.bind(this);
        this.handleRowLeadingCellClick = this.handleRowLeadingCellClick.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    render() {
        let tableHeaderItems = Util.generateSequence(hours).map((hour) =>
            <HeaderCell
                key={hour}
                hour={hour}
                handleHeaderCellClick={R.curry(this.handleHeaderCellClick)(hour)}/>
        );

        let tableRows = Util.generateSequence(days).map((day) =>
            <TableRow
                key={day}
                day={day}
                handleCellClick={R.curry(this.handleCellClick)}
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

    static initState() {
        return Util.generateMatrix(days, hours);
    }

    handleCellClick(day, hour, e) {
        let updatedMatrix = Util.updateMatrixCell(this.state.componentState, day, hour, (hourState) => !hourState);

        this.updateState(updatedMatrix);
    }

    handleHeaderCellClick(hour, e) {
        let updatedMatrix = Util.updateMatrixColumn(this.state.componentState, hour, (dayState) => !dayState);

        this.updateState(updatedMatrix);
    }

    handleRowLeadingCellClick(day, e) {
        let updatedMatrix = Util.updateMatrixRow(this.state.componentState, day, (hourState) => !hourState);

        this.updateState(updatedMatrix);
    }

    updateState(matrix) {
        this.setState({componentState: matrix});
    }
}

export default TimeTable;
