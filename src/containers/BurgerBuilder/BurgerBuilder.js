import React, { Component } from 'react';

import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            
        },
        purchased: true,
        totalPrice: 0
    };

    render() {

        return (
            <Aux>
                <p>A Burger</p>
                <p>Build Controls</p>
            </Aux>
        );
    }
}

export default BurgerBuilder;