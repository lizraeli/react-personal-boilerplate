## A Boilerplate for a Personal Wesbite with React
Demo: [http://react-personal.netlify.com/](http://react-personal.netlify.com/)

Technologies:
- [React](https://facebook.github.io/react/docs/hello-world.html)
- [React Router 4](https://reacttraining.com/react-router/web/guides/quick-start)
- [rebass](http://jxnblk.com/rebass/) - stateless ui components
- [React-FlexBox-Grid](https://roylee0704.github.io/react-flexbox-grid/) - flexbox implementation for react
- [Webpack 2](https://webpack.js.org/configuration/)
- [Babel](https://babeljs.io/)

## Table Of Contents
- [Getting Started](#getting-started)
- [Choosing A theme and Removing the Theme Selector](#choosing-a-theme-and-removing-the-theme-selector)
- [Font Family and Other Global Styling](#font-family-and-other-global-styling)
### Getting Started
`git clone https://github.com/lizraeli/react-personal-boilerplate.git`

- run locally:
  - `npm install` 
  - `npm start`
- build for production: 
  - `npm run build` 
  - test with `node server`

### Choosing a Theme and Removing the Theme Selector
The themes and fonts used in this project are identical to those used in the [rebass demo](http://jxnblk.com/rebass/demo/) (see also their [github repo](https://github.com/jxnblk/rebass/tree/master/demo))

The style of rebass components can be configured globally by providing a theme object (containing CSS written in JSX) to [getChildContext](https://facebook.github.io/react/docs/context.html) of a root component and specifying `child context type`. In this project, this is done in the `App` component:

```javascript
getChildContext() {
  return {
    rebass: this.state.theme
  }
}
...
App.childContextTypes = {
  rebass: React.PropTypes.object
}
```
The existing themes for the project are located in the `client/themes` folder. These are imported in  `client/themes/index.js` and exported within a single object (the property names, theme names and file names are identical).
This object is imported in `client/index.js` and provided as a prop to the `App` component. To manually configure the theme simply change `this.state` in the `App`  constructor:
```javascript
this.state = {
  // replace 'basic' with any of the theme names
  theme: this.props.themes['basic'] 
}
```
To remove the theme selector erase `ThemeProvider` component from the render function of `App`:
```javascript
// Erase <ThemeProvider .../> to remove the theme selector
 <ThemeProvider 
  themes = {this.props.themes}
  onChange= {this.changeTheme}
  selected = {this.state.theme}
/>
```

### Font Family and Other Global Styling
The base font and some other global styles are specified in `build/index.html` (used both for development and production):
```html
<style>
  ...
  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.5;
    margin: 0;
  }
 ...
</style>
```
The fonts are further customized within each theme per component. For example, `biblio` specifies for `NavItem` components (used in the top navigation bar) the `Roboto` font as first priority and `sans-serif` as a fallback:
```javascript
const sans = {
  fontFamily: 'Roboto, sans-serif'
}
const caps = {
  textTransform: 'uppercase',
  letterSpacing: '.1em'
}
...
NavItem: {
  ...sans,
  ...caps,
  fontSize: 12
},
```
The `Roboto`, `Roboto Mono` and `Karla` fonts are loaded externally in `index.html`:
```html
<link href='https://fonts.googleapis.com/css?family=Roboto:400,600|Roboto+Mono:400|Karla:400,700' rel='stylesheet'>
```