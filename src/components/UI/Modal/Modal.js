import React from 'react';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';

const modal = props => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClose}/>
        <div className={[classes.Modal, props.show ? classes.show : classes.doNotShow].join(' ')}>
            {props.children}
        </div>
    </Aux>
);

export default modal;