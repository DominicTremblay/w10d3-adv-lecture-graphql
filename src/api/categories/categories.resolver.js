module.exports = {
  Query: {
    categories: async(root, args, context, info) => {
      console.log('Categories resolver');
      const result = await context.db.query('SELECT * FROM categories');
      return result.rows;
    },
  },
  Category: {
    todos: async(category, args, context, info) => {
      const query = {
        text: 'SELECT * FROM todos WHERE category_id = $1',
        values: [category.id],
      };

      console.log('categories-todos resolver');

      const result = await context.db.query(query);
      return result.rows;
    },
  },
};
