import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { ROOT_URL } from '../constants/urls'
import AnsweredQuestion from './AnsweredQuestion'
import UnAnsweredQuestion from './UnAnsweredQuestion'

class PollQuestion extends Component {
	
	render() {
		if (this.props.pollQuestion === null) {
			return <Redirect to={ROOT_URL} />
		  }
		let { users, authedUser } = this.props;
		let loggedInUser = users[authedUser];
		let answeredQuestionKeys = Object.keys(loggedInUser.answers);
		if(answeredQuestionKeys.includes(this.props.match.params.questionid)){
			return <AnsweredQuestion/>
		}
		else {
			return <UnAnsweredQuestion/>
		}	
	}
}

function mapStateToProps ({ users, questions, pollQuestion, authedUser }) {
	return {
		users: users,
		questions : questions, 
		pollQuestion : pollQuestion, 
		authedUser : authedUser
   }
}

export default connect(mapStateToProps)(PollQuestion)
