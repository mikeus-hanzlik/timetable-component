import React from 'react';
import ReactDOM from 'react-dom';
import TimeTable from "../TimeTable";
import TableHeaderCell from "../TableHeaderCell";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimeTable/>, div);
});

it('header cell rendered', () => {
    const element = document.createElement('tr');
    ReactDOM.render(<TableHeaderCell intervalsPerHour="2" hour="3"/>, element);
    expect(element.innerHTML).toEqual('<th data-reactroot="" colspan="2">3</th>');
});
