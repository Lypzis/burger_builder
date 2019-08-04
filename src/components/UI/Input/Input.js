import React from 'react';

import classes from './Input.css';

const input = props => {
    let inputElement = null;
    let validationError = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched)
        inputClasses.push(classes.Invalid);

    if (props.invalid && props.touched)
        validationError = <p className={classes.ValidationError}>Please enter a valid value!</p>

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                defaultValue={props.value} onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                defaultValue={props.value} onChange={props.changed} />
            break;
        case ('select'):
            const selectOptions = props.elementConfig.options.map(option => {
                return <option key={option.value} value={option.value}>{option.displayValue}</option>
            });

            inputElement = <select className={inputClasses.join(' ')} onChange={props.changed}>
                {selectOptions}
            </select>
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                defaultValue={props.value} onChange={props.changed} />
    }

    return (
        <div className={inputClasses.join(' ')}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
}

export default input;