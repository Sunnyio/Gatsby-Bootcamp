import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <header>
            <h1>Hi my name is Sunny Kumar</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header