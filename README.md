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
$ npm i
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
```

## <a name="license"></a> License
 
The MIT License (MIT)

Copyright (c) 2019 Luke Geiken

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.