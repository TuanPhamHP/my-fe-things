<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Authentication" addOnClass="text-left" markedAs="authentication" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Authentication (Xác thực)</b> là quá trình xác minh danh tính của người dùng hoặc hệ thống trước khi cho
					phép truy cập vào tài nguyên hoặc dịch vụ. Mục đích chính của authentication là đảm bảo rằng chỉ những người
					dùng hợp lệ mới có thể truy cập vào các tài nguyên bảo vệ.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8">
						<span> Các phương pháp Authentication phổ biến:</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>Session-based</FilePath>: Máy chủ lưu trạng thái (Session ID) và gửi Cookie (chứa Session ID) về
							trình duyệt</span
						>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> ✔️: Dễ quản lý quyền, dễ thu hồi phiên.</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span> ❌: Yêu cầu bộ nhớ máy chủ (Server-side state), khó mở rộng (Scaling).</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span>
									Ví dụ: Ứng dụng không cần mở API cho mobile/app ngoài, User login và tương tác chủ yếu qua trình
									duyệt.</span
								>
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>Token-based</FilePath>: Máy chủ tạo Token (thường là JWT) và gửi về client. Client gửi Token này
							trong mỗi Request (Header Authorization).</span
						>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span>
									✔️: Stateless (Không trạng thái, dễ mở rộng), hoạt động tốt trên các nền tảng (Web/Mobile).</span
								>
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span>
									❌: Khó thu hồi Token đã cấp. Cần xử lý các bài toán quan trọng như
									<b>black-list, refresh...</b></span
								>
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span>
									Ví dụ: Ứng dụng cần mở API cho các hệ thống khác (điển hình của Microservices, API Gateway). Mong muốn
									thiết kế stateless backend.</span
								>
							</li>
						</ul>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trong phạm vi bài học này chúng ta sẽ tập trung vào việc xử lý Authentication với kỹ thuật Token-based (JWT).
				</p>
				<PageHeading text="JSON Web Tokens & Bycrypt" addOnClass="text-left mt-5" markedAs="jwt-bycrypt" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Để triển khai Authentication bằng Token-based trong Node.js, chúng ta thường sử dụng hai thư viện phổ biến:
					<b>jsonwebtoken</b> để tạo và xác minh JSON Web Tokens (JWT), và <b>bcrypt</b> để băm (hash) mật khẩu người
					dùng trước khi lưu trữ vào cơ sở dữ liệu.
				</p>
				<PageHeading text="Bycrypt" addOnClass="text-left mt-5" markedAs="bycrypt" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Bycrypt là một thư viện mã hóa mật khẩu mạnh mẽ, giúp bảo vệ mật khẩu người dùng bằng cách băm chúng trước khi
					lưu trữ vào cơ sở dữ liệu. Băm là quá trình chuyển đổi mật khẩu thành một chuỗi ký tự không thể đảo ngược. Để
					hash được mật khẩu với Bycrypt, chúng ta cần có một <b>"salt"</b> - một chuỗi ngẫu nhiên được thêm vào mật
					khẩu trước khi băm để tăng cường bảo mật.
				</p>
				<FakeTerminalUI :textCoppy="'npm i bcryptjs'">npm i bcryptjs</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Sau khi cài đặt, chúng ta có thể sử dụng Bycrypt để băm mật khẩu và so sánh mật khẩu khi người dùng đăng nhập:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>bcrypt.hash()</FilePath>: là phương thức hash-băm chuỗi password của chúng ta thành chuỗi mới
							được mã hoá. Chuỗi sau khi hash có tính chất không thể đảo ngược, tuỳ vào <b>saltCount</b> mà độ phức tạp
							của chuỗi sau hash sẽ khác nhau. Lưu ý rằng khi hash thì bản thân salt được thêm ngẫu nhiên vào chuỗi, nên
							mỗi lần hash cùng một chuỗi password sẽ cho ra kết quả khác nhau. Đồng thời salt cũng được lưu trong chuỗi
							hash để có thể sử dụng khi so sánh.
						</span>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Tổng quan: <b>bcrypt.hash(password, saltCount)</b> = hashedPassword;
							</li>
						</ul>
					</li>
				</ul>
				<PageHeading text="JWT" addOnClass="text-left mt-5" markedAs="jwt" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>JWT - JSon Web Token</b> là một chuẩn mở (RFC 7519) dùng để truyền thông tin an toàn giữa các bên dưới dạng
					đối tượng JSON. JWT thường được sử dụng trong các hệ thống xác thực và ủy quyền (authentication and
					authorization).
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Cấu trúc JWT: Gồm 3 phần, cách nhau bởi dấu chấm: Header.Payload.Signature. </span>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<b>Header</b>: Loại Token (JWT) và thuật toán băm (ví dụ: HS256).
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<b>Payload</b>: Chứa các thông tin người dùng (User ID, vai trò) và các claims (ví dụ: thời gian hết hạn
								exp).
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<b>Signature</b>: Dùng secret key trên server để ký. Đảm bảo tính toàn vẹn (Integrity).
							</li>
						</ul>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Cài đặt thư viện <b>jsonwebtoken</b>:</p>
				<FakeTerminalUI :textCoppy="'npm i jsonwebtoken'">npm i jsonwebtoken</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Tạo một jwt trong Node.js:</p>
				<VCodeBlock :code="b3" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Sau khi token được trả về, client sẽ lưu trữ token này (thường là trong các storage) và gửi kèm trong
					<b>header Authorization</b> của các request tiếp theo để truy cập vào các tài nguyên bảo vệ trên server.
					Server sẽ xác minh token này để đảm bảo tính hợp lệ và quyền truy cập.
				</p>
				<VCodeBlock :code="b4" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="Authorization" addOnClass="text-left mt-5" markedAs="authorization" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Authorization (Phân quyền)</b> là quá trình xác định quyền truy cập của người dùng hoặc hệ thống sau khi đã
					được xác thực (authentication). Mục đích của authorization là đảm bảo rằng người dùng chỉ có thể truy cập vào
					các tài nguyên và thực hiện các hành động mà họ được phép dựa trên vai trò cụ thể như <b>admin, user ...</b>
					<br />
					<b>Authorization</b> thường được viết thành middleware và chain sau <b>Authentication middleware</b> để kiểm
					tra quyền truy cập của người dùng:
				</p>
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="atom-one-dark" />
				<LessonSum :sumData="lessonSum" />
				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import LessonSum from '@/components/Documentation/LessonSum.vue';
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
			LessonSum,
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
				lessonSum: [
					`Authentication là quá trình xác minh danh tính người dùng, trong khi Authorization xác định quyền truy cập của họ.`,
					`Bcrypt là thư viện mã hóa mật khẩu mạnh mẽ, giúp bảo vệ mật khẩu người dùng bằng cách băm chúng trước khi lưu trữ.`,
					`JWT (JSON Web Token) là chuẩn mở dùng để truyền thông tin an toàn giữa các bên dưới dạng đối tượng JSON.`,
					`Trong Node.js, jsonwebtoken được sử dụng để tạo và xác minh JWT, trong khi bcrypt được sử dụng để băm mật khẩu.`,
					`Middleware authenticateToken xác minh JWT từ header Authorization, trong khi authorizeRole kiểm tra quyền truy cập dựa trên vai trò người dùng.`,
				],
				b1: `import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { email, password, role } = req.body;

  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: "Email đã tồn tại" });

  const hashed = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
		email,
		password: hashed,
		role: role || "user",
	});

  res.json({ message: "Đăng ký thành công", user: newUser });
};
`,
				b2: `export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.find({ email });
  if (!user) return res.status(400).json({ message: "Sai email hoặc mật khẩu" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Sai email hoặc mật khẩu" });

  const token = generateToken({ id: user.id, role: user.role });

  res.json({ message: "Đăng nhập thành công", token });
};
`,
				b3: `import jwt from 'jsonwebtoken';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET;
const payload = { userId: user.id, role: user.role };
const token = jwt.sign(payload, JWT_SECRET, { 
  expiresIn: '1h' 
});
`,
				b4: `import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // Kiểm tra xem có Token dạng "Bearer Token" không
  const token = authHeader && authHeader.split(' ')[1]; 

  if (token == null) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden (Token hết hạn/không hợp lệ)

    // Lưu thông tin người dùng (Payload) vào Request để sử dụng ở các bước tiếp theo
    req.user = user; 
    next();
  });
};`,
				b5: `export const authorizeRole = (requiredRole) => {
  return (req, res, next) => {
    // req.user đã được thêm vào từ authenticateToken middleware
    if (req.user.role !== requiredRole) {
      // 403 Forbidden: Cấm truy cập
      return res.status(403).json({ message: 'Bạn không có quyền truy cập tính năng này.' }); 
    }
    next();
  };
};`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-13' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
