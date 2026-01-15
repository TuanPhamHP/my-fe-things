<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Concepts" addOnClass="text-left" markedAs="concept" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Tiếp theo, chúng ta sẽ tìm hiểu về cách kết nối database sử dụng FastAPI và ORM.
					<br />

				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Cấu trúc một ứng dụng FastAPI có Database:</b>
					<br>
					Để kết nối Database, chúng ta cần 4 thành phần chính:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Engine:</b> kết nối Python với file/server Database.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Model:</b> Bản thiết kế (Class) đại diện cho bảng trong Database.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Session:</b> Phiên làm việc (giống như một giao dịch - transaction).
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Dependency Injection:</b> Cơ chế để cấp phát Session cho mỗi Request.
					</li>
				</ul>
				<PageHeading text="ORM" addOnClass="text-left mt-3" markedAs="orm" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>ORM:</b> (Object-Relational Mapping) là kỹ thuật cho phép chúng ta thao tác với Database bằng ngôn ngữ lập
					trình (Object) thay vì viết các câu lệnh SQL thuần túy.
					Về cơ bản có thể hiểu đây là một kỹ thuật ánh xạ (mapping) giữa các bảng trong Database và các class trong
					code.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Table (MySQL)</b> ↔ <b>Class (Python)</b>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Row</b> ↔ <b>Object</b>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Column</b> ↔ <b>Attribute</b>
					</li>
				</ul>
				<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Cấu trúc dự án của chúng ta:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
				<PageHeading text="Connect DB" addOnClass="text-left mt-3" markedAs="cdb" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Sử dụng <b>SQLAlchemy</b> kết nối Database.
				</p>
				<PageHeading text="1 - Khai báo cấu hình kết nối Database" addOnClass="text-left mt-3" markedAs="s1" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Khai báo các thông tin kết nối Database, lưu ý rằng chúng ta sẽ dùng <b>SQLAlchemy</b> kết nối Database.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Base</b>: là một class dùng để tạo, ánh xạ các class Python tương ứng với các bảng trong cơ sở dữ liệu,
						giúp chúng ta định nghĩa cấu trúc bảng.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>create_all()</b>: là phương thức có tác dụng tự động tạo tất cả các bảng trong cơ sở dữ liệu dựa trên các
						định nghĩa model Python đã được khai báo trong ứng dụng
					</li>
				</ul>
				<PageHeading text="2 - Triển khai" addOnClass="text-left mt-3" markedAs="s2" :lvl="2" />
				<VCodeBlock :code="b4" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Và như thế là chúng ta đã kết nối thành công với mysql (❁´◡`❁).
				</p>
				<PageHeading text="3 - Tạo Table đầu tiên" addOnClass="text-left mt-3" markedAs="s3" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chúng ta sẽ dùng ORM để tạo table đầu tiên:
				</p>
				<VCodeBlock :code="b5" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Các Rules thường dùng khi tạo table:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>primary_key=True</b>: Khóa chính.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>nullable=False</b>: Trường bắt buộc (NOT NULL).
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>unique=True</b>: Giá trị duy nhất.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>index=True</b>: Tạo index cho trường.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>default=...</b>: Giá trị mặc định.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Sau đó import <FilePath>user.py</FilePath> vào <FilePath>main.py</FilePath> là bảng sẽ được tạo.
					<br>
					<b>Lưu ý:</b> trong file <FilePath>main.py</FilePath> chúng ta dùng <FilePath>create_all()</FilePath> để
					tạo các bảng trong Database do ở đây chỉ mang tính giới thiệu sơ bộ, ở bài tiếp theo chúng ta sẽ học cách viết
					migration với <b>alembic</b>.
				</p>
				<PageHeading text="4 - Tạo record đầu tiên" addOnClass="text-left mt-3" markedAs="s4" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chúng ta sẽ dùng ORM để tạo bản ghi đầu tiên:
				</p>
				<VCodeBlock :code="b6" highlightjs lang="python" theme="atom-one-dark" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Depends</b>: Trong FastAPI, Depends là một hàm phụ trợ (dependency) được sử dụng để khai báo các phụ
						thuộc (dependencies) của một endpoint. Trong trường hợp này, chúng ta dùng Depends để khai báo rằng
						endpoint này phụ thuộc vào hàm <FilePath>get_db</FilePath>(chính là hàm tạo session) để lấy một session.
					</li>
				</ul>
				<DocFactoryV2Table :headers="headers" :items="items" />
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
import { apiResponde } from 'models';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import VCodeBlock from '@wdns/vue-code-block';
import base from '../../../services/documentations';
import { FilePath } from '../../../.nuxt/components';
export default {
	components: {
		PageMarkBook,
		PageHeading,
		FakeTerminalUI,
		DocNextPage,
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		VCodeBlock,
		LessonSum,
	},
	data() {
		return {
			lessonSum: [
				`<b>Serialization</b> là quá trình chuyển đổi đối tượng thành định dạng lưu trữ hoặc truyền đi (như JSON, Pickle). <br />`,
				`<b>Deserialization</b> là quá trình ngược lại, chuyển đổi dữ liệu lưu trữ/truyền dẫn về lại đối tượng ban đầu. <br />`,
				`<b>JSON</b> là định dạng phổ biến, nhẹ, dễ đọc và tương thích với nhiều ngôn ngữ. Tuy nhiên chỉ hỗ trợ kiểu dữ liệu cơ bản. <br />`,
				`<b>Pickle</b> là module riêng của Python, có thể serialize hầu hết các đối tượng Python phức tạp. Tuy nhiên chỉ Python mới đọc được và có nguy cơ bảo mật.`,
			],
			pagePagination: {
				next: {
					title: 'HTML Styles',
					link: '/python/documentation/ep-2',
				},
				prev: {
					title: 'Trở về danh sách Doc',
					link: '/python/documentation',
				},
			},
			b1: `# Raw SQL
SELECT * FROM users WHERE id = 1
# ORM
user = db.query(User).filter(User.id == 1).first()
`,
			b2: `app/
├── main.py                 # Bootstrap FastAPI
│
├── config/
│		└── database.py             # SQLAlchemy session
│
└── core/                   # Application core
    ├── models/             # ORM (Model)
    │   └── user.py
    │
    ├── schemas/            # DTO / View
    │   └── user.py
    │
    ├── services/           # Business logic
    │   └── user_service.py
    │
    ├── controllers/        # HTTP handling
    │   └── user_controller.py
    │
    └── routers/            # Routing & middleware
        └── user_router.py
`,
			b3: `# config/database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DB_USERNAME="root"
DB_PASSWORD="root"
DB_HOST="localhost"
DB_PORT="3306"
DB_NAME="fastapi_demo"

DATABASE_URL = f"mysql+pymysql://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_engine(
    DATABASE_URL,
    echo=True,        
    pool_pre_ping=True
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()
`,
			b4: `# main.py
from fastapi import FastAPI
from app.config.database import Base, engine, SessionLocal
app = FastAPI()

# hàm dùng để tạo session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

Base.metadata.create_all(bind=engine)`,
			b5: `# user.py
from sqlalchemy import Column, Integer, String
from sqlalchemy.types import Enum as SqlEnum
from app.config.database import Base

class UserStatus(Enum):
    ACTIVE = 'active'
    BANNED = 'banned'
    
class User(Base):
    __tablename__ = "users"
		
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    name = Column(String(255))
    is_active = Column(SqlEnum(UserStatus), nullable = False)`,
			b6: `from sqlalchemy.orm import Session

@app.get('/seed')
def seed_user(db: Session = Depends(get_db)):
    user = User(name='Tuấn', email='tuanp@gmail.com')
    db.add(user)
    db.commit() # commit để lưu vào database
    db.refresh(user) # refresh để lấy lại user từ database
    return user`,
			headers: [
				{
					id: 1,
					name: 'Hàm',
					key: 'command',
				},
				{
					id: 2,
					name: 'Mục đích',
					key: 'descr',
				},
				{
					id: 3,
					name: 'Mô tả dùng khi nào',
					key: 'usecase',
				},
				{
					id: 4,
					name: 'Ví dụ',
					key: 'example',
				},
				{
					id: 5,
					name: 'Cần commit',
					key: 'commit',
				},
			],
			items: [
				{
					command: 'query()',
					descr: 'Lấy ra một query object để thực hiện các thao tác CRUD.',
					usecase: 'Dùng khi cần thực hiện các thao tác CRUD.',
					example: 'db.query(User).filter()',
					commit: '—',
				},
				{
					command: 'add()',
					descr: 'Thêm một ORM object vào session, chưa ghi xuống database.',
					usecase: 'Dùng khi tạo mới một bản ghi ORM trước khi commit.',
					example: 'db.add(user)',
					commit: '✔️',
				},
				{
					command: 'add_all()',
					descr: 'Thêm nhiều object vào session cùng lúc.',
					usecase: 'Dùng khi tạo nhiều bản ghi liên quan trong cùng một transaction.',
					example: 'db.add_all([user1, user2])',
					commit: '✔️',
				},
				{
					command: 'commit()',
					descr: 'Ghi toàn bộ thay đổi trong session xuống database và kết thúc transaction.',
					usecase: 'Dùng sau khi add/update/delete để lưu thay đổi.',
					example: 'await db.commit()',
					commit: '—',
				},
				{
					command: 'rollback()',
					descr: 'Huỷ transaction hiện tại, hoàn tác các thay đổi chưa commit.',
					usecase: 'Dùng khi xảy ra exception trong quá trình xử lý DB.',
					example: 'await db.rollback()',
					commit: '—',
				},
				{
					command: 'refresh()',
					descr: 'Đồng bộ lại object từ database (lấy id, default value, trigger).',
					usecase: 'Dùng sau commit khi cần lấy dữ liệu DB sinh ra.',
					example: 'await db.refresh(user)',
					commit: '✔️ (trước đó)',
				},
				{
					command: 'delete()',
					descr: 'Đánh dấu object để xoá khỏi database.',
					usecase: 'Dùng khi cần xoá một bản ghi ORM đã được load.',
					example: 'await db.delete(user)',
					commit: '✔️',
				},
				{
					command: 'execute()',
					descr: 'Thực thi câu lệnh SQL hoặc SQLAlchemy statement.',
					usecase: 'Dùng cho truy vấn SELECT, UPDATE, DELETE bằng statement.',
					example: 'result = await db.execute(select(User))',
					commit: '❌',
				},
				{
					command: 'scalars()',
					descr: 'Lấy danh sách ORM object từ result, loại bỏ tuple.',
					usecase: 'Dùng khi SELECT trả về ORM model.',
					example: 'result.scalars().all()',
					commit: '❌',
				},
				{
					command: 'scalar_one()',
					descr: 'Lấy đúng một bản ghi, lỗi nếu không có hoặc có nhiều hơn một.',
					usecase: 'Dùng khi chắc chắn chỉ có đúng một kết quả.',
					example: 'result.scalar_one()',
					commit: '❌',
				},
				{
					command: 'scalar_one_or_none()',
					descr: 'Lấy một bản ghi, trả về null nếu không tồn tại.',
					usecase: 'Dùng khi tìm theo ID hoặc unique field.',
					example: 'result.scalar_one_or_none()',
					commit: '❌',
				},
				{
					command: 'flush()',
					descr: 'Đẩy SQL xuống database nhưng chưa commit, có thể lấy id ngay.',
					usecase: 'Dùng khi cần id để insert bảng khác trong cùng transaction.',
					example: 'await db.flush()',
					commit: '❌',
				},
				{
					command: 'expire()',
					descr: 'Đánh dấu object là stale, lần truy cập sau sẽ query DB lại.',
					usecase: 'Dùng khi muốn buộc reload dữ liệu từ DB.',
					example: 'db.expire(user)',
					commit: '❌',
				},
				{
					command: 'expire_all()',
					descr: 'Đánh dấu toàn bộ object trong session là stale.',
					usecase: 'Dùng khi cần làm mới toàn bộ dữ liệu trong session.',
					example: 'db.expire_all()',
					commit: '❌',
				},
				{
					command: 'merge()',
					descr: 'Gắn object detached vào session và đồng bộ lại dữ liệu.',
					usecase: 'Dùng khi làm việc với object ngoài session (detached).',
					example: 'await db.merge(user)',
					commit: '✔️',
				},
				{
					command: 'begin()',
					descr: 'Mở transaction context, tự động commit hoặc rollback.',
					usecase: 'Dùng khi xử lý nhiều thao tác DB trong một transaction.',
					example: 'async with db.begin(): db.add(user)',
					commit: 'Auto',
				},
				{
					command: 'begin_nested()',
					descr: 'Tạo savepoint cho transaction lồng nhau.',
					usecase: 'Dùng khi cần rollback một phần trong transaction lớn.',
					example: 'async with db.begin_nested(): ...',
					commit: 'Auto',
				},
			],
		};
	},
	mounted() {
		this.getPagination();
	},
	methods: {
		getPagination() {
			const currentDocId = String(this.$route.path).split('/').pop() || '';

			this.$api.documentations.getPagination({ appIds: 'python', currentDocId }).then((res: apiResponde) => {
				this.pagePagination = res?.data?.pagination || [];
			});
		},
	},
};
</script>
