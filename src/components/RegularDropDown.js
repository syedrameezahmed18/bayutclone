import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import Button from './Button'

const RegularDropDown = (props) => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='just-container'>
      <div className='regular-dropdown' >
        <p>{props.mainTitle}</p>
        <MdArrowDropDown style={{cursor:'pointer'}} onClick={() => props.changeToggle(props.index, props.toggleState)} size={20}/>

        {
        props.toggleState ? (
          <div className='relative-modal-1' onMouseLeave={()=> props.changeToggle(props.index, props.toggleState)} >
            <div className='rm1-left'>
              <p>Minimum sqft</p>
              <input type="" placeholder='0' />
              <Button text="RESET" type="white" marginTop='10px'/>
            </div>
            <div className='rm1-left'>
              <p>Maximum sqft</p>
              <input type="" placeholder='Any' />
              <Button text="DONE" type="green" marginTop='10px'  />
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