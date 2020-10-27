# Express Basics

## Basic concepts

### Important HTTP methods
There are several important HTTP methods to be aware of (although there are many more):
* OPTIONS - requests permitted communication options for a given URL or server. A client can specify a URL with this method, or an asterisk (*) to refer to the entire server.
* GET - fetch a resource from the server
* DELETE - remove a resource from the server
* POST - create a new resource on the server
* PUT - update an existing resource on the server *or* create the non-existing resource **by providing the entire resource**
* PATCH - update a resource on the server by providing only the parts that need to be updated

### A word on CORS
Allows *Cross-Origin Resource Sharing* which basically allows for cross-domain requests from the frontend. By default the browsers don't allow this behavior unless the origin that we're targeting with our requests also allows it.

Client provides a header named `Origin` with the original domain name from which the request originates. The header named `Access-Control-Allow-Origin` is then sent by server in the response and defines from which domain(s) the CORS requests can be initiated.

Sometimes the requests are *preflighted* with an `OPTIONS` request that will result in the server response that contains info not only on CORS settings but also on the HTTP methods that are supported on the given resource, supported headers (custom as well) etc.

## Basic Express setup
```javascript
const express = require('express');
const app = express();
const port = 3000;

// setup the routes here

app.listen(port, () => {
	console.log('App listening...')
})
```

## Basic routing
Basic route setup:
```javascript
app.METHOD(PATH, CALLBACK(request, response));
```
Where:
* METHOD => an HTTP method
* PATH => route path to match
* CALLBACK => a function to call if the route matches, this function is being passed the request and response objects by Express

Basically all HTTP methods are supported and associated methods exist: `get`, `post`, `put`, `patch`, `delete` etc. There's also a method named `all` that will catch any HTTP request type on the specified route path.

## Route paths and route matching
Route paths can be specified as normal strings, string patterns or regular expressions. When a requested route matches one of the specified routes the associated callback function is called.

Some examples of route matching based on strings and string patterns:
* `/` => matches the root path `/`
* `/about` => matches `/about` exactly
* `/random.text` => matches `/random.text`
* `/ab?cd` => matches both `/abcd` and `/acd`
* `/ab+cd/` => matches `/abcd`, `/abbcd`, `/abbbcd` etc.
* `/ab*cd` => matches `/abANYTHINGcd` or just `/abcd`
* `/ab(cd)?e` => matches `/abe` and `/abcde`

Internally a package called `path-to-regex` is used. For more info on how to create paths: [path-to-regexp](https://www.npmjs.com/package/path-to-regexp)

An example of directly matching based on regexes:
* `/.*test$/` => matches `my_test`, `anything_test` etc.


## Route parameters
Route parameters are specified in the route path by using the `:` sign in the path.  
Valid characters for route parameters names are: `A-Z`, `a-z`, `0-9` and `_`.

An example of parametrized route and how to access the parameters:
```javascript
app.get('/users/:userId/books/:bookId', function(req, res) {
	const params = req.params;
});
```

Characters such as `.` or `-` can also be used to separate multiple parameters aside from `/`. For example:
```javascript
app.get('/flights/:from-:to', function(req, res) {
	const params = req.params;
});
```

You can append regular expressions to parameters to limit the matches even further. The following example will match only numeric values for `userId` (in regex syntax `\d` stands for any digits, `+` stands for one or more):
```javascript
app.get('/user/:userId(\d+)', function(req, res) {
	const params = req.params;
});
```

## Chainable route handlers
Multiple route handlers for multiple methods on a single route path for can be added using the `route` method of the application instance by chaining them:
```javascript
app.route('/user')
	.get(function(req, res) { /*...*/ } )
	.post(function(req, res) { /*...*/ } )
	.put(function(req, res) { /*...*/ } )
```

## Router class
Routes can be split into modules using the `express.Router` class.
```javascript
// construct the router
const router = express.Router();
// add middleware, routes etc.
module.exports = router;
```

And after requiring the module:
```javascript
app.use([routerRootPath], router);
```
## Response object methods
Every request needs to be terminated at some point otherwise the client will be left hanging. The following methods are available on the `response` object can terminate the request:
* `res.download(path, filename)` => Prompt a file to be downloaded.
* `res.end()` => End the response process without any data.
* `res.send(data)` => Send a response of various types.
* `res.sendStatus(statusCode)` => Set the response status code and send its string representation as the response body.
* `res.json(body)` => Send a JSON response.
* `res.redirect([status,] path)` => Redirect a request.
* `res.sendFile()` => Send a file as an octet stream.
* `res.render()` => Render a view template.
* `res.jsonp()` => Send a JSON response with JSONP support.

More useful methods that can be called and chained to access or modify the request **before ending it**:
* `res.get(headerName)` => get a specific header value
* `res.set(headerName, headerValue)` => set a specific header value
* `res.status(code)` => set a code of the response

## Middleware
Middleware is a function that's granted access to the response, request and the the third, special object that represents the next middleware in the application.

Route handlers themselves represent middleware.

There are multiple types of middleware.

### Application-level middleware.

Executed on the level of the entire application. We use methods like `use`, `get`, etc. to add middleware to the application.

For any request on a given path (or all paths if path not specified):
```javascript
app.use([path], function(req, res, next) {} );
```

For a specific method (get example):
```javascript
app.get([path], function(req, res, next) {}, function(req, res, next) {} /* more functions...*/ );
```

This is called a **middleware sub-stack**. Instead of specifying the functions as arguments the functions can be placed in an array. By calling `next()` in each of the middleware functions in the stack we are basically moving the execution to the next middlware in the current sub-stack.

If we create stack by using multiple sub-stacks like this:
```javascript
app.get('/someroute', [cb1, cb2, cb3]);
app.get('/someroute', [cb4, cb5, cb6]);
```
...and we want to "leave" the first stack while in the middleware function `cb2` we can simply call `next('route')`. That will signal our Express app to skip the execution of the current middleware stack and move to the next stack and start executing `cb4`. This will work **only in middleware functions that were loaded by using the app.METHOD() or router.METHOD()**.

### Router-level middleware
Same as application-level middleware but all of the middlewares work on the level of the current router only.
To skip the rest of the middleware in the current router we can call `next('router')` to pass control back out of the router instance.

### Error-handling middleware
Works in the same way as any other middleware but is **always defined with four parameters**:
```javascript
app.use(function(err, req, res, next) {
	/* handle errors*/
})
```

### Built-in middleware
There are a few built in middlewares for parsing/accessing the request body (and making it available in the `req.body` property):
* express.static - for serving of the static files
* express.json - for JSON parsing
* express.urlencoded - for parsing the URL-encoded payloads

## Special routing cases
### Static file serving
Uses Express middleware:
```javascript
app.use(express.static('public'));
```

All the files in the `public` are then served as static files at the root-level path. E.g. if there's a file: `public/img/image.jpg` that file can be accessed with the following URL: `http://localhost:3000/img/image.jpg`.

You can set up multiple static folders. They will be prioritized in the same order in which they were specified.

You can also specify a custom path to be used as a static path:
```javascript
app.use('/static', express.static('public'))
```
...and then access those files through an URL such as `http://localhost:3000/static/img/image.jpg`.

### Custom 404 page and error handler middleware
Add a middleware function at the bottom of the entire stack like this to handle 404s:
```javascript
app.use(function (req, res, next) {
	res.status(404).send("Sorry can't find that!");
})
```

To handle all errors:
```javascript
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
})
```