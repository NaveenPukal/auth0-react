Install node modules

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Task Summary:
Implemented Auth0 Login:

​Integrated Auth0 authentication into a React application using the @auth0/auth0-react library.
Utilized Redux to manage the authenticated user's state across the app.

​Redirect to Welcome Screen:

After a successful login, the user is redirected to the Welcome screen.
The user's details, such as name, email, and profile picture, are displayed on the Welcome screen.
In case of authentication failure, the user is redirected back to the Login page.

​Logout Functionality:

Added the ability for users to log out, which will redirect them back to the Login page after logging out from Auth0.

​Loading State:

Implemented a loading spinner that shows while the authentication status is being checked, ensuring a smooth user experience.
​Credentials:
To test the application, please use the following credentials:

Email: ​pukalnaveen98@gmail.com
Password: ​​N​aveen@221998