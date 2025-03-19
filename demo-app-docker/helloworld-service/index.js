const express = require("express");
const path = require("path");
const app = express();

// // Serve các file tĩnh từ thư mục build (sẽ được tạo ở bước build React)
// app.use(express.static(path.join(__dirname, "build")));

// API đơn giản: trả về một thông báo JSON
app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const PORT = process.env.PORT || 3001;
// Lắng nghe kết nối trên cổng 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
