import React, {Component} from "react";
import "./styles/styles.css";

class TimeTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            aaa: ''
        };
    }

    render() {
        // const hours = 24;
        // let self = this;

        return (
            <div className="timePeriodSelector">
                <table>
                    <thead>
                        <tr>
                            <td className="corner"/>

                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default TimeTable;
