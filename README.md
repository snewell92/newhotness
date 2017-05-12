# newhotness

> Tennesse Solo and Ensemble

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.
We use sequelize to hook feathers with MySQL for the database connection.
We use `express-vue` to pre-render the shell of our application. Currently this is being used as SSR, but we'll pick it apart
and set it up correctly soon.
We also use express routes to populate our vue shell with current page name, which is what gets passed to our front end.
For the front end, angular takes over and will dynamically load appropriate component(s) for all pages.
At that point angular can use REST (or even sockets) with the feathers client API to interact with the server.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/newhotness; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.0.0__

- Still developing...

## License

UNLICENSED
Being developed for Dorian Business Systems
