import React, { Component } from 'react'
import spinner from './spinner.gif';

export default class Spinner extends Component {
  render() {
    return (
      <img src={spinner} alt="Spinner.Img" />
    )
  }
}
