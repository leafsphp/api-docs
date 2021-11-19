# What's new?

::: tip
This section is for those who have experience with Leaf MVC 2. If you are new here, you can move to the next section.
:::

Version 3 of leaf MVC contains a bunch of new features, some inclusions and even some breaking changes which are geared to easy integration with other libraries, as well as bettering some internal features used by leaf MVC and Leaf API.

## Normalized folder names

Leaf MVC now has normalized names for directories. Directories now use lowercase instead of the earlier pascal case.

```bash
C:.
├───app
│   ├───console
│   ├───controllers
│   │   └───Auth
│   ├───database
│   │   ├───factories
│   │   ├───migrations
│   │   └───seeds
│   ├───helpers
│   ├───models
│   ├───routes
│   └───views
│       ├───assets
│       │   ├───css
│       │   ├───images
│       │   ├───js
│       │   └───sass
│       ├───components
│       └───pages
│           └───errors
├───config
│   └───command
├───public
├───storage
│   ├───app
│   │   └───public
│   ├───framework
│   │   └───views
│   └───logs
└───vendor
```

## Better configuration

Leaf MVC now includes configurations in the `config` folder which allows you to easily configure Leaf's features: things like cors, views, authentication and aloe's directories. Editing the configuration allows you to customize the behaviour of Leaf's features.

## Global Methods

Leaf MVC no longer comes with "self-defined" global methods. Leaf 3 now comes with functional mode which replaces the whole idea of defining functions for Leaf MVC. Leaf MVC core which is used in Leaf MVC, Leaf API and Skeleton comes in with new global functions which extend Leaf 3's functional mode.

## Leaf 3

A little obvious here, but leaf MVC 3 runs on Leaf 3. This makes it even lighter, faster and easier to work with. This also means that you have access to tons of features through modules and you won't need to worry about updating the whole framework to receive updates. You only need to upgrade a particular module.

## Modules

Some leaf 3 modules come integrated directly with Leaf MVC along with some config options.

## MVC Core

MVC core is a leaf 3 module which contains all the functionality for transforming leaf into a full MVC framework. It comes with features like controllers, models, views, factories and many more MVC specific features. It has been optimised for leaf mvc, leaf API and Skeleton to provide the best developer experience.

We really recommend that you [read the MVC core documentation](https://www.leafphp.dev/modules/mvc-core/)
