---
aside: none
---

# Path Config

leaf API v3 comes in with a whole lot of available customizations. One major customization is the paths config. This allows you to change leaf API's directory structure to something you prefer. This means you can rearrange the whole of leaf API and have all your files still map correctly: a feature which was only available in skeleton.

```php
<?php

return [
    'controllersPath' => 'app/controllers',

    'modelsPath' => 'app/models',

    'migrationsPath' => 'app/database/migrations',

    'seedsPath' => 'app/database/seeds',

    'factoriesPath' => 'app/database/factories',

    'helpersPath' => 'app/helpers',

    'viewsPath' => 'app/views',

    'configPath' => 'config',

    'storagePath' => 'storage',

    'commandsPath' => 'app/console',

    'routesPath' => 'app/routes',

    'libPath' => 'lib',

    'publicPath' => 'public',

    'databaseStoragePath' => 'storage/app/db'
];
```

These defined paths become available through global shortcut functions like `viewsPath()`

## Next Steps

- [Path Utils](/leaf-mvc/v/2.0/utils/paths)
- [Leaf Blade](/leaf/v/2.4.3/views/blade)
- [Leaf Forms](/leaf/v/2.4.3/views/forms)

