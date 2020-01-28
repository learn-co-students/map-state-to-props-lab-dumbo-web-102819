import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  mapAllUsers = () => {
    return this.props.users.map((user) => {
      console.log(user.username)
      return (
        <li>
          Name: {user.username}
          <br></br>
          Hometown: {user.hometown}
        </li>
      )
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.mapAllUsers()}
          <br></br>
          {/* In addition, display the total number of users curently in the store */}
          {this.props.users.length} Total Users!
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // console.log(state)
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
