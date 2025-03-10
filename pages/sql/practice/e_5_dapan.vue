<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">Truy vấn DL:</p>
		<div class="col-span-1">
			<VCodeBlock :code="x1" highlightjs lang="sql" theme="atom-one-dark" />
		</div>
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">VIEW:</p>
		<div class="col-span-1">
			<VCodeBlock :code="x2" highlightjs lang="sql" theme="atom-one-dark" />
		</div>
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">PROCEDURE:</p>
		<div class="col-span-1">
			<VCodeBlock :code="x3" highlightjs lang="sql" theme="atom-one-dark" />
		</div>
		<DocNextPage :pagination="pagePagination" />
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		TabGroup,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
	} from '@headlessui/vue';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			VCodeBlock,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			TabGroup,
			TabList,
			Tab,
			TabPanels,
			TabPanel,
		},
		data() {
			return {
				x1: `-- 1. Lấy danh sách nhân viên cùng phòng ban
SELECT e.id, e.name AS employee_name, d.name AS department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;

-- 2. Lấy danh sách nhân viên và dự án họ tham gia
SELECT e.name AS employee_name, p.name AS project_name, ep.role
FROM employees e
JOIN employee_project ep ON e.id = ep.employee_id
JOIN projects p ON ep.project_id = p.id;

-- 3. Nhân viên tham gia nhiều dự án nhất
SELECT e.name AS employee_name, COUNT(ep.project_id) AS project_count
FROM employees e
JOIN employee_project ep ON e.id = ep.employee_id
GROUP BY e.id
ORDER BY project_count DESC
LIMIT 1;

-- 4. Phòng ban có nhiều nhân viên nhất
SELECT d.name AS department_name, COUNT(e.id) AS employee_count
FROM departments d
JOIN employees e ON d.id = e.department_id
GROUP BY d.id
ORDER BY employee_count DESC
LIMIT 1;

-- 5. Các dự án chưa có nhân viên tham gia
SELECT p.name AS project_name
FROM projects p
LEFT JOIN employee_project ep ON p.id = ep.project_id
WHERE ep.employee_id IS NULL;
`,
				x2: `-- View danh sách nhân viên và phòng ban
CREATE VIEW View_Employee_Department AS
SELECT e.id, e.name AS employee_name, d.name AS department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;

-- View danh sách nhân viên tham gia dự án
CREATE VIEW View_Project_Participation AS
SELECT e.name AS employee_name, p.name AS project_name, ep.role
FROM employees e
JOIN employee_project ep ON e.id = ep.employee_id
JOIN projects p ON ep.project_id = p.id;

-- View thống kê số nhân viên theo phòng ban
CREATE VIEW View_Department_Statistics AS
SELECT d.name AS department_name, COUNT(e.id) AS employee_count
FROM departments d
LEFT JOIN employees e ON d.id = e.department_id
GROUP BY d.id;
`,
				x3: `-- Procedure lấy danh sách nhân viên theo phòng ban
DELIMITER //
CREATE PROCEDURE Get_Employees_By_Department(IN dept_id INT)
BEGIN
    SELECT id, name, email, phone, hire_date
    FROM employees
    WHERE department_id = dept_id;
END //
DELIMITER ;

-- Procedure thêm nhân viên vào dự án
DELIMITER //
CREATE PROCEDURE Assign_Employee_To_Project(IN emp_id INT, IN proj_id INT, IN emp_role VARCHAR(50))
BEGIN
    INSERT INTO employee_project (employee_id, project_id, role)
    VALUES (emp_id, proj_id, emp_role);
END //
DELIMITER ;

-- Procedure tìm nhân viên tham gia nhiều dự án nhất
DELIMITER //
CREATE PROCEDURE Get_Top_Employees_By_Project_Count()
BEGIN
    SELECT e.name AS employee_name, COUNT(ep.project_id) AS project_count
    FROM employees e
    JOIN employee_project ep ON e.id = ep.employee_id
    GROUP BY e.id
    ORDER BY project_count DESC
    LIMIT 1;
END //
DELIMITER ;

CALL Get_Employees_By_Department(3);
CALL Assign_Employee_To_Project(2, 4, 'Designer');
CALL Get_Top_Employees_By_Project_Count();
`,
				counter: 0,
				pagePagination: {
					next: {
						title: 'Bài 2',
						link: '/sql/practice/e_2',
					},
					prev: {
						title: 'Danh sách',
						link: '/sql/practice',
					},
				},
			};
		},
		computed: {},
		methods: {},
	};
</script>
