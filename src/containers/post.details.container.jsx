import React, { Component } from 'react'
import { fetchPostById } from '../store/actions/posts.actions'
import { connect } from 'react-redux'

class PostDetails extends Component {
  constructor (props) {
    super(props)
    const { match: { params } } = this.props
    this.props.fetchPostById(params.id)
  }

  render () {
    const { post } = this.props
    return (
      <div>
        {post && (
          <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({ post: state.posts.current })

// ({ ...bindActionCreators({ fetchPostById }, dispatch) })
const mapDispatchToProps = dispatch => ({ fetchPostById: (id) => fetchPostById(id)(dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
