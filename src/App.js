import React, {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            aaa: ''
        };
    }

    render() {
        let self = this;

        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        self.setState({aaa: self._inputEl.value});
                    }}>
                        <input type="text" ref={(el) => self._inputEl = el}/>
                        <button>ok</button>
                    </form>
                </div>
                <span>{this.state.aaa}</span>
            </div>
        );
    }
}

export default App;
