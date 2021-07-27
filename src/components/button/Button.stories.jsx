import React, { Component } from 'react';
import Button from './index';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;
export const Button1 = Template.bind({});
Button1.args = {};
