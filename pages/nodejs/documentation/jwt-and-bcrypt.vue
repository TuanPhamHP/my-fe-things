<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="JWT" addOnClass="text-left" markedAs="about-JWT" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					JWT (JSON WEB TOKEN) là một tiêu chuẩn mở (RFC 7519) để chuyển tải thông tin an toàn giữa các bên dưới dạng
					một đối tượng JSON. JWT thường được sử dụng trong việc xác thực và trao đổi thông tin giữa client và server.
				</p>
				<b class="text-slate-900 dark:text-white mt-5 leading-8">Cách hoạt động của JWT:</b>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>`Đăng Nhập`</b>: Người dùng cung cấp thông tin xác thực (như username và password).
					</li>

					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>`Xác thực`</b>: Server xác thực thông tin và tạo một JWT nếu thông tin đúng.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>`Gửi Token`</b>: Server gửi token vừa gen từ bước trên cho client.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>`Gửi lại token`</b>: Client gửi token này trong các request tiếp theo để truy cập các route bảo mật.
						Thường sẽ được gửi kèm với request-header
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>`Xác thực token`</b>: Server sẽ xác thực token để đảm bảo rằng request là hợp lệ. Bước này thường được xử
						lý ở middleware.
					</li>
				</ul>
				<PageHeading text="BCRYPT" addOnClass="text-left" markedAs="about-BCRYPT" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>`Bcrypt`</b> là một thư viện được sử dụng để mã hóa và so sánh mật khẩu. Bcrypt thực hiện mã hóa mật khẩu
					bằng cách sử dụng một thuật toán "hashing" mạnh mẽ và có khả năng tùy chỉnh độ khó.
				</p>
				<b class="text-slate-900 dark:text-white mt-5 leading-8">Cách hoạt động của Bcrypt:</b>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>`Mã hóa mật khẩu`</b>: Khi người dùng tạo tài khoản, mật khẩu của họ sẽ được mã hóa bằng bcrypt. Mật khẩu
						sau khi mã hóa sẽ không thể phục hồi về dạng ban đầu.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>`Lưu trữ`</b>:Mật khẩu đã mã hóa sẽ được lưu trong cơ sở dữ liệu.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>`Xác thực`</b>: Khi người dùng đăng nhập, mật khẩu họ nhập sẽ được mã hóa lại và so sánh với mật khẩu đã
						lưu trong cơ sở dữ liệu. Nếu khớp, xác thực thành công.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Túm lại:</b>
					<br />
					<b>- JWT</b> Dùng để xác thực và truyền thông tin giữa client và server an toàn. Nó giúp xác thực người dùng
					mà không cần lưu trữ session trên server.
					<br />
					<b>- Bcrypt</b> Dùng để mã hóa mật khẩu, giúp bảo vệ mật khẩu của người dùng trong cơ sở dữ liệu và xác thực
					người dùng khi đăng nhập.
				</p>

				<PageHeading text="Cài đặt " addOnClass="text-left mt-5" markedAs="step-1" />
				<p class="text-slate-900 dark:text-white mb-5 leading-8">
					Thêm <FilePath>authController</FilePath>, <FilePath>middleware/authenticate.js</FilePath> để xử lý xác thực
				</p>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">cài packages jwt & bcryptjs</p>
				<FakeTerminalUI :textCoppy="'npm install jsonwebtoken bcryptjs'"
					>npm install jsonwebtoken bcryptjs</FakeTerminalUI
				>
				<PageHeading text="Đăng ký người dùng" addOnClass="text-left" markedAs="about-register" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Chúng ta sẽ tiến hành thực hiện chức năng đăng ký người dùng trước.
				</p>
				<PageHeading text="1. Model " addOnClass="text-left mt-5" markedAs="step-1-1" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Tạo bảng <b>users</b> để chứa thông tin đăng ký của người dùng:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="javascript" theme="vs2015" />
				<PageHeading text="2. Controller " addOnClass="text-left mt-5" markedAs="step-1-2" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Tại controller chúng ta sẽ nhận thông tin đăng ký từ request của người dùng và xử lý mã hoá password -
					hashedPassword tại đây. Sau đó sẽ lưu hashedPassword vào DB
				</p>
				<VCodeBlock :code="b3" highlightjs lang="javascript" theme="vs2015" />
				<PageHeading text="Đăng nhập" addOnClass="text-left" markedAs="about-login" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Sau khi đã lưu được người dùng vào DB, chúng ta sẽ làm tính năng đăng nhập cho người dùng vừa đăng ký. Người
					dùng gửi lên username/password, chúng ta đối chiếu với DB và trả ra token nếu thông tin đúng.
				</p>
				<PageHeading text="1. Model " addOnClass="text-left mt-5" markedAs="step-2-1" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">Tìm kiếm người dùng thông qua username trước</p>
				<VCodeBlock :code="b22" highlightjs lang="javascript" theme="vs2015" />
				<PageHeading text="2. Controller " addOnClass="text-left mt-5" markedAs="step-2-2" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Tại controller chúng ta sẽ nhận thông tin đăng nhập từ request của người dùng, sau đó kiểm tra xem trong hệ
					thông có user nào có username tương ứng hay không, nếu có sẽ tiến hành mã hoá password của người dùng gửi lên
					và so sánh với password đang có trong DB.
				</p>
				<VCodeBlock :code="b32" highlightjs lang="javascript" theme="vs2015" />

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Làm đến đây chúng ta đã hoàn thành việc đăng ký/đăng nhập cho người dùng, như vậy sau khi đăng nhập người dùng
					sẽ luôn có một chuỗi token được trả ra từ server, để bảo mật các request thì chúng ta chỉ cần kiểm tra xem
					người dùng có gửi đúng mã token được gửi từ hệ thống hay không. Ngoài ra, các token cũng sẽ có thời hạn sử
					dụng được setup tuỳ theo hệ thống - như hệ thống ở trên thì mỗi token có life-time là 1 tiếng, sau khoảng thời
					gian này token sẽ chuyển sang trạng thái 'expired' và không sử dụng được nữa.
				</p>
				<PageHeading text="Auth Middleware" addOnClass="text-left" markedAs="about-middleware" />

				<p class="text-slate-900 dark:text-white mb-5 leading-8">
					Do việc xác thực token từ request rất quan trọng và thực hiện ở hầu hết các request từ người dùng, chúng ta
					nên viết riêng một middleware để xử lý việc này. Ở đây, chúng ta giả sử rằng người dùng sẽ bắt buộc phải gửi
					token ở phần <b>`request.headers`</b> với trường thông tin là <b>`authorization`</b>, cùng tạo middleware tại
					<FilePath>middleware/authenticate.js</FilePath>
				</p>
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mb-5 leading-8">
					Siêu đơn giản, giờ thì chỉ cần gọi đến middlware này tại bất cứ request nào cần với method
					<FilePath>use</FilePath> của express.
				</p>
				<VCodeBlock :code="b7" highlightjs lang="javascript" theme="vs2015" />
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
				b1: `myapp/
│
├── controllers/
│   └── authController.js
│
├── models/
│   └── userModel.js
│
├── middleware/
│   └── authenticate.js
.....
│
├── app.js
└── package.json
`,
				b2: `// userModel.js
// query để tạo bảng.
const createUsersTableQuery = CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

// thêm người dùng vào db
const createUser = (username, password) => {
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    return new Promise((resolve, reject) => {
      connection.query(query, [username, password], (error, results) => {
        if (error) return reject({success: false, error});
        resolve({success:true,results}); 
      });
    });
  }
`,
				b22: `// userModel.js
// Tìm kiếm người dùng trong DB
const findUserByUsername = (username, callback) => {
  const sql = 'SELECT * FROM users WHERE username = ?';
	return new Promise((resolve, reject) => {
      connection.query(query, [username], (error, results) => {
        if (error) return reject({success: false, error});
        resolve({success:true,results}); 
      });
    });
};
`,
				b3: `const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');

const SECRET_KEY = 'some-key';
// Đăng ký người dùng mới
 const register = async (req, res) => {
  const { username, password } = req.body;

  // Mã hóa mật khẩu
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ message: 'Lỗi mã hóa mật khẩu' });

		const results = await userModel.createUser(username, hashedPassword);
		if (results.success) {
			res.status(200).json({ 
				success:true, 
				message: 'Đăng ký thành công!',
				errors: null,
				data: {userId: results.insertId}
			});
		}else{
			res.status(500).json({ 
				success:false, 
				message: 'Đăng ký thất bại!',
				errors: results.error,
				data: null
			});
		}
  });
};
`,
				b32: `// Đăng nhập và cấp JWT
const login = (req, res) => {
  const { username, password } = req.body;

	userModel.findUserByUsername(username, (error, results) => {
    if (error) return res.status(500).json({ message: 'Lỗi truy vấn' });
    if (results.length === 0) return res.status(404).json({ message: 'Người dùng không tồn tại' });

    const user = results[0];

    // So sánh mật khẩu
    bcrypt.compare(password, user.password, (err, validPassword) => {
      if (err || !validPassword) return res.status(401).json({ message: 'Mật khẩu không đúng' });

      // Tạo JWT
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token });
    });
  });
};
`,
				b4: `const express = require('express');
const app = express();
const port = 3000;

// Sử dụng EJS làm template engine
app.set('view engine', 'ejs');

// middleware để lấy dữ liệu từ POST request
app.use(express.urlencoded({ extended: true }));


// Import routes
const userRoutes = require('./routes/userRoutes');

// Sử dụng router cho các route liên quan đến người dùng
app.use('/users', userRoutes);

// Lắng nghe server tại cổng 3000
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

`,
				b5: `const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-secret-key';

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"

  if (!token) return res.status(401).json({ message: 'Thiếu token' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token không hợp lệ' });

    req.user = user; // Lưu thông tin người dùng vào request
    next();
  });
};
`,
				b6: `// userModel.js
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// Lấy tất cả người dùng
exports.getAllUsers = () => {
  return users;
};

// Thêm người dùng mới
exports.addUser = (name) => {
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
};
`,
				b7: `// productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authenticate');

// thêm middleware cho routes cần kiểm tra
router.get('/',authMiddleware, productController.get);

module.exports = router;
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
				commonMethods: [
					{
						id: 1,
						name: 'send()',
						desc: 'Gửi phản hồi HTTP với nội dung body (string, object, array) đến client.',
						syntax: "res.send('Hello World!');",
					},
					{
						id: 2,
						name: 'json()',
						desc: 'Gửi phản hồi JSON đến client. Tự động thiết lập Content-Type là application/json.',
						syntax: "res.json({ message: 'Hello, World!' });",
					},
					{
						id: 3,
						name: 'status()',
						desc: 'Thiết lập mã trạng thái HTTP cho phản hồi.',
						syntax: "res.status(404).send('Not Found');",
					},
					{
						id: 4,
						name: 'sendFile()',
						desc: 'Gửi một file đến client.',
						syntax: "res.sendFile(__dirname + '/file.txt');",
					},
					{
						id: 5,
						name: 'redirect()',
						desc: 'Chuyển hướng đến một URL khác. Có thể thiết lập mã trạng thái HTTP.',
						syntax: "res.redirect('https://example.com');",
					},
					{
						id: 6,
						name: 'render()',
						desc: 'Render một view sử dụng template engine đã thiết lập (như EJS, Pug).',
						syntax: "res.render('index', { title: 'Home Page' });",
					},
					{
						id: 7,
						name: 'set()',
						desc: 'Thiết lập header HTTP cho phản hồi.',
						syntax: "res.set('Content-Type', 'text/html');",
					},
					{
						id: 8,
						name: 'cookie()',
						desc: 'Thiết lập một cookie trong phản hồi HTTP.',
						syntax: "res.cookie('username', 'John Doe', { maxAge: 900000 });",
					},
					{
						id: 9,
						name: 'clearCookie()',
						desc: 'Xóa một cookie bằng cách đặt thời gian hết hạn của nó.',
						syntax: "res.clearCookie('username');",
					},
					{
						id: 10,
						name: 'type()',
						desc: 'Thiết lập Content-Type cho phản hồi HTTP.',
						syntax: "res.type('application/json');",
					},
					{
						id: 11,
						name: 'download()',
						desc: 'Bắt đầu tải về một file. Có thể cung cấp tên file và callback.',
						syntax: "res.download('/path/to/file.zip', 'file.zip');",
					},
					{
						id: 12,
						name: 'location()',
						desc: 'Thiết lập header Location để chuyển hướng, nhưng không tự động thực hiện chuyển hướng.',
						syntax: "res.location('/new-path');",
					},
					{
						id: 13,
						name: 'end()',
						desc: 'Kết thúc phản hồi, tùy chọn gửi dữ liệu body.',
						syntax: "res.end('Response completed');",
					},
					{
						id: 14,
						name: 'format()',
						desc: 'Cho phép gửi phản hồi với các định dạng khác nhau dựa trên Accept header từ client.',
						syntax:
							"res.format({ 'text/plain': () => res.send('text response'), 'application/json': () => res.json({}) });",
					},
					{
						id: 15,
						name: 'links()',
						desc: 'Thiết lập liên kết HTTP Link cho phản hồi.',
						syntax: "res.links({ next: '/page/2', last: '/page/5' });",
					},
					{
						id: 16,
						name: 'vary()',
						desc: 'Thêm header Vary cho phản hồi, sử dụng khi muốn chỉ định các giá trị trong header cần đa dạng.',
						syntax: "res.vary('Accept-Encoding');",
					},
				],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-6' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
