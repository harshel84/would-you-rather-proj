export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
export const SET_POLL_QUESTION = 'SET_POLL_QUESTION'
export const RECEIVE_QUESTION_ANSWER = 'RECEIVE_QUESTION_ANSWER'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function receivePollQuestion (question) {
	return {
	  type: SET_POLL_QUESTION,
	  question
	}
  }

export function receiveQuestion (question) {
	return {
	  type: RECEIVE_QUESTION,
	  question
	}
  }

export function receiveQuestionAnswer (authedUser, qid, answer) {
	return {
	  type: RECEIVE_QUESTION_ANSWER,
	  authedUser, 
	  qid, 
	  answer
	}
  }