# face-backend
Live at - https://powerful-garden-65991.herokuapp.com

backend api server to this - https://face-detection-a.herokuapp.com/

## local developement

for local development, i integrated docker and dcoker compose  for easy and swift development rather than opening servers for each database used

in other for this to work, in the `server.js` in the root folder

```
 const db = knex({
   client : 'pg'
   connection : {
     host: process.env.POSTGRES_HOST,
     user: process.env.POSTGRES_USER,
     password: process.ev.POSTGRES_PASSWORD,
     database: process.env.POSTGRES_DB
        }
        })
  ```
  inside the `docker-compose.yml` file change the empty string to your local postgres login information in as much as you have [Postgres](https://www.postgresql.org/) installed in your desktop.
  
  After doing all this, make sure you have [Docker](https://www.docker.com/) installed in your desktop.
  
 In your Project local directory on your terminal.
 
 run 
 ```
  docker-compose down
  ```
  
  then
  
  ```
   docker-compose up --build
   ```
 
 VIOLA.
 
 
     










