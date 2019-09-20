import React, { Component } from 'react';
import {connect} from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

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
        purchasing: false,
        loading: false,
        error: false
    };

    // setting up state with data from server
    async componentDidMount() {
/*
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
        }*/
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
        // alert('You Continue! :D');
        /*
        
            */
        const queryParams = []; // all ingredients(name=value) will be pushed as URI components into this array

        for (let i in this.props.ings) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]));
        }
        queryParams.push('price=' + this.state.totalPrice); //also passed as a query parameter
        const queryString = queryParams.join('&'); // then joined in a string separated by '&'

        this.props.history.push(
            {
                pathname: '/checkout',
                search: `?${queryString}` // and passed here
            }
        );
    }

    render() {
        const disabledInfo = { ...this.props.ings };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0; // replaces values with true or false if it attends the condition
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>Sorry, something is preventing the page from loading... :(</p> : <Spinner />

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

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: ingredientName => dispatch({
            type: actionTypes.ADD_INGREDIENT, 
            payload: {ingredientName: ingredientName}
        }),
        onRemoveIngredient: ingredientName => dispatch({
            type: actionTypes.REMOVE_INGREDIENT,
            payload: {ingredientName: ingredientName}
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));