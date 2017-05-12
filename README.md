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

## Before you start

This project is a nodejs project. As such, npm and node are required. Go grab the [recommended LTS](https://nodejs.org/en/) version, which will update your current installation. It's a good idea to run `npm install npm@latest -g`, currently my `npm -v` outputs `4.5.0` at the time of writing. If you haven't,
check out [yarn](https://yarnpkg.com/en/) - `npm install -g yarn` for faster installs.

## Getting Started

1. Install your dependencies, then compile the angular components (pro tip, start a new terminal and do `tsc -w`)

    ```
    cd path/to/newhotness
    npm install / yarn install
    tsc
    ```

2. Start the app

    ```
    npm start
    ```

Navigate to `localhost:3030` (or your preferred port if you changed it)

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ yarn global add feathers-cli            # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

Angular also has a powerful command line interface. This project customizes where angular drops in
its generated files, so you can do the following

```
$ yarn global add @angular/cli            # Install angular CLI

$ ng g module new-module                  # Generate a new module (might not need this)
$ ng g component new-module/new-comp      # Generate a new component (this will be useful)
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.0.0__

- Still developing...

## License

UNLICENSED
Being developed for Dorian Business Systems
