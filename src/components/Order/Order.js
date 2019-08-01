import React from 'react';

import classes from './Order.css';

const order = props => {
    const ingredients = [];

    // alternative to Object.Keys... inside Burger.js
    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName, // the attribute name
                amount: props.ingredients[ingredientName], // the value of the attribute
            }
        )
    }

    const ingredientsOutput = ingredients.map(ingredient => {
        return <span
            style={{
                display: 'block',
                textTransform: 'capitalize',
                border: '1px solid #ccc',
                margin: '.8rem 0',
                padding: '.5rem'
            }}
            key={ingredient.name}>{ingredient.name} ({ingredient.amount})&emsp;</span>
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price: <strong>USD {parseFloat(props.price).toFixed(2)}</strong></p>

        </div>
    )
};

export default order;