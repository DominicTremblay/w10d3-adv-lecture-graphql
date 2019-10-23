module.exports = {
  Query: {
    categories: async(root, args, context, info) => {
      const result = await context.db.query('SELECT * FROM categories');
      return result.rows;
    },
  },
};
