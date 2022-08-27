import React, { useContext, useEffect, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { ScreenContext } from '../../context/ScreenContext'
import MainSection from '../../sections/MainSection'


const Home = () => {

    const { size } = useContext(ScreenContext)

    const [cardData, setCardData] = useState([])

    useEffect(() => {

        setCardData([
            {
                heading: 'TruCheck™',
                text: 'Filter your results with validated, available listings',
                image: 'https://www.bayut.com/assets/truCheckCardSmallBackground_noinline.bb74c1b37c5aeae705e739c847b51255.svg'
            },
            {
                heading: 'Search 2.0',
                text: 'Find Homes by commute time',
                image: 'https://www.bayut.com/assets/iconCommuteCard_noinline.6c4e9fd28593d97258bfc72a5dce4cad.svg'
            },
            {
                heading: 'Map View',
                text: 'Search for properties in preffered areas using a map',
                image: 'https://www.bayut.com/assets/mapViewCardSmallBackground_noinline.97505e844a8982d59131ce15ead6dc84.svg'
            },

        ])
        return () => {

        }
    }, [])


    return (
        <div className="home-main">
            <Header />
            <MainSection />
            <div className="cards-container">
                {cardData.map((each, index) => {
                    return <Card {...each}/>
                })}
            </div>
        </div>
    )
}

export default Home