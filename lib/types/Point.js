import React from 'react';
import classNames from 'classnames';

import styles from './Point.less';
import {mergeStyles} from '../utils';

export default class Point extends React.Component {
    render() {
        const {item, flat, idx, isFirst, isLast, style} = this.props;

        return (
            <div {...mergeStyles(styles, this.props.styles, {item: true}, style)}>
                <div {...mergeStyles(styles, this.props.styles, {
                            outline: true,
                            outlineFirst: isFirst,
                            outlineLast: isLast
                        })}/>

                <div {...mergeStyles(styles, this.props.styles, {numberOutline: true})}>
                    <div {...mergeStyles(styles, this.props.styles, {
                            number: true,
                            itemFlatNumber: flat,
                            activeFlatItemNumber: item.isActive && flat,
                            activeItemNumber: item.isActive && !flat,
                            doneFlatItemNumber: item.isDone && flat,
                            doneItemNumber: item.isDone && !flat
                        })}>{idx + 1}</div>
                </div>

                <div {...mergeStyles(styles, this.props.styles, {text: true})}>{item.text}</div>
            </div>
        );
    }
}
