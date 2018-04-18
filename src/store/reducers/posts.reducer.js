import { POST_ADD, POST_DELETE, POST_DETAILS, POST_LIST } from '../types/posts.types'

let postState = { list: [], current: null }

export default (state = postState, action) => {
  switch (action.type) {
    case POST_DETAILS:
      return { ...state, current: action.payload }
    case POST_LIST:
      return { ...state, list: action.payload }
    case POST_DELETE:
      return { ...state, list: state.list.filter(item => item !== action.payload) }
    case POST_ADD:
      return { ...state, list: [...state.list, action.payload] }
    default:
      return state
  }
}
