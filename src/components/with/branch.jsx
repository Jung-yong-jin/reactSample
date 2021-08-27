import React from 'react'
import branch from 'recompose/branch'
import Button from '../button/index'

function isLoading(props){
    return props.isLoading;
}

function LoadingButton(props){
    return <Button disabled>로딩중</Button>
}


//export default branch(
//    isLoading,
//    () => LoadingButton,
//    () => () => <Button disabled>로딩중...</Button>,
//)(Button)


export default branch(
    ({isLoading}) => isLoading,
    () => () => <Button disabled>로딩중</Button>,
    () => () => <Button disabled>로딩중...</Button>,
)(Button)

//isLoading() 함수가 참값을 반환하면 props.isLoading(로딩 메시지)를, 로딩이 완료되면 LoadingButton 컴포넌트를 반환합니다.