import React,{useState} from 'react'
import Button from './Button'
import LargeDropdown from './LargeDropdown'
import RegularDropDown from './RegularDropDown'

const FilterContainer = ({ type }) => {

  const PropertyFilters = () => {

    const [data, setData] = useState([
      {
        mainTitle: "Rent",
        dropType: 1,
        toggleState: false,
        index:1,
      },

      {
        mainTitle: "Residential",
        dropType: 2,
        toggleState:false,
        index:2,
      },

      {
        mainTitle: "Beds & Baths",
        dropType: 3,
        toggleState:false,
        index:3
      },

      {
        mainTitle: "Area (sqft)",
        dropType: 4,
        toggleState:false,
        index:4
      },

      {
        mainTitle: "Price (AED)",
        dropType: 4,
        toggleState:false,
        index:5
      }
    ])

    const changeToggle = (index, currentVal) => {

    let newArr = [...data]

    newArr.filter((item, id) => item.index === index).map(item => item.toggleState = !currentVal)
    newArr.filter((item, id) => item.index !== index).map((item) => item.toggleState = false)

    setData(newArr)
    }

    console.log('the data is',data)

    return (
      <>
        <div className='upper-region'>
          <RegularDropDown {...data[0]} changeToggle={changeToggle}/>
          <LargeDropdown />
          <RegularDropDown {...data[1]} changeToggle={changeToggle}/>
        </div>
        <div className='upper-region'>
          {
            data.map((each) => {
              if (each.dropType >= 3)
                return (
                  <RegularDropDown {...each} changeToggle={changeToggle}/>
                )
            })
          }
          <Button text="Find" type="green" width="150px" />
        </div>
        <div className="section-foot">
          <p>NEW</p>
          <p>Search 2.0</p>
          <p>{"Find homes by commute time >"}</p>
        </div>
      </>
    )
  }

  const TruFilters = () => {

    const [data, setData] = useState([
      {
        mainTitle: "Buy",
        dropType: 1,
        toggleState: false,
        index:1,
      },

      {
        mainTitle: "Property Type",
        dropType: 6,
        toggleState: false,
        index:2,
      },

      {
        mainTitle: "Beds",
        dropType: 7,
        toggleState: false,
        index:3,
      },

      {
        mainTitle: "Baths",
        dropType: 7,
        toggleState: false,
        index:4,
      },

      {
        mainTitle: "Area",
        dropType: 3,
        toggleState: false,
        index:5,
      }
    ])

    const changeToggle = (index, currentVal) => {

      let newArr = [...data]

      newArr.filter((item, id) => item.index === index).map(item => item.toggleState = !currentVal)
      newArr.filter((item, id) => item.index !== index).map((item) => item.toggleState = false)

      setData(newArr)
      }

    return (
      <>
        <div className='upper-region'>
          <RegularDropDown {...data[0]} changeToggle={changeToggle}/>
          <LargeDropdown />
          <RegularDropDown {...data[1]} changeToggle={changeToggle}/>
        </div>
        <div className='upper-region'>
          {
            data.map((each) => {
              if (each.dropType >= 7 || each.dropType === 3)
                return (
                  <RegularDropDown {...each} changeToggle={changeToggle}/>
                )
            })
          }
          <Button text="Estimate" type="green" width="150px" />
        </div>
      </>
    )
  }

  return (
    <div className='filter-containers' style={{height: type === 2 && '90px'}}>
      {
        type === 1 ?
          <PropertyFilters /> :
          <TruFilters />
      }
    </div>
  )
}

export default FilterContainer