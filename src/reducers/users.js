import { RECEIVE_USERS, RECEIVE_USER_QUESTION, RECIEVE_USER_QUESTION_ANSWER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
	  }
	case RECEIVE_USER_QUESTION :
	   let user = state[action.authedUser];
		return {
		  ...state, 
		  [action.authedUser] : {
		    ...user,
			questions : user.questions.concat(action.id)
		  } 
	  }
	case RECIEVE_USER_QUESTION_ANSWER :
		let curUser = state[action.authedUser];
		return {
		   ...state, 
		   [action.authedUser] : {
			   ...curUser,
			   answers : {
				 ...curUser.answers,
				 [action.qid] : action.answer 
			   }   
		   }
	   }
    default :
      return state
  }
}