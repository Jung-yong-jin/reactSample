import React from 'react';
import Text from './Index';

export default {
  title: 'Example/Text',
  component: Text,
};

const Template = (args) => <Text {...args}>TestSample</Text>;
export const textStories = Template.bind({});
textStories.args = {
  xsmall: true,
  primary: true,
};
