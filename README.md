# Angular Typescript Starting Project

### Steps to run
Make sure Node and NPM are up to date
```sh
$ cd angular-starter
$ npm i
$ npm run start
```
Go to http://localhost:4200 to view

# Steps to test
Make sure Node and NPM are up to date
```sh
$ cd angular-starter
$ npm i // if you havent install node_modules yet
$ npm run test
```

# App Layout
```
app
│   app.cmpt.ts
│   (other associated root app files)
|
|____header
|    |   header.cmpt.ts
|    |   (other associated header cmpt files)
|
|____[home, not-found]
|    |   [cmptName].cmpt.ts
|    |   (other associated [cmptName] cmpt files)
|
|____shared
     |____components
     |    |____(associated [cmptName] cmpt files)
     |
     |____models
     |    |____(associated [model] files)
     |
     |____services
     |    |____(associated [service] files)