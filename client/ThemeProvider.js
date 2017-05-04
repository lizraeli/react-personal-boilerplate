import React from 'react'
import { Select } from 'rebass'
import App from './App'

const ThemeProvider = (props) => {
    const { themes, selected } = props

    const themeTitles = Object.keys(themes).map((key, index) => (
      {
        children: key,
        value: key
      }
    ))

    return (
      <div>
        <Select
          label="theme"
          name=""
          options={themeTitles}
          onChange={props.onChange}
        />
      </div>
    )
}

export default ThemeProvider