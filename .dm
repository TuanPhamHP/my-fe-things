📝 Đề bài: Thiết Kế & Triển Khai Database Quản Lý Bán Đồ Ăn
Bài tập 1: Khởi tạo Database (6 điểm)
Mô tả:
Bạn được giao nhiệm vụ xây dựng hệ thống quản lý bán đồ ăn. Hãy thực hiện các yêu cầu sau:

Yêu cầu:
1️⃣ Tạo cơ sở dữ liệu có tên FoodOrderManagement.
2️⃣ Tạo các bảng với cấu trúc sau:

foods (id, name, price, category_id, stock_quantity)
categories (id, name)
customers (id, name, email, phone, join_date)
orders (id, customer_id, order_date, total_amount, status)
order_details (id, order_id, food_id, quantity, subtotal)
3️⃣ Thiết lập các ràng buộc:

Mỗi món ăn thuộc một danh mục → (foods.category_id → categories.id).
Mỗi đơn hàng thuộc một khách hàng → (orders.customer_id → customers.id).
Một đơn hàng có nhiều món ăn, và mỗi món ăn có thể xuất hiện trong nhiều đơn hàng → (order_details.order_id → orders.id, order_details.food_id → foods.id).
Tổng tiền (orders.total_amount) phải bằng tổng tất cả subtotal của bảng order_details.
Số lượng món ăn (foods.stock_quantity) phải giảm khi có đơn hàng mới.
Bài tập 2: Truy vấn dữ liệu cơ bản (6 điểm)
1️⃣ Lấy danh sách tất cả món ăn kèm theo tên danh mục của chúng.
2️⃣ Lấy danh sách tất cả khách hàng và số lượng đơn hàng họ đã đặt.
3️⃣ Tìm món ăn bán chạy nhất.
4️⃣ Tìm khách hàng chi tiêu nhiều nhất.

📌 Lưu ý: Tách riêng file có tên query_example.sql.

Bài tập 3: View & Stored Procedure (6 điểm)
1️⃣ Tạo một View có tên view_order_summary, hiển thị danh sách đơn hàng với thông tin:

Tên khách hàng
Ngày đặt hàng
Tổng tiền
Trạng thái đơn hàng
2️⃣ Tạo một Stored Procedure sp_get_foods_by_category nhận vào id danh mục và trả về danh sách món ăn thuộc danh mục đó.

3️⃣ Tạo một Stored Procedure sp_get_top_customers trả về danh sách 3 khách hàng có tổng chi tiêu cao nhất.

📌 Lưu ý: Tách riêng file có tên views_and_procedures.sql.

Bài tập 4: Trigger (5 điểm)
1️⃣ Viết một Trigger tr_check_stock_before_order để ngăn đặt hàng nếu món ăn đã hết hàng.
2️⃣ Viết một Trigger tr_update_stock_quantity để giảm số lượng món ăn khi có đơn hàng mới.
3️⃣ Viết một Trigger tr_order_logs, ghi lại log khi tạo một đơn hàng vào bảng order_logs (id, log_time, order_id, action).

📌 Lưu ý: Tách riêng file có tên triggers.sql.




