import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Toolbar,
        NavItem, 
        Message,
        Button} from 'rebass'



const NavBar = () => (
    <Toolbar>
        <NavItem to="/" is={Link} children='Home'/>
        <NavItem to="/about" is={Link} children='About'/>
        <NavItem to="/pets" is={Link} children='Pets'/>
    </Toolbar>
)

export default NavBar

/*
<Link to="/">Home</Link>

*/