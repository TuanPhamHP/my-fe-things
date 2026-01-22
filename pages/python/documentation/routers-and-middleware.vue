<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Router" addOnClass="text-left" markedAs="router" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Khi ứng dụng của chúng ta trở lên lớn hơn, việc nhé tất cả 'route' vào file <b>main.py</b> có vẻ là một lựa
					chọn
					không còn hợp lý nữa. Thay vào đó, chúng ta sẽ tổ chức các 'route' theo từng module.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8"> FastAPI
					cung cấp cho chúng ta một giải pháp là <b>APIRouter</b>:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Chia API thành module
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Dễ bảo trì
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Áp dụng prefix, tag, dependency riêng
					</li>
				</ul>
				<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Khi tạo <FilePath>APIRouter</FilePath>, chúng ta nên dùng kèm theo một vài <b>karg</b> phổ biến sau:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>prefix = str</FilePath> được dùng để tạo prefix chung cho toàn bộ các route trong module, khiến
						cho bạn đỡ phải viết lại các phần lặp hoặc chia version cho api.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>dependencies = [Depends(callable)]</FilePath> thường được dùng để tái sử dụng lại các logic chung
						(ví dụ auth, check rbac ...)
					</li>
				</ul>
				<PageHeading text="Dependencies" addOnClass="text-left mt-3" markedAs="dep" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Dùng dependencies để kiểm tra các điều kiện trước khi xử lý request:
				</p>

				<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Lưu ý rằng FastAPI sử dụng <b>Starlette</b>, nên khi mapping param -> http header sẽ được tự động chuyển thành
					dạng
					kebab-case.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Tức là, a_b_c => a-b-c.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Trong trường hợp cần customs thì chúng ta có thể dùng alias của Header:
						<br>
						<b>x_key: str = Header(..., alias="x_key")</b>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Router applied dependencies:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />
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
			b1: `# user router
from fastapi import APIRouter

router = APIRouter()

@router.get("/users")
def ping():
    return {"message": "Danh sách router"}

# sau đó chúng ta gắn vào fastapi app ở main
from fastapi import FastAPI
from users.router import router as user_router

app = FastAPI()
app.include_router(user_router)
`,
			b2: `from fastapi import Request, Header, HTTPException

# Nhận toàn bộ request 
def check_x_api_key(request: Request):
    api_key = request.headers.get("X-API-KEY")
    if api_key != "fake-super-secret-key":
        raise HTTPException(status_code=400, detail="x-api-key header invalid")


# nhận trực tiếp từ header - với các này fastAPI sẽ tự động kiểm tra và truyền giá trị header vào
def check_x_key(x_key: str = Header(...)):
    if x_key != "fake-super-secret-key":
        raise HTTPException(status_code=400, detail="X-Key header invalid")
    return x_key`,
			b3: `router = APIRouter(prefix="/posts", tags=["posts"], dependencies=[Depends(check_x_api_key), Depends(check_x_key)])

# api lấy danh sách posts
@router.get("/")
def get_all(x_key = Depends(check_x_api_key),db: Session = Depends(get_db)):
    users = db.query(Post).filter().all() 
    users_dto = [] 
    for user in users:
        users_dto.append(PostDTO.model_validate(user))
    return SuccessResponse(message=f"Get list posts success! {x_key}",data={"posts": users_dto}).response()
`,
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
`,
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
