# Backend assignment

If you are reading this, you know what you should do next.

# How to use this application

For simplicity, there is **one** user in the database in MongoDB. This user has the userId **1234**.


## Starting the application

To run this application, you need **npm** installed.

Simply run the following command:

`npm run dev`

After waiting for a couple of seconds, you should see this:

```sh
> harvest-back@1.0.0 dev
> nodemon index.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
CONNECTING TO MONGODB ATLAS...
THE ASSIGNMENT IS LIVE ON HTTP://LOCALHOST:8080!
SUCCESSFULLY CONNECTED TO MONGODB ATLAS!
```

## Feature #1 -> Creating a new account

I have used **Postman** to interact with this application. However, a simple `curl` command will suffice.

`curl -X POST -F "initialCredit=<insert integer here>" http://localhost:8080/user/1234`

Once you send this POST request to the running application, you should see this:

```sh
{ "message" : "A new account has been created!" }
```

Meanwhile, in the application, you will see this:

```sh
USER FOUND!
NEW ACCOUNT CREATED!
```

## Feature #2 -> Diplaying the information of one user

Once again, I used **Postman** to interact with the application but `curl` is more than enough to address this use case.

`curl http://localhost:8080/user/1234`

After sending this GET request to the running application, you will see this:

```sh
{ "message" : "Details for user - 1234" }
```

Over @ the application, you will see this:

```sh
PRINTING USER DETAILS...
NAME    - Abraham
SURNAME - Hernandez
BALANCE - <it depends on how much I experiment>
TRANSACTIONS ON HIS [<see above>] ACCOUNTS:
.
.
. <account ID>
. Transactions: <see above>
.
.
.
.

```

# Disclaimer

I look forward to explaining how I did approached this assignments, the decisions I made, and the ideas I have around how to make it better.

You have reached the end! Thank you for your time!

That's all folks! 👋