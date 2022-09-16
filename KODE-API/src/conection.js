const { Client } = require("pg");

const client = new Client({
  user: 'romando', // Sesuaikan dengan punya anda
  host: 'localhost',
  database: 'data_tamu',
  password: 'romando', // Sesuiakan dengan punya anda
  port: 5432,
});

client.connect((err) => {
  if (!err) {
    console.log('Conected');
  } else {
    console.log(err.message);
  }
});

module.exports = client;
