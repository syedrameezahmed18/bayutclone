import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import Button from './Button'

const RegularDropDown = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='just-container'>
      <div className='regular-dropdown' onClick={() => setToggle((prev) => !prev)}>
        <p>Rent</p>
        <MdArrowDropDown />

        {
        toggle ? (
          <div className='relative-modal-1'>
            <div>
              <p>Minimum sqft</p>
              <input type="" placeholder='0' />
              <Button text="RESET" type="white" />
            </div>
            <div>
              <p>Maximum sqft</p>
              <input type="" placeholder='Any' />
              <Button text="RESET" type="green" />
            </div>
          </div>
        ) : null
      }
      </div>

      {/*Relative modal */}


    </div>
  )
}

export default RegularDropDown