import { combineReducers } from 'redux'
import posts from './posts.reducer'
import { reducer as reduxForm } from 'redux-form'

export default combineReducers({ posts, reduxForm })
