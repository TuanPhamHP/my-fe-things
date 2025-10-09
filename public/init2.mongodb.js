use('garage_system');

// === BRANCHES ===
db.createCollection('branches', {
	validator: {
		$jsonSchema: {
			additionalProperties: true,

			bsonType: 'object',
			required: ['name', 'address', 'code'],
			properties: {
				name: { bsonType: 'string', description: 'Tên chi nhánh bắt buộc' },
				address: { bsonType: 'string', description: 'Địa chỉ chi nhánh bắt buộc' },
				code: { bsonType: 'string', description: 'Mã chi nhánh (unique)' },
			},
		},
	},
});
db.branches.createIndex({ code: 1 }, { unique: true });

// === EMPLOYEES ===
db.createCollection('employees', {
	validator: {
		$jsonSchema: {
			additionalProperties: true,

			bsonType: 'object',
			required: ['name', 'role', 'salary', 'branch_id'],
			properties: {
				name: { bsonType: 'string', description: 'Tên nhân viên' },

				role: {
					enum: ['mechanic', 'receptionist', 'manager'],
					description: "Vai trò chỉ trong ['mechanic','receptionist','manager']",
				},
				salary: { bsonType: 'number', minimum: 0, description: 'Lương phải >= 0' },
				branch_id: { bsonType: 'objectId', description: 'Tham chiếu đến branches._id' },
			},
		},
	},
});
db.employees.createIndex({ email: 1 }, { unique: true });

// === CUSTOMERS ===
db.createCollection('customers', {
	validator: {
		$jsonSchema: {
			additionalProperties: true,

			bsonType: 'object',
			required: ['name', 'phone'],
			properties: {
				name: { bsonType: 'string', minLength: 1, description: 'Tên không được rỗng' },
				phone: { bsonType: 'string', description: 'Số điện thoại (unique)' },

				vehicles: {
					bsonType: 'array',
					description: 'Danh sách xe nhúng',
					items: {
						bsonType: 'object',
						required: ['plate_number', 'brand', 'model', 'year'],
						properties: {
							plate_number: { bsonType: 'string' },
							brand: { bsonType: 'string' },
							model: { bsonType: 'string' },
							year: { bsonType: 'int' },
						},
					},
				},
			},
		},
	},
});
db.customers.createIndex({ phone: 1 }, { unique: true });

// === SERVICE_JOBS ===
db.createCollection('service_jobs', {
	validator: {
		$jsonSchema: {
			additionalProperties: true,
			bsonType: 'object',
			required: ['customer_id', 'branch_id', 'employee_id', 'total_cost', 'status'],
			properties: {
				customer_id: { bsonType: 'objectId', description: 'Tham chiếu customers._id' },
				branch_id: { bsonType: 'objectId', description: 'Tham chiếu branches._id' },
				employee_id: { bsonType: 'objectId', description: 'Tham chiếu employees._id' },
				total_cost: { bsonType: ['int', 'double'], minimum: 0, description: 'Chi phí >= 0' },
				status: {
					enum: ['pending', 'in_progress', 'completed', 'cancelled'],
					description: 'Trạng thái hợp lệ',
				},
			},
		},
	},
});
