import React from 'react'
import ReactDOM from 'react-dom'

import themes from './themes/index'
import App from './App'



ReactDOM.render(
  <App themes={themes} />,
  document.getElementById('root')
)

