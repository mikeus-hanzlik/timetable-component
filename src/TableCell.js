import React, {Component} from "react";
import Util from "./Util";
import R from 'ramda';

class TableCell extends Component {

    constructor(props) {
        super(props);

        this.getTitle = this.getTitle.bind(this);

        this.day = props.day;
        this.hour = props.hour;
        this.handleCellClick = props.handleCellClick(props.day, props.hour);
    }

    getTitle() {
        let padTime = R.partialRight(Util.pad, [2, '0']);

        return `${Util.getDayName(this.day)}, ${padTime(this.hour)}:00`;
    }

    render() {
        return (
            <td
                className={this.props.cellState ? 'active' : null}
                onClick={this.handleCellClick}
                title={this.getTitle()}/>
        );
    }
}

export default TableCell