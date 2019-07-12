import React from 'react'
import './Navbar.css'

const Navbar = ({onNewGame}) => (
    <header>
        <h2><span>Memory Game</span></h2>
        <nav>
            <li><span onClick={onNewGame}>New Game</span></li>
        </nav>
    </header>
)

export default Navbar
