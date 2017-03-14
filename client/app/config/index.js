import merge from 'lodash/merge'

let envConfig
const defaultConfig = {
  urls: {api: 'http://api.toboryot.local:3000'},
  environment: null
}

try {
  envConfig = require(`./${APP_ENV}.js`)
} catch (e) {
  if (typeof APP_ENV === 'undefined') {
    console.warn('Warning: APP_ENV not defined')
  } else {
    console.warn(`Warning: Could not load config for env ${APP_ENV}`)
  }
}

export default merge({}, defaultConfig, envConfig)
