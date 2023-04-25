/* eslint-disable react/no-this-in-sfc */
import './index.css'

const TodoItem = props => {
  const {todoItemDetails, deleteUser} = props
  const {id, title} = todoItemDetails
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-item-card">
      <p>{title}</p>
      <button className="delete-btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
