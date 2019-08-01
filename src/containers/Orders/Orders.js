import React, { Component } from 'react';

import axios from '../../axios';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                //console.log(res.data);
                // to turn multiple objects into one array
                const fetchedOrders = []; // this will hold order objects
                for (let key in res.data) {
                    fetchedOrders.push(
                        {
                            ...res.data[key], // this will distribute all attributes to the object being pushed
                            id: key     // and this will make sure that we won't lose its key
                        }
                    );
                }

                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(err => {
                this.setState({ loading: false });
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order =>
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                )}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);