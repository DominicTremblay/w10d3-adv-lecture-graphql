module.exports = {
  Query: {
    todos: async(root, args, context, info) => {
      console.log('Todos resolver');
      const result = await context.db.query('SELECT * FROM todos');
      return result.rows;
    },
  },
};
