import React from 'react';
import PropTypes from 'prop-types'
import Button from '../04/Button'
import ButtonWithContext from './ButtonWithContext';

function RowBComponent() {
    return <Button>버튼</Button>;
  }
  
  function RowCComponent() {
    return <ButtonWithContext>버튼</ButtonWithContext>;
  }
  
  function TableComponent() {
    return (
      <table>
          <thead>
              <tr>
                  <th>
                      버튼
                  </th>
              </tr>
          </thead>
          <tbody>
          <tr>
              <td><RowBComponent /></td>
          </tr>
          <tr>
              <td><RowCComponent /></td>
          </tr>
          </tbody>
      </table>
    );
  }
  
  class HomePageComponent extends React.PureComponent {
    constructor(props) {
      super(props);
  
      this.state = { loading: false };
      this.setLoading = this.setLoading.bind(this);
      this.toggleLoading = this.toggleLoading.bind(this);
    }
  
    getChildContext() {
        console.log('getChildContext')

      return {
        loading: this.state.loading,
        setLoading: this.setLoading,
      };
    }
  
    setLoading(loading) {
        console.log('setLoading', loading)
      this.setState({ loading });
    }
  
    toggleLoading() {
        console.log('dddddddd', this.state.loading)
      this.setState(({ loading }) => ({ loading: !loading }));
    }
  
    render() {
      return (
        <div>
          <TableComponent />
          <Button onPress={this.toggleLoading}>상태 변경</Button>
        </div>
      );
    }
  }
  
  HomePageComponent.childContextTypes = {
    loading: PropTypes.bool,
    setLoading: PropTypes.func,
  };
  
  export default HomePageComponent;