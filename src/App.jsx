import React from 'react'
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'
import PostList from './containers/post.list.container'
import PostDetails from './containers/post.details.container'
import PostForm from './containers/post.from.container'

const About = () => {
  return (<div>About</div>)
}

export default class App extends React.Component {
  render () {
    return <div>
      <nav>
        <NavLink to='/about'>Posts App</NavLink>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName='active'>About</NavLink>
          </li>
        </ul>
      </nav>
      <div className='content'>
        <Switch>
          <Route exact path='/' component={PostList} />
          <Route exact path='/posts/:id' component={PostDetails} />
          <Route exact path='/create-post/' component={PostForm} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </div>
  }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
let showResult = (values) => sleep(100).then(() => console.log(values))
