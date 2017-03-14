import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import App from './components/App'

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>
)

const Header = () => (
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

Routes.propTypes = {
  store: React.PropTypes.object,
};

export default Routes;