import React from 'react'
import withState from 'recompose/withState'
import Button from '../button/index'


//stateName은 state를 전달할 프로퍼티 이름이고, stateUpdater는 state를 변경할 수 있는 콜백 함수 프로퍼티 이름이며, initialState는 state의 초기값입니다.
//withState() 함수를 사용하여 카운트를 관리하는 state 구현하기
//state의 이름으로 count
//숫자를 증가시킬 함수 이름으로 setCount
//state의 초기값 0을 인자로 전달하여 익스포트하면 자동으로 하이어오더 컴포넌트 생성 함수가 만들어집니다.
export const withCountState = withState('count', 'setCount', 0);



function Counter({count, setCount}){
    const increaseCount = () => setCount( value => value + 1);//현재 count값에 1을 더합니다.
    return (
        <div>
            현재 카운트: {count}
            <Button onPress={increaseCount}>카운트</Button>
        </div>
    );
}

export const CounterWithCountState = withCountState(Counter);
