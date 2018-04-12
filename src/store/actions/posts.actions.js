import { POST_DETAILS, POST_LIST } from '../types/posts.types'
import axios from 'axios'

export const fetchPosts = () => (dispatch) => {
  let url = `http://localhost:9000/posts`
  setTimeout(() => axios.get(url).then(res => dispatch({ type: POST_LIST, payload: res.data })), 500)
}

export const fetchPostById = (id) => (dispatch) => {
  let url = `http://localhost:9000/posts/${id}`
  setTimeout(() => axios.get(url).then(res => dispatch({ type: POST_DETAILS, payload: res.data })), 500)
}
