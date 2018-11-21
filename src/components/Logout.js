import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {setLoggedInUser} from '../actions/shared'
import { connect } from 'react-redux'
import { ROOT_URL } from '../constants/urls'

class Logout extends Component {
	componentDidMount() {
		this.props.dispatch(setLoggedInUser(null));
	}
	render() {
		return <Redirect to={ROOT_URL} />
  	}
}

function mapStateToProps ({ authedUser }) {
	return {
		authedUser : authedUser
  }
}

export default connect(mapStateToProps)(Logout)