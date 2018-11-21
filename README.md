# Would you rather Project

* install all project dependencies with `npm install`
* start the development server with `npm start`

## List of files in the project.
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify 	this.
├── package-lock.json # is automatically generated.
├── .gitignore # Git uses it to determine which files and directories to ignore for 	commit.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
	├── index.css # css file based on bootstrap.
	├── manifest.json # manifest file.
│   └── index.html # DO NOT MODIFY
└── src
	├── index.js # file which renders the root React component to the html.
	└── actions 
		└── authedUser.js # contains javascript methods called by components to manage the authenticated user.
		└── questions.js  # contains javascript methods called by to manage the questions.
		└── shared.js # contains shared javascript methods called by components
		└── users.js # contains javascript method to manage the users.
	└── components 
		└── AnsweredQuestion.js # Component to manage Answered questions. 
		└── App.js # Master page component which also contains route information.
		└── AskedQuestion.js # Component to manage Asked question.
		└── Dashboard.js # Component managing the authed user screen after login.
		└── Home.js # Component managing the home screen for the app.
		└── LeaderBoard.js # Component managing the leader board. 
		└── logo.svg # Logo for the home page.
		└── Logout.js # component handling logging out for the user.
		└── Nav.js # Component which handles the navigation. 
		└── NewQuestion.js # Component handling the new question.
		└── Score.js # Component which manages the scores on a question.
		└── UnAnsweredQuestion.js # Component which manages the unaswered question.
		└── PollQuestion.js # Component which manages Poll Question.
		└── Page404.js # Component which handles the non matched Urls.
	└── constants
		└── urls.js # Url Constants
	└── middleware
		└── index.js # Combines all middleware 
		└── logger.js # Logging middleware
	└── reducers
		└── authedUser.js # Manages the store updates for Authenticates user.
		└── index.js # Combines all the reducer into a root reducer.
		└── pollQuestion.js # Manages the store updates for the Polled Question.
		└── questions.js # Manages the store updates for the questions coming from the server.
		└── users.js # Manages the store updates for the users coming from the server.
	└── utils
		└── _Data_.js # mimics server
		└── api.js # exposes API consumed in the actions
	├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is 		encouraged, but not required.
    ├── Book.js # Component to manage the book with the select option.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions 	for the methods are below.
    ├── BookShelf.js # Component to manage a Bookshelf which houses a collection of 	books.
    ├── Contants.js # File contains all the constants.
    ├── SearchBooks.js # Components which manages the component for searching the 		books.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM 			rendering only.
```
