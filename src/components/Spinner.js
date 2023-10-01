import React from 'react'
import spinner from './spinner.gif';

  const Spinner = () => {
    return (
      <div className='text-center my-4'>
        <img className='rounded-circle' width={50} src={spinner} alt="Spinner.Img" />
      </div>
    )
}

export default Spinner