# sendgridjs

Proxy so you can send email via JavaScript through SendGrid.

## Getting Started

### Development

```
$ touch .env
```

Set your settings in .env and then run:

```
$ node app.js
```

### Production

```
$ heroku create
$ heroku addons:add sendgrid:starter
$ heroku config:set TO=toemail FROM=fromemail SUBJECT=
$ git push heroku master
$ curl -X GET http://yoursubdomain.herokuapp.com/send?to=some@where.com&
```

After you are done with that - you can call requests to that url to send an email.
