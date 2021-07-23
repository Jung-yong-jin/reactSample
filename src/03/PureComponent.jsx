import React, { Component } from 'react';
import shallowEqual from 'shallow-equal';

export class PureComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }
}

export default PureComponent;
