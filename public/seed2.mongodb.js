// ============================
// GARA SYSTEM SEED SCRIPT (40 service_jobs)
// ============================
use('garage_system');
db.branches.deleteMany({});
db.employees.deleteMany({});
db.customers.deleteMany({});
db.service_jobs.deleteMany({});

// ============================
// BRANCHES
// ============================
const branchesResult = db.branches.insertMany([
	{
		name: 'Chi nhánh Hà Nội',
		address: 'Cầu Giấy, Hà Nội',
		code: 'HN001',
		opened_at: ISODate('2020-01-01'),
		budget: 120000000,
	},
	{
		name: 'Chi nhánh Hồ Chí Minh',
		address: 'Quận 3, TP.HCM',
		code: 'HCM001',
		opened_at: ISODate('2021-06-15'),
		budget: 150000000,
	},
	{
		name: 'Chi nhánh Đà Nẵng',
		address: 'Hải Châu, Đà Nẵng',
		code: 'DN001',
		opened_at: ISODate('2022-02-01'),
		budget: 90000000,
	},
	{
		name: 'Chi nhánh Hải Phòng',
		address: 'Lê Chân, Hải Phòng',
		code: 'HP001',
		opened_at: ISODate('2022-11-01'),
		budget: 85000000,
	},
	{
		name: 'Chi nhánh Cần Thơ',
		address: 'Ninh Kiều, Cần Thơ',
		code: 'CT001',
		opened_at: ISODate('2023-06-10'),
		budget: 80000000,
	},
]);
const branchIds = Object.values(branchesResult.insertedIds);

// ============================
// EMPLOYEES
// ============================
const employeesResult = db.employees.insertMany([
	{
		name: 'Nguyễn Văn A',
		email: 'a123@garage.com',
		age: 30,
		role: 'mechanic',
		salary: 8000000,
		branch_id: branchIds[0],
	},
	{
		name: 'Lê Thị B',
		email: 'b123@garage.com',
		age: 27,
		role: 'receptionist',
		salary: 7000000,
		branch_id: branchIds[0],
	},
	{
		name: 'Phạm Văn C',
		email: 'c123@garage.com',
		age: 35,
		role: 'mechanic',
		salary: 9500000,
		branch_id: branchIds[1],
	},
	{
		name: 'Trần Thị D',
		email: 'd123@garage.com',
		age: 32,
		role: 'manager',
		salary: 15000000,
		branch_id: branchIds[1],
	},
	{ name: 'Vũ Văn E', email: 'e123@garage.com', age: 29, role: 'mechanic', salary: 8_200_000, branch_id: branchIds[2] },
	{
		name: 'Ngô Thị F',
		email: 'f123@garage.com',
		age: 26,
		role: 'receptionist',
		salary: 6500000,
		branch_id: branchIds[2],
	},
	{
		name: 'Đinh Văn G',
		email: 'g123@garage.com',
		age: 40,
		role: 'manager',
		salary: 16000000,
		branch_id: branchIds[3],
	},
	{
		name: 'Hoàng Thị H',
		email: 'h123@garage.com',
		age: 31,
		role: 'mechanic',
		salary: 8000000,
		branch_id: branchIds[4],
	},
]);
const employeeIds = Object.values(employeesResult.insertedIds);

// ============================
// CUSTOMERS
// ============================
const customersResult = db.customers.insertMany([
	{
		name: 'Trần Văn B',
		phone: '0901112222',
		email: 'b@example.com',
		vehicles: [
			{ plate_number: '30A-12345', brand: 'Toyota', model: 'Vios', year: 2022 },
			{ plate_number: '30A-67890', brand: 'Honda', model: 'Civic', year: 2020 },
		],
	},
	{
		name: 'Nguyễn Thị C',
		phone: '0902223333',
		email: 'c@example.com',
		vehicles: [{ plate_number: '59C-67890', brand: 'Isuzu', model: 'QKR', year: 2020 }],
	},
	{
		name: 'Lê Văn D',
		phone: '0904445555',
		email: 'd@example.com',
		vehicles: [{ plate_number: '43B-45678', brand: 'Honda', model: 'Wave', year: 2021 }],
	},
	{
		name: 'Phạm Thị E',
		phone: '0905556666',
		email: 'e@example.com',
		vehicles: [{ plate_number: '51A-33333', brand: 'Hyundai', model: 'Accent', year: 2023 }],
	},
	{
		name: 'Đỗ Văn F',
		phone: '0906667777',
		email: 'f@example.com',
		vehicles: [
			{ plate_number: '29C-99999', brand: 'Kia', model: 'Morning', year: 2022 },
			{ plate_number: '30B-88888', brand: 'Mazda', model: 'CX5', year: 2021 },
		],
	},
]);
const customerIds = Object.values(customersResult.insertedIds);

// ============================
// SERVICE JOBS (x40)
// ============================
const statuses = ['pending', 'in_progress', 'completed', 'cancelled'];
const serviceTypes = [
	{ name: 'Oil Change', price: 300000, duration: 45 },
	{ name: 'Brake Check', price: 400000, duration: 60 },
	{ name: 'Tire Replace', price: 700000, duration: 90 },
	{ name: 'Car Wash', price: 100000, duration: 20 },
	{ name: 'Inspection', price: 200000, duration: 30 },
	{ name: 'Engine Repair', price: 2000000, duration: 240 },
	{ name: 'Battery Replace', price: 800000, duration: 60 },
	{ name: 'Air Filter Change', price: 250000, duration: 30 },
];

const serviceJobs = [];
for (let i = 0; i < 40; i++) {
	const customer = customerIds[i % customerIds.length];
	const branch = branchIds[i % branchIds.length];
	const employee = employeeIds[i % employeeIds.length];
	const randomService = serviceTypes[i % serviceTypes.length];
	const randomStatus = statuses[i % statuses.length];
	const cost = randomService.price + Math.floor(Math.random() * 50_000);
	const createdAt = new Date(2025, 8 + Math.floor(i / 10), (i % 28) + 1, 8 + (i % 10));

	serviceJobs.push({
		customer_id: customer,
		branch_id: branch,
		employee_id: employee,
		total_cost: cost,
		status: randomStatus,
		service_items: [randomService],
		created_at: createdAt,
	});
}

db.service_jobs.insertMany(serviceJobs);
