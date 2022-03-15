import React from 'react';
import Header from './components/Header'
import Bloglist from './components/Bloglist'
import Footer from './components/Footer'
import "./index.css"

export default function App() {

    return (
        <div>
            <Header />
            <Bloglist />
            <Footer />
        </div>
    )
}