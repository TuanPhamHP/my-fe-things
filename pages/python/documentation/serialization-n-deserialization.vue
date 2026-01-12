<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Concepts" addOnClass="text-left" markedAs="concept" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chúng ta cùng nói về concept của 2 khái niệm <b>Serialization</b> và <b>Deserialization</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Serialization (Tuần tự hóa)</b>: Là quá trình chuyển đổi một cấu trúc dữ liệu hoặc trạng thái của một đối
						tượng (Object) thành một định dạng có thể lưu trữ được (như File) hoặc truyền đi được (qua Network). Định
						dạng này thường là Chuỗi (String) hoặc Dữ liệu nhị phân (Bytes).
						<ul class="pl-5">
							<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content ml-[-20px]">
								<b>Mục tiêu:</b>
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-400 list-disc"
							>
								Lưu object xuống file / database
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-400 list-disc"
							>
								Truyền object qua mạng
							</li>
							<li
								class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-400 list-disc"
							>
								Cache dữ liệu
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Deserialization (Giải tuần tự hóa)</b>: Là quá trình ngược lại, chuyển đổi dữ liệu từ dạng lưu trữ/truyền
						dẫn về lại đối tượng ban đầu trong bộ nhớ RAM để tiếp tục sử dụng.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong thực tế, chúng ta có 2 cách chính để thực hiện Serialization và Deserialization trong Python:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>JSON (JavaScript Object Notation):</b> Là định dạng phổ biến nhất để trao đổi dữ liệu giữa các hệ thống
						khác nhau. Python cung cấp module <FilePath>json</FilePath> để dễ dàng chuyển đổi giữa đối tượng Python và
						chuỗi JSON.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Pickle (Định dạng riêng của Python):</b> Là module tích hợp trong Python cho phép tuần tự hóa và giải
						tuần tự hóa các đối tượng Python phức tạp hơn, bao gồm cả các đối tượng tùy chỉnh.
					</li>
				</ul>

				<PageHeading text="JSON" addOnClass="text-left" markedAs="json" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					JSON là định dạng phổ biến nhất hiện nay vì nó nhẹ, dễ đọc với con người và tương thích với hầu hết các ngôn
					ngữ lập trình. Đây cũng là định dạng nên được ưu tiên khi xử lý các tác vụ với API.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Ưu điểm:</b> Độc lập với ngôn ngữ, nhẹ, được dùng làm chuẩn cho Web API.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Hạn chế:</b> Chỉ hỗ trợ các kiểu dữ liệu cơ bản (str, int, float, bool, list, dict, None). Không hỗ trợ
						trực tiếp các đối tượng từ Class tự định nghĩa.
					</li>
				</ul>
				<PageHeading text="common methods" addOnClass="text-left" markedAs="jm" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 mb-1 leading-8">
					Python cung cấp cả một module <b>json</b> với các method hữu ích để làm việc với JSON:
				</p>
				<DocFactoryV2Table :headers="headers" :items="items" />

				<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />

				<p class="text-slate-900 dark:text-white mt-0 mb-1 leading-8">
					Mặc dù vô cùng phổ biến và dễ sử dụng nhưng JSON có một số hạn chế khi làm việc với các đối tượng phức tạp:
					<br />
					JSON <b>KHÔNG</b> serialize được:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Object class
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						datetime
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						set
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						bytes
					</li>
				</ul>
				<PageHeading text="Pickle" addOnClass="text-left" markedAs="pickle" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Khác với JSON, <b> Pickle </b> là module dành riêng cho Python. Nó có thể biến gần như mọi đối tượng Python
					(kể cả Class, Function phức tạp) thành dữ liệu nhị phân.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Ưu điểm:</b> Xử lý được các đối tượng Python phức tạp, giữ nguyên được kiểu dữ liệu đặc thù.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Hạn chế:</b> Chỉ Python mới đọc được. Nguy hiểm về bảo mật: Đừng bao giờ unpickle dữ liệu từ nguồn không
						tin tưởng vì nó có thể thực thi mã độc.
					</li>
				</ul>
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
				b1: `import pickle

	data = {
	    "name": "Alice",
	    "age": 30,
	    "skills": ["Python", "Docker"]
	}

	# Serialize
	with open("data.pkl", "wb") as f:
	    pickle.dump(data, f)

	# Deserialize
	with open("data.pkl", "rb") as f:
	    restored_data = pickle.load(f)

	print(restored_data)
	`,
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
				],
				items: [
					{
						command: 'json.dumps(obj)',
						descr: 'Chuyển đối tượng thành chuỗi JSON (S = String).',
					},
					{
						command: 'json.loads(s)',
						descr: 'Chuyển chuỗi JSON về lại đối tượng.',
					},
					{
						command: 'json.dump(obj, file)',
						descr: 'Ghi đối tượng vào file dưới dạng JSON.',
					},
					{
						command: 'json.load(file)',
						descr: 'Đọc file JSON và chuyển về đối tượng.',
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
