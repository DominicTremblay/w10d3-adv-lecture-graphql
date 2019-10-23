const addTodo = async(root, args, context, info) => {
  console.log('addTodo Resolver');
  const query = {
    text:
      'INSERT INTO todos(task, completed, category_id) VALUES ($1, $2, $3) RETURNING *',
    values: [args.input.task, args.input.completed, args.input.categoryId],
  };

  const result = await context.db.query(query);

  return result.rows[0];
};

const updateTodo = async(root, args, context) => {
  console.log('Update Todo Resolver');

  const queryArgs = Object.keys(args.input)
    .map((arg, index) => {
      if (arg !== 'id') {
        return `${arg} = $${index + 1}`;
      }
    })
    .filter(arg => arg !== undefined);

  const query = {
    text: `UPDATE todos SET ${queryArgs} WHERE id=$1 RETURNING *`,
    values: Object.values(args.input),
  };

  console.log(query.text, query.values);

  try {
    const result = await context.db.query(query);
    return result.rows[0];
  } catch (e) {
    console.log(e);
  }
};

const deleteTodo = async(root, args, context, info) => {
  console.log('delete todo resolver');
  const query = {
    text: 'DELETE FROM todos WHERE id = $1',
    values: [args.id],
  };

  try {
    const result = await context.db.query(query);
    return {
      msg: `todos with id ${args.id} is deleted`,
    };
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  Query: {
    todos: async(root, args, context, info) => {
      console.log('Todos resolver');
      const result = await context.db.query('SELECT * FROM todos');
      return result.rows;
    },
  },
  Mutation: {
    addTodo,
    deleteTodo,
    updateTodo,
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
