import React from 'react';
import ReactDOM from 'react-dom';
import TimeTable from './TimeTable';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TimeTable />, document.getElementById('root'));
registerServiceWorker();
