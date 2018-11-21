import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Logout from './Logout'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import PollQuestion from './PollQuestion';
import { LEADERBOARD_URL, DASHBOARD_URL,
		 NEWQUESTION_URL, LOGOUT_URL, POLLQUESTION_URL } from '../constants/urls'

export default function App(){
    return (
		<Router>
			<Fragment>	
			<div className="container">
				<div className="row justify-content-md-center pt-4">
					<Nav/>
					<div className="card col-md-8">
						<div className="card-body">
							<Switch>
								<Route path={DASHBOARD_URL} exact component={Dashboard} />
								<Route path={LEADERBOARD_URL} exact component={LeaderBoard} />
								<Route path={NEWQUESTION_URL} exact component={NewQuestion} />
								<Route path={LOGOUT_URL} exact component={Logout} />
								<Route path={POLLQUESTION_URL} exact component={PollQuestion} />
								<Route component={Home} />
							</Switch>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	</Router>
    )
}