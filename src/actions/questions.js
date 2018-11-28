import { RECEIVE_QUESTIONS, 
		 SET_POLL_QUESTION,
		 RECEIVE_QUESTION, 
		 RECEIVE_QUESTION_ANSWER } from '../constants/actionTypes'

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