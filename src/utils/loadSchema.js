const fs = require('fs');
const path = require('path');

module.exports = schemaFile => {
  const filePath = path.join(__dirname, '../api', schemaFile);
  return fs.readFileSync(filePath, 'utf-8');
};
