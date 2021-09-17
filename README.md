# Restauranter

Restauranter is an open-source restaurant management web app. A user can act as a Patron and/or Proprietor. A corresponding Rails API can be found at [https://github.com/ronsala/restauranter-backend](https://github.com/ronsala/restauranter-backend).

Patrons can ...

* Choose a restaurant
* order dishes from a menu
* arrange to pick up or dine in
* check out

Proprietors can ...

* Sign up for an account
* Set up a restaurant and menu
* Edit a restaurant and menu
* See their restaurant's orders and mark them fulfilled

You can watch a video demo [here](https://www.youtube.com/watch?v=q5TxPFtOCv0).

You can read a blog post about the creation of the app [here](http://ronsala.net/makefile_006_writing_a_react-redux_app_with_redux_toolkit).

## Versions

Ruby 2.6.3

Rails 6.0.3.6

## Installation

You can either clone the repository directly from GitHub into a local directory on your computer or you can Fork the app so that you can contribute to the code.

Once you Fork or Clone this app, cd into that directory and then execute:

```zsh
npm start
```

## Testing

Restauranter uses [Cypress](https://www.cypress.io/) for testing and Behavior Driven Development.

To run headless from command line:

`yarn test` for all tests

`yarn test --spec [path/to/test/file/or/files]` or `yarn test -s [path/to/test/file/or/files]` for a specific test or tests, e.g.

`yarn test -s "cypress/integration/home_spec.js"`

`yarn test -s "cypress/integration/home_spec.js,cypress/integration/signup_spec.js"`

To run in browser from command line:

`yarn test:open`

Then, in the Cypress window that opens, click `Run [number] integration specs` for all tests or an individual test for that one alone.

## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/ronsala/restauranter-frontend](https://github.com/ronsala/restauranter-frontend). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## Code of Conduct

Everyone interacting in this project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.

## License

This app is available as open source under the terms of the MIT License.

## Acknowledgments

* Flatiron School for instruction and community.
* My spouse for support and cheerleading.
* Image creators:
  * [Skarg](https://commons.wikimedia.org/wiki/User:Skarg) for "Photograph of Restaurant Row parking lot in San Marcos, California", protected under a Creative Commons Attribution-Share Alike [4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) license. The image is unmodified from the original.
  * [David Stanley](https://www.flickr.com/photos/davidstanleytravel/) for "Roadside Restaurateur", protected under a Creative Commons Attribution [2.0 Generic](https://creativecommons.org/licenses/by/2.0/) license. The image is unmodified from the original.
  