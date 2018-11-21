import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { LEADERBOARD_URL, DASHBOARD_URL,
	NEWQUESTION_URL, LOGOUT_URL } from '../constants/urls'

function Nav({authedUser, users}) {
	return (
		authedUser &&
		<nav className="row mb-3 rounded col-md-8 justify-content-md-center navbar navbar-expand-lg navbar-light bg-light">
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav">
				<li className="nav-item px-3">
					<NavLink className="nav-link" to={DASHBOARD_URL} activeClassName='active'>
						Home
					</NavLink>
				</li>
				<li className="nav-item px-3">
					<NavLink className="nav-link" to={NEWQUESTION_URL} activeClassName='active'>
						New Question
					</NavLink>
				</li>
				<li className="nav-item px-3">
					<NavLink className="nav-link" to={LEADERBOARD_URL} activeClassName='active'>
						Leader Board
					</NavLink>
				</li>
				<li className="nav-item px-3">
				 <span className="nav-link">Hello, {users[authedUser].name}</span>	
				</li>
				<li className="nav-item px-3">
					<NavLink className="nav-link" to={LOGOUT_URL} activeClassName='active'>
						Logout
					</NavLink>
				</li>
				</ul>
			</div>
		</nav>
	)
}

function mapStateToProps ({ authedUser, users }) {
	return {
		authedUser: authedUser,
		users : users
  }
}

export default connect(mapStateToProps)(Nav)