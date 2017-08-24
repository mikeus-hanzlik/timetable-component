import React, {Component} from "react";
import SyncData from "./SyncData";

/**
 * This component is responsible for generation of JSON data which will be appended to DOM hidden input element and sent to a server with
 * the rest of the form values.
 */
class FormData extends Component {

    render() {
        return (
            <input type="hidden" name="tableData" value={JSON.stringify(SyncData.getIntervalsFromMatrix(this.props.componentState))}/>
        );
    }
}

export default FormData