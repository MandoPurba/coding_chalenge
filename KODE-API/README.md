### Instalation
> 1. Install module
  Jalankan
  `npm install`
> 2. Create postgres database
  Copy file query di directory
  `db/database.sql`
> 3. Edit connection
  Edit connection.js sesuai dengan pengaturan yg ada di komputer anda
> 4. API menambah daftar  tamu
> Method : POST <br>
> URL : /forms <br>
> Body Request: <br>
 ```
   {
      "name": string,
      "adress": string,
      "phone": string,
      "note": string
  }
 ```

> 5. API menampilkan daftar  tamu
> Method : POST <br>
> URL : /galery <br>

> 6. API admin menampilkan daftar  tamu
> Method : POST <br>
> URL : /admin <br>

> 6. API admin menghapus daftar  tamu
> Method : POST <br>
> URL : /admin/{name} <br>