import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Score from './Score'
import { ROOT_URL } from '../constants/urls'


function compare(a, b){
	let x = Object.keys(a.answers).length + a.questions.length;
	let y = Object.keys(b.answers).length + b.questions.length;
	if(x < y){
		return 1;
	}
	if(x > y){
		return -1;
	}
	return 0;
}

function LeaderBoard({users}) {
	if (Object.keys(users).length === 0) {
		return <Redirect to={ROOT_URL} />
		}
		
	let usersArray = [];
	for (var key in users) {
		usersArray.push(users[key]);
	}

	let sortedUsers = usersArray.sort(compare); 

	return (
		<div>	
			{sortedUsers.map((user) => (
				<div key={user.id}>
					<Score name={user.name}
					avatarUrl={user.avatarURL} 
					answeredQuestionCount={Object.keys(user.answers).length}
					createdQuestionCount={user.questions.length}></Score>
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