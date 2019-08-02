import React from 'react';

import classes from './Input.css';

const input = props => {
    let inputElement = null;


    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={classes.InputElement}
                {...props.elementConfig}
                defaultValue={props.value} />
            break;
        case ('textarea'):
            inputElement = <textarea
                className={classes.InputElement}
                {...props.elementConfig}
                defaultValue={props.value} />
            break;
        case ('select'):
            const selectOptions = props.elementConfig.options.map(option => {
                return <option key={option.value} value={option.value}>{option.displayValue}</option>
            });

            inputElement = <select className={classes.InputElement}>
                {selectOptions}
            </select>
            break;
        default:
            inputElement = <input
                className={classes.InputElement}
                {...props.elementConfig}
                defaultValue={props.value} />
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;