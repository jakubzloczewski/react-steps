"use strict";

import React from 'react';
import Steps from './../index.js';

var json = [
    {
        "text": "First finished step",
        "isActive": false,
        "isDone": true
    },
    {
        "text": "Second finished step",
        "isActive": false,
        "isDone": true
    },
    {
        "text": "Active step",
        "isActive": true,
        "isDone": false
    },
    {
        "text": "Unfinished step",
        "isActive": false,
        "isDone": false
    }
];

class App extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <div>
                <Steps items={data}/>
                <Steps items={data} flat={true}/>
            </div>
        );
    }
}

React.render(<App data={json}/>, document.getElementById("app"));
