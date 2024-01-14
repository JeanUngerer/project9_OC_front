# project9_OC_front


At project root :

```
cd .\frontMicroservice\
```
Now you are at the root of the angular app

You need your local docker daemon to run

### Build the Docker Image
```
docker build –t my-angular-frontend .
```

### Run the Angular Docker Container
Make sure port 80 is free
```
docker-compose up
```

### Using the app

You need to have both the front and back containers running to use the app.
Go to localhost:80 in your browser anc click login at the top right to log or register to the app.

You can register as a doctor and can see all the patients, add patients, add notes to patients.
