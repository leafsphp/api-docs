# Leaf API
<!-- markdownlint-disable no-inline-html -->

Leaf API is a lightweight and minimal MVC wrapper leaf PHP framework that provides a more scalable and powerful setup for creating APIs quickly and efficiently. Leaf API is also heavily inspired by Ruby on Rails, Laravel and Slim, it provides you the best of these packages and avoids the "not so goods" 😁

v3.0 packs in a bunch of fresh functionality, and also features added in [v3](https://leafphp.dev) of the core Leaf package. You can view all these [changes here](/docs/new/).

## Why Leaf API?

There are a variety of tools and frameworks available to you when building an API, however, we believe Leaf + MVC is the best choice for building modern, API based solutions for the reasons below.

### Shallow learning curve

Whether you are new to PHP or have prior experience with the language, Leaf API helps you fit right in. All you need to get started with Leaf API is basic PHP knowledge and a little familiarity with MVC concepts. You can learn leaf as you build.

### Lightweight

If you have experience with other MVC frameworks like Laravel, you would notice how simple and straightforward Leaf API is compared those which need you to learn a whole bunch of their framework specific stuff. Leaf is light and so is Leaf API.

### Powerful

Leaf API packs a ton of powerful tools which speed up your development process by folds. You have simple tools and modules like [authentication](https://www.leafphp.dev/modules/auth/), [commands with aloe](https://www.leafphp.dev/aloe-cli/), [MVC tools with MVC core](https://www.leafphp.dev/modules/mvc-core/) and a [ton of other modules](https://www.leafphp.dev/modules/).

## Installation

You can quickly create a Leaf API project with the [leaf cli](https://cli.leafphp.dev):

```sh
leaf create <project-name> --api --v3
```

or with [composer](https://getcomposer.org).

```sh
composer create-project leafs/api <project-name>
```

## Directory Structure

This will create a new Leaf API project named `<project-name>`. Inside the new directory, you should have a structure like this.

::: tip Note
The directory structure has had a refresh. We normalized the folder cases to lowercase. Note that this only applies to the default Leaf API folders. Custom folders will have to follow the class structure as done in earlier versions.
:::

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

- **app**: This is where you will mostly be working. It houses all your controllers, command and db files.
- **config**: This holds all your configuration files.
- **lib**: You can place your libraries and piece files which you need for your app.
- **public**: This holds the entry point to your app, as well as static assets
- **storage**: Storage for your files, images, text, databases...
- **vendor**: This holds all your dependencies and installed files.

Besides the folders already created for you, Leaf API has also normalized a set of folders which you can use in your apps.

- **app/http**
- **app/jobs**
- **app/utils**
- **app/workers**
- **app/services**

You can manually add these as you see fit.

## Running your Leaf API project

In the project root, you can open up your console tool and type in

```bash
php leaf serve
```

This will start the php web server and load your project at `http://localhost:5500` by default.

::: warning Note
This `php leaf` command is powered by [Leaf MVC's](https://mvc.leafphp.dev) [Aloe CLI tool](https://leafphp.dev/aloe-cli/). You should note that [Aloe CLI tool](https://leafphp.dev/aloe-cli/) is different from the [Leaf CLI](https://cli.leafphp.dev). Aloe is more of a scaffold tool for Leaf MVC and Leaf API, but Leaf CLI helps you generally create and manage your Leaf applications. Leaf CLI might have some shared features with Aloe, but it is a higher level tool.
:::
