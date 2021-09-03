import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import {Consumer} from './LoadingProviderWithNewContext';

function ButtonWithNewConsumer({ children }){
    return (
        <React.Fragment>
            <Consumer>
                {
                    (contextValue) => (
                        <Button>{contextValue.loading ? '로딩 중' : children}</Button>
                    )
                }
            </Consumer>
        </React.Fragment>
    );
}