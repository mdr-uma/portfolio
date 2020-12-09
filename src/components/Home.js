import React from 'react'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Profile from './Profile'
import Projects from './Projects'
import Skills from './Skills'

const Home = () => {
    return (
        <div className="container">
            <div className="pb-5 mb-5">
                <Profile />
            </div>
            <div className="pb-1">
                <About />
            </div>
            <div className="pb-5 mb-5">
                <Skills />
            </div>
            <div className="pb-5 mb-5">
                <Projects />
            </div>
            <div className="pb-5 mb-5">
                <Blog />
            </div>
            <div className="pb-5 mb-5">
                <Contact />
            </div>
        </div>
    )
}

export default Home