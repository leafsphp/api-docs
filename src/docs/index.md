# Leaf MVC
<!-- markdownlint-disable no-inline-html -->

Leaf MVC is a lightweight and minimal MVC wrapper leaf PHP framework that provides a more scalable and powerful setup for creating web apps and APIs quickly and efficiently. Leaf MVC is also heavily inspired by Ruby on rails, laravel and slim, it provides you the best of these packages and avoids the "not so goods"😁

v3.0 packs in a bunch of fresh functionality, and also features added in [v3](https://leafphp.dev) of the core Leaf package. You can view all these [changes here](/docs/new/).

## Why Leaf MVC?

There are a variety of tools and frameworks available to you when building a web application. However, we believe Leaf + MVC is the best choice for building modern, full-stack web applications.

### 📚 Shallow learning curve

Whether you are new to PHP or have prior experience with the language, leaf MVC helps you fit right in. All you need to get started with Leaf MVC is basic PHP knowledge and a little familiarity with MVC concepts. You can learn leaf as you build 🥰

### 🪶 Lightweight

If you have had experience with other MVC frameworks like Laravel, you would notice how simple and straightforward leaf MVC is compared those which need you to learn a whole bunch of their framework specific things. Leaf is light and so is Leaf MVC.

### 💪🏽 Powerful

Leaf MVC packs a ton of powerful tools which speed up your development process by folds. You have simple tools and modules like [authentication](https://www.leafphp.dev/modules/auth/), [commands with aloe](https://www.leafphp.dev/aloe-cli/), [MVC tools with MVC core](https://www.leafphp.dev/modules/mvc-core/) and a [ton of other modules](https://www.leafphp.dev/modules/).

## Installation

You can quickly create a leaf MVC project with [composer](https://getcomposer.org).

```sh
composer create-project leafs/mvc <project-name> v3.x-dev
```

or with the leaf cli:

```sh
leaf create <project-name> --mvc --v3
```

## Directory Structure

This will create a new leaf MVC project named `<project-name>`. Inside the new directory, you should have a structure like this.

::: tip Note
The directory structure has had a refresh. We normalized the folder cases to lowercase. Note that this only applies to the default leaf MVC folders. Custom folders will have to follow the class structure as done in earlier versions.
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

- **app**: This is where you will mostly be working. It houses all your controllers, command and db files.
- **config**: This holds all your configuration files.
- **lib**: You can place your libraries and piece files which you need for your app.
- **storage**: Storage for your files, images, text, databases...
- **vendor**: This holds all your dependencies and installed files.

In the project root, you can open up your console tool and type in

```bash
php leaf serve
```

This will start the php web server and load your project at `http://localhost:5500` by default.
