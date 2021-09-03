import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import App from '../components/main/Main';
import Search from '../components/search/Search';
class Root extends Component{
    render() {
        return (
            <Router>

                <Route exact path="/" component={App} />
                <Switch>
                    <Route path="/search/:search" component={Search} />
                </Switch>
            </Router>
        );
    }
}


export default Root;