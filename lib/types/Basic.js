import React from 'react';
import classNames from 'classnames';
import styles from './Basic.less';
import {mergeStyles} from '../utils';

class Arrow extends React.Component {
    render() {
        var {width, height} = this.props;
        return (
            <svg {...mergeStyles(styles, this.props.styles, {arrow: true})} width={width || 14} height={height || 40} viewBox="0 0 14 40">
                <g transform="translate(-19.367715,-906.67177)">
                    <a transform="matrix(0.4059671,0,0,0.43302802,-11.844235,491.13986)">
                        <path style={{fill: '#eeeeee', fillOpacity: 1, fillRule: 'evenodd', stroke: 'none'}}
                              d="m 85.618002,1052.2217 -8.735048,-0.029 26.205146,-46.2839 -26.205146,-46.31291 8.735048,0 26.205138,46.31291 z"/>
                    </a>
                </g>
            </svg>
        );
    }
}

export default class Basic extends React.Component {
    render() {
        const {item, flat, idx} = this.props;

        return (
            <div {...mergeStyles(styles, this.props.styles, {
                    item: true,
                    itemFlat: flat,
                    activeFlatItem: item.isActive && flat,
                    activeItem: item.isActive && !flat,
                    doneFlatItem: item.isDone && flat,
                    doneItem: item.isDone && !flat,
                })}>
                <span {...mergeStyles(styles, this.props.styles, {number: true})}>{idx + 1}</span>
                <Arrow width={14} height={30}/>
                <span {...mergeStyles(styles, this.props.styles, {text: true})}>{item.text}</span>
            </div>
        );
    }
}
