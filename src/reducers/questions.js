import { RECEIVE_QUESTIONS, RECEIVE_QUESTION, RECEIVE_QUESTION_ANSWER } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
	  }
	case RECEIVE_QUESTION :
	  return {
		  ...state,
		  [action.question.id] : action.question
	  } 
	  case RECEIVE_QUESTION_ANSWER : 
	  return {
		  ...state,
		  [action.qid] : {
			 ...state[action.qid],
			 [action.answer] : {
				...state[action.qid][action.answer],
				votes: state[action.qid][action.answer].votes.concat([action.authedUser])
			 } 
		  }
		  
	  } 
    default :
      return state
  }
}