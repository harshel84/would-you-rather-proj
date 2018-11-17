import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav({authedUser, users}) {
	return (
		<div className="row justify-content-md-center navbar navbar-light bg-light">
			<div className="col-md-2">
				<NavLink className="nav-item" to='/' exact activeClassName='active'>
					Home
				</NavLink>
			</div>
			{authedUser &&
			<div className="col-md-2">
				<NavLink className="nav-item" to='/newQuestion' activeClassName='active'>
					New Question
				</NavLink>
			</div>}
			<div className="col-md-2">
				<NavLink className="nav-item" to='/leaderBoard' activeClassName='active'>
					Leader Board
				</NavLink>
			</div>
			
			{authedUser && 
			<div className="col-md-2">
				Hello, {users[authedUser].name}
			</div>}

			{authedUser && 
			<div className="col-md-2">
				<NavLink className="nav-item" to='/logout' activeClassName='active'>
					Logout
				</NavLink>
			</div>}
		</div>
	)
}

function mapStateToProps ({ authedUser, users }) {
	return {
		authedUser: authedUser,
		users : users
  }
}

export default connect(mapStateToProps)(Nav)