import React from 'react'
import {Link} from 'react-router-dom'
import Title from './../Title'
import './header.scss'

export default function Header() {
    return (
        <div className="header__main_container">
            <div className="main_content_links">
                <Link to="/">Home</Link>
                <Link to="/">Link</Link>
            </div>
                <Title overideStyles="main_content_title" content="Luxury Presence" />
                <div className="main_content_links">
                    <Link to="/">Link</Link>
                    <Link to="/">Link</Link>
                </div>
        </div>
    )
}
