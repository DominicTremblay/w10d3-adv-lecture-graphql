const todos = require('./api/todos');
const { db } = require('./db/connect');

module.exports = {
  typeDefs: todos.typeDefs,
  resolvers: todos.resolvers,
  context: {
    db,
    todos: [
      {
        id: 1,
        task: 'Walk the dog',
        completed: false,
      },
      {
        id: 2,
        task: 'Go for a run',
        completed: false,
      },
    ],
  },
};
