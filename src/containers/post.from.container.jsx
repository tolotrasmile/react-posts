import React, { Component } from 'react'
import { createPost } from '../store/actions/posts.actions'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

const config = {
  form: 'createPostForm',
  fields: ['title', 'description', 'author']
}

class PostForm extends Component {
  state = { post: {} }

  render () {
    console.log(this.props)
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <h1>Nouveau poste</h1>
        <div>
          <label>Title</label>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
            />
          </div>
        </div>
        <div>
          <label>Description</label>
          <div>
            <Field
              name="description"
              component="input"
              type="text"
              placeholder="Title"
            />
          </div>
        </div>
        <div>
          <label>Author</label>
          <div>
            <Field
              name="author"
              component="input"
              type="text"
              placeholder="Title"
            />
          </div>
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    )
  }
}


// ({ ...bindActionCreators({ fetchPostById }, dispatch) })
const mapDispatchToProps = dispatch => ({ addPost: (post) => createPost(post)(dispatch) })

export default connect(null, mapDispatchToProps)(reduxForm(config)(PostForm))
