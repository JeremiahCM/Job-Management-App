# Frontend Job Management Application

This is a job management application bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app allows tradies to create jobs to manage, take notes on these jobs and keep records through updating these jobs.

This web app uses
* ReactJS
* Axios
* MaterialUI (Styling library)
* MomentJS (Date formatting library)
* JSON Server

This web app has been created with __Google Chrome__ in mind as the default browser.

## How to set up the web app

1. Copy the repository to a suitable directory on your computer
2. Open up the app folder with VSCode
3. Set up a split terminal in VSCode (one will JSON-server, other will run the web app)
4. In one terminal, run __'npx json-server --port 3001 --watch db.json '__
* You should see that the db.json is done loading and the local API endpoints have been established
* Leave this terminal with the JSON Server running
5. In the other terminal, run __'npm install'__ to download all the modules and dependencies required
6. In this same terminal, run __'npm start'__ to start up the web app
* You should soon see the main page open up in your default browser
7. Explore the web app!

## Completed Features

* Job/Note Lists
* Create new unique jobs with details
* Jobs have a status field for progress
* Create new notes attached to jobs
* View job/note details


## To be completed

* Filter and sort jobs
* Edit existing notes attached to jobs
* Edit status of existing job



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
