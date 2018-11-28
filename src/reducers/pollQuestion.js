import { SET_POLL_QUESTION } from '../constants/actionTypes'

export default function pollQuestion (state = null, action) {
  switch(action.type) {
	 case SET_POLL_QUESTION : 
	   return action.question
    default :
      return state
  }
}