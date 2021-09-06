import React from 'react';
import ReduxApp from './ReduxApp01'
import ReduxAppTow from './ReduxApp02'

export default  {
    title:"Example/redux",
    component: ReduxApp,
}

const Template = (args) => <ReduxApp {...{args}} />
const TemplateTow = (args) => <ReduxAppTow {...{args}} />

export const 리덕스_예제 = Template.bind({});
리덕스_예제.args = {

}

export const 리덕스_예제2 = TemplateTow.bind({});
리덕스_예제2.args = {

}