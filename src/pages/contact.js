import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


const ContactPage = () => {
    return (
        <Layout>
            <h1>Contacts</h1>
            <p>Online, Available on <a href='https://www.twitter.com/sunnykr_io'>Twitter</a>, Github, linkedin</p>
            <p><Link to="/">Home</Link></p>
        </Layout>
    )
}

export default ContactPage