---
aside: none
---

# Aloe Config

Aloe CLI is used in leaf MVC and leaf API to run commands that make your app development process simple. This config basically allows you to configure Aloe CLI's behaviour.

For now aloe only allows you to configure the directory paths. This allows you to select paths for stuff like controllers, models and migrations. This means that aloe will generate and read files only in the specified directories.

```php
<?php
// config for aloe CLI
return [
    'paths' => [
        'controllers_path' => '/app/controllers',
        'models_path' => '/app/models',
        'migrations_path' => '/app/database/migrations',
        'seeds_path' => '/app/database/seeds',
        'factories_path' => '/app/database/factories',
        'helpers_path' => '/app/helpers',
        'views_path' => '/app/views',
        'config_path' => '/app/config',
        'storage_path' => '/storage',
        'commands_path' => '/app/console',
        'routes_path' => '/app/routes',
        'lib_path' => '/lib',
    ],
];
```

The default config has already been set to match leaf API's directories, but if you need to change any of Aloe CLI's paths, this is where you can do that.

For documentation on Aloe CLI, you can check the [documentation](https://leafphp.dev/aloe-cli/)
