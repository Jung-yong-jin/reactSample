import React from 'react';

class TodaysPlan extends React.Component {
  render() {
    const name = this.props.name;
    return <div className="message-container">{name}</div>;
  }
}

export default TodaysPlan;
