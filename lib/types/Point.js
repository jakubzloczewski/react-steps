import React from 'react';
import classNames from 'classnames';

import styles from './Point.less';

export default class Point extends React.Component {
    render() {
        const {item, flat, idx, isFirst, isLast, style} = this.props;

        return (
            <div className={styles.item} style={style}>
                <div className={classNames(styles.outline, {
                    [styles.outlineFirst]: isFirst,
                    [styles.outlineLast]: isLast
                })}/>

                <div className={styles.numberOutline}>
                    <div className={classNames(
                        styles.number, {
                            [styles.itemFlatNumber]: flat,
                            [styles.activeFlatItemNumber]: item.isActive && flat,
                            [styles.activeItemNumber]: item.isActive && !flat,
                            [styles.doneFlatItemNumber]: item.isDone && flat,
                            [styles.doneItemNumber]: item.isDone && !flat
                        })}>{idx + 1}</div>
                </div>

                <div className={styles.text}>{item.text}</div>
            </div>
        );
    }
}
