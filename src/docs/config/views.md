---
aside: none
---

# View Config

leaf API v3 also ports in Leaf MVC's view config which allows you to customize how Leaf manages templates.

```php
<?php

use Leaf\View;

return [
    /*
    |--------------------------------------------------------------------------
    | Template Engine [EXPERIMENTAL]
    |--------------------------------------------------------------------------
    |
    | Leaf MVC unlike other frameworks tries to give you as much control as
    | you need. As such, you can decide which view engine to use.
    |
    */
    'view_engine' => \Leaf\Blade::class,

    /*
    |--------------------------------------------------------------------------
    | Custom config method
    |--------------------------------------------------------------------------
    |
    | Configuration for your templating engine.
    |
    */
    'config' => function ($config) {
        View::blade()->config($config['views_path'], $config['cache_path']);
    },

    /*
    |--------------------------------------------------------------------------
    | Custom render method
    |--------------------------------------------------------------------------
    |
    | This render method is triggered whenever render() is called
    | in your app if you're using a custom view engine.
    |
    */
    'render' => null,
];

```

<!-- ## Next Steps

- [Leaf Blade](/leaf/v/2.4.3/views/blade)
- [Leaf Forms](/leaf/v/2.4.3/views/forms) -->

