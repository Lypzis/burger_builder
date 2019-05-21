import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';

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
                <Burger />
                <p>Build Controls</p>
            </Aux>
        );
    }
}

export default BurgerBuilder;