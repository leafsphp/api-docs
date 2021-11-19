---
aside: none
---

# Aloe Config

Aloe CLI is used in leaf MVC and leaf API to run commands that make your app development process simple. This config basically allows you to configure Aloe CLI's behaviour.

For now aloe only allows you to configure the directory paths. This allows you to select paths for stuff like controllers, models and migrations. This means that aloe will generate and read files only in the specified directories.

```php
<?php

return [
    "paths" => [
        "controllers_path" => "/App/Controllers",
        "models_path" => "/App/Models",
        "migrations_path" => "/App/Database/Migrations",
        "seeds_path" => "/App/Database/Seeds",
        "factories_path" => "/App/Database/Factories",
        "helpers_path" => "/App/Helpers",
        "views_path" => "/App/Views",
        "config_path" => "/App/Config",
        "storage_path" => "/App/storage",
        "commands_path" => "/App/Console",
        "routes_path" => "/App/Routes",
        "lib_path" => "/Lib",
    ],
];
```

The default config has already been set to match leaf MVC's directories, but if you need to change any of Aloe CLI's paths, this is where you can do that.

For documentation on Aloe CLI, you can check the [documentation](https://leafphp.dev/aloe-cli/)
