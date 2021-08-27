import React from 'react'
import { PageWithLoadData, PageWithLoadDataAndLoading } from './Page'

export default {
    title: 'Example/lifecycle',
    component: PageWithLoadData,
}

const Template = (args) => <PageWithLoadData {...args} />;
const Template2 = (args) => <PageWithLoadDataAndLoading {...args} />;

export const 기본_예제 = Template.bind({});
기본_예제.args ={
    loadData: ()=> fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => { return response.json()})
                                                                        .then((data) => {console.log(data); return data.title}),
}

export const 로딩메세지_예제 = Template2.bind({});
로딩메세지_예제.args ={
    loadData: ()=> fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => { return response.json()})
                                                                        .then((data) => {console.log(data); return data.title}),
}


