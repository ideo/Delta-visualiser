
# Delta survey viz
In order to run this repo locally: 
1. `git clone` repo
2. `yarn` to install everything in root repo
3. `cd client` go to client directory
4. `yarn && npm run build` to build and install dependencies
5. `cd ..` go back to root repo
6. `npm run dev` to start both backend and frontend concurrently. 

This page renders data coming from a private spreadsheet, makes the aggregations in the backend, and visualizes it with nivo.rocks. 

Ping me (Marta Soto @msotomorras) if you need any more info or help setting up.

## Forked from
### React + Node + Google spreadsheets Template

Easy setup for Node+Express server linked to Google Spreadsheets with React Frontend. 
`npm run dev` for running Front and Back concurrently. Backend runs with nodemon. The client app comes set up with react-router-dom and sass.

You'll have to set up your Google project. There's very good documentation provided by Google [here](https://developers.google.com/sheets/api/quickstart/nodejs). For more detail, I found [this tutorial](https://blog.stephsmith.io/tutorial-google-sheets-api-node-js/) very helpful. 

### Get your Google credentials
To get your client_secret.json, I followed these steps from the tutorial mentioned above.
1. Go to the Google Developers Console and navigate to the API section. You should see a dashboard.
2. Click on  “Enable APIs” or “Library” which should take you to the library of services that you can connect to. Search and enable the Google Sheets API.
3. Go to Credentials and select “Create credentials”.
4. Select “Service Account” and proceed forward by creating this service account. It can be named whatever you want.
5. Under “Role”, select Project > Owner or Editor, depending on what level of access you want to grant.
6. Select JSON as the Key Type and click “Create”. This should automatically download a JSON file with your credentials.
7. Rename this credentials file as client_secret.json and copy it into your working directory.
8. The final administrative step is super important! Take the “client email” that is in your credentials file and grant access to that particular email in the sheet that you’re working in. You can do this by clicking “Share” in the top left of your spreadsheet and then pasting that email in the field, enabling with “Can edit”. If you do not do this, you will get an error when trying to pull the data.


