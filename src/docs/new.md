# What's new?

::: tip
This section is for those who have experience with Leaf API 2. If you are new here, you can move to the next section.
:::

Version 3 of Leaf API contains a bunch of new features, some inclusions and even some breaking changes which are geared to easy integration with other libraries, as well as bettering some internal features used by Leaf API and Leaf API.

## Normalized folder names

Leaf API now has normalized names for directories. Directories now use lowercase instead of the earlier pascal case.

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
│       ├───components
│       └───pages
│           └───errors
├───config
│   └───command
├───public
│   └───assets
├───storage
│   ├───app
│   │   └───public
│   ├───framework
│   │   └───views
│   └───logs
└───vendor
```

## Public directory

In earlier versions, the `public` directory was hardly used, however, v3 changes things a bit. Due to security and other reasons, our application root was moved to the `public` directory.

::: tip Note
This does not change the way you build your apps in any way.
:::

Besides the app root in `public`, application assets are also now kept in the `public` directory as well. This is because the `public` directory is configured to be relative to whichever server/hosting platform or technique you are using. `public` will always point to your public directory.

::: tip Note
With this change, you will need to reference your assets with `PublicPath`
:::

## Better configuration

Leaf API now includes configurations in the `config` folder which allows you to easily configure Leaf's features: things like cors, views, authentication and aloe's directories. Editing the configuration allows you to customize the behaviour of Leaf's features.

## Global Methods

Leaf API no longer comes with "self-defined" global methods. Leaf 3 now comes with functional mode which replaces the whole idea of defining functions for Leaf API. Leaf API core which is used in Leaf API, Leaf API and Skeleton comes in with new global functions which extend Leaf 3's functional mode.

## Leaf 3

A little obvious here, but Leaf API 3 runs on Leaf 3. This makes it even lighter, faster and easier to work with. This also means that you have access to tons of features through modules and you won't need to worry about updating the whole framework to receive updates. You only need to upgrade a particular module.

## Modules

Some leaf 3 modules come integrated directly with Leaf API along with some config options.

## MVC Core

MVC core is a leaf 3 module which contains all the functionality for transforming leaf into a full MVC framework. It comes with features like controllers, models, views, factories and many more MVC specific features. It has been optimised for Leaf API, leaf API and Skeleton to provide the best developer experience.

We really recommend that you [read the MVC core documentation](https://www.leafphp.dev/modules/mvc-core/)
