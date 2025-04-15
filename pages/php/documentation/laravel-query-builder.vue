<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Query builder" addOnClass="text-left mt-3" markedAs="eloquent-methods" />
				<p class="text-slate-900 dark:text-white my-3">
					Query Builder (QB) là một <b>API</b> trong Laravel giúp bạn xây dựng các câu SQL mà không cần viết raw SQL.
					<br />
					Một số các methods phổ biến:
				</p>

				<DocumentTable :operators="commonMethods" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					<b>Lưu ý:</b> <b>Eloquent methods</b> KHÔNG PHẢI <b>QUERY BUILDER</b> đây là 2 khái niệm thường xuyên bị nhầm
					lẫn do tên các method khá tương đồng nhau, chúng ta có thể so sấnh nhanh như sau:
				</p>
				<ComparisingTable :labels="['Tính năng', 'Query Builder', 'Eloquent']" :operators="cpre" />

				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Các bạn có thể tìm hiểu thêm về các methods của Query Builder tại
					<b>
						<a
							href="https://laravel.com/docs/11.x/queries#main-content"
							target="_blank"
							rel="noreferrer"
							class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
						>
							đây.
						</a>
					</b>
					Tiếp theo chúng mình cùng đến với Controller nha.
				</p>

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
	import { apiResponde } from '@/models';
	import DocNextPage from '@/components/DocNextPage.vue';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import VCodeBlock from '@wdns/vue-code-block';
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
		},
		data() {
			return {
				commonMethods: [
					{
						id: 4,
						name: 'get()',
						desc: 'Lấy tất cả kết quả',
						syntax: `DB::table('users')->get();`,
					},
					{
						id: 2,
						name: 'where()',
						desc: 'Thêm điều kiện WHERE vào câu query',
						syntax: `DB::table('users')->where('age', '>', 25)->get();`,
					},
					{
						id: 13,
						name: 'whereIn()',
						desc: 'Thêm điều kiện WHERE với mệnh đề IN, tìm các bản ghi có giá trị thuộc danh sách cho trước.',
						syntax: `DB::table('users')->whereIn('id', [1, 2, 3])->get();`,
					},
					{
						id: 11,
						name: 'find()',
						desc: 'Tìm và trả về một bản ghi theo khóa chính (id). Nếu không tìm thấy, trả về null.',
						syntax: `DB::table('users')->find(1);`,
					},
					{
						id: 12,
						name: 'findOrFail()',
						desc: 'Tìm và trả về một bản ghi theo khóa chính (id). Nếu không tìm thấy, trả về lỗi 404.',
						syntax: `DB::table('users')->findOrFail(1);`,
					},
					{
						id: 1,
						name: 'save()',
						desc: 'Lưu bản ghi hiện tại vào cơ sở dữ liệu, có thể là bản ghi mới hoặc cập nhật bản ghi hiện có.',
						syntax: `
            $user = new User(); </br>
            $user->name = 'Tuấn';</br>
            $user->email = 'tuanpham@example.com';</br>
            $user->save();
        `,
					},

					{
						id: 3,
						name: 'first()',
						desc: 'Lấy bản ghi đầu tiên từ kết quả',
						syntax: `DB::table('users')->where('age', '>', 25)->first();`,
					},

					{
						id: 5,
						name: 'insert()',
						desc: 'Thêm bản ghi mới vào bảng',
						syntax: `DB::table('users')->insert(['name' => 'John', 'email' => 'john@example.com']);`,
					},
					{
						id: 6,
						name: 'update()',
						desc: 'Cập nhật các bản ghi',
						syntax: `DB::table('users')->where('id', 1)->update(['name' => 'Jane']);`,
					},
					{
						id: 7,
						name: 'delete()',
						desc: 'Xóa bản ghi',
						syntax: `DB::table('users')->where('id', 1)->delete();`,
					},
					{
						id: 8,
						name: 'orderBy()',
						desc: 'Sắp xếp kết quả theo thứ tự tăng/giảm dần',
						syntax: `DB::table('users')->orderBy('name', 'asc')->get();`,
					},
					{
						id: 9,
						name: 'count()',
						desc: 'Đếm số lượng bản ghi',
						syntax: `DB::table('users')->count();`,
					},
					{
						id: 10,
						name: 'exists()',
						desc: 'Kiểm tra xem có bản ghi nào tồn tại với điều kiện cho trước',
						syntax: `DB::table('users')->where('email', 'john@example.com')->exists();`,
					},
				],
				cpre: [
					{
						id: 0,
						feature: 'Viết SQL dễ',
						first: '✅',
						second: '✅',
					},
					{
						id: 1,
						feature: 'Trả về model object (User, Cake...)',
						first: '❌',
						second: '✅',
					},
					{
						id: 2,
						feature: 'Có thể gọi quan hệ (->category)',
						first: '❌',
						second: '✅',
					},
					{
						id: 3,
						feature: 'Hỗ trợ Accessor/Mutator',
						first: '❌',
						second: '✅',
					},
					{
						id: 4,
						feature: 'Có timestamps, softDeletes',
						first: '❌',
						second: '✅',
					},
					{
						id: 5,
						feature: 'Tốc độ truy vấn thô',
						first: '✅ nhanh hơn',
						second: '❌ chậm hơn 1 chút',
					},
				],
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/html-css-js-basic/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/html-css-js-basic/documentation',
					},
				},
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-20' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
