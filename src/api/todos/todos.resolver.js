module.exports = {
  Query: {
    todos: async(root, args, context, info) => {
      console.log('Todos resolver');
      const result = await context.db.query('SELECT * FROM todos');
      return result.rows;
    },
  },
  Todo: {
    category: async(parent, args, context, info) => {
      console.log('todo-category resolver', parent.id);
      const query = {
        text:
          'select categories.id, categories.category from todos inner join categories on categories.id = todos.category_id where todos.id = $1',
        values: [parent.id],
      };

      const result = await context.db.query(query);
      return result.rows[0];
    },
  },
};
