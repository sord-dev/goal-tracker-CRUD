# Goal Tracker

*A simple CRUD goaltracker that is connected to firebase*

I was motivated to make a goal storage app since I felt it would be convinent to have my goals all in one place.

## Architecture
These are the technologies I used to create this web app.

 - React
 - Firebase
 - MUI

## Features

 - Stores goals
 - Allows for updating of said goals
 - Deletion of goals
 
**Potential Future Features**
 - Supported accounts and authentication
 - Catagory Sort

## Lessons Learned

This was my first CRUD application so I learnt a lot from the creation of this. 

Firebase is an extremely convienient SDK. It allows developers to easily access databases, authentication, storage, hosting and more from one website. While this may be the case  


## Setup

#### Get the sample code from GitHub

1.  To get the sample code from GitHub, use the  `git clone`  command to get a local copy of the remote repository. To clone the sample code, run the following command:
    
    ```bash
    $ git clone [https://github.com/sord-dev/goal-tracker-CRUD.git]
    ```
    
2. Install dependencies

    ```bash
    $ npm install 
    ```
    
3.  [Create a Firebase Project](https://console.firebase.google.com/)  in the Firebase console and create a Firestore database. **make sure to edit the permissions**
    
4.  Connect and configure Firebase to your web app using the `firebase.config.js` file, it will look something like this.

```
## Configure your Firebase here
// const firebaseConfig = {
// apiKey: [apiKey here],
// authDomain: [authDomain here],
// projectId: [projectId here],
// storageBucket: [storageBucket here],
// messagingSenderId: [messagingSenderId here],
// appId: [appId here],
}
```

5. Go back to the project, open your prefered console and type this in your console to run the development server.
    ```bash
    $ npm run dev 
    ```

Your project should run now! c:
