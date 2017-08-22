import React, {Component} from "react";
import Util from "./Util";
import R from 'ramda';

class TableCell extends Component {

    constructor(props) {
        super(props);

        this.toggleClass= this.toggleClass.bind(this);
        this.getTitle= this.getTitle.bind(this);

        this.state = {
            active: props.cellState,
        };

        this.day = props.day;
        this.hour = props.hour;
        this.handleCellClick = props.handleCellClick;
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    getTitle() {
        let padTime = R.partialRight(Util.pad, [2, '0']);

        return `${Util.getDayName(this.day)}, ${padTime(this.hour)}:00`;
    }

    render() {
        return (
            <td
                className={this.state.active ? 'active': null}
                onClick={this.handleCellClick(this.toggleClass)}
                title={this.getTitle()}/>
        );
    }
}

export default TableCell