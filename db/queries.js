const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages ORDER BY id DESC');
  // console.log(rows);
  return rows;
}

async function getById(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ]);
  return rows[0];
}

async function createMessage({ username, text, added }) {
  const result = await pool.query(
    'INSERT INTO messages (username, text, added) VALUES ($1,$2,$3)',
    [username, text, added]
  );
  return result;
}

module.exports = {
  getAllMessages,
  getById,
  createMessage,
};
