export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER_QUESTION = 'RECEIVE_USER_QUESTION'
export const RECIEVE_USER_QUESTION_ANSWER = 'RECIEVE_USER_QUESTION_ANSWER'

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