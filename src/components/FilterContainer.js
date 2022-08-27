import React from 'react'
import LargeDropdown from './LargeDropdown'
import RegularDropDown from './RegularDropDown'

const FilterContainer = ({ type }) => {

  const PropertyFilters = () => {
    return (
      <>
        <div className='upper-region'>
          <RegularDropDown />
          <LargeDropdown />
          <RegularDropDown />
        </div>
        <div className='upper-region'>
        <RegularDropDown />
        <RegularDropDown />
        <RegularDropDown />
        <RegularDropDown />
        </div>
      </>
    )
  }

  const TruFilters = () => {
    return (
      <>
        <div>

        </div>
        <div>

        </div>
      </>
    )
  }

  return (
    <div className='filter-containers'>
      {
        type === 1 ?
          <PropertyFilters /> :
          <TruFilters />
      }
    </div>
  )
}

export default FilterContainer