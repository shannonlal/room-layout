# Room Layout: Configure Development Environment
React DND Room Layout Builder

# 2. Installation and Development

This project includes two parts: First is the main libray for creating rooms and defining elements within the room and the second part is an example project which illustrates how to build the project. For instructions on how to work with the examples directory please consult the README.md in the examples directory

## 2.1 Installing the project

To install the project first clone it to you local machine.  Once this is done please install the project using yarn or npm

```
npm install
```

```
yarn install
```

## 2.1 Running the tests

To run the JEST unit tests please run the following:

```
npm run test

or

yarn run test
```

To have tests run in a watch mode run the following command:
```
npm run test -w

or

yarn run test -w
```


## 2.2 Run the linter

To run eslint use the following command

```
npm run lint

or

yarn run lint
```

The following are the configuration files for eslint
.eslintignore - defines certain files to be exclued from the linting process
.eslintrc - ES Lint rules
.prettierrc.json - Prettier JSON rules

# 3. Linking Room Layout and Examples directory together.

The following is a good Medium post on how to do this

https://medium.com/@alexishevia/the-magic-behind-npm-link-d94dcb3a81af

But here are the steps.  First within the room-layout directory run the following

```
npm link
```
Then within the examples directory (room-layout/examples) run the following

```
npm link room-layout
```
This will allow you to make changes within the room-layout project and pick them up within
the Examples directory

# 3. Build the project



