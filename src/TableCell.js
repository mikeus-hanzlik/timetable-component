import React, {Component} from "react";

class TableCell extends Component {
    render() {
        return (
            <td data-day={this.props.day} data-hour={this.props.hour} data-minute={this.props.minute}/>
        )
    }
}

export default TableCell