const typeDefs = require('../../utils/loadSchema')(
  'categories/categories.graphql',
);
const resolvers = require('./categories.resolver');

module.exports = {
  typeDefs,
  resolvers,
};
