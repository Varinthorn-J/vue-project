const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

// ใช้ body-parser เพื่อแปลงข้อมูลใน request body เป็น JSON
app.use(bodyParser.json())

// สร้าง endpoint สำหรับการลงทะเบียน
app.post('/register', (req, res) => {
  const { name, email, password, address, phone } = req.body
  
  // ตรวจสอบความถูกต้องของข้อมูล
  
  // บันทึกข้อมูลลงฐานข้อมูล
  
  // ส่ง response กลับไปยัง client
  res.send('Register success')
})

// สร้าง endpoint สำหรับการเข้าสู่ระบบ
app.post('/login', (req, res) => {
  const { email, password } = req.body
  
  // ตรวจสอบความถูกต้องของข้อมูล
  
  // สร้าง token สำหรับการยืนยันตัวตน
  
  // ส่ง response กลับไปยัง client พร้อม token
  res.send({ token: 'TOKEN_HERE' })
})

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
