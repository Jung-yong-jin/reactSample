import React, { Component } from 'react';
import Header from './index';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;
export const NavHeader = Template.bind({});
NavHeader.args = {};
