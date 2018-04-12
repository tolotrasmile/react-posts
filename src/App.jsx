import React from 'react'
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'
import PostList from './containers/post.list.container'
import PostDetails from './containers/post.details.container'

const About = () => {
  return (<div>About</div>)
}

export default class App extends React.Component {
  render () {
    return <div>
      <nav className='navbar navbar-dark bg-dark'>
        <NavLink to='/about' className='navbar-brand'>Posts App</NavLink>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink exact to='/' className='nav-link' activeClassName='active'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' className='nav-link' activeClassName='active'>About</NavLink>
          </li>
        </ul>
      </nav>
      <div className='content'>
        <Switch>
          <Route exact path='/' component={PostList} />
          <Route exact path='/posts/:id' component={PostDetails} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </div>
  }
}
