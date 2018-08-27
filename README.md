# About app

Sample app to test knowledge of react, redux, react-router, async api. [Demo here](https://react-redux-router-test1.herokuapp.com/)

## Description(in Russian)

1. [Task 1](https://github.com/maxfarseer/tz-webinars/tree/tz-1-react-redux-react-router)
2. [Task 2](https://github.com/maxfarseer/tz-webinars/tree/tz-2-react-redux-router-async)

## Pages

- Home(`/home`)
- News(`/news`)
- Profile(`/profile`, only for logged in users)
- Login(`/login`, form with validation)
- Logout(`/logout`, only for logged in users)

## Dummy user:

- email: Admin
- password: 12345

## Backend:

Backend is available from https://mysterious-reef-29460.herokuapp.com/api/v1/

- authorize user `POST https://mysterious-reef-29460.herokuapp.com/api/v1/validate`
- get user info `GET https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/:id`
- get user news `GET https://mysterious-reef-29460.herokuapp.com/api/v1/news`

## Details:

- redux-thunk for async actions
- prleloaders to show if data is fetching from the server
- you can't submit login form if fields are invalid or form is already submitted
- redirect to the login form if user goes to the protected routes
- smart redirect from successful login
- show error messages

# Install

To install dependencies

```shell
npm install
```

# Run

To run app

```shell
npm start
```
