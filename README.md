# Blog SPA using Angular and Firebase



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

# Example

1. [This project running on Google Firebase](https://ng-blog-9afda.firebaseapp.com)

# Run

1. Download => npm install.

2. Create a project on Google Firebase.

3. create a file in app/auth called firebase.credentials.ts with the following:

```
export const  firebaseConfig = {
    apiKey: "your-key",
    authDomain: "your-authDomain",
    databaseURL: "your-db",
    projectId: "your-projectId",
    storageBucket: "your-storage",
    messagingSenderId: "your-senderId"
  };

```

3. Run `ng serve` in the angular cli and cross your fingers.

4. Create a login in the authentication section of Firebase to create and edit posts.

# Host 

1. [See here](https://stackoverflow.com/questions/42573987/how-to-host-angular-2-website)

