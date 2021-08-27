import React from 'react';
import withStyles, {css} from '../../css/withStyles'

export default function(defaultMessage = 'ERROR') {
    return (WrappedComponent) => {
        const {displayName, name: componentName} = WrappedComponent;
        const wrappedComponentName = displayName || componentName;

        function ComponentWithError({
            hasError,
            errorMessage,
            styles,
            ...props
        }){
            return (
                <React.Fragment>
                    <WrappedComponent {...props}/>
                    {hasError && <div {...css(styles.error)}>{errorMessage}</div>}
                </React.Fragment>
            );
        };

        ComponentWithError.defaultProps = {
            errorMessage: defaultMessage,
        }

        ComponentWithError.displayName = `withError(${wrappedComponentName})`;

        return withStyles(({color}) => ({
            error: {
                color: color.error,
            },
        }))(ComponentWithError)
    }
}