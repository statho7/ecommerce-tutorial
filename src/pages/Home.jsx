import React from 'react'
import Announcements from '../components/Announcements'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'

const Home = () => {
    return (
        <div>
            <Announcements />
            <Navbar />
            <Slider />
            <Categories />
        </div>
    )
}

export default Home
