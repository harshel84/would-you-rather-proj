import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setQuestionAnwer } from '../actions/shared'
import { ROOT_URL } from '../constants/urls'


class UnAnsweredQuestion extends Component {
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
		if(this.state.value !== "") {
			this.props.dispatch(setQuestionAnwer(this.props.authedUser, this.props.pollQuestion, this.state.value));
		}
	  }

	render() {
		if (this.props.pollQuestion === null) {
			return <Redirect to={ROOT_URL} />
		  }
		let { users, questions, pollQuestion } = this.props;
		let optionOneText = questions[pollQuestion].optionOne.text;
		let optionTwoText = questions[pollQuestion].optionTwo.text;
		return (
			<div>
				<h6 className="row">{users[questions[pollQuestion].author].name} Asks:</h6>
				<div className="row">
					<div className="col-md-3">
						<img src={users[questions[pollQuestion].author].avatarURL} className="img-fluid img-thumbnail" alt="Author" />
					</div>
					<div className="col-md-6">
						<h6 className="row">Would You Rather ...</h6>
						<form onSubmit={this.handleSubmit}>
							<div className="form-check">
								<input type="radio" className="form-check-input" value="optionOne" onChange={this.handleChange} />
								<label className="form-check-label">
									{optionOneText}
								</label>
							</div>
							<div className="form-check">
								<input type="radio" className="form-check-input" value="optionTwo" onChange={this.handleChange} />
								<label className="form-check-label">
									{optionTwoText}
								</label>
							</div>
							<input className="btn btn-info btn-block mt-3" type="submit" value="Submit" />
						</form>
					</div>
				</div>
			</div>
			)
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

export default connect(mapStateToProps)(UnAnsweredQuestion)
