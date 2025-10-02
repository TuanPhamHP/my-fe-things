// MongoDB Playground
use('eMeal');

// Clear old data
db.users.deleteMany({});
db.restaurants.deleteMany({});
db.menus.deleteMany({});
db.orders.deleteMany({});
db.reviews.deleteMany({});
db.order_logs.deleteMany({});

// Helper random
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pick(arr) {
	return arr[randInt(0, arr.length - 1)];
}

// 1. Restaurants
const restaurantNames = [
	'Nhà Hàng Hương Việt',
	'Pizza Express',
	'Sushi Tokyo',
	'BBQ House',
	'Highlands Coffee',
	'Bánh Mì Sài Gòn',
];
const insertedRestaurants = db.restaurants.insertMany(restaurantNames.map(name => ({ name })));

// 2. Users
let users = [];
// Admin
users.push({ email: 'admin@emeal.com', role: 'admin' });

// Owners (map đến restaurant_id)
for (let i = 0; i < 6; i++) {
	users.push({
		email: `owner${i + 1}@emeal.com`,
		role: 'owner',
		restaurant_id: insertedRestaurants.insertedIds[i], // dùng ObjectId trực tiếp
	});
}

// Customers (23 người)
for (let i = 0; i < 23; i++) {
	users.push({
		email: `customer${i + 1}@emeal.com`,
		role: 'customer',
	});
}
const insertedUsers = db.users.insertMany(users);

// 3. Menus (mỗi nhà hàng 8–12 món, giá random 100k–5tr)
const sampleDishes = [
	'Phở Bò',
	'Bún Chả',
	'Cơm Tấm',
	'Lẩu Hải Sản',
	'Pizza Margherita',
	'Pizza Pepperoni',
	'Sushi Cá Hồi',
	'Sushi Lươn',
	'BBQ Sườn',
	'Trà Sữa',
	'Bánh Mì Thịt',
	'Cà Phê Sữa',
	'Nước Cam',
	'Bánh Ngọt',
	'Mì Ý',
	'Gà Rán',
];
let menus = [];
for (let i = 0; i < 6; i++) {
	const nDish = randInt(8, 12);
	for (let j = 0; j < nDish; j++) {
		menus.push({
			restaurant_id: insertedRestaurants.insertedIds[i], // ObjectId
			name: pick(sampleDishes) + ' ' + (j + 1),
			price: randInt(100000, 5000000),
		});
	}
}
const insertedMenus = db.menus.insertMany(menus);

// 4. Orders (20 orders random)
let orders = [];
const customerIds = Object.values(insertedUsers.insertedIds).slice(7); // từ user 7 trở đi là customers
for (let i = 0; i < 20; i++) {
	const randomCustomer = pick(customerIds);
	const randomMenuIds = [];
	const itemCount = randInt(1, 3);
	for (let j = 0; j < itemCount; j++) {
		randomMenuIds.push(pick(Object.values(insertedMenus.insertedIds))); // ObjectId
	}
	orders.push({
		items: randomMenuIds,
		quantity: randInt(1, 5),
		status: pick(['pending', 'confirmed', 'delivering', 'completed', 'canceled']),
		customer_id: randomCustomer, // ObjectId
	});
}
const insertedOrders = db.orders.insertMany(orders);

// 5. Reviews (300 reviews, rating 1–5)
const reviewTemplates = {
	1: [
		'Rất tệ, đồ ăn nguội ngắt.',
		'Phục vụ chậm.',
		'Không đáng tiền.',
		'Đồ ăn dở.',
		'Thiếu món.',
		'Không hài lòng.',
		'Nhạt nhẽo.',
		'Nhân viên khó chịu.',
		'Sai món.',
		'Lần cuối.',
	],
	2: [
		'Không ngon lắm.',
		'Phục vụ chưa chu đáo.',
		'Giá cao.',
		'Không đồng đều.',
		'Không nổi bật.',
		'Nhiều dầu mỡ.',
		'Chật và ồn.',
		'Thiếu chuyên nghiệp.',
		'Không hài lòng.',
		'Không đặt lại.',
	],
	3: [
		'Ổn.',
		'Tạm được.',
		'Phục vụ chấp nhận được.',
		'Chờ lâu.',
		'Không gian bình thường.',
		'Ăn được.',
		'Khá ổn.',
		'Cũng được.',
		'Hợp túi tiền.',
		'Trung bình.',
	],
	4: [
		'Ngon.',
		'Phục vụ nhanh.',
		'Không gian dễ chịu.',
		'Giá hợp lý.',
		'Trình bày đẹp.',
		'Giao nhanh.',
		'Nóng hổi.',
		'Nhân viên nhiệt tình.',
		'Hài lòng.',
		'Giới thiệu bạn bè.',
	],
	5: [
		'Xuất sắc!',
		'Tuyệt vời.',
		'Dịch vụ hoàn hảo.',
		'Không gian đẹp.',
		'Giá tốt.',
		'Nhân viên chuyên nghiệp.',
		'Ngon tuyệt.',
		'Giao siêu nhanh.',
		'Sẽ quay lại.',
		'Đáng tiền.',
	],
};
let reviews = [];
for (let i = 0; i < 300; i++) {
	const rating = randInt(1, 5);
	reviews.push({
		comment: pick(reviewTemplates[rating]),
		rating: rating,
		customer_id: pick(customerIds), // ObjectId
		restaurant_id: pick(Object.values(insertedRestaurants.insertedIds)), // ObjectId
	});
}
db.reviews.insertMany(reviews);

// 6. Order Logs (200 logs random action)
let logs = [];
const actions = ['Order created', 'Order confirmed', 'Cooking', 'Delivering', 'Completed', 'Canceled'];
for (let i = 0; i < 200; i++) {
	logs.push({
		order_id: pick(Object.values(insertedOrders.insertedIds)), // ObjectId
		action: pick(actions),
		timestamp: new Date(Date.now() - randInt(0, 1000 * 60 * 60 * 24 * 30)), // trong 30 ngày gần nhất
	});
}
db.order_logs.insertMany(logs);

print('Seed thành công!');
