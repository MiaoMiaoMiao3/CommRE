# Hi Kidder Mathews Team!


To run this project, please clone the project from this github repository into a local directory, install dependencies :

### `npm install`

And start the application:
### `npm start`

This command will runs the app in the development mode.\
Alternatively, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
\
\
The program is set to pull data from the API endpoints served on a Heroku server. \
A starting assumption that I made was that each of the column headers in Sale-Data.csv should correspond to the endpoints requested.\
For Example: \
\
'\agent' corresponds to agent\
'\property-type' corresponds to property-type \
'\property-sales' corresponds to DATE \
\
I opted to use Bootstrap for basic table styling, this is included as a dependency in package.json. \
\
The two child components that I made were the results table that displays each Agent's total sales (ResultsTable) and the Pie chart that would be re-rendered when an agent's name is selected in the table (PieChart). \
\
'App' is a parent component where all methods for determining specific property sales are determined and updated as state parameters. These are then passed down as props in the children components ("downward data flow" design pattern).\

## NOTE
 This command will run the app in development mode.\
Alternatively, open [http://localhost:3000](http://localhost:3000) to view it in the browser.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
