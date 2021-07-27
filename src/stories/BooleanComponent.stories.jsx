import React, { Component } from 'react';

import BooleanComponent from '../03/BooleanComponent';

export default {
  title: 'Example/BooleanComponent',
  component: BooleanComponent,
};

const Template = (args) => <BooleanComponent {...args} />;

export const 기본_설정d = Template.bind({});
기본_설정d.args = { bored: false };

export const bored_설정 = Template.bind({});
bored_설정.args = { bored: true };
