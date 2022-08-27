import React from 'react'
import {MdLocationOn} from 'react-icons/md'

const LargeDropdown = () => {
  return (

    <div className='main-large-dropdown'>
      <input placeholder="Enter location" />
      <MdLocationOn size={20} color={'#757575'}/>
    </div>

  )
}

export default LargeDropdown