import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers'  //웹팩은 폴더의 index 파일을 자동으로 참조합니다.

export default initStates => createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(),
);
