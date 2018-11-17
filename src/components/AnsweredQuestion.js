import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function AnsweredQuestion({pollQuestion, users, questions}){
	if (pollQuestion === null) {
		return <Redirect to='/' />
		}
	const optionOneVotes = questions[pollQuestion].optionOne.votes.length;
	const optionTwoVotes = questions[pollQuestion].optionTwo.votes.length
	const totalVotes = optionOneVotes + optionTwoVotes;
	const optionOneText = questions[pollQuestion].optionOne.text;
	const optionTwoText = questions[pollQuestion].optionTwo.text;
	const optionOneStyle = { width : (optionOneVotes*100/totalVotes).toFixed(0) + "%"};
	const optionTwoStyle = { width : (optionTwoVotes*100/totalVotes).toFixed(0) + "%"};
	return (
		<div className="row">
		<div className="col-md-6">
		<h6 className="row">Asked by {users[questions[pollQuestion].author].name}</h6>
			<img src={users[questions[pollQuestion].author].avatarURL} className="img-fluid img-thumbnail rounded-circle" alt="Author" />
		</div>
		<div className="col-md-6">
			<div className="row">Results</div>
			<div className="card mb-4">
				<div className="card-body">
					<div>Would you rather {optionOneText} ?</div>
					<div className="progress">
						<div className="progress-bar" role="progressbar" style={optionOneStyle}>{optionOneStyle.width}</div>
					</div>
					<div className="justify-content-center">{optionOneVotes} of {totalVotes} votes</div>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<div>Would you rather {optionTwoText} ?</div>
					<div className="progress">
						<div className="progress-bar" role="progressbar" style={optionTwoStyle}>{optionTwoStyle.width}</div>
					</div>
					<div>{optionTwoVotes} of {totalVotes} votes</div>
				</div>
			</div>
		</div>
	</div>
	)
}

function mapStateToProps ({ users, questions, pollQuestion }) {
	return {
		users: users,
		questions : questions, 
		pollQuestion : pollQuestion
   }
}

export default connect(mapStateToProps)(AnsweredQuestion)
