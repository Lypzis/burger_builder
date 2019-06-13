import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

// Global error handler, which can wrapps any component using axios
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        // this needs to execute before everything else, that is why a constructor is used here
        constructor() {
            super();

            this.state = {
                error: null
            }

            // dynamically handles 'error state' if there was error while making a request
            // setting it to be the error returned, else is set to/remains null
            // sets error state to null, then returns request
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });

                return req;
            });

            // returns response, else, sets error state to the error ocurred
            this.resInterceptor = axios.interceptors.response.use(res => res, err => {
                this.setState({ error: err });
            });
        }

        // When this component is not needed, eject interceptors to free memory
        componentWillUnmount() {
            console.log('Will it unmount ?')
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return ( // render error modal, in case there is an error
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClose={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;