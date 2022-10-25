# Workshop : Vuejs Initiation

Hello to you young coder,

This workshop is offered to you in order to learn as simply and efficiently as possible how to use the Vuejs framework.

It has been very very very inspired by the [Vue Mastery course](https://youtu.be/bzlFvd0b65c) from which it takes a lot of elements but with some modifications/additions.

Do not hesitate to visit their [Youtube channel](https://www.youtube.com/c/VueMastery), their [Github](https://github.com/Code-Pop) and their [Website](https://www.vuemastery.com/).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 1.0 - Creating a Vue Application

Make sure you have an up-to-date version of [Node.js](https://nodejs.org/en/) installed, then run the following command in your command line :

```sh
> npm init vue@latest
```

This command will install and execute create-vue, the official Vue project scaffolding tool. You will be presented with prompts for a number of optional features such as TypeScript and testing support:

```sh
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

If you are unsure about an option, simply choose "No" by hitting enter for now (However, I recommend that you at least put "Yes" to add ESLint as well as Prettier). Once the project is created, follow the instructions to install dependencies and start the dev server:

```sh
> cd <your-project-name>
> npm install
> npm run dev
```

## 2.0 - Preparation of folders and files

### 2.1 - index.html :

![index](./readme/img/prepa_index.jpeg "index.html")

Here we simply change the title

### 2.2 - App.vue :

```sh
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/require-v-for-key -->

<script>

</script>

<template>
  
</template>
```
(Yes, basically, you remove everything xD)

### 2.3 - main.css :

You can copy the entire css code right [HERE](https://github.com/st2eve/vuejs-workshop/blob/main/src/assets/main.css)

### 2.4 - Files to be deleted

![Files to be deleted](./readme/img/supr.jpeg "Files to be deleted")

### 2.5 - Files to be added

![Files to be added](./readme/img/add.jpeg "Files to be added")

You can get these images from this repository right [HERE](https://github.com/st2eve/vuejs-workshop/tree/main/src/assets/images)

## 3.0 - The project

Let's get to the heart of the matter.

First, a little overview. 

The goal of this workshop is not to create a functional application, obviously, that would be far too long for an exercise that should only last a few hours.

We will create a product single page where we can add the product to a shopping cart, choose the colour, have different interactions and leave a review.

All this will allow us to see how Vuejs works and to learn the basics which will then hopefully help you to build any frontend project.

I don't know what else to say so...Let's go !