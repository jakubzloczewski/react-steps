"use strict";

import React from 'react'
import style from './index.less';

class Steps extends React.Component {
    render() {
        const items = this.props.items.map((item, idx) => {
            var className = '';

            className += item.isActive ? 'active' : '';
            className += item.isDone ? 'done' : '';

            return (
                <li key={idx} href="#" className={className}>
                    <span className="counter">{idx + 1}</span>
                    {item.text}
                    <span className="flag"/>
                </li>
            );
        });

        return (
            <div className={style.main}>
                <ul className={this.props.flat ? ' flat' : ''}>
                    {items}
                </ul>
            </div>
        );
    }
}

export default Steps;
