<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Concepts" addOnClass="text-left" markedAs="concept" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Ở bài này, chúng ta sẽ tìm hiểu kỹ hơn về cách thiết lập và cách hoạt động của quan hệ giữa các bảng trong cơ
					sở dữ liệu với SQLAlchemy.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Các mối quan hệ chính cần quan tâm:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>One-to-One:</b> Một mối quan hệ giữa hai bảng, trong đó mỗi bản ghi trong bảng này chỉ liên kết với một
						bản ghi trong bảng khác.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>One-to-Many:</b> Một mối quan hệ giữa hai bảng, trong đó mỗi bản ghi trong bảng này liên kết với nhiều
						bản ghi trong bảng khác.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Many-to-Many:</b> Một mối quan hệ giữa hai bảng, trong đó mỗi bản ghi trong bảng này liên kết với nhiều
						bản ghi trong bảng khác.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Để thực hiện thiết lập quan hệ của các bảng thì <FilePath>SQLAlchemy.orm</FilePath> sẽ sử dụng các hàm:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>One-to-One:</b> Một mối quan hệ giữa hai bảng, trong đó mỗi bản ghi trong bảng này chỉ liên kết với một
						bản ghi trong bảng khác.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>One-to-Many:</b> Một mối quan hệ giữa hai bảng, trong đó mỗi bản ghi trong bảng này liên kết với nhiều
						bản ghi trong bảng khác.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Many-to-Many:</b> Một mối quan hệ giữa hai bảng, trong đó mỗi bản ghi trong bảng này liên kết với nhiều
						bản ghi trong bảng khác.
					</li>
				</ul>
				<PageHeading text="One-to-Many" addOnClass="text-left mt-3" markedAs="one-to-many" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Đây là loại quan hệ phổ biến nhất. Một bản ghi ở bảng A có thể liên kết với nhiều bản ghi ở bảng B, nhưng một
					bản ghi ở bảng B chỉ thuộc về duy nhất một bản ghi ở bảng A.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Vị trí Khóa ngoại (ForeignKey)</b>: Luôn nằm ở bảng "Nhiều" (phía con).
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>relationship("RelatedClass", back_populates="property", ...)</FilePath> là hàm chính để thiết lập
						mối
						quan hệ giữa hai bảng. Hàm này nhận hai tham
						số:
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
								<b>"RelatedClass"</b> là chuỗi khai báo đối tượng liên quan.
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
								<b>back_populates</b> là tên của thuộc tính trong bảng con (bảng B) để liên kết ngược lại
							</li>
						</ul>
					</li>
				</ul>
				<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>ForeignKey("users.id")</FilePath>Ràng buộc ở cấp độ Database, đảm bảo không có Post nào "mồ côi"
						tác giả.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>back_populates()</FilePath>Giúp đồng bộ hóa hai chiều. Nếu bạn thêm một Post vào <FilePath>
							author.posts</FilePath>
						thì <FilePath>author</FilePath> của Post đó sẽ được cập nhật tự động.
					</li>
				</ul>
				<PageHeading text="One-to-One" addOnClass="text-left mt-3" markedAs="one-to-one" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Một bản ghi ở bảng A chỉ liên kết với duy nhất một bản ghi ở bảng B. Thực chất đây là một biến thể của quan hệ
					1:N nhưng bị giới hạn số lượng.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Vị trí Khóa ngoại (ForeignKey)</b>: Nên nằm ở bảng yếu hơn hoặc bảng ít thay đổi hơn trong 2 bảng.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Sử dụng tham số <FilePath>uselist=False</FilePath> ở phía còn lại.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Quan hệ này thường dùng để tách các thông tin nhạy cảm hoặc ít khi sử dụng sang một bảng riêng nhằm tối ưu
						tốc độ truy vấn cho bảng chính.
					</li>
				</ul>
				<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
				<PageHeading text="Many-to-Many" addOnClass="text-left mt-3" markedAs="many-to-many" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Nhiều bản ghi ở bảng A có thể liên kết với nhiều bản ghi ở bảng B.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Nên sử dụng <b>bảng trung gian</b> để lưu trữ mối quan hệ giữa hai bảng.
					</li>
				</ul>
				<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>secondary</FilePath>Tham số quan trọng nhất để SQLAlchemy biết dữ liệu liên kết nằm ở đâu.
					</li>
				</ul>
				<PageHeading text="Loading data" addOnClass="text-left mt-3" markedAs="loading-data" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Khi truy vấn các bảng có quan hệ, SQLAlchemy thường sẽ sử dụng <b>Lazy loading</b> để
					trả ra các dữ liệu liên quan. Tuy nhiên, cách này sẽ gây ra <b>N + 1 query</b>.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Ví dụ: khi chúng ta cần lấy thông tin của một User và tất cả các Post của User đó.
				</p>
				<VCodeBlock :code="b4" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> Nếu bạn lặp qua 100 User để in Post, nó sẽ tốn 101 câu lệnh SQL, đây chính là N + 1 query.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Để xử lý vấn đề này, chúng ta có thể sử dụng <b>Eager loading</b>. Trong python có thể sử dụng 2 kỹ thuật
					chính là:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Joined Loading (joinedload)</b>:
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
								Cách chạy: Sử dụng JOIN ngay trong câu lệnh SQL đầu tiên.
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
								Usecase: Tốt nhất cho quan hệ 1:1 hoặc N:1 (phía lấy đối tượng cha).
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Select IN Loading (selectinload)</b>:
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
								Cách chạy: Thực hiện 2 câu lệnh SQL riêng biệt. Câu thứ 2 sử dụng IN (id1, id2, ...) để lấy tất cả dữ
								liệu liên quan cùng lúc.
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
								Usecase: Tốt nhất cho quan hệ 1:N hoặc M:M (phía lấy danh sách con).
							</li>
						</ul>
					</li>
				</ul>
				<VCodeBlock :code="b5" highlightjs lang="python" theme="atom-one-dark" />
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
			b1: `from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship,

class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(50))

    # relationship: 'posts' là một danh sách (list) các đối tượng Post
    posts: Mapped[list["Post"]] = relationship(back_populates="author")

class Post(Base):
    __tablename__ = "posts"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(100))
    
    # ForeignKey đặt ở phía 'Nhiều'
    author_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    
    # relationship: 'author' là một đối tượng Author đơn lẻ
    author: Mapped["Author"] = relationship(back_populates="posts")`,
			b2: `class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(30))

    # uselist=False biến quan hệ này từ danh sách thành 1 đối tượng duy nhất
    profile: Mapped["Profile"] = relationship(back_populates="user", uselist=False)

class Profile(Base):
    __tablename__ = "profiles"
    id: Mapped[int] = mapped_column(primary_key=True)
    bio: Mapped[str] = mapped_column(String(255))
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))

    user: Mapped["User"] = relationship(back_populates="profile")`,
			b3: `from sqlalchemy import Table, Column

# Bảng trung gian (không cần định nghĩa class nếu không chứa dữ liệu bổ sung)
post_tag_association = Table(
    "post_tag_link",
    Base.metadata,
    Column("post_id", ForeignKey("posts.id"), primary_key=True),
    Column("tag_id", ForeignKey("tags.id"), primary_key=True),
)

class Post(Base):
    __tablename__ = "posts"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(100))

    # secondary trỏ đến bảng trung gian
    tags: Mapped[list["Tag"]] = relationship(
        secondary=post_tag_association, back_populates="posts"
    )

class Tag(Base):
    __tablename__ = "tags"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(20))

    posts: Mapped[list["Post"]] = relationship(
        secondary=post_tag_association, back_populates="tags"
    )`,
			b4: `@app.get("/lazy")
def home(db: Session = Depends(get_db)):
    users = db.query(User).filter().all()

    user_dto = []
    for user in users:
        user_dto.append(UserDTO.model_validate(user))

    return user_dto`,
			b5: `from sqlalchemy.orm import Session, selectinload, joinedload
@app.get("/eager-selectinload")
def home(db: Session = Depends(get_db)):
    users = (
        db.query(User)
        .options(selectinload(User.posts))
        .all()
    )

    user_dto = []
    for user in users:
        user_dto.append(UserDTO.model_validate(user))

    return user_dto

@app.get("/eager-joinedload")
def home(db: Session = Depends(get_db)):
    users = (
        db.query(User)
        .options(joinedload(User.posts))
        .all()
    )

    user_dto = []
    for user in users:
        user_dto.append(UserDTO.model_validate(user))

    return user_dto
`

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
