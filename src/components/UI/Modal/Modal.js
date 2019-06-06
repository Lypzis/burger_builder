import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    /*
    componentWillUpdate() {
        console.log('[Modal.js] will update')
    } */

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClose} />
                <div className={[classes.Modal, this.props.show ? classes.show : classes.doNotShow].join(' ')}>
                    {this.props.children}
                </div>
            </Aux >
        );
    }
};

export default Modal;