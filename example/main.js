"use strict";

import React from 'react';
import {render} from 'react-dom';
import Steps from 'react-steps';

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

class Example extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor : '#fff',
                borderRadius : '5px',
                padding : '1em',
                margin : '1em'
            }}>
                {this.props.children}
            </div>
        );
    }
}

class Code extends React.Component {
    render() {
        return (
            <div style={{
                margin : '1em'
            }}>
                <pre style={{ padding : 0}}>
                    {this.props.children}
                </pre>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        const {data} = this.props;

        return (
            <div>
                <Example>
                    <Code>{"<Steps items={data}/>"}</Code>
                    <Steps items={data}/>
                </Example>

                <Example>
                    <Code>{"<Steps items={data} flat={true}/>"}</Code>
                    <Steps items={data} flat={true}/>
                </Example>

                <Example>
                    <Code>{"<Steps items={data} type={'circle'}/>"}</Code>
                    <Steps items={data} type={'circle'}/>
                </Example>

                <Example>
                    <Code>{"<Steps items={data} type={'circle'} flat={true}/>"}</Code>
                    <Steps items={data} type={'circle'} flat={true}/>
                </Example>

                <Example>
                    <Code>{"<Steps items={data} type={'point'}/>"}</Code>
                    <Steps items={data} type={'point'}/>
                </Example>

                <Example>
                    <Code>{"<Steps items={data} type={'point'} flat={true}/>"}</Code>
                    <Steps items={data} type={'point'} flat={true}/>
                </Example>
            </div>
        );
    }
}

render(<App data={json}/>, document.getElementById("app"));
