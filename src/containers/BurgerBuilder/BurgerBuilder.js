import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './BurgerBuilder.css';

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,

        // local UI state, it is not necessary to be managed by redux
        purchasing: false
    };


    componentDidMount() {
        this.props.onInitIngredients(); // executes initialization on componentdidmount
    }

    /**
     * Updates the 'purchasable' attribute of the state to true if total value of ingredients
     * is greater than 0, else remains or is returned to false;
     */
    updatePurchaseState = ingredients => {
        const total = Object.keys(ingredients)
            .map(ingredientKey => ingredients[ingredientKey]) //maps keys, returning the specific ingredient values from const 'ingredients'
            .reduce((total, ingreditentValue) => total + ingreditentValue, 0);  // then sums it to a total. initial value is 0

        return total > 0; // true if at least 1 ingredient is added to the burger
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
        this.props.onInitPurchase();

        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = { ...this.props.ings };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0; // replaces values with true or false if it attends the condition
        }

        let orderSummary = null;

        // this is hadled with props, outside the state now
        let burger = this.props.error ? <p>Sorry, something is preventing the page from loading... :(</p> : <Spinner />

        if (this.props.ings) {
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseContinue={this.purchaseContinueHandler}
                purchaseCancel={this.purchaseCancelHandler} />;

            burger = <Aux>
                <div className={classes.BurgerBuilder}>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        disabled={disabledInfo}
                        price={this.props.price}
                        purchasable={this.updatePurchaseState(this.props.ings)} // in this case, I want it to automatically execute at render
                        ordered={this.purchaseHandler}
                        addIngredient={this.props.onAddIngredient}
                        removeIngredient={this.props.onRemoveIngredient} />
                </div>
            </Aux>;
        }

        // DEPRECATED
        //if (this.state.loading) orderSummary = <Spinner />;
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

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: ingredientName => dispatch(actions.addIngredient(ingredientName)),
        onRemoveIngredient: ingredientName => dispatch(actions.removeIngredient(ingredientName)),

        // init ingredients from server
        onInitIngredients: () => dispatch(actions.initIngredients()),

        // 
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));