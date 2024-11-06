const { Client } = require('pg');
require('dotenv').config();

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    text VARCHAR ( 1000 ),
    added DATE
  );

  INSERT INTO messages (username, text, added)
  VALUES
    ('John Doe', 'I am a developer', '2024-11-06'),
    ('Amando', 'Hi there!', '2024-11-05');
`;

async function main() {
  console.log('SEEDING...');
  const client = new Client({
    connectionString: process.env.DB_CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('DONE!');
}

main();
