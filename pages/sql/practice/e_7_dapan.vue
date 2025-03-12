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
				x1: `-- 1. kiểm tra số lượng nhân viên trong phòng ban
				CREATE PROCEDURE CheckDepartmentSize(IN dept_id INT)
BEGIN
    DECLARE employee_count INT;
    
    SELECT COUNT(*) INTO employee_count 
    FROM employees 
    WHERE department_id = dept_id;
    
    IF employee_count > 10 THEN
        SELECT 'Phòng ban đông nhân viên' AS result;
    ELSE
        SELECT 'Phòng ban nhỏ' AS result;
    END IF;
END;`,
				x2: `-- Tạo một câu SELECT: Hiển thị danh sách nhân viên kèm theo loại nhân viên dựa trên ngày vào làm
				SELECT name, email, phone, hire_date,
       CASE 
           WHEN TIMESTAMPDIFF(YEAR, hire_date, CURDATE()) < 1 THEN 'Mới tuyển'
           WHEN TIMESTAMPDIFF(YEAR, hire_date, CURDATE()) BETWEEN 1 AND 5 THEN 'Nhân viên chính thức'
           ELSE 'Kinh nghiệm lâu năm'
       END AS employee_type
FROM employees;
`,
				x3: `-- cập nhật lương nhân viên
CREATE PROCEDURE Update_Employee_Salaries(IN emp_id INT)
BEGIN
    DECLARE hire_year INT;
    DECLARE current_year INT;
    DECLARE experience INT;
    
    -- Lấy năm hiện tại
    SET current_year = YEAR(CURDATE());
    
    -- Lấy năm nhân viên vào làm
    SELECT YEAR(hire_date) INTO hire_year FROM employees WHERE id = emp_id;
    
    -- Tính số năm làm việc
    SET experience = current_year - hire_year;
    
    -- Kiểm tra điều kiện và cập nhật lương
    IF experience < 1 THEN
        -- Không tăng lương
        SELECT CONCAT('Nhân viên ', emp_id, ' không được tăng lương.') AS Message;
    ELSEIF experience >= 1 AND experience < 3 THEN
        -- Tăng 10%
        UPDATE employees SET salary = salary * 1.10 WHERE id = emp_id;
        SELECT CONCAT('Lương nhân viên ', emp_id, ' đã tăng 10%.') AS Message;
    ELSE
        -- Tăng 5%
        UPDATE employees SET salary = salary * 1.05 WHERE id = emp_id;
        SELECT CONCAT('Lương nhân viên ', emp_id, ' đã tăng 5%.') AS Message;
    END IF;
END;`,
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
