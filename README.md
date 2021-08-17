**Pagination Example With MongoDb / Mongoose**

_Made with :_

- Node

_Steps to run application :_

> `git clone https://github.com/lokeshchoudhary-lc/mongodb-pagination.git`

> `Make you own .env from .evn.example`

> `npm install`

> `npm start`

_Npm Packages Used :_

- Expressjs
- mongoose
- dotenv
- nodemon (dev)

---

**Routes**

| Path     | Method | Query       | Return         |
| -------- | ------ | ----------- | -------------- |
| '/users' | GET    | size & page | Paginated data |

**Example: localhost:5000/users?size=2&page=1**

**Before using Api add some dummy data into the database(see the user model in models/user.js)**
