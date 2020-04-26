# NodeJS Project Architecture

Before I start, I want to say that I have inspired from santiq
solution that you can found here
https://github.com/santiq/bulletproof-nodejs.

# MVC

Model - View - Controller\
Or, in other words ...\
Data - Design - Controller\
What do you need to know from here? Well, every express handler of route
of your api is a CONTROLLER That means that is its only responsibilty is
to call a Service and return the result. Nothing more, nothing else. Well..
I've added a thing.. Before returning, it has to determine the http status
code. But, that's ALL.. No other logic should be placed here.

# 3 Layer architecture

Controller - Service Layer - Data Acces Layer\
Or, in other words ...\
Express Route Controller - Service Class - Mongoose\
What's important here are SERVICES.. They should contain all of your business
logic and be as modular as separated as it can.\
mongoose MODELS\
Also, you have to declare all your models somewhere else. And there is
more.. We need a clear structure here. That's very important. A model is
separated in schemas, virtuals, statics, methods and hooks(mongoose middlewares).
These will hold logic that is solely related on dealing with de db. For
example, you may create a static 'findByCredentials' that looks for a document
in the db with the specified credentials(there can be some more advanced
match options). That's the Data Access Layer.\
Sure, you have an index file where all of this are putted in place.\
!!! Don't put your logic inside controllers

# Events Layer

If you think that you've already acquaired a good architecture, think
twice babe :)))\
What if you want to call a 3rd party service? I'll give you the easiest
example eveer. When user registers, you want to send him an email, saying
you thank him for using your AWESOME app.\
How are you gonna do this? Well, you will 'create' an event, define a
'handler' for it, and when a user register, 'emit' that event\

# Cron Jobs

Wtf are these? You prabably already know about setTimeout and
setInterval. It's quite the same thing, but a more elevated form. Cron
jobs are task that have to be repeated at a period of time, or tasks
that need a delay.. Let's say that someone made a reservation, but he
doesn't show up.. You give him 20 minutes from the reservation time,
and after this you are going to free his table. How do you plan to do
this? Well, you need something(a croon job) that checks at every 10
minutes the state of the reservations, and if it hasn't been
fullfilled in 20 mins after the reservation time, you quit it. Why
would you need this? It's simple.. this has to happen for every
reservation.. I don't think you'd like to check those status yourself
and update the database, nah?

# Configuration and ENV variables

This will be our secret, ok? NO ONE ELSE has to know it. 'env'
variables are variables that are needed for the application and only
the server has to know them.. For everyone else, they should be
COMPLETELY hidden. Let's say you want to connect to a db.. If it's a
mongodb, in the connection url you have to type the username and
password. Probably you won't sleep that well knowing that everyone can
have access to those and fool with your db. That's why we put such
variables in a .env file and ignore it when we host the app. Also, we
import all of this in a config file to have a more intuitive way to
access them so that it makes our life eaaasy.

# Loaders

Have you ever worked on a the backend of an application? There are a
lot of stuff that have to be loaded.. Believe, in this project, they
are still few things.. When an app it's hosted somewhere, it run the
app.js or index.js file in the root folder. And you don't like long
and unorganised files, so we split it in more files which have a
single responsibility. In our case it's one for mongoose, one for
express, one for logger, and of course, an index :)))

# Others

!! don't use console.log\
Log any information using the Logger module. We have Logger.info, Logger.warn
and Logger.error that we'll provide us a ore intuitive output.\

Enjoy coding :D
