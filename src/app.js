'use strict';

const express = require(`express`);

const {offersRouter} = require(`./routers`);

const app = express();

const errorHandler = (err, req, res, _next) => {
  if (err) {
    console.error(err.stack);
    res.status(err.code || 500).send(err.message);
  }
};

app.use(express.static(`${process.cwd()}/static`));

app.use(`/api/offers`, offersRouter);

app.use(errorHandler);

module.exports = app;
