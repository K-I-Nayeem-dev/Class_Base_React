import React, { Component } from 'react'
import spinner from './spinner.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-4'>
        <img className='rounded-circle' width={50} src={spinner} alt="Spinner.Img" />
      </div>
    )
  }
}
