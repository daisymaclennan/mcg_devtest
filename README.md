# mcg_devtest

## Set up locally

My api calls are configured to http://localhost:8888 so it would be useful to set the wordpress solution to run on this port, I used MAMP. 
If this isn't possible navigate to index.js in root of mcg_next and change the url port in getStaticProps.

Import db using sql file in root directory of project.

Run db servers and navigate to http://localhost:8888 to ensure WordPress is running correctly.

```cd mcg_devtest/mcg_next```

```npm install```

```npm run dev```

Navigate to http://localhost:3000.
