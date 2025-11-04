🔹 Đề xuất 6 bài học tiếp theo (lý thuyết chuyên sâu, 2h/bài)
9. Express (P3) – Middleware & Error Handling

Mục tiêu: Hiểu và tự viết middleware, quản lý luồng xử lý request.
Nội dung chính:

Cấu trúc middleware trong Express

app.use(), next(), chuỗi middleware

Loại middleware: Application, Router, Built-in, Third-party

Xử lý lỗi toàn cục (error-handling middleware)

Ví dụ: logger, auth, rate-limit middleware

So sánh với interceptor hoặc filter trong các framework khác

10. Express (P4) – Routing nâng cao & Modularization

Mục tiêu: Tổ chức router chuyên nghiệp, dễ mở rộng.
Nội dung chính:

Router module (express.Router())

Nested routers & prefix routes

RESTful route convention

Dynamic params, query, optional params

Controller hóa logic: tách route – controller – service

Thiết kế module CRUD chuẩn REST API

11. Làm việc với MongoDB & Mongoose (P1) – Kết nối & Schema

Mục tiêu: Làm quen với cơ chế NoSQL, thiết kế schema và model.
Nội dung chính:

Giới thiệu MongoDB và Mongoose ORM

Kết nối MongoDB Atlas / local

Định nghĩa Schema & Model

Kiểu dữ liệu và Validation

Tạo – đọc – cập nhật – xóa (CRUD) với Mongoose

Quan hệ 1-nhiều, tham chiếu (ref)

12. Mongoose (P2) – Query nâng cao, Hooks & Aggregation

Mục tiêu: Làm chủ query engine và pipeline của MongoDB.
Nội dung chính:

Query builder trong Mongoose (find, select, populate, sort, limit, skip)

Virtual fields & computed data

Middleware (pre/post hooks)

Aggregation pipeline cơ bản

Thực hành: báo cáo thống kê từ dữ liệu

13. Authentication & Authorization trong Express

Mục tiêu: Bảo mật và kiểm soát truy cập API.
Nội dung chính:

Cơ chế xác thực (Session vs Token)

JSON Web Token (JWT) cơ bản

Quy trình đăng nhập, lưu token, verify middleware

Phân quyền người dùng (Role-based Access)

Lưu ý bảo mật: CORS, bcrypt, env variables

Ví dụ: API login, register, refresh token

14. Triển khai & Bảo trì ứng dụng NodeJS

Mục tiêu: Hiểu cách đưa ứng dụng lên môi trường thật.
Nội dung chính:

Cấu hình môi trường .env

Log & monitoring (Morgan, Winston)

Quản lý tiến trình với PM2

Build & deploy trên VPS / Render / Railway / Docker

Tối ưu hiệu năng (cluster, caching cơ bản)

Giới thiệu CI/CD và backup database