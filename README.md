# sendgridjs

Proxy so you can send email via JavaScript through SendGrid.

## Getting Started

### Development

```bash
touch .env
```

Set your settings in .env and then run:

```bash
node app.js
```

### Production

```bash
$ heroku create
$ heroku addons:add sendgrid:starter
$ heroku config:set FROM=fromemail
$ git push heroku master
```

After you are done with that - you can call requests to that url to send an email.

```bash
curl -X POST http://yoursubdomain.herokuapp.com/send \
-d "to=you@youremail.com" \
-d "subject=Test" \
-d "html=<h1>Hello, there</h1>"
```
