import React, { useContext } from 'react'
import { ScreenContext } from '../context/ScreenContext'

const Card = (props) => {

    let {heading, text, image} = props
    const {size} = useContext(ScreenContext)

    const DesktopCard = () => {
        return (
            <div className="main-card" style={{backgroundImage:`url(${image})`, backgroundSize:'cover'}}>
                <p className="main-card-head">{heading}</p>
                <p className='main-card-body'>{text}</p>
            </div>
        )
    }

    const MobCard = () => {
        return(
            <div className='main-mob-card'>
                <img className='main-mob-img' src={image}/>
                <div className='main-mob-texts'>
                    <h4>{heading}</h4>
                    <p>{text}</p>
                </div>
                <p style={{marginRight:'10px'}}>{'>'}</p>
            </div>
        )
    }

  return (
    <>
        {
            size > 800 ?
            <DesktopCard />:
            <MobCard />
        }
    </>
  )
}

export default Card