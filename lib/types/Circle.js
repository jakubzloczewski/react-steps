import React from 'react';
import classNames from 'classnames';

import styles from './Circle.less';

const size = 45;

export default class Circle extends React.Component {
    render() {
        const {item, flat, idx} = this.props;

        var status = 'This Step is Undone.';

        if (item.isActive) {
            status = 'This Step is Active.';
        } else if (item.isDone) {
            status = 'This Step is Done.';
        }

        return (
            <div className={styles.item}>
                <div className={classNames(styles.number, {
                    [styles.itemFlatNumber]: flat,
                    [styles.activeFlatItemNumber]: flat && item.isActive,
                    [styles.activeItemNumber]: !flat && item.isActive,
                    [styles.doneFlatItemNumber]: flat && item.isDone,
                    [styles.doneItemNumber]: !flat && item.isDone
                })}>{idx + 1}</div>
                <div className={styles.labels}>
                    <div className={styles.text}>{item.text}</div>
                    <div className={styles.status}>{status}</div>
                </div>
            </div>
        );
    }
}
