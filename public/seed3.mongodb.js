// =============================
//  File: seed_logistics.js
//  Purpose: Insert dữ liệu mẫu cho logistics_system
// =============================

use('logistics_system');

db.warehouses.deleteMany({});
db.employees.deleteMany({});
db.customers.deleteMany({});
db.shipments.deleteMany({});
db.delivery_logs.deleteMany({});

// --- WAREHOUSES ---
db.warehouses.insertMany([
	{ name: 'Hà Nội Central', location: 'Hà Nội', code: 'WH01' },
	{ name: 'Đà Nẵng Hub', location: 'Đà Nẵng', code: 'WH02' },
	{ name: 'Sài Gòn Main', location: 'TP.HCM', code: 'WH03' },
]);
const warehouses = db.warehouses.find().toArray();

// --- EMPLOYEES ---
db.employees.insertMany([
	{ name: 'Nguyễn Văn Tài', email: 'tai@logi.com', role: 'driver', salary: 12000000, warehouse_id: warehouses[0]._id },
	{ name: 'Lê Thị Hoa', email: 'hoa@logi.com', role: 'dispatcher', salary: 10000000, warehouse_id: warehouses[0]._id },
	{ name: 'Phạm Hữu Dũng', email: 'dung@logi.com', role: 'driver', salary: 11000000, warehouse_id: warehouses[1]._id },
	{
		name: 'Trần Minh Khoa',
		email: 'khoa@logi.com',
		role: 'manager',
		salary: 18000000,
		warehouse_id: warehouses[2]._id,
	},
	{ name: 'Đỗ Đức Anh', email: 'anh@logi.com', role: 'driver', salary: 11500000, warehouse_id: warehouses[2]._id },
	{ name: 'Nguyễn Ngọc Tín', email: 'tin@logi.com', role: 'driver', salary: 12500000, warehouse_id: warehouses[1]._id },
]);
const employees = db.employees.find({ role: 'driver' }).toArray();

// --- CUSTOMERS ---
const customerNames = [
	'Hoàng Anh',
	'Ngọc Bích',
	'Trung Kiên',
	'Thanh Hằng',
	'Hữu Tài',
	'Minh Trang',
	'Quốc Cường',
	'Bảo Ngọc',
	'Thế Anh',
	'Phương Linh',
	'Đức Duy',
	'Lan Chi',
	'Anh Thư',
	'Việt Hoàng',
	'Thùy Dung',
];

let customersSeed = [];
for (let i = 0; i < customerNames.length; i++) {
	customersSeed.push({
		name: customerNames[i],
		phone: '09' + Math.floor(10000000 + Math.random() * 89999999),
		email: `${customerNames[i].toLowerCase().replace(/\s/g, '')}@example.com`,
		addresses: [
			{
				label: 'Nhà riêng',
				city: ['Hà Nội', 'Đà Nẵng', 'TP.HCM'][Math.floor(Math.random() * 3)],
				district: ['Ba Đình', 'Hải Châu', 'Tân Bình', 'Bình Thạnh', 'Hoàn Kiếm'][Math.floor(Math.random() * 5)],
				street: `${Math.floor(Math.random() * 100)} ${
					['Lê Lợi', 'Cộng Hòa', 'Kim Mã', 'Phan Chu Trinh'][Math.floor(Math.random() * 4)]
				}`,
			},
		],
	});
}
db.customers.insertMany(customersSeed);
const customers = db.customers.find().toArray();

// --- SHIPMENTS ---
let shipmentsSeed = [];
let trackingCounter = 1;
const statuses = ['pending', 'in_transit', 'delivered', 'cancelled'];

for (let i = 0; i < 120; i++) {
	const sender = customers[Math.floor(Math.random() * customers.length)];
	const receiver = customers[Math.floor(Math.random() * customers.length)];
	const warehouse = warehouses[Math.floor(Math.random() * warehouses.length)];
	const driver = employees[Math.floor(Math.random() * employees.length)];
	const status = statuses[Math.floor(Math.random() * statuses.length)];

	const month = Math.floor(Math.random() * 10) + 1; // 1-10
	const day = Math.floor(Math.random() * 28) + 1;
	const createdAt = new Date(
		`2025-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(
			Math.floor(Math.random() * 23)
		).padStart(2, '0')}:00:00`
	);

	const packageCount = Math.floor(Math.random() * 3) + 1;
	const packages = [];
	for (let j = 0; j < packageCount; j++) {
		packages.push({
			description: ['Laptop', 'Điện thoại', 'Máy ảnh', 'Đồng hồ', 'Tủ lạnh', 'Sách', 'Thực phẩm'][
				Math.floor(Math.random() * 7)
			],
			weight: +(Math.random() * 50 + 0.5).toFixed(1),
			value: Math.floor(Math.random() * 15000000) + 1000000,
		});
	}

	shipmentsSeed.push({
		tracking_number: 'VN' + String(trackingCounter++).padStart(5, '0'),
		sender_id: sender._id,
		receiver_id: receiver._id,
		warehouse_id: warehouse._id,
		driver_id: driver._id,
		total_cost: Math.floor(Math.random() * 20000000) + 500000,
		status,
		created_at: createdAt,
		packages,
	});
}

db.shipments.insertMany(shipmentsSeed);
const shipments = db.shipments.find().toArray();

// --- DELIVERY LOGS ---
let deliveryLogsSeed = [];
for (const shipment of shipments) {
	const logCount = Math.floor(Math.random() * 3) + 2; // 2–5 logs
	const startTime = new Date(shipment.created_at);
	for (let k = 0; k < logCount; k++) {
		const nextTime = new Date(startTime.getTime() + (k + 1) * 3600 * 1000 * 6);
		const location = ['Hà Nội', 'Ninh Bình', 'Thanh Hóa', 'Huế', 'Đà Nẵng', 'Quảng Nam', 'TP.HCM'][
			Math.floor(Math.random() * 7)
		];
		const statusOptions = ['departed', 'arrived', 'in_transit', 'delivered', 'failed'];
		deliveryLogsSeed.push({
			shipment_id: shipment._id,
			timestamp: nextTime,
			location,
			status:
				shipment.status === 'cancelled' ? 'failed' : statusOptions[Math.floor(Math.random() * statusOptions.length)],
		});
	}
}
db.delivery_logs.insertMany(deliveryLogsSeed);
