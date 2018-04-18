import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  const { post } = props

  const deletePost = (post) => {
    props.deletePost(post)
  }

  return (
    <tr>
      <th>{post.id}</th>
      <td>
        <Link to={`/posts/${post.id}`}>{post.title}</Link></td>
      <td>
        <button className='bg-danger' onClick={() => deletePost(post)}>Supprimer</button>
      </td>
    </tr>
  )
}
