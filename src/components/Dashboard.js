import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AskedQuestion  from './AskedQuestion'
import { setPollQuestion } from '../actions/shared'

let UnAnsweredPanel = "UnAnsweredPanel";
let AnsweredPanel = "AnsweredPanel";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {activePanel: UnAnsweredPanel};
		this.unAnsweredBtnClick = this.unAnsweredBtnClick.bind(this);
		this.answeredBtnClick = this.answeredBtnClick.bind(this);
		this.viewAnsweredQuestionBtnClick = this.viewAnsweredQuestionBtnClick.bind(this);
		this.viewUnAnsweredQuestionBtnClick = this.viewUnAnsweredQuestionBtnClick.bind(this);
	  }
	
	unAnsweredBtnClick(){
		this.setState({activePanel: UnAnsweredPanel});
	}

	answeredBtnClick(){
		this.setState({activePanel: AnsweredPanel});
	}

	viewAnsweredQuestionBtnClick(question){
		this.props.dispatch(setPollQuestion(question));
		this.props.history.push('/answeredquestion');
	}

	viewUnAnsweredQuestionBtnClick(question){
		this.props.dispatch(setPollQuestion(question));
		this.props.history.push('/unansweredquestion');
	}

	render(){
		let {users, questions, authedUser} = this.props;

		if (authedUser === null) {
			return <Redirect to='/' />
		  }

		let loggedInUser = users[authedUser];
		let answeredQuestionKeys = Object.keys(loggedInUser.answers);
		let unAnsweredQuestionKeys = Object.keys(questions).filter(key => !answeredQuestionKeys.includes(key));  

		return (
			<div>
				<div className="row mb-4">
					<ul className="nav nav-tabs">
						<li className="nav-item">
							<button className="nav-link btn-light btn-block" onClick={this.unAnsweredBtnClick}>Unanswered Questions</button>
						</li>
						<li className="nav-item">
							<button className="nav-link btn-light btn-block" onClick={this.answeredBtnClick}>Answered Questions</button>
						</li>
					</ul>
				</div>
				{this.state.activePanel === UnAnsweredPanel && 
					unAnsweredQuestionKeys.map(key => (
						<div key={key}>
							<AskedQuestion authorName={users[questions[key].author].name} 
							avatarUrl={users[questions[key].author].avatarURL} optionOneText={questions[key].optionOne.text} 
							question={key} viewPollBtnClick={this.viewUnAnsweredQuestionBtnClick} />
							</div>
					))		
				}
				{this.state.activePanel === AnsweredPanel && 
					answeredQuestionKeys.map(key => (
						<div key={key}>
							<AskedQuestion authorName={users[questions[key].author].name} 
							avatarUrl={users[questions[key].author].avatarURL} optionOneText={questions[key].optionOne.text} 
							question={key} viewPollBtnClick={this.viewAnsweredQuestionBtnClick} />
							</div>
					))	
				}
			</div>
		)
	}

}

function mapStateToProps ({ questions, users, authedUser }) {
	return {
		questions:questions,
		users : users, 
		authedUser : authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)