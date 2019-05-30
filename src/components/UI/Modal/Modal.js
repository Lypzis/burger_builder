import React from 'react';

import classes from './Modal.css';

const modal = props => (
    <div className={[classes.Modal, props.show ? classes.show : classes.doNotShow].join(' ')}>
        {props.children}
    </div>
);

export default modal;