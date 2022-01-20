import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"


const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contacts</h1>
            <p>Online, Available on <a href='https://www.twitter.com/sunnykr_io'>Twitter</a>, Github, linkedin</p>
            <p><Link to="/">Home</Link></p>
            <Footer />
        </div>
    )
}

export default ContactPage