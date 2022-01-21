import React from "react"
import { Link } from "gatsby"
import * as headerStyle from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <h1>
                <Link className={headerStyle.title} to="/">
                    Sunny Kumar
                </Link>
            </h1>
            <nav>
                <ul className={headerStyle.navList}>
                    <li><Link className={headerStyle.navItem} to="/">Home</Link></li>
                    <li><Link className={headerStyle.navItem} to="/about">About</Link></li>
                    <li><Link className={headerStyle.navItem} to="/contact">Contact</Link></li>
                    <li><Link className={headerStyle.navItem} to="/blog">Blogs</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header