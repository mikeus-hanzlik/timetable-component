import React from 'react';
import ReactDOM from 'react-dom';
import TimeTable from "../TimeTable";
import TableHeaderCell from "../HeaderCell";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimeTable/>, div);
});

it('header cell rendered', () => {
    const element = document.createElement('tr');
    ReactDOM.render(<TableHeaderCell intervalsPerHour="2" hour="3"/>, element);
    expect(element.getElementsByTagName('th').length).toEqual(1);
    expect(element.getElementsByTagName('th')[0].innerHTML).toEqual('3');
});
