const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'database_name'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// ตัวอย่างการดึงข้อมูลจากฐานข้อมูล
connection.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log(results);
});

// ตัวอย่างการเพิ่มข้อมูลลงในฐานข้อมูล
const user = { name: 'John', email: 'john@example.com', password: '123456' };
connection.query('INSERT INTO users SET ?', user, (err, result) => {
  if (err) throw err;
  console.log(`User with id ${result.insertId} added`);
});

// ตัวอย่างการอัปเดตข้อมูลในฐานข้อมูล
const userToUpdate = { name: 'John Doe', email: 'johndoe@example.com', password: '12345678' };
const userId = 1;
connection.query('UPDATE users SET ? WHERE id = ?', [userToUpdate, userId], (err, result) => {
  if (err) throw err;
  console.log(`User with id ${userId} updated`);
});

// ตัวอย่างการลบข้อมูลในฐานข้อมูล
const userToDelete = { name: 'John', email: 'john@example.com', password: '123456' };
connection.query('DELETE FROM users WHERE ?', userToDelete, (err, result) => {
  if (err) throw err;
  console.log(`Deleted ${result.affectedRows} rows`);
});

// ปิดการเชื่อมต่อกับฐานข้อมูล
connection.end();
