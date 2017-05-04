import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Miss,
  Route
} from 'react-router-dom'

import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import Pets from './Pets'
import About from './About'
import ThemeProvider from './ThemeProvider'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      theme: this.props.themes['basic']
    }
    this.changeTheme = this.changeTheme.bind(this)
  }

  getChildContext() {
    return {
      rebass: this.state.theme
    }
  }
  
  changeTheme(e){
    const theme = e.target.value
    this.setState({theme: this.props.themes[theme]})
  }

  render() {
    console.log(this)
    return (
      <Router>
        <div>
          <ThemeProvider 
            themes = {this.props.themes}
            onChange= {this.changeTheme}
            selected = {this.state.theme}
          />
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pets" component={Pets} />
          <Footer />
        </div>
      </Router>
    )
  }
}

App.childContextTypes = {
  rebass: React.PropTypes.object
}

export default App