<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Virtuals" addOnClass="text-left" markedAs="about-virtuals" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Virtuals (trường ảo) trong Mongoose là các thuộc tính (properties) mà bạn có thể định nghĩa trên Schema nhưng
					chúng không được lưu trữ trực tiếp trong MongoDB.
				</p>
				<b class="text-slate-900 dark:text-white mt-5 leading-8">Virtuals bao gồm hai loại phương thức chính:</b>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>`Getter`</b>: Dùng để truy xuất giá trị của trường ảo (giống như đọc một thuộc tính).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>`Setter`</b>: Dùng để gán giá trị cho trường ảo, giá trị này sau đó có thể được xử lý để cập nhật các
						trường thực tế trong database.
					</li>
				</ul>
				<PageHeading text="Triển khai Virtuals" addOnClass="text-left" markedAs="using" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>`Getter`</b> - Ví dụ: Tạo trường ảo để hiển thị tên của người và số điện thoại bằng cách kết hợp name và
					phone.
				</p>
				<b class="text-slate-900 dark:text-white mt-5 leading-8">Tạo virtuals trong model:</b>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>`Setter`</b> - Ví dụ: cho phép người dùng gán giá trị cho trường ảo nameAndPhone, và tự động tách giá trị
					đó để cập nhật các trường name và phone tương ứng.
				</p>
				<b class="text-slate-900 dark:text-white mt-5 leading-8">Tạo virtuals trong model:</b>
				<VCodeBlock :code="b2" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					🌸 Khi sử dụng virtuals, bạn có thể dễ dàng tạo các thuộc tính động dựa trên dữ liệu hiện có trong tài liệu mà
					không cần phải lưu trữ chúng trong database. Điều này giúp giảm thiểu sự trùng lặp dữ liệu và giữ cho schema
					của bạn gọn gàng hơn. Và trong thực tế thì <b>getter</b> được sử dụng phổ biến hơn <b>setter</b> rất nhiều.
				</p>

				<PageHeading text="Methods & Statics" addOnClass="text-left mt-5" markedAs="about-methods" />
				<p class="text-slate-900 dark:text-white mb-3 leading-8">
					Methods trong Mongoose là các hàm (functions) mà bạn có thể định nghĩa trên Schema và có thể được gọi trên các
					instance của model. Chúng cho phép bạn thêm các hành vi tùy chỉnh vào các tài liệu (documents) của bạn.
					<br />
					Trong Mongoose, cả <b>Methods</b> và <b>Statics</b> đều là các hàm tùy chỉnh mà bạn định nghĩa trên Schema.
					Điểm khác biệt chính là ngữ cảnh chúng được gọi:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>`Methods`</b>:
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Dùng trên một Document (tài liệu) cụ thể, gọi qua instance.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Thao tác/Logic liên quan đến dữ liệu của chính Document đó (ví dụ: lấy tên đầy đủ, kiểm tra mật khẩu).
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>`Statics`</b>:
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Dùng trên Model (lớp), gọi trực tiếp trên Model.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Thao tác/Logic cấp Model, thường là các truy vấn database (query) phức tạp hoặc thao tác tìm kiếm toàn
								bộ (ví dụ: tìm tất cả người dùng đang hoạt động).
							</li>
						</ul>
					</li>
				</ul>
				<PageHeading text="Methods" addOnClass="text-left" markedAs="methods" :lvl="2" />
				<p class="text-slate-900 dark:text-white mb-3 leading-8">
					<b>Methods</b> là các hàm được thêm vào prototype của Document. Khi gọi, từ khóa <b>this</b> sẽ trỏ đến
					Document hiện tại.
					<br />
					Chúng ta sẽ thêm một Method tên là <FilePath>getProtectedInfo</FilePath> để trả về thông tin người dùng ngoại
					trừ mật khẩu, và một Method khác để kiểm tra mật khẩu.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="Statistics" addOnClass="text-left mt-5" markedAs="statistic" :lvl="2" />
				<p class="text-slate-900 dark:text-white mb-3 leading-8">
					<b>Statics</b> là các hàm được thêm trực tiếp vào Model. Khi gọi, từ khóa this sẽ trỏ đến Model (ví dụ:
					userModel).
					<br />
					Chúng ta thêm một Static Method <FilePath>findSafe()</FilePath> để tìm kiếm người dùng và trả ra thông tin
					không có password (vì logic này liên quan đến truy vấn cấp Model).
				</p>
				<VCodeBlock :code="b4" highlightjs lang="javascript" theme="atom-one-dark" />

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
				b1: `const userSchema = new mongoose.Schema({ // Định nghĩa schema
}, 
{
    // Bật Virtuals khi chuyển đổi sang JSON/Object
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true }
});

userSchema.virtual('nameAndPhone').get(function() {
     return this.name + ' - ' this.phone;
});
`,
				b2: `userSchema.virtual('nameAndPhone').set(function(value) {
    if (typeof value === 'string' && value.includes(' - ')) {
        const trimmedValue = value.trim(); 
				const nameAndPhoneArr = trimmedValue.split(' - ');
        this.name = nameAndPhoneArr[0]; 
        this.phone = nameAndPhoneArr[1]; 
    }
});
`,
				b3: `userSchema.methods.getProtectedInfo = function() {
    // 'this' trỏ đến document hiện tại
    const userObject = this.toObject(); // Chuyển document sang object JS
    delete userObject.password; // Xóa trường password
    return userObject;
};
// Sử dụng: const safeUserInfo = user.getProtectedInfo();

// Method 2: Kiểm tra mật khẩu (Sử dụng async/await vì bcrypt là bất đồng bộ)
userSchema.methods.comparePassword = async function(candidatePassword) {
    // 'this.password' là mật khẩu đã hash trong DB
    return await bcrypt.compare(candidatePassword, this.password);
};
// Sử dụng: const isMatch = await user.comparePassword(password);
`,
				b4: `userSchema.statics.findSafe = async function (...args) {
	return await this.find(...args).select('-password -__v');
};
// Sử dụng: const users = await userModel.findSafe(filter);`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-11' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
