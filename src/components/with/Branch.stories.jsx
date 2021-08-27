import React from 'react'
import BranchLoadingButton from './branch'

export default {
    title: 'Example/branch',
    component: BranchLoadingButton,
}

const Template = (args) => (<BranchLoadingButton {...args}>안녕하세요3</BranchLoadingButton>);

export const 기본설정 = Template.bind({});
기본설정.args = {
    isLoading: false,
}

export const isLoading_예제 = Template.bind({});
isLoading_예제.args = {
    isLoading: true,
}