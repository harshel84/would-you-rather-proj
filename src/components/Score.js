import React from 'react'

export default function Score({name, avatarUrl, answeredQuestionCount, createdQuestionCount}){
	return (
		<div className="card mb-4">
			<div className="card-body">
				<div className="row justify-content-md-center">{name}</div>
				<div className="row">
						<div className="col-md-3"><img alt="avatar" src={avatarUrl} className="img-fluid img-thumbail rounded-circle"></img></div>
						<div className="col-md-6">
							<div className="row pt-4">
								<div className="col-md-8">Answered questions</div>
								<div className="col-md-2">{answeredQuestionCount}</div>
							</div>
							<div className="row pt-2">
								<div className="col-md-8">Created questions</div>
								<div className="col-md-2">{createdQuestionCount}</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="row pb-3">Score</div>
							<span className="badge badge-info rounded-circle badge-md">{answeredQuestionCount + createdQuestionCount}</span>
						</div>
				</div>
			</div>
		</div>
	)
}