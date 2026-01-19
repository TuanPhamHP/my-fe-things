<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Concepts" addOnClass="text-left" markedAs="concept" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					DTO (Data Transfer Object) là một lớp dữ liệu đơn giản, chứa các thuộc tính và phương thức để chuyển dữ liệu
					giữa các thành phần khác nhau trong
					ứng dụng.
					<br>
					Mục tiêu chính:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Chuẩn hoá output API
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Cắt phụ thuộc ORM
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Kiểm soát dữ liệu trả về
					</li>
				</ul>

				<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Từ đó chúng ta có thể kiểm soát, chuẩn hoá đầu ra của response API.
				</p>
				<PageHeading text="Response với DTO" addOnClass="text-left" markedAs="rdto" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Sử dụng DTO trong response API:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>model_validate()</b>: Validate dữ liệu trước khi trả ra.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>model_dump()</b>: Chuyển hoá ORM thành JSON.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Ngoài ra, chúng ta có thể chọn thay vì dùng <b>model_dump()</b>, chúng ta có thể dùng <b>jsonable_encoder</b>
					của fastapi để chuyển hoá
					ORM thành JSON. Nhưng cách này sẽ mất đi tính kiểm soát của DTO bao gồm contract, validation, ...
				</p>
				<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> chúng ta có thể kết hợp cả 2.
				</p>
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
			b1: `class UserDTO(BaseModel):
    id: int
    name: str
    yob: int
    posts: list[PostDTO] = []

    class Config:
        from_attributes = True`,
			b2: `from fastapi.encoders import jsonable_encoder

def response(self):
        content =  {
            "status_code": self.status_code,
            "message": self.message,
            "data": jsonable_encoder(self.data),
            }
        return JSONResponse(status_code=self.status_code, content=content)`,
			b3: `# validate trước khi trả ra.
user_dto = UserDTO.model_validate(user)
return SuccessResponse(message='Seed user success!',data={"user": user_dto.model_dump()}).response()`
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
