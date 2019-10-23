module.exports = {
  Query: {
    todos: (root, args, context, info) => context.todos,
  },
};
