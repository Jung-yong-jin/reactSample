import React from 'react';

import '../sass/materialize.scss';

export const Main = (props) => {
  return <div>MAIN {props.title}</div>;
};

export default {
  title: 'Example/Maina',
  component: Main,
};

const Template = (args) => <Main {...args} />;

export const MainComponent = Template.bind({});
MainComponent.args = {
  title: 'react',
};
