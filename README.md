<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).

##Teste no GraphQL
http://localhost:3000/graphql
mutation {
  createRegister(input: { 
	document: "32.007.310-5",
	cell_phone: "(11) 951462260",
	activate: true,
	registration_form: 
	 {
		current_step: "Step1",
		steps: [ {
					id: "",
					inc_date: "06-25-2019",
					update_date: "",
				}],
		parents: [{
			userPublicId: "",
			main: true,
			name: "André Maria",
			email: "andremaria1980@gmail.com",
			cell_phone: "(11) 951462260",
			phone: "(11) 951462260",
			birthday: "02-20-1980",
			documents: [
				{
					type: "RG",
					value: "32.007.310-5"
				}
			],
			address: {
				zipcode: "05570-170",
				street: "Rua Ruy Camargo",
				number: "51",
				complement: "11c"
				},
        responsibilities: ["Teste"],
		}]
		children: [
			{
			name: "Joaquim Roder de Maria"
			birthday: "02-26-2015",
			cell_phone: "",
			gender: "4",
			year: "4",
			school: "T4",
			nationality: "brasileira",
			documents: [
				{
					type: "RG",
					value: "32.007.310-5"
				}],
			address: {
				zipcode: "05570-170",
				street: "Rua Ruy Camargo",
				number: "51",
				complement: "11c"
				}
			},
			{
			name: "Francisco Roder de Maria",
			birthday: "07-08-2017",
			cell_phone: "",
			gender: "2",
			year: "2",
			school: "T2"
			nationality: "brasileira",
			documents: [{
					type: "RG",
					value: "32.007.310-5"
				}]
			address: {
				zipcode: "05570-170",
				street: "Rua Ruy Camargo",
				number: "51",
				complement: "11c"
				}
			}
		]
	}
  }) {
  id
  document
  cell_phone
  activate
  }
}