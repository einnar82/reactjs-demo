import React from 'react'

const FunctionalComponent = ({ ...props }) => (
  <h1>Hello {props.name}, im a functional component</h1>
)

export default FunctionalComponent;
