const todos = require('./api/todos');

module.exports = {
  typeDefs: todos.typeDefs,
  resolvers: todos.resolvers,
  context: {
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
