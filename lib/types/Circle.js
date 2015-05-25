import React from 'react';
import Radium from 'Radium';

const size = 45;

const style = {
    item: {
        display: 'inline-block',
        margin: '0.5em'
    },
    itemFlat: {
        background: '#7d7e7d'
    },
    activeItemNumber: {
        background: 'linear-gradient(to bottom, #f9c667 0%,#f79621 100%)'
    },
    activeFlatItemNumber: {
        background: '#F8A50A'
    },
    doneItemNumber: {
        background: 'linear-gradient(to bottom, #a4b357 0%,#75890c 100%)'
    },
    doneFlatItemNumber: {
        background: '#81941F'
    },
    arrow: {
        marginBottom: '-5px'
    },
    number: {
        display: 'inline-block',
        height: size,
        width: size,
        borderRadius: size,
        lineHeight: size + 'px',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #7d7e7d 20%,#565656 100%)',
        textShadow: 'rgba(0, 0, 0, 0.3) 1px 1px 0px',
        boxShadow: '0px 1px 5px rgba(0,0,0,0.2)',
        marginRight: '0.5em'
    },
    text: {
        color: '#706D6D',
        fontWeight: 300,
        fontSize: '0.8em',
        padding: '0.1em'
    },
    status: {
        color: '#706D6D',
        fontWeight: 700,
        fontSize: '0.8em',
        padding: '0.1em'
    },
    labels: {
        display: 'inline-block'
    }
};

@Radium.Enhancer
class Circle extends React.Component {
    render() {
        const {item, flat, idx} = this.props;

        var status = 'This Step is Undone.';

        if (item.isActive) {
            status = 'This Step is Active.';
        } else if (item.isDone) {
            status = 'This Step is Done.';
        }

        return (
            <div style={[
                    style.item
                ]}>
                <div style={[
                    style.number,
                    flat && style.itemFlatNumber,
                    item.isActive && (flat ? style.activeFlatItemNumber : style.activeItemNumber),
                    item.isDone && (flat ? style.doneFlatItemNumber : style.doneItemNumber)
                ]}>{idx + 1}</div>
                <div style={style.labels}>
                    <div style={style.text}>{item.text}</div>
                    <div style={style.status}>{status}</div>
                </div>
            </div>
        );
    }
}

export default Circle;
