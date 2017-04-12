import classNames from 'classnames';

function mergeStyles(styleClassNames,  propStyles = {}, stylesObj = {}, otherStyle = {}) {
    const classNamesObj = Object.keys(stylesObj)
        .map(key => stylesObj[key] ? styleClassNames[key] : null);
    const style = Object.keys(stylesObj)
        .reduce((acc, key) => stylesObj[key] ? {...acc, ...propStyles[key]} : acc, {});

    return {
        style: {...style, ...otherStyle}, 
        className: classNames(classNamesObj),
    };
}

export {mergeStyles}