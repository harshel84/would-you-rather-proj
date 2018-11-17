import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Logout from './Logout'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import AnsweredQuestion from './AnsweredQuestion'
import UnAnsweredQuestion from './UnAnsweredQuestion'

export default function App(){
    return (
		<Router>
			<Fragment>	
			<div className="container">
				<Nav/>
				<div className="row justify-content-md-center pt-4">
					<div className="card col-md-8">
						<div className="card-body">
							<Route path='/' exact component={Home} />
							<Route path='/dashboard' exact component={Dashboard} />
							<Route path='/leaderboard' exact component={LeaderBoard} />
							<Route path='/newquestion' exact component={NewQuestion} />
							<Route path='/logout' exact component={Logout} />
							<Route path='/answeredquestion' exact component={AnsweredQuestion} />
							<Route path='/unansweredquestion' exact component={UnAnsweredQuestion} />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	</Router>
    )
}