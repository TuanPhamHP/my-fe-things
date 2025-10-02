// Init database và collection cần thiết
use('eMeal');
const listCollectionsName = db.getCollectionNames();

// USERS
if (!listCollectionsName.includes('users')) {
	db.createCollection('users', {
		validator: {
			$jsonSchema: {
				bsonType: 'object',
				required: ['email'],
				properties: {
					email: {
						bsonType: 'string',
						pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$',
						description: 'Email phải là chuỗi và hợp lệ.',
					},
					role: {
						bsonType: 'string',
						enum: ['customer', 'owner', 'admin'],
						description: 'Role phải là giá trị hợp lệ.',
					},
					restaurant_id: {
						bsonType: 'objectId',
						description: 'Ref tới restaurants._id (nếu là owner).',
					},
				},
			},
		},
	});
	db.users.createIndex({ email: 1 }, { unique: true });
}

// RESTAURANTS
if (!listCollectionsName.includes('restaurants')) {
	db.createCollection('restaurants', {
		validator: {
			$jsonSchema: {
				bsonType: 'object',
				required: ['name'],
				properties: {
					name: {
						bsonType: 'string',
						description: 'Tên nhà hàng phải là chuỗi và hợp lệ',
					},
				},
			},
		},
	});
}

// MENUS
if (!listCollectionsName.includes('menus')) {
	db.createCollection('menus', {
		validator: {
			$jsonSchema: {
				bsonType: 'object',
				required: ['restaurant_id', 'price'],
				properties: {
					restaurant_id: {
						bsonType: 'objectId',
						description: 'Ref tới restaurants._id',
					},
					name: {
						bsonType: 'string',
						description: 'Tên món ăn',
					},
					price: {
						bsonType: ['int', 'long', 'double', 'decimal'],
						minimum: 0,
						description: 'Giá tiền phải là số và >= 0',
					},
				},
			},
		},
	});
}

// ORDERS
if (!listCollectionsName.includes('orders')) {
	db.createCollection('orders', {
		validator: {
			$jsonSchema: {
				bsonType: 'object',
				required: ['quantity', 'status', 'items', 'customer_id'],
				properties: {
					items: {
						bsonType: 'array',
						minItems: 1,
						items: { bsonType: 'objectId' },
						description: 'Mảng items phải chứa ObjectId (menu ids)',
					},
					quantity: {
						bsonType: ['int', 'long', 'double', 'decimal'],
						minimum: 1,
						description: 'Số lượng >= 1',
					},
					status: {
						bsonType: 'string',
						enum: ['pending', 'confirmed', 'delivering', 'completed', 'canceled'],
						description: 'Status hợp lệ',
					},
					customer_id: {
						bsonType: 'objectId',
						description: 'Ref tới users._id (customer)',
					},
				},
			},
		},
	});
}

// REVIEWS
if (!listCollectionsName.includes('reviews')) {
	db.createCollection('reviews', {
		validator: {
			$jsonSchema: {
				bsonType: 'object',
				required: ['rating', 'customer_id', 'restaurant_id'],
				properties: {
					comment: {
						bsonType: 'string',
						maxLength: 500,
						description: 'Nội dung đánh giá',
					},
					rating: {
						bsonType: ['int', 'long', 'double', 'decimal'],
						minimum: 1,
						maximum: 5,
						description: 'Rating 1–5',
					},
					customer_id: {
						bsonType: 'objectId',
						description: 'Ref tới users._id (customer)',
					},
					restaurant_id: {
						bsonType: 'objectId',
						description: 'Ref tới restaurants._id',
					},
				},
			},
		},
	});
}

// ORDER_LOGS
if (!listCollectionsName.includes('order_logs')) {
	db.createCollection('order_logs', {
		capped: true,
		size: 1024 * 1024,
		max: 5000,
		validator: {
			$jsonSchema: {
				bsonType: 'object',
				required: ['order_id', 'action', 'timestamp'],
				properties: {
					order_id: {
						bsonType: 'objectId',
						description: 'Ref tới orders._id',
					},
					action: {
						bsonType: 'string',
						description: 'Hành động log',
					},
					timestamp: {
						bsonType: 'date',
						description: 'Thời điểm log',
					},
				},
			},
		},
	});
}
