const express = require('express');
const client = require('./conection');
const bodyParser = require('body-parser');
const app = express();
const port = 3100;
// Gunakan Body parser
app.use(bodyParser.json());

// Tambah tamu
app.post('/forms', (req, res) => {
  // Ambil data kiriman
  const {name, adress, phone, note} = req.body;
  // Query data ke database
  client.query(`INSERT INTo tamu (name, adress, phone, note) VALUES ('${name}', '${adress}', ${phone}, '${note}')`, (err, response) => {
    // Jika tidak error
    if (!err) {
      res.status(200);
      res.json({
        status: 'success',
        message: response.rowCount,
      });
    } else { // Jika Error
      res.status(400);
      res.json({
        status: 'failed',
        message: err.message,
      });
    }
  });
});

// Lihat tamu
app.get('/galery', (req, res) => {
  client.query("SELECT name, note FROM tamu", (err, response) => {
    if (!err) {
      res.status(200);
      res.json({
        status: 'success',
        data: response.rows,
      });
    } else {
      console.log(err.message);
    }
  });
});

// Admin lihat tamu
app.get('/admin', (req, res) => {
  client.query("SELECT * FROM tamu", (err, response) => {
    if (!err) {
       res.status(200);
       res.json({
         status: 'success',
         data: response.rows,
       });
     } else {
       console.log(err.message);
     }
   });
 });

// Admin hapus tamu
app.delete('/admin/:name', (req, res) => {
    const name = req.params;
    console.log(name);
    client.query(`DELETE FROM tamu WHERE name='${name.name}'`, (err, response) => {
      if (!err) {
        res.status(200);
        res.json({
          status: 'Success',
          message: response.rows,
        });
      } else {
        res.status(400);
        res.json({
          status: 'failed',
          message: err.message,
        });
      }
    });
  });

// Jalankan Server
app.listen(port, () => {
  console.log(`server runing on ${port}`);
});
