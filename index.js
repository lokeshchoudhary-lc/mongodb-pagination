const express = require('express');

const User = require('./models/users');

const app = express();

require('dotenv').config();

require('./db/index');

app.get('/users', paginatedResults(User), (req, res) => {
  res.json(res.paginatedResults);
});

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 10;
    }
    const limit = size;
    const skip = (page - 1) * size;
    const results = {};
    if (limit < (await model.countDocuments()))
      results.next = {
        page: page + 1,
        size: size,
      };
    if (skip > 0) {
      results.previous = {
        page: page - 1,
        size: size,
      };
    }

    try {
      results.results = await model.find().limit(limit).skip(skip);
      res.paginatedResults = results;
      next();
    } catch (error) {}
  };
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server running'));
