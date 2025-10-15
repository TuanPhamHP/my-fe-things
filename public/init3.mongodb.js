use('logistics_system');

db.warehouses.drop();
db.employees.drop();
db.customers.drop();
db.shipments.drop();
db.delivery_logs.drop();
db.warehouse_revenue_summary.drop();

// === 1. WAREHOUSES ===
db.createCollection('warehouses', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: ['name', 'location', 'code'],
			properties: {
				name: { bsonType: 'string' },
				location: { bsonType: 'string' },
				code: { bsonType: 'string' },
			},
		},
	},
});
db.warehouses.createIndex({ code: 1 }, { unique: true });

// === 2. EMPLOYEES ===
db.createCollection('employees', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: ['name', 'email', 'role', 'salary', 'warehouse_id'],
			properties: {
				name: { bsonType: 'string' },
				email: { bsonType: 'string', pattern: '^.+@.+\\..+$' },
				role: { enum: ['driver', 'packer', 'manager', 'dispatcher'] },
				salary: { bsonType: 'number', minimum: 0 },
				warehouse_id: { bsonType: 'objectId' },
			},
		},
	},
});
db.employees.createIndex({ email: 1 }, { unique: true });

// === 3. CUSTOMERS ===
db.createCollection('customers', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: ['name', 'phone'],
			properties: {
				name: { bsonType: 'string' },
				phone: { bsonType: 'string' },
				email: { bsonType: ['string', 'null'], pattern: '^.+@.+\\..+$' },
				addresses: {
					bsonType: 'array',
					items: {
						bsonType: 'object',
						required: ['label', 'city', 'district', 'street'],
						properties: {
							label: { bsonType: 'string' },
							city: { bsonType: 'string' },
							district: { bsonType: 'string' },
							street: { bsonType: 'string' },
						},
					},
				},
			},
		},
	},
});
db.customers.createIndex({ phone: 1 }, { unique: true });

// === 4. SHIPMENTS ===
db.createCollection('shipments', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: ['tracking_number', 'sender_id', 'receiver_id', 'warehouse_id', 'driver_id', 'status', 'total_cost'],
			properties: {
				tracking_number: { bsonType: 'string' },
				sender_id: { bsonType: 'objectId' },
				receiver_id: { bsonType: 'objectId' },
				warehouse_id: { bsonType: 'objectId' },
				driver_id: { bsonType: 'objectId' },
				total_cost: { bsonType: 'number', minimum: 0 },
				status: { enum: ['pending', 'in_transit', 'delivered', 'cancelled'] },
				created_at: { bsonType: 'date' },
				packages: {
					bsonType: 'array',
					items: {
						bsonType: 'object',
						required: ['description', 'weight', 'value'],
						properties: {
							description: { bsonType: 'string' },
							weight: { bsonType: 'number' },
							value: { bsonType: 'number' },
						},
					},
				},
			},
		},
	},
});

db.shipments.createIndex({ tracking_number: 1 }, { unique: true });
db.shipments.createIndex({ warehouse_id: 1, created_at: -1 }); // compound index

// === 5. DELIVERY_LOGS ===
db.createCollection('delivery_logs', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: ['shipment_id', 'timestamp', 'location', 'status'],
			properties: {
				shipment_id: { bsonType: 'objectId' },
				timestamp: { bsonType: 'date' },
				location: { bsonType: 'string' },
				status: { enum: ['departed', 'arrived', 'in_transit', 'delivered', 'failed'] },
			},
		},
	},
});
db.delivery_logs.createIndex({ shipment_id: 1, timestamp: -1 });

// === 6. VIEW: warehouse_revenue_summary ===
db.createView('warehouse_revenue_summary', 'shipments', [
	{ $match: { created_at: { $gte: new Date('2025-01-01'), $lt: new Date('2026-01-01') } } },
	{ $group: { _id: '$warehouse_id', total_revenue: { $sum: '$total_cost' } } },
	{ $lookup: { from: 'warehouses', localField: '_id', foreignField: '_id', as: 'warehouse' } },
	{ $unwind: '$warehouse' },
	{
		$project: {
			_id: 0,
			warehouse_name: '$warehouse.name',
			location: '$warehouse.location',
			total_revenue: 1,
		},
	},
]);
