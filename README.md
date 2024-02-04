# SIL-Frontend-TA-APP

## What is SIL-Frontend-TA-APP

SIL-Frontend-TA-APP is a web apllication that allows users to view other users' pictures, which are sorted into albums. The application leverages Google's OAuth authorization 
mechanism to enable user authorization. Once sign up is successful, the user session is stored within the application. There are four main pages of the application:
* Landing page 
    - Contains a brief description of what the application does. 

* Login page
    - Allows user to sign up to application using Google

* Home page
    - Lists all users and displays how many albums they have

* User page
    - Lists a user's information and their respective albums

* Album Page
    - Lists all the photos belonging to a specific user's album. Also indicates how many photos there are within the album

* Photo page
    - Displays a selected photo from a specific album. Also enables a user to edit a photo's title.

This application is deployed at [https://sil-frontend-ta-app.onrender.com/][def];

The data used in this app is served via a REST API deployed at [https://sil-ta-api.onrender.com/api/][def2]. The major endpoints are:
* /users
* /albums
* /photos

The source code for the REST API is hosted at github and can be accessed via [https://github.com/1wes/SIL-TA-API][def3]


[def]: https://sil-frontend-ta-app.onrender.com/
[def2]: https://sil-ta-api.onrender.com/api/
[def3]: https://github.com/1wes/SIL-TA-API


## How to run SIL-Frontend-TA-APP on a local machine.

In your chosen terminal, run the follwing command

```

git clone https://github.com/1wes/SIL-Frontend-TA-App.git
```

## Navigate into your copied folder on your machine.

In the terminal, run the following command

```

cd SIL-Frontend-TA-App
```

## Open the folder in a code editor.

If using VSCode, you can open the folder in the editor using the following command

```

code .
```

For other editors, please refer online how to achieve the same.

## install the required dependencies

Using your chosen editor's terminal, install the project dependencies by running the following command

```

npm install
```

Wait a few moments for the installation process to complete.

Once it ends, you can proceed.

## Run/Start the app

On your editor's terminal, run the following:

```

npm run demo
```

This will start up the application in the development server. 

The server used for this application is Vite, hence the application will open up on the browser at [http://localhost:5173][def4];

[def4]: http://localhost:5173


