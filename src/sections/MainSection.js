import React, { useState } from 'react'
import FilterContainer from "../components/FilterContainer"

const MainSection = () => {

    const [select, setSelect] = useState([
        {
            title: 'Property Search',
            index: 1,
            selected: true
        },
        {
            title: 'TruValue',
            index: 2,
            selected: false
        },
    ])

    const changeState = (obj) => {

        if (obj.selected) {
            return
        }

        let newArr = [...select]

        newArr.filter((item, id) => item.index === obj.index).map(item => item.selected = true)
        newArr.filter((item, id) => item.index !== obj.index).map((item) => item.selected = false)

        setSelect(newArr)

    }

    console.log('select is', select)

    return (
        <div className="main-section">
            <p className="main-section-text">Search properties for sale and to rent in the UAE</p>
            <div className='main-select'>
                {
                    select.map((each) => {
                        return (
                            <div className={`${each.selected ? 'main-select-each':'main-unselect-each'} `}  onClick={() => changeState(each)}>
                                <p>{each.title}</p>
                            </div>
                        )
                    })
                }

            </div>
            {
                select[0].selected &&
                <FilterContainer type={1} /> ||
                select[1].selected &&
                <FilterContainer type={2} />
            }

        </div>

    )
}

export default MainSection