# Routing

::: tip Leaf router
leaf MVC uses Leaf's router so be sure [read the docs](https://leafphp.dev/docs/routing/).
:::

Leaf MVC keeps all routes in the `app/routes` directory. All routes are defined the `index.php` file round in the routes directory, however, you can create files pertaining to a group of routes which allows you to break routes into groups.

## Basic Routing

Just as with base leaf, you can define routes using the leaf app instance or the leaf router module.

```php
// $app instance (old)
$app->get('/user/{id}', function($id) {
  json([
    "mesage" => "Your id is $id"
  ]);
});

// functional mode instance
app()->post('/save', function() {
  // 
});

// using controllers
$app->get('/user/{id}', 'Class@method');

// using the router class
Leaf\Router::get("/users", "Class@method");
```

The most basic app routes accept a URI and a closure, providing a very simple and expressive method of defining routes and behavior without complicated routing configuration files:

```php
$app->get('/greeting', function() {
  echo "Hello there!";
});
```

### Available Router Methods

The router allows you to register routes that respond to any HTTP verb:

```php
app()->get($uri, $callback);
app()->post($uri, $callback);
app()->put($uri, $callback);
app()->patch($uri, $callback);
app()->delete($uri, $callback);
app()->options($uri, $callback);
```

Sometimes you may need to register a route that responds to multiple HTTP verbs. You may do so using the match method. Or, you may even register a route that responds to all HTTP verbs using the any method:

```php
app()->match('GET|POST', '/', function () {
  //
});

app()->any('/', function () {
  //
});
```

### Redirect Routes

If you are defining a route that redirects to another URI, you may use the `$app->redirect` method. This method provides a convenient shortcut so that you do not have to define a full route or controller for performing a simple redirect:

```php
app()->redirect('/here', '/there');
```

By default, `$app->redirect` returns a `302` status code. You may customize the status code using the optional third parameter:

```php
app()->redirect('/here', '/there', 301);
```

### Sub files

In the `App/Routes` directory, you'll find an `index.php` file, this is the entry point for your routes, however, you might want to seperate your routes to avoid having bloated files containing too many routes.

You simply need to create a file, eg: `_user.php` and add all your user specific routes in there.

**Note that the `_` is not compulsory, it's just a good naming convention inspired by SASS modules.**

After creating the sub file, you just need to require it in the main route file `index.php`.

To view the complete routing documentation, check the [Leaf Core Routing docs](https://leafphp.dev/docs/routing/)
