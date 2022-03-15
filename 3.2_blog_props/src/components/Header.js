import React from 'react';
import Nav from './Nav'

export default function Header() {
    return (
        <header className="header">
            <Nav />
            <h1 className="header-title">Clean Blog</h1>
            <h3 className="header-subtitles">A Blog Theme by Start Bootstrap</h3>
        </header>
    )
}