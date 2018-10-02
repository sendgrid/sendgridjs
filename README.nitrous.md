# Getting Set Up on Nitrous.IO

Run the following commands in the terminal below:

1. `cd ~/workspace/sendgridjs`
2. Run `cp .env-example .env`
3. In the `.env` file, replace `SENDGRID_USERNAME` to your Sendgrid Username
4. In the `.env` file, replace `SENDGRID_PASSWORD` to your Sendgrid Password
5. In the `.env` file, either replace `FROM` or `TO` with your email address. Delete the one that you want a user to be able to customize.
6. Run `npm install`
6. Run `node app.js`

Click on the "Preview Menu" and then "Port 3000" to view your sendgridjs
app!
