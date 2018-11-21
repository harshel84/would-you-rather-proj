import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import {handleInitialData, setLoggedInUser} from '../actions/shared'
import { Redirect } from 'react-router-dom'
import { DASHBOARD_URL } from '../constants/urls'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
	
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }

  handleChange(event) {
	this.setState({value: event.target.value});
  }

  handleSubmit(event) {
	event.preventDefault();
	if(this.state.value !== "" && this.state.value !== "Select User") {
		this.props.dispatch(setLoggedInUser(this.state.value));
	}
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
	const { authedUser, users } = this.props;
	if (authedUser !== null) {
		return <Redirect to={DASHBOARD_URL} />
	  }
    return (
		<div>
			<div className="row justify-content-md-center">
				<h5>Welcome to Would you rather React App!</h5>
			</div>	
			<div className="row justify-content-md-center">
				<h6>Please sign in to Continue</h6>
			</div>
			<div className="row justify-content-md-center">
				<img src={logo} className="App-logo" alt="logo" />
			</div>
			<div className="row justify-content-md-center">
				<div className="col-md-3">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<select className="form-control" onChange={this.handleChange}>
											<option default>Select User</option>
											{Object.keys(users).map(userId => (
											<option value={userId} key={userId}>{users[userId].name}</option>	
											))}
							</select>
						</div>
						<input className="btn btn-info btn-block" type="submit" value="Login" />
					</form>
				</div>
			</div>
		</div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
	return {
		users: users,
		authedUser : authedUser
  }
}

export default connect(mapStateToProps)(Home)