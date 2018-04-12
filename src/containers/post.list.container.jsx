import React from 'react'
import PostDetail from '../components/post.item.component'
import { fetchPosts } from '../store/actions/posts.actions'
import { connect } from 'react-redux'

class PostList extends React.Component {
  constructor (props) {
    super(props)
    this.props.fetchPosts()
  }

  render () {
    const { posts } = this.props
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Title</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts && posts.map(post => <PostDetail key={post.id} post={post} />)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ posts: state.posts.list })

// ({ ...bindActionCreators({ fetchPosts }, dispatch) })
const mapDispatchToProps = dispatch => ({ fetchPosts: () => fetchPosts()(dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
