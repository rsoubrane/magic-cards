## Project Details

The goal of this project is quite simple. We want to be able to provide a platform for players to see the best (aka as the most powerful) cards in the game. Therefore you can see the list of the most powerful cards (all the cards with a power above above 8) and also display some more details about this card. This is part of a school homework.

## Project Technologies

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It also uses packages like Material UI for styling, mswjs for mocking the data, cypress & jest for testing purposes as well as framer-motion for animations and backstopjs to automate visual regression.

## Getting Started

First, install the dependencies of the project by running :

```bash
npm install
# or
yarn
```

then, run the development server:

```bash
npm run dev
# or
yarn dev
```

You can also run tests using :

```bash
npm run test
# or
yarn test
```

Open [http://localhost:3002](http://localhost:3002) with your browser to see the result.


## Assignment - Create a magic card collection site with the following features

- [x] Framework to use: next.js
- [x] The project must contain :
    - [x] A home page (presenting the project)
    - [x] A page listing the collection of cards
    - [x] A page detailing a card
    - [x] A contact page (using [https://formspree.io/](https://formspree.io/))
    - [x] A legal page (which will be in fact the choice of an open source license [https://opensource.org/licenses](https://opensource.org/licenses))
- [x] Static pages must be generated using markdown (home page and legal notice for example)
- [x] Data like authenticated user must be provided thanks to msw.js (lib of mocks), fetched and returned to next.js via the methods `getStaticXXX` , etc
- [x] The site must manage the responsive design (media queries)
- [x] The layout must use flexbox and/or grid
- [x] Animations must be present via `framer-motion`.
- [ ] backstop.js must be present on the project with a reference already generated
- [ ] Functional tests will be present with cypress (testing user paths)
- [ ] A clean `package.json` that allows to install the project and launch all the necessary commands (dev, build, test, etc)
- [x] An `README.md` explaining the project and the commands exposed in the `package.json`.
- [x] API : [https://scryfall.com/docs/api](https://scryfall.com/docs/api)
- [ ] The site must be hosted on [vercel.com](http://vercel.com) - You can access it by going to : 
