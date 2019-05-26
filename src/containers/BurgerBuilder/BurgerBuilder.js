import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';

import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        purchased: true,
        totalPrice: 0
    };

    render() {

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <p>Build Controls</p>
            </Aux>
        );
    }
}

export default BurgerBuilder;