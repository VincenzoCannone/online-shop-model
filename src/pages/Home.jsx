//  short cut rafce   REACT ARROW FUNCTION EXPORT COMPONENT                                                  

import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'

// give us the possibility to render the navbar

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
        </div>
    )
}

export default Home
