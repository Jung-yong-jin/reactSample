import React, {Children, Component} from 'react';
import PropTypes from 'prop-Types';

class ThemeProvider extends Component {

    static childContextTypes = {
        theme: PropTypes.object,
    }

    getChildContext(){
        return {
            theme: {
              button: {
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px #ddd',
                fontSize: 20,
              },
              color: {
                primary: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
                secondary: 'linear-gradient(to right, #f7971e, #ffd200)',
              },
            },
        }
    };

    render() {
        return Children.only(this.props.children);
    }
}

export default ThemeProvider;