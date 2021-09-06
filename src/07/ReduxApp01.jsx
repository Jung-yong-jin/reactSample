import React, {PureComponent} from 'react';
import {createStore} from 'redux'; //리덕스의createStore() 함수를 임포트했습니다.
import {Provider} from 'react-redux';//react-redux의 Provider 컴포넌트를 사용하여 스토어 데이터를 하위 컴포넌트에 전달합니다.

//주방장
const reducer = (state, action) =>{
    console.log(state,action.type);
    const {type, payload} = action;
    switch(type){
        case 'SET_LOADING': {
            return {...state, loading: payload};
        }

        case 'RESET_LOADING': { //type이 RESET_LOADING인 경우 스토어 데이터의 loading값을 무조건 false로 변경합니다.
            return {...state, loading: false};
        }

        case 'SET_USER': { //type이 SET_USER인 경우 payload의 값으로 user의 값을 변경합니다.
            return {...state, user: payload};
        }
        default:
            return state;
    }
}

class ReduxApp extends PureComponent {
    store = createStore(
        //state => state,
        reducer,
        {loading: false, name: '두잇 리액트'},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ); //리덕스를 createStore() 함수의 인자로 전달합니다.

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

export default ReduxApp;