import React from 'react'

const HOCComponent = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log('hello im fetching data from HOC');
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default HOCComponent;
