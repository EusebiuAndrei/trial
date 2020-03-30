# NodeJS Project Architecture

Before I start, I want to say that I have inspired from santiq
solution that you can found here
https://github.com/santiq/bulletproof-nodejs.

# MVC

Model - View - Controller Or, in other words ... Data - Design -
Controller What do you need to know from here? Well, every express
handler of route of your api is a CONTROLLER That means that is its
only responsibilty is to call a Service and return the result Nothing
more, nothing else Well.. I've added a thing.. Before returning, it
has to determine the http status code But, that's ALL.. No other logic
should be placed here
