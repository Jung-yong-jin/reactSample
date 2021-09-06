import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';//react-redux의 Provider 컴포넌트를 사용하여 스토어 데이터를 하위 컴포넌트에 전달합니다.
import configureStore from './configureStore';

class ReduxAppTow extends PureComponent {
    store = configureStore({loading: false, name: '두잇 리액트02'});

    componentDidMount(){
        //종업원
        this.store.dispatch({
            type:'SET_LOADING',
            payload: true,
        });

        this.store.dispatch({
            type: 'RESET_LOADING',
        });// RESET_LOADING에 해당하는 액션을 호출합니다.

        
        this.store.dispatch({
            type: 'SET_USER',
            payload:{name: 'Park', age: 20},
        });//SET_USER에 해당 하는 액션을 payload와 함께 호출합니다.
    }

    render() {
        return (
            <Provider store={this.store}>
                리덕스 예제 
            </Provider>
        );
    }
}

export default ReduxAppTow;