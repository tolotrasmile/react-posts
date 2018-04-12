import { POST_DETAILS, POST_LIST } from '../types/posts.types'

let postState = { list: [], current: {} }

export default (state = postState, action) => {
  switch (action.type) {
    case POST_DETAILS:
      return { ...state, current: action.payload }
    case POST_LIST:
      return { ...state, list: action.payload }
    default:
      return state
  }
}
