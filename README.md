This is a project about searching for phone number in a monogdb data base

## Getting Started

## `Clone the repository`

clone the repository to your machine.

Open a terminal and run the following git command:

```
git clone "https://github.com/manziEric/phonebook.git"
```

1.  Go to the root of the project folder and run the following command:

```
npm i
```

2.  Go to the server folder and run the following command:

```
npm i
```

3.  Go to the client folder and run the following command:

```
npm i
```

npm will install al the dependencies

### `Setup the server`

This app runs with a mongodb server. So make sure that you have mongodb on you local
machine.

1. Go to the server folder in this project and create a .env file.
2. Put in the .env file the following command

```
MONGODB_LOCALHOST=mongodb://localhost/
```

If you dont have mongodb you can install it from this link https://www.mongodb.com/try/download/community

If you have mongodb on your local machine make sure it is running

```
service mongod status
```

If mongodb is not running you can start mongodb with the following command

```
service mongod start
```

If you want mongodb GUI you can install it from this link https://www.mongodb.com/products/compass

After mongodb is up and running you can start the app

### `start app`

Go to the server folder and run the following command

```
npm start

```

Then the server will run in the development mode.\
On [http://localhost:5000](http://localhost:5000)

After this go to the client folder and run the following command

```
npm start

```

Then the app will run in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `test app`

After this go to the client folder and run the following command

```
npm test

```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## License

This repo is entirely MIT licensed,
