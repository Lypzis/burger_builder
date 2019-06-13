import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

//Global constants are named entirely in capital letters
const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .6,
    meat: 1.4,
    bacon: .8
};

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    // setting up state with data from server
    async componentDidMount() {
        try {
            const response = await axios.get('/ingredients.json');

            this.setState({
                ingredients: {
                    salad: response.data.salad,
                    bacon: response.data.bacon,
                    cheese: response.data.cheese,
                    meat: response.data.meat
                }
            });
        } catch (err) {
            //console.log(err);

            this.setState({ error: true });
        }
    }

    /**
     * Updates the 'purchasable' attribute of the state to true if total value of ingredients
     * is greater than 0, else remains or is returned to false;
     * @param {Object} updatedIngredients Up to date copy of this.state.ingredients;
     */
    updatePurchaseState = updatedIngredients => {
        const total = Object.keys(updatedIngredients)
            .map(ingredientKey => updatedIngredients[ingredientKey]) //maps keys, returning the specific ingredient values from const 'ingredients'
            .reduce((total, ingreditentValue) => total + ingreditentValue, 0);  // then sums it to a total. initial value is 0

        this.setState({ purchasable: total > 0 }); // true if at least 1 ingredient is added to the burger
    }

    /**
     * Updates one of the 'ingredients' amount
     * @param {object} ingredients
     * @param {float} totalPrice
     * @param {string} type
     */
    updateBurger = (ingredientsCount, totalPrice, type) => {
        const updatedIngredients = {
            ...this.state.ingredients // fill this object with this.state.ingredients attributes
        };                            // it becomes a copy of the current state

        updatedIngredients[type] = ingredientsCount; // update the respective ingredient value

        this.setState({
            ingredients: updatedIngredients,
            totalPrice
        });

        this.updatePurchaseState(updatedIngredients);
    }

    /**
     * Adds an ingredient
     * @param {string} type 
     */
    addIngredientHandler = type => {
        const updatedCount = this.state.ingredients[type] + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.updateBurger(updatedCount, newPrice, type);
    }

    /**
     * Removes an ingredient
     * - Has prevention against negative values.
     * @param {string} type 
     */
    removeIngredientHandler = type => {
        const updatedCount = this.state.ingredients[type] - 1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        if (updatedCount >= 0) // ...or equals 0 ??? arrays start on 0, duh!
            this.updateBurger(updatedCount, newPrice, type);
    }

    /**
     * Sets 'purchasing' to true
     */
    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    /**
     * Sets 'purchasing' to true
     */
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        // alert('You Continue! :D');
        this.setState({ loading: true });

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice.toFixed(2), // this should be checked in backend to see if it is not being manipulated
            customer: {
                name: 'Victor Piccoli',
                address: {
                    street: 'Teststret 1',
                    zipCode: '12345',
                    country: 'Brazil'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', order) // firebase syntax requires '.json', you can simulate an error by removing it :D
            .then(response => {
                console.log(response);

                this.setState({ loading: false, purchasing: false });
            }).catch(err => {
                console.log(err);

                this.setState({ loading: false, purchasing: false });
            });
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0; // replaces values with true or false if it attends the condition
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>Sorry, something is preventing the page from loading... :(</p> : <Spinner />

        if (this.state.ingredients) {
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseContinue={this.purchaseContinueHandler}
                purchaseCancel={this.purchaseCancelHandler} />;

            burger = <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler} />

            </Aux>;
        }

        if (this.state.loading) orderSummary = <Spinner />;

        return ( // The Modal and its related content will only if purchasing is true
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);