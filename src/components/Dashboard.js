import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AskedQuestion  from './AskedQuestion'
import { setPollQuestion } from '../actions/shared'
import { ROOT_URL } from '../constants/urls'

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
		this.compare = this.compare.bind(this);
	  }
	
	compare(a, b){
		if(a.timestamp > b.timestamp){
			return -1;
		}

		if(a.timestamp > b.timestamp){
			return 1;
		}
		return 0;
	}
	
	unAnsweredBtnClick(){
		this.setState({activePanel: UnAnsweredPanel});
	}

	answeredBtnClick(){
		this.setState({activePanel: AnsweredPanel});
	}

	viewAnsweredQuestionBtnClick(question){
		this.props.dispatch(setPollQuestion(question));
		this.props.history.push('questions/' + question);
	}

	viewUnAnsweredQuestionBtnClick(question){
		this.props.dispatch(setPollQuestion(question));
		this.props.history.push('questions/' + question);
	}

	render(){
		let {users, questions, authedUser} = this.props;

		if (authedUser === null) {
			return <Redirect to={ROOT_URL} />
		  }

		let questionsArray = [];
		for (var key in questions) {
			questionsArray.push(questions[key]);
		}
		
		let sortedQuestions = questionsArray.sort(this.compare); 
		let loggedInUser = users[authedUser];
		let answeredQuestionKeys = Object.keys(loggedInUser.answers);
		let unAnsweredQuestions = sortedQuestions.filter(question => !answeredQuestionKeys.includes(question.id));  
		let answeredQuestions = sortedQuestions.filter(question => answeredQuestionKeys.includes(question.id));

		return (
			<div>
				<nav className="row justify-content-md-center mb-2 navbar navbar-expand-lg navbar-light">
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav">
								<li className="nav-item px-5">
									<button className="nav-link btn btn-default" onClick={this.unAnsweredBtnClick}>Unanswered Questions</button>	
								</li>
								<li className="nav-item px-3">
									<button className="nav-link btn btn-default" onClick={this.answeredBtnClick}>Answered Questions</button>
								</li>
							</ul>
						</div>
					</nav>
				{this.state.activePanel === UnAnsweredPanel && 
					<div>
						<div className="row justify-content-md-center mb-2">Unanswered Questions</div>
						{unAnsweredQuestions.map(unAnsweredQuestion => (
							<div key={unAnsweredQuestion.id}>
								<AskedQuestion authorName={users[questions[unAnsweredQuestion.id].author].name} 
								avatarUrl={users[questions[unAnsweredQuestion.id].author].avatarURL} optionOneText={questions[unAnsweredQuestion.id].optionOne.text} 
								question={unAnsweredQuestion.id} viewPollBtnClick={this.viewUnAnsweredQuestionBtnClick} />
							</div>
						))}
					</div>	
				}
				{this.state.activePanel === AnsweredPanel && 
					<div>
						<div className="row justify-content-md-center mb-2">Answered Questions</div>
							{answeredQuestions.map(answeredQuestion => (
								<div key={answeredQuestion.id}>
									<AskedQuestion authorName={users[questions[answeredQuestion.id].author].name} 
									avatarUrl={users[questions[answeredQuestion.id].author].avatarURL} optionOneText={questions[answeredQuestion.id].optionOne.text} 
									question={answeredQuestion.id} viewPollBtnClick={this.viewAnsweredQuestionBtnClick} />
								</div>
						))}
					</div>	
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