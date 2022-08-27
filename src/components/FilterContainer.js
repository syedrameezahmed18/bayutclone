import React from 'react'
import LargeDropdown from './LargeDropdown'
import RegularDropDown from './RegularDropDown'

const FilterContainer = ({ type }) => {

  const PropertyFilters = () => {
    return (
      <>
        <div>
          <RegularDropDown />
          <LargeDropdown />
        </div>
        <div>

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