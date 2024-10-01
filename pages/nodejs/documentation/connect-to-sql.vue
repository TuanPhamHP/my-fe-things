<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="mysql2" addOnClass="text-left" markedAs="about-sql2" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>mysql2</FilePath>
					là một trong những thư viện phổ biến nhất để kết nối Node.js với MySQL. Nó hỗ trợ các tính năng quan trọng như
					kết nối, thực hiện truy vấn, và xử lý dữ liệu trả về.
					<br />
				</p>

				<PageHeading text="1. Cài đặt mysql2" addOnClass="text-left mt-5" markedAs="step-1" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Bắt đầu tiến hành cài đặt package <FilePath>mysql2</FilePath> để sử dụng
				</p>
				<FakeTerminalUI :textCoppy="'npm install mysql2'">npm install mysql2</FakeTerminalUI>

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					sau khi đã có <b>`mysql2`</b> thì chúng ta bắt đầu tạo kết nối đến cơ sở dữ liệu:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="vs2015" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ở đoạn code trên, chúng ta sử dụng <FilePath>mysql</FilePath> để tạo ra một <b>`connection`</b> với các config
					về host, port, db tương ứng.
					<br />
					nếu chạy và nhận được thông báo thành công hoặc lỗi:
					<br />
					<b>Error: Unknown database 'hello_nodejs' ....</b> thì có nghĩa chúng ta đã setup thành công, lỗi ở đây thể
					hiện rằng trong hệ thống của chúng ta hiện chưa có database nào có tên là <b>`hello_nodejs`</b>, chúng ta có
					thể tạo manual hoặc auto bằng code để hoàn thiện việc kết nối.
				</p>
				<PageHeading text="2. Tạo database 'hello_nodejs'" addOnClass="text-left my-3" markedAs="step-2" :lvl="2" />
				<VCodeBlock :code="b4" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ở đoạn code trên, chúng ta sử dụng <FilePath>raw sql</FilePath> để tự kiểm tra nếu chưa có database thì sẽ tạo
					mới và connect, trong trường hợp có rồi thì chúng ta sẽ sử dụng luôn database này.
				</p>

				<PageHeading text="3. Tạo table" addOnClass="text-left my-3" markedAs="step-3" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Tạo table <b>users</b> để lưu trữ thông tin người dùng:
				</p>
				<VCodeBlock :code="b6" highlightjs lang="javascript" theme="vs2015" />
				<PageHeading text="4. Update Model" addOnClass="text-left my-3" markedAs="step-4" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Cập nhật lại các phương thức của model để phù hợp với database
				</p>
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Ở đây chỉ đơn giản là chúng ta require connection từ file kết nối database và viết các câu lệnh Raw SQL sau đó
					để cho
					<b>`connection`</b> thực thi các câu lệnh đó.
				</p>
				<PageHeading text="5. Update Controller" addOnClass="text-left my-3" markedAs="step-5" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Cập nhật lại các phương thức của controller để phù hợp với model
				</p>
				<VCodeBlock :code="b7" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Tại controller chúng ta sử dụng <b>res.json()</b> để trả ra dữ liệu dạng json thay vì view như trước (do tôi
					lười, chưa code UI), các bạn cũng có thể update lại để trả về view nếu có.
					<br />
					Async/Await và Promise là những tính năng cực kỳ quan trọng để giúp chúng ta quy định việc thực hiện công việc
					đồng bộ.
				</p>

				<p class="text-slate-900 dark:text-white mt-3 leading-8 text-2xl">Tổng kết:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<FilePath>mysql2</FilePath> là một package cực kì phổ biến trong NodeJS, nó giúp chúng ta tạo ra kết nối
							với các database sql một cách đơn giản.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<FilePath>async/await</FilePath> là một trong những lý thuyết cực kỳ quan trọng trong NodeJS, nó giúp chúng
						ta có thể điều khiển việc thực thi đồng bộ/bất đồng bộ một cách hợp lý.
					</li>
				</ul>
				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
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
		},
		data() {
			return {
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/nodejs/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/nodejs/documentation',
					},
				},
				b1: `const mysql = require('mysql2');

// Tạo kết nối đến cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'hello_nodejs',
	port: 3307
});

// Kết nối đến MySQL
connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối: ' + err.stack);
    return;
  }
  console.log('Đã kết nối với MySQL ID: ' + connection.threadId);
});
`,
				b3: `// app.js
const http = require('http');
const server = http.createServer();
`,
				b4: `const mysql = require('mysql2');

// Kết nối đến MySQL mà không chọn database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
	port: 3307
});

// Kết nối MySQL
connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối: ' + err.stack);
    return;
  }
  console.log('Đã kết nối đến MySQL');

  // Kiểm tra và tạo database nếu chưa tồn tại
  connection.query('CREATE DATABASE IF NOT EXISTS hello_nodejs', (error, results) => {
    if (error) throw error;
    console.log('Database đã tồn tại hoặc đã được tạo');

    // Chuyển sang sử dụng database hello_nodejs
    connection.changeUser({database: 'hello_nodejs'}, (err) => {
      if (err) throw err;
      console.log('Đã chuyển sang sử dụng database hello_nodejs');
    });
  });
});
`,
				b5: `const connection = require('./index'); // Kết nối đến cơ sở dữ liệu

const userModel = {
  // Thêm người dùng mới (Create)
  createUser: (name, age) => {
    const query = 'INSERT INTO users (name, age) VALUES (?, ?)';
    return new Promise((resolve, reject) => {
      connection.query(query, [name, age], (error, results) => {
        if (error) return reject(error);
        resolve(results.insertId); // Trả về ID của người dùng vừa tạo
      });
    });
  },

  // Lấy tất cả người dùng (Read)
  getAllUsers: () => {
    const query = 'SELECT * FROM users';
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) return reject(error);
        resolve(results); // Trả về danh sách người dùng
      });
    });
  },

  // Cập nhật thông tin người dùng (Update)
  updateUser: (id, name, age) => {
    const query = 'UPDATE users SET name = ?, age = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, [name, age, id], (error, results) => {
        if (error) return reject(error);
        resolve(results.affectedRows); // Trả về số hàng bị ảnh hưởng
      });
    });
  },

  // Xóa người dùng (Delete)
  deleteUser: (id) => {
    const query = 'DELETE FROM users WHERE id = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, [id], (error, results) => {
        if (error) return reject(error);
        resolve(results.affectedRows); // Trả về số hàng bị ảnh hưởng
      });
    });
  },
};

module.exports = userModel;
`,
				b6: `// database/users.js
const connection = require('./database/index');
// Truy vấn tạo bảng
const createTableQuery = "
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL
  )";

// Thực hiện truy vấn tạo bảng
connection.query(createTableQuery, (error, results) => {
  if (error) throw error;
  console.log('Bảng users đã được tạo hoặc đã tồn tại.');

  // Đóng kết nối sau khi hoàn thành
  connection.end();
});
`,
				b7: `const userModel = require('../models/userModel');

// Tạo người dùng mới
exports.createUser = async (req, res) => {
  try {
    const { name, age } = req.body;
    const userId = await userModel.createUser(name, age);
    res.status(201).json({ message: 'Người dùng đã được tạo', userId });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi tạo người dùng' });
  }
};

// Lấy danh sách người dùng
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách người dùng' });
  }
};

// Cập nhật người dùng
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    const affectedRows = await userModel.updateUser(id, name, age);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }
    res.status(200).json({ message: 'Người dùng đã được cập nhật' });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật người dùng' });
  }
};

// Xóa người dùng
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await userModel.deleteUser(id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }
    res.status(200).json({ message: 'Người dùng đã bị xóa' });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi xóa người dùng' });
  }
};

`,
				b8: `<!-- user.ejs --> 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Danh sách người dùng</title>
</head>
<body>
  <h1>Danh sách người dùng</h1>
  <ul>
    <% users.forEach(user => { %>
      <li><%= user.name %></li>
    <% }) %>
  </ul>

  <h2>Thêm người dùng mới</h2>
  <form action="/users/add" method="POST">
    <input type="text" name="name" placeholder="Tên người dùng">
    <button type="submit">Thêm</button>
  </form>
</body>
</html>
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-9' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
