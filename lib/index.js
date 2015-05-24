"use strict";
import React from 'react'

import Circle from './types/Circle.js';
import Basic from './types/Basic.js';

var style = {
    main: {
        display: 'flex',
        flexWrap: 'wrap',
        fontFamily: '"Helvetica Neue", Helvetica, Arial',
        fontWeight: 800,
        color: '#f3f3f3'
    }
};

class Steps extends React.Component {
    render() {
        const {flat, type} = this.props;
        const items = this.props.items.map((item, idx) => {
            if (type === 'circle') {
                return <Circle key={idx} item={item} flat={flat} idx={idx}/>;
            } else {
                return <Basic key={idx} item={item} flat={flat} idx={idx}/>;
            }
        });

        return (
            <div style={style.main}>
                {items}
            </div>
        );
    }
}

export default Steps;
