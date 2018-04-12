import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  const { post } = props
  return (
    <tr>
      <th scope='row'>{post.id}</th>
      <td>
        <Link to={`/posts/${post.id}`}>{post.title}</Link></td>
      <td>
        <button className='btn btn-danger'>Supprimer</button>
      </td>
    </tr>
  )
}
