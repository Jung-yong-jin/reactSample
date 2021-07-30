import React from 'react';
import Title from './Index';

export default {
  title: 'Example/Title',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const titleName = Template.bind({});
titleName.args = {};
