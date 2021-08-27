import React from 'react'
import withLoading from './withLoading'
import lifecycle from 'recompose/lifecycle'
import compose from 'recompose/compose'

function Page({content})
{

    //content.map((list) => console.log(content));
    //const contact = JSON.parse(content); 
    console.log(typeof content);
    console.log(content);
    let data = '';
    if(content){
        data = content.map((list) => <div>{list.sampleNm}</div>)
    }
    return (
        <div>
            페이지가 로딩이 완료되었습니다.
            {data}
        </div>
    );
}

export const withLoadData = lifecycle({
    state: {isLoading: true, content: ''},
    componentDidMount: function(){ //render() 함수가 jsx를 화면에 그린 이후에 호출되는 함수입니다. 
        if(this.props.loadData){
            this.props.loadData().then(content => this.setState({isLoading: false, content}));
        }
    },
})

export const PageWithLoadData = withLoadData(Page);
export const PageWithLoadDataAndLoading = compose(withLoadData, withLoading('서버 요청 중'))(Page);