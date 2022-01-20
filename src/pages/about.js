import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>Hey you! If you wanna know me google me</p>
            <p>You can contact me <Link to="/contact">here</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage