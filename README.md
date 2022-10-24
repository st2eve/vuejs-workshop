# Workshop : Vuejs Initiation

Hello to you young coder,

This workshop is offered to you in order to learn as simply and efficiently as possible how to use the Vuejs framework.

It has been very very very inspired by the [Vue Mastery course](https://youtu.be/bzlFvd0b65c) from which it takes a lot of elements but with some modifications/additions.

Do not hesitate to visit their [Youtube channel](https://www.youtube.com/c/VueMastery) and their [Website](https://www.vuemastery.com/).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Creating a Vue Application

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