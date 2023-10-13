// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {item, deleteComment, onLike1} = props

  const {id, input1, textarea1, isLike, className2, date} = item
  const postedTime = formatDistanceToNow(date)

  const onDelete = () => {
    deleteComment(id)
  }

  const onLike = () => {
    onLike1(id)
  }
  return (
    <li className="bgContainer121">
      <div className="container11">
        <div className={className2}>
          <div>{input1 !== '' ? <p>{input1[0].toUpperCase()}</p> : ''}</div>
        </div>

        <h1 className="heading">{input1}</h1>

        <p className="para2">{postedTime}</p>
      </div>
      <div className="one12">
        <p className="para">{textarea1}</p>
        <button
          className="one13 btn4"
          type="button"
          data-testid="like"
          onClick={onLike}
        >
          {isLike !== true ? (
            <div className="one15">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                alt="like"
                className="img1"
              />
              <p>Like</p>
            </div>
          ) : (
            <div className="one16">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                alt="like"
                className="img1"
              />
              <p>Like</p>
            </div>
          )}
          <button
            className="btn4"
            type="button"
            data-testid="delete"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="img1"
            />
          </button>
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
