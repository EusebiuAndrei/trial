# NodeJS Project Architecture

Before I start, I want to say that I have inspired from santiq
solution that you can found here
https://github.com/santiq/bulletproof-nodejs.

# MVC

Model - View - Controller\
Or, in other words ...\
Data - Design - Controller\
What do you need to know from here? Well, every express
handler of route of your api is a CONTROLLER That means that is its
only responsibilty is to call a Service and return the result. Nothing
more, nothing else. Well.. I've added a thing.. Before returning, it
has to determine the http status code. But, that's ALL.. No other logic
should be placed here.

# 3 Layer architecture

Controller - Service Layer - Data Acces Layer\
Or, in other words ...\
Express Route Controller - Service Class - Mongoose\
What's important here are SERVICES.. They should contain all of your business logic and be as modular as separated as it can.\
Also, you have to declare all your models somewhere else. And there is more.. A model is separated in schemas, virtuals, statics, methods and hooks. Sure, you have an index file where all of this are putted in place.\
!!! Don't put your logic inside controllers

# Events Layer

If you think that you've already acquaired a good architecture, think twice babe :)))\
What if you want to call a 3rd party service? I'll give you the easiest example eveer. When user registers, you want to send him an email, saying you thank him for using your AWESOME app.\
How are you gonna do this? Well, you will 'create' an event, define a 'handler' for it, and when a user register, 'emit' that event\
