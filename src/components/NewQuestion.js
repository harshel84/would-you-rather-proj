import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setQuestion } from '../actions/shared'
import { ROOT_URL, LEADERBOARD_URL } from '../constants/urls'

class NewQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {optionOneText: '', optionTwoText : ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }
	
	  handleChange(event) {
		switch(event.target.name){
			case "optionOne":
				this.setState({optionOneText : event.target.value});
				break;
			case "optionTwo":
				this.setState({optionTwoText : event.target.value});
				break;
			default:
		}
	  } 
	 
	  handleSubmit(event) {
		event.preventDefault();
		let question = {
			optionOneText : this.state.optionOneText,
			optionTwoText : this.state.optionTwoText,
			author : this.props.authedUser
		}
		this.props.dispatch(setQuestion(question));
		this.props.history.push(LEADERBOARD_URL);
	  }
	
	render() {
		let {authedUser} = this.props;

		if (authedUser === null) {
			return <Redirect to={ROOT_URL} />
		  }
		return (
			<div className="row justify-content-md-center">	
				<div className="card col-md-8">
					<div className="card-body">
						<div className="row justify-content-md-center">
							<h6>Create New Question</h6>
						</div>
						<div className="row justify-content-md-center">
							<h6>Complete the question :</h6>
						</div>
						<div className="row justify-content-md-center">
							<h6>Would you rather ...</h6>
						</div>
						<div className="row justify-content-md-center">
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<input className="form-control" type="text" required name="optionOne" placeholder="Enter Option One Text" onChange={this.handleChange} />
									<div className="row justify-content-md-center">OR</div>
									<input className="form-control" type="text" required name="optionTwo" placeholder="Enter Option Two Text" onChange={this.handleChange} />
								</div>
								<input className="btn btn-info btn-block mt-3" type="submit" value="Submit" />
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps ({ authedUser }) {
	return {
		authedUser: authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)