module.exports = (env) => 
  env ? require(`./webpack.${env}.js`)
  : require(`./webpack.dev.js`)