import React, { useContext } from 'react'
import { ScreenContext } from '../context/ScreenContext'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { IoMdSettings } from 'react-icons/io'
import { BsHeartFill, BsStarFill, BsPersonCircle } from 'react-icons/bs'



const Header = () => {

  const { size } = useContext(ScreenContext)

  const UpperHeader = () => {

    const options = [
      'UAE', 'Pakistan', 'Saudi Arabia', 'Jordan', 'Morocco', 'Bangladesh', 'Mexico', 'Philippines', 'Indonesia', 'Thailand'
    ];

    let defaultOption = options[0];

    const onSelect = (e) => {
      defaultOption = e
    }


    return (
      <div className="header-top-main">
        <div className="header-top-main-left">
          <Dropdown style={{ border: 'none' }} options={options} onChange={onSelect} value={defaultOption} placeholder="Select an option" />
          <p style={{ fontWeight: 600 }}>العربية</p>
          <div className='header-top-left-inner'>
            <IoMdSettings />
            <p>Site settings</p>
          </div>
        </div>

        <div className='header-top-main-right'>
          <div className='header-top-main-right-each'>
            <BsHeartFill />
            <p>Favourite properties</p>
          </div>
          <div className='header-top-main-right-each'>

            <BsStarFill />
            <p>Saved searches</p>
          </div>
          <div className='header-top-main-right-each'>
            <BsPersonCircle />
            <p>Log in</p>
          </div>
        </div>
      </div>
    )
  }

  const LowerHeader = () => {

    const links = [
      {
        name: 'Blog',
        isDrop: false
      },
      {
        name: 'Find an Agency',
        isDrop: false
      },
      {
        name: 'Floor Plans',
        isDrop: false
      },
      {
        name: 'Guides',
        isDrop: true
      },
      {
        name: 'Market',
        isDrop: true
      },
      {
        name: 'Agent Portal',
        isDrop: false
      },
      {
        name: 'Events',
        isDrop: true
      },

    ]

    const listReducer = links.map((eachLink) => eachLink.name)

    return (
      <div className='header-bottom-main'>
        <img style={{ height: '2.2rem', width: '9.5rem' }} alt='bayut' src="https://www.bayut.com/assets/logoBayutGreenEN_noinline.12de515dafc9592be3cc709d3e3da5a9.svg" />
        <div className='header-bottom-right'>
          {links.map((each, index) => {

            if (each.isDrop)
              return (

                <Dropdown controlClassName={each.name === "Guides" || each.name === "Events" ?'lower-small-drop': 'lower-dropdown-mui'} options={listReducer} placeholder={each.name} />

              )
            else
              return (
                <p>{each.name}</p>
              )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="header-main">
      <UpperHeader />
      <LowerHeader />
    </div>
  )
}

export default Header