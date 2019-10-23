const todos = require('./api/todos');
const categories = require('./api/categories');
const { db } = require('./db/connect');
const merge = require('lodash/merge');

module.exports = {
  typeDefs: [todos.typeDefs, categories.typeDefs].join(' '),
  resolvers: merge({}, categories.resolvers, todos.resolvers),
  context: {
    db,
  },
};
