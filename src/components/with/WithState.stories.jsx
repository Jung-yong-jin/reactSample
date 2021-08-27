import React from 'react'
import {CounterWithCountState} from './withState'

export default {
    title: 'Example/withCountState',
    component: CounterWithCountState,
}


const Template = (args) => <CounterWithCountState {...args} />;

export const 기본_예제 = Template.bind({});
기본_예제.args = {

}