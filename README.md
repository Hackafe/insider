# [Hackafe Insider Portal](http://insider.hackafe.org)
**Internally deployed**

[![wercker status](https://app.wercker.com/status/4a2d4891222508baa64254adccbb24a3/s "wercker status")](https://app.wercker.com/project/bykey/4a2d4891222508baa64254adccbb24a3)
[![Build Status](https://travis-ci.org/Hackafe/insider.svg)](https://travis-ci.org/Hackafe/insider)
[![Dependency Status](https://david-dm.org/Hackafe/insider.svg)](https://david-dm.org/Hackafe/insider#info=dependencies)
[![devDependency Status](https://david-dm.org/Hackafe/insider/dev-status.svg)](https://david-dm.org/Hackafe/insider#info=devDependencies)

Hackafe Insider Portal provides information for people inside the Hackafe space. 
Usefull information is upcoming events, who is inside and other cool stuff.

The project is open source and open to contributions. If you believe a feature is missing
you are welcome to [create a pull request](CONTRIBUTING.md#pull-requests) or just [request the feature](CONTRIBUTING.md#features). If you found a bug [report it](CONTRIBUTING.md#bugs) at once.

* Website (only while inside Hackafe space): [http://insider.hackafe.org](http://insider.hackafe.org)
* Source: [https://github.com/Hackafe/insider](https://github.com/Hackafe/insider)

## Contributing

Anyone and everyone is welcome to [contribute](CONTRIBUTING.md),
however, if you decide to get involved, please take a moment to review
the [guidelines](CONTRIBUTING.md):

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

### Building

The project uses npm scripts to build and run.

#### Run
To run locally the project:
```
npm install
npm start
```
after that you can open [http://localhost:8080](http://localhost:8080) to inspect

#### Dev
To run in dev mode with watchers to rebuild on change
```
npm run dev
```
then open [http://localhost:9966](http://localhost:9966)

#### Test
Tests are lacking at the moment, but there are jshint and jscs rules that are run
```
npm test
```

**Note:** Always run the tests before commiting

## License

The code is available under the [MIT license](LICENSE.txt).
