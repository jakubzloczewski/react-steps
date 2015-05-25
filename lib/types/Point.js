import React from 'react';
import Radium from 'Radium';

const size = 30;
const border = '1px solid rgba(100,100,100,0.2)';
const outlineSize = 8;

const styles = {
    item: {
        position: 'relative',
        textAlign: 'center',
        display: 'inline-block',
        margin: '0.5em 0'
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
        position: 'relative',
        display: 'inline-block',
        top: outlineSize / 2,
        height: size,
        width: size,
        borderRadius: size,
        lineHeight: size + 'px',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #7d7e7d 20%,#565656 100%)',
        textShadow: 'rgba(0, 0, 0, 0.3) 1px 1px 0px',
        boxShadow: '0px 1px 5px rgba(0,0,0,0.2)'
    },
    text: {
        color: '#706D6D',
        fontWeight: 700,
        fontSize: '0.7em',
        padding: '0.5em'
    },
    status: {
        color: '#706D6D',
        fontWeight: 700,
        fontSize: '0.8em',
        padding: '0.1em'
    },
    outline: {
        boxShadow: 'inset 0px 1px 0px 0px rgba(200,200,200,0.2),inset 0px 2px 0px 0px rgba(200,200,200,0.1)',
        display: 'block',
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        top: 10,
        height: 9,
        borderTop: border,
        borderBottom: border
    },
    numberOutline: {
        position: 'relative',
        zIndex: 2,
        boxShadow: 'inset 0px 1px 0px 0px  rgba(200,200,200,0.3),' +
        'inset 0px 2px 0px 0px  rgba(200,200,200,0.2),' +
        'inset 0px -1px 0px 0px rgba(200,200,200,0.3),' +
        'inset 0px -2px 0px 0px rgba(200,200,200,0.2)',
        background: '#fff',
        display: 'inline-block',
        textAlign: 'center',
        height: size + outlineSize,
        width: size + outlineSize,
        left: 'auto',
        right: 'auto',
        marginLeft: -(outlineSize / 2),
        marginTop: -(outlineSize / 2),
        borderRadius: size + outlineSize
    },
    outlineFirst: {
        borderLeft: border,
        borderBottomLeftRadius: 9,
        borderTopLeftRadius: 9
    },
    outlineLast: {
        borderRight: border,
        borderBottomRightRadius: 9,
        borderTopRightRadius: 9
    }
};

@Radium.Enhancer
class Point extends React.Component {
    render() {
        const {item, flat, idx, isFirst, isLast, style} = this.props;

        return (
            <div style={[ styles.item, style ]}>
                <div style={[ styles.outline, isFirst && styles.outlineFirst, isLast && styles.outlineLast ]}/>

                <div style={[ styles.numberOutline ]}>
                    <div style={[
                        styles.number,
                        flat && styles.itemFlatNumber,
                        item.isActive && (flat ? styles.activeFlatItemNumber : styles.activeItemNumber),
                        item.isDone && (flat ? styles.doneFlatItemNumber : styles.doneItemNumber)
                    ]}>{idx + 1}</div>
                </div>

                <div style={styles.text}>{item.text}</div>
            </div>
        );
    }
}

export default Point;
