import {Component} from 'react'

import './index.css'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'

// eslint-disable-next-line
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  // eslint-disable-next-line
  state = {input1: '', textarea1: '', commentsList: []}

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => each.id !== id),
    }))
  }

  onLike1 = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {input1, textarea1} = this.state
    const className1 = `class1 ${
      initialContainerBackgroundClassNames[
        Math.ceil(Math.random()) *
          (initialContainerBackgroundClassNames.length - 1)
      ]
    }`
    const newComment = {
      id: v4(),
      input1,
      textarea1,
      isLike: false,
      date: new Date(),
      className2: className1,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],

      input1: '',
      textarea1: '',
    }))
  }

  changeInput = event => {
    this.setState({
      input1: event.target.value,
    })
  }

  changeTextarea = event => {
    this.setState({
      textarea1: event.target.value,
    })
  }

  render() {
    const {input1, textarea1, commentsList} = this.state
    console.log(commentsList)

    return (
      <div className="bgContainer">
        <div className="container1">
          <div>
            <h1 className="heading">Comments</h1>
            <p className="para">Say Something about 4.0 Technologies</p>
            <div className="one">
              <form onSubmit={this.onAddComment} id="one">
                <input
                  type="text"
                  className="input1"
                  placeholder="Your Name"
                  onChange={this.changeInput}
                  value={input1}
                />
                <br />
                <br />
                <textarea
                  rows="10"
                  cols="20"
                  placeholder="Your Comment"
                  className="input1"
                  value={textarea1}
                  onChange={this.changeTextarea}
                />
                <br />
                <br />
                <button className="btn3" type="submit">
                  Add Comment
                </button>
              </form>

              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
              />
            </div>
            <hr />
          </div>
          <div className="two">
            <button className="btn2" type="button">
              {commentsList.length}
            </button>

            <p className="para1">Comments</p>
          </div>
          <ul>
            {commentsList.map(each => (
              <CommentItem
                item={each}
                deleteComment={this.deleteComment}
                onLike1={this.onLike1}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
