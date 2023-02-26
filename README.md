# Google auth

## Story

You have just finished yet another freelancer project where you had to implement some sort of authentication - "where the user can log in".

You have written the exact same code that you have written god knows how many times before. You have handled the same edge cases as before - forgotten password, user account confirmation email, two factor authentication, password hashing - every time a little bit better than before.

You begin to wonder, if there is a better solution for this problem, and luckily there is: you can leverage the power of google for authenticating users with just a few line of code. Before you experiment with it in a real project, you decide to implement it in a dummy application.

That is what you are going to do now.

## What are you going to learn?

- Google authentication
- Stateless session management

## Tasks

1. Create a frontend and a backend service with a mongodb. The backend service should have two endpoints, one, that returns the word "public", and one that returns "private".
    - The backend has two endpoints, /api/public, that return the word "public" for a GET request, and /api/private which returns "private"
    - The frontend has two buttons, one sends a get request ot /api/public and shows the response on the page, while the other goes to /api/private
    - The DB is connected to the backend, the words "public" and "private" are stored in the db, and read for every request

2. The users can authenticate themself with Google.
    - The page has a "Login" button, which redirects the user to account.google.com
    - The site has a callback page which reads the auth code from the url and send it to the backend
    - The backend has an endpoint (/api/login) that receives the auth code in a post request's body, validates it with google, parses the response of google, saves the user to the userdb if it is not yet saved, and creates a jwt signed with a secret key, with the userid in the payload, and sends it back to the frontend

3. The result of the login (the session identifier, the jwt) is validated on every subsequent request.
    - Whenever the user send a request to /api/private the jwt is validated on the backend, if it is not valid it does not return the word "private" - if valid, the userid is logged (only with console.log) and the response "private" is sent
    - When the user is not logged in the button that sends a request to /api/private is not even visible
    - The jwt contains at least the unique id of the user

## General requirements

- The app is registered on googlde develper console with a redirect_uri, and has a client_id and a client_secret

## Hints

- In this case, you do not have to create an anti-forgery token - you can skip that part
- You can omit _state_, _nonce_ and _login_hint_ params
- Set up your account on google developer console first
- Select project -> New Project -> Oauth consent screen -> External -> Application name, Authorized domains -> Credentials -> Create credentials -> Oauth2 -> Web app -> Set name & redirect_uti (localhost works) -> __!!!COPY!!!__ client_ID and client_secret

## Background materials

- <i class="far fa-book-open"></i> [Oauth, OpenID in plain english](https://www.youtube.com/watch?v=996OiexHze0&t=2365s)
- <i class="far fa-exclamation"></i> [Google OpenID](https://developers.google.com/identity/protocols/oauth2/openid-connect)
- <i class="far fa-exclamation"></i> [JWT](https://jwt.io/introduction)
