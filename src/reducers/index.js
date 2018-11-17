import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import pollQuestion from './pollQuestion'

export default combineReducers({
  authedUser,
  users, 
  questions,
  pollQuestion
})