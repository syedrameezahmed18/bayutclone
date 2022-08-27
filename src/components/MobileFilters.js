import React, { useEffect,useState } from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'

const MobileFilters = (props) => {

    const [select, setSelect] = useState([
        {
            title: 'Buy',
            index: 1,
            selected: true
        },
        {
            title: 'Rent',
            index: 2,
            selected: false
        },
    ])

    const [select2, setSelect2] = useState([
        {
            title: 'Residential',
            index: 1,
            selected: true
        },
        {
            title: 'Commercial',
            index: 2,
            selected: false
        },
    ])

    const handleChange = (obj) => {


        if (obj.selected) {
            return
        }

        let newArr = [...select2]

        newArr.filter((item, id) => item.index === obj.index).map(item => item.selected = true)
        newArr.filter((item, id) => item.index !== obj.index).map((item) => item.selected = false)

        setSelect2(newArr)
    }

    const handleChange2 = (obj) => {


        if (obj.selected) {
            return
        }

        let newArr = [...select2]

        newArr.filter((item, id) => item.index === obj.index).map(item => item.selected = true)
        newArr.filter((item, id) => item.index !== obj.index).map((item) => item.selected = false)

        setSelect2(newArr)
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '300vh', background: 'white', position: 'absolute', left: 0, width: '100vw', overflow: 'hidden' }}>
            <div className="sticky-modal-header">
                <BsArrowLeft />
                <img style={{ height: '1.8rem', width: '7.5rem' }} alt='bayut' src="https://www.bayut.com/assets/logoBayutGreenEN_noinline.12de515dafc9592be3cc709d3e3da5a9.svg" />
                <AiOutlineClose onClick={props.handleClose}/>
            </div>

            <div className="top-selects">
                {select.map((each,index)=>{
                    return(
                        <div className={`${each.selected ? 'each-box-green':'each-box-white'} `} onClick={()=> handleChange(each)}>
                            <p>{each.title}</p>
                        </div>
                    )
                })}
            </div>

            <div className="location-container">
                <p>Location</p>
                <div className="location-input">
                    <MdLocationOn color='#888'/>
                    <input placeholder="e.g Marina Diamonds"/>
                </div>
            </div>


            <div className="top-selects" style={{marginTop:'20px'}}>
                {select2.map((each,index)=>{
                    return(
                        <div className={`${each.selected ? 'each-box-green':'each-box-white'} `} onClick={()=> handleChange2(each)}>
                            <p>{each.title}</p>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default MobileFilters