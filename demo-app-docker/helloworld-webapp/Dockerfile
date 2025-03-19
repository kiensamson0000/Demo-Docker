# CASE 1: RUN APP LOCAL - chế độ hot-reload (react-scripts start)
ARG NODE_VERSION=16
FROM node:${NODE_VERSION}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# cổng mặc định của React Dev Server
EXPOSE 3000

# Chạy ứng dụng với chế độ hot-reload (react-scripts start)
CMD ["npm", "start"]


# #CASE 2: RUN APP MÔI TRƯỜNG THẬT(dev, uat, production)
# #----------- Stage 1: Build ứng dụng React -----------
# ARG NODE_VERSION=16
# FROM node:${NODE_VERSION} as build

# #Thiết lập thư mục làm việc trong container
# WORKDIR /app

# # Sao chép file package.json và package-lock.json (nếu có) để cài đặt dependencies
# COPY package*.json ./


# # Cài đặt các dependencies
# RUN npm install

# # Sao chép toàn bộ mã nguồn vào container
# COPY . .

# # Build ứng dụng React, kết quả sẽ được đưa vào /app/build chứa code tối ưu
# RUN npm run build

# # ----------- Stage 2: Chạy ứng dụng bằng Nginx -----------
# FROM nginx:alpine

# # Sao chép thư mục build từ stage 1 vào thư mục của Nginx để phục vụ các file tĩnh
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose cổng 80 (mặc định của Nginx)
# EXPOSE 80

# # Chạy Nginx ở chế độ foreground
# CMD ["nginx", "-g", "daemon off;"]

# NOTE: 
# Stage 1:
    # Dùng image Node.js để build ứng dụng React.
    # Cài đặt dependencies và chạy lệnh npm run build tạo ra thư mục build.
# Stage 2:
    # Note => Production env(môi trường chạy thật: dev, uat, production) with Nginx, don't support Hot-Reload.
    # Sử dụng image Nginx nhẹ (alpine) để phục vụ nội dung tĩnh từ thư mục build.
    # Expose cổng 80 để truy cập ứng dụng qua trình duyệt.