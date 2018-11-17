import React from 'react'

export default function AskedQuestion({question, authorName, avatarUrl, optionOneText, viewPollBtnClick}){
	return (
		<div className="card mb-4">
			<div className="card-body">
				<div className="row">{authorName} asks:</div>
				<div className="row">
					<div className="col-md-3">
						<img src={avatarUrl} className="img-fluid img-thumbnail rounded-circle" alt="Author" />
					</div>
					<div className="col-md-6">
						<div className="row"><h6>Would you rather</h6></div>
						<div className="row">...{optionOneText.substr(0,7)}...</div>
						<div className="row pt-3">
							<button className="btn btn-info btn-block" onClick={() => viewPollBtnClick(question)}>View Poll</button>
						</div>
					</div>
				</div>
			</div>
		</div>)
}
