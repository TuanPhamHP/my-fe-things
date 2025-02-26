<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data max-w-full">
				<PageHeading text="Đề bài" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Tạo form đăng ký thông tin</p>

				<div class="px-3 py-3 bg-neutral-200 rounded-xl">
					<div class="form-container">
						<h1 class="font-bold text-xl">Form Đăng Ký</h1>
						<form action="/submit" method="POST">
							<label class="font-bold" for="name">Họ tên:</label>
							<input type="text" id="name" name="name" placeholder="Họ và tên" required />

							<label class="font-bold" for="email">Email:</label>
							<input type="email" id="email" name="email" placeholder="Email đăng ký" required />

							<div class="radio-group">
								<label class="font-bold">Giới tính:</label>
								<div class="flex items-baseline">
									<input type="radio" id="male" name="gender" value="male" />
									<label for="male">Nam</label>
								</div>

								<div class="flex items-baseline">
									<input type="radio" id="female" name="gender" value="female" />
									<label for="female">Nữ</label>
								</div>
							</div>

							<div class="checkbox-group">
								<label class="font-bold">Sở thích:</label>
								<div class="flex items-baseline">
									<input type="checkbox" id="reading" name="hobby" value="reading" />
									<label for="reading">Đọc sách</label>
								</div>
								<div class="flex items-baseline">
									<input type="checkbox" id="sports" name="hobby" value="sports" />
									<label for="sports">Chơi thể thao</label>
								</div>
							</div>

							<label class="font-bold" for="country">Chọn quốc gia:</label>
							<select id="country" name="country">
								<option value="vietnam">Việt Nam</option>
								<option value="usa">Hoa Kỳ</option>
								<option value="japan">Nhật Bản</option>
							</select>

							<button type="submit">Đăng ký</button>
						</form>
					</div>
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Yêu cầu:</b> Clone lại giao diện trên với thông tin của bản thân
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Tài nguyên:</b>
				</p>
				<div class="pl-3 text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b class="">Màu:</b>
					<br />
					<div class="flex">
						<span>- Màu background của cả body</span>
						<div class="flex gap-1 items-center">
							: #e5e5e5
							<div class="w-4 h-4 rounded bg-[#e5e5e5]"></div>
						</div>
					</div>

					<div class="flex">
						<span> - Màu text</span>
						<div class="flex gap-1 items-center">
							: #555
							<div class="w-4 h-4 rounded bg-[#555555]"></div>
						</div>
					</div>
					<div class="flex">
						<span> - Màu button "Đăng ký"</span>
						<div class="flex gap-1 items-center">
							: #28a745
							<div class="w-4 h-4 rounded bg-[#28a745]"></div>
						</div>
					</div>
				</div>

				<div class="pl-3 text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b class="">Spacing:</b>
					<br />
					<p>
						<span>- Kích thước của cả form: </span>
						width - 400px | padding: 24px | radius: 12px
					</p>
				</div>
				<!-- END -->

				<DocNextPage :pagination="pagePagination" />
			</div>
			<!-- <PageMarkBook /> -->
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
				imageTag: `<img src="https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg" alt="just vibing memes">`,
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
				this.$api.trainingTask
					.getPagination({ appIds: 'html-basic', currentDocId: 'htmle_01' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
<style lang="scss" scoped>
	.form-container {
		background-color: #fff;
		padding: 30px;
		width: 400px;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}

	/* Tiêu đề form */
	.form-container h1 {
		text-align: center;
		margin-bottom: 20px;
		color: #333;
	}

	/* Nhãn và trường nhập */
	label {
		display: block;
		margin-bottom: 8px;
		color: #555;
	}

	input[type='text'],
	input[type='email'],
	select {
		width: 100%;
		padding: 10px;
		margin-bottom: 15px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 16px;
	}

	/* Radio và Checkbox */
	input[type='radio'],
	input[type='checkbox'] {
		margin-right: 10px;
	}

	/* Nhóm giới tính và sở thích */
	.radio-group,
	.checkbox-group {
		margin-bottom: 15px;
	}

	/* Nút Gửi */
	button {
		width: 100%;
		background-color: #28a745;
		color: white;
		padding: 12px;
		border: none;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	button:hover {
		background-color: #218838;
	}
</style>
