import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Score from './Score'

function LeaderBoard({users}) {
	if (Object.keys(users).length === 0) {
		return <Redirect to='/' />
		}	
	return (
		<div>	
			{Object.keys(users).map((key) => (
				<div key={users[key].id}>
					<Score name={users[key].name}
					avatarUrl={users[key].avatarURL} 
					answeredQuestionCount={Object.keys(users[key].answers).length}
					createdQuestionCount={users[key].questions.length}></Score>
				</div>
			))}
		</div>
	)
}

function mapStateToProps ({ users, authedUser }) {
	return {
		users: users,
		authedUser : authedUser
  }
}

export default connect(mapStateToProps)(LeaderBoard)