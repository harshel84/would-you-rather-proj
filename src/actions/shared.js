import { getInitialData, saveQuestion, saveQuestionAnswer} from '../utils/api'
import { receiveUsers, receiveUserQuestion, receiveUserQuestionAnswer } from '../actions/users'
import { receiveQuestions, receiveQuestion, receivePollQuestion, receiveQuestionAnswer } from '../actions/questions'
import { setAuthedUser} from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
	return (dispatch) => {
	  dispatch(showLoading())
	  return getInitialData()
		.then(({ users, questions }) => {
		  dispatch(receiveUsers(users));
		  dispatch(receiveQuestions(questions));
		  dispatch(hideLoading());
		})
	}
  }

  export function setLoggedInUser(id){
	  return (dispatch) => {
		  return dispatch(setAuthedUser(id));
	  }
  }

  export function setPollQuestion(question){
	  return (dispatch) => {
		  return dispatch(receivePollQuestion(question));
	  }
  }

  export function setQuestion(question){
	  return (dispatch) => {
		  return saveQuestion(question)
			  .then((formattedQuestion) => 
			  	{ 
					dispatch(receiveQuestion(formattedQuestion))
					dispatch(receiveUserQuestion(question.author, formattedQuestion.id))
				});
	  }
  }

  export function setQuestionAnwer(authedUser, qid, answer){
	  return (dispatch) => {
		console.log(authedUser, qid, answer);  
		return saveQuestionAnswer(authedUser, qid, answer)
		  	   .then(() => {
					dispatch(receiveQuestionAnswer(authedUser, qid, answer)); 
					dispatch(receiveUserQuestionAnswer(authedUser, qid, answer));
				 });
	  }
  }
