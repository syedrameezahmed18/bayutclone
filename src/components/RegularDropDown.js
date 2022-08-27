import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import Button from './Button'

const RegularDropDown = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='just-container'>
      <div className='regular-dropdown' >
        <p>Rent</p>
        <MdArrowDropDown style={{cursor:'pointer'}} onClick={() => setToggle((prev) => !prev)} size={20}/>

        {
        toggle ? (
          <div className='relative-modal-1'  onMouseLeave={()=> setToggle((prev)=> !prev)}>
            <div className='rm1-left'>
              <p>Minimum sqft</p>
              <input type="" placeholder='0' />
              <Button text="RESET" type="white" />
            </div>
            <div className='rm1-right'>
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