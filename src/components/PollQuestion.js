import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { ROOT_URL, PAGE404_URL } from '../constants/urls'
import AnsweredQuestion from './AnsweredQuestion'
import UnAnsweredQuestion from './UnAnsweredQuestion'
import { setPollQuestion } from '../actions/shared'
import Page404 from './Page404'

class PollQuestion extends Component {
	
	render() {
		if(!this.props.match.params.questionid){
			return <Redirect to={PAGE404_URL}/>
		}

		if (!this.props.authedUser) {
			this.props.dispatch(setPollQuestion(this.props.match.params.questionid));
			return <Redirect to={ROOT_URL} />
		}

		let { users, authedUser, questions } = this.props;
		let allQuestionKeys = Object.keys(questions);
		
		if(!allQuestionKeys.includes(this.props.match.params.questionid)){
			return <Page404 location={window.location} />
		}

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
