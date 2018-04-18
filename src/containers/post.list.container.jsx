import React from 'react'
import PostDetail from '../components/post.item.component'
import { deletePost } from '../store/actions/posts.actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostList extends React.Component {

  render () {
    const { posts } = this.props
    return (
      <div>
        <h2>Liste des postes</h2>
        <button><Link to={'/create-post'}>Créer un post</Link></button>
        <table>
          <thead>
          <tr>
            <th scope='col'>#</th>
            <th className='left' scope='col'>Title</th>
            <th scope='col'>Action</th>
          </tr>
          </thead>
          <tbody>
            {posts && posts.map(post => this.renderDetailItem(post))}
          </tbody>
        </table>
      </div>
    )
  }

  renderDetailItem (post) {
    return <PostDetail key={post.id} post={post} deletePost={() => this.deletePost(post)}/>
  }

  deletePost (post) {
    this.props.deletePost(post)
  }

}

const mapStateToProps = state => ({ posts: state.posts.list })

// ({ ...bindActionCreators({ fetchPosts }, dispatch) })
const mapDispatchToProps = dispatch => ({
  deletePost: (post) => deletePost(post)(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
