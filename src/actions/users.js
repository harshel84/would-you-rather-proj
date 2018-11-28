import { RECEIVE_USERS, RECEIVE_USER_QUESTION, RECIEVE_USER_QUESTION_ANSWER } from '../constants/actionTypes'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function receiveUserQuestion(authedUser, id) {
	return {
		type : RECEIVE_USER_QUESTION, 
		authedUser, 
		id
	}
}

export function receiveUserQuestionAnswer(authedUser, qid, answer) {
	return {
		type : RECIEVE_USER_QUESTION_ANSWER, 
		authedUser, 
		qid,
		answer
	}
}