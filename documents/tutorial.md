<h1>Docker cơ bản</h1>
• Container: Như một "hộp đóng gói" chứa ứng dụng và mọi thứ nó cần để chạy (code, thư viện, môi trường). Khác máy ảo ở chỗ container dùng chung kernel của máy host → Nhẹ và nhanh hơn.

• Image: Bản template để tạo container (giống file ISO cài OS).

• Dockerfile: là một tập tin văn bản chứa các lệnh hướng dẫn Docker cách xây dựng (build) một image. Mỗi lệnh trong Dockerfile tạo ra một layer trong image.

• Docker Compose: Công cụ định nghĩa và chạy nhiều container cùng lúc qua file YAML.

<h1>Cấu trúc folder</h1>
/demo-app-docker
├── helloworld-webapp/ # frontend - ReactJS
│ ├── Dockerfile
│ ├── package.json
│ └── src/ # Thư mục code React
├── helloworld-service/ # backend - Node.js, ExpressJS
│ ├── Dockerfile
│ ├── package.json
│ └── index.js # File API đơn giản
└── docker-compose.yml
