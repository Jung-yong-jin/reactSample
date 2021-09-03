import React from 'react';
import PropTypes from 'prop-types';
const StatelessButtonWithContext = (props, context) => {
  const { color, ...rest } = props;
  const { theme } = context;
  return (
    <button
      {...rest}
      style={{
        ...theme.button,
        background: theme.color[color],
      }}
    />
  );
};
StatelessButtonWithContext.propTypes = {
  color: PropTypes.string,
};
StatelessButtonWithContext.contextTypes = {
  theme: PropTypes.object,
};
export default StatelessButtonWithContext;