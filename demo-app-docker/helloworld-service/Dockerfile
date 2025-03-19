ARG NODE_VERSION=16
FROM node:${NODE_VERSION}

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json (nếu có) để cài đặt dependencies
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn của backend vào container
COPY . .

# Expose cổng 3001 (ví dụ: API chạy trên cổng 3001)
ARG PORT_EXPOSE=3001
EXPOSE ${PORT_EXPOSE}

# Chạy backend với Nodemon để hỗ trợ hot-reload
CMD ["npm", "run", "dev"]


# # Chạy ứng dụng Node.js (index.js)
# CMD ["node", "index.js"]