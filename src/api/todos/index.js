const typeDefs = require('../../utils/loadSchema')('todos/todos.graphql');
const resolvers = require('./todos.resolver');

module.exports = {
  typeDefs,
  resolvers,
};
