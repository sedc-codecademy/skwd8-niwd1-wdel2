# MongoDB

## Install MongoDB
Download and install the latest MongoDB version as well as the MongoDB compass.

## Minimal Setup

Open up the Mongo Shell and list all of the databases:
```javascript
show dbs
```
Switch to a new DB:
```javascript
use main
```
Then create a user on that database:
```javascript
 db.createUser(
     {
        user:"sedcuser",
        pwd: "sedcpass",
        roles: ["readWrite", "dbAdmin", "dbOwner"]
    }
)
```
Then create a collection:
```javascript
db.createCollection('users');
```

Connect to the database and specify the authentication source:
```
mongodb://sedcuser:sedcpass@localhost/main?authSource=main
```