<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">Cùng tìm hiểu về cấu trúc cơ bản của một Laravel project.</p>

				<PageHeading text="Các thư mục và tập tin chính" addOnClass="text-left hidden" markedAs="structure" :lvl="1" />
				<div v-for="item in projectStructure" :key="item.name">
					<PageHeading :text="`#${item.name}`" addOnClass="text-left" :markedAs="`${item.name}`" :lvl="2" />
					<p class="text-slate-900 dark:text-white mt-2 leading-8">
						{{ item.desc }}
						<br />
						Trong đó:
					</p>
					<ul class="pl-5">
						<li
							v-for="structure in item.structure"
							:key="structure.name"
							class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1"
						>
							<b>`{{ structure.name }}`</b> <span> {{ structure.desc }} </span>
						</li>
					</ul>
				</div>
				<PageHeading text="MVC Architecture" addOnClass="text-left" markedAs="mvc-architecture" />
				<p class="text-slate-900 dark:text-white my-3">
					Laravel sử dụng mô hình MVC để xây dựng hệ thống, chúng ta sẽ cùng tìm hiểu xem:
					<b>
						<br />
						- MVC là gì?
						<br />
						- Các thành phần trong MVC?
						<br />
						- MVC hoạt động như thế nào?
					</b>
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					MVC (Model-View-Controller) là một mô hình kiến trúc phần mềm phổ biến được sử dụng để tổ chức mã nguồn của
					các ứng dụng một cách rõ ràng và dễ bảo trì. Mô hình này chia ứng dụng thành ba thành phần chính:
					<b> Model, View và Controller</b>
					. Luồng hoạt động của mô hình MVC có thể được vẽ lại như sau:
				</p>
				<div class="col-span-1 bg-neutral-100 px-5 py-1 rounded">
					<img
						style="height: 500px"
						src="https://selftaughtcoders.com/wp-content/uploads/2015/07/mvc_diagram_with_routes.png"
						alt=""
						class="rounded-lg mt-3 block"
					/>
				</div>
				<PageHeading text="1. Model" addOnClass="text-left mt-3" markedAs="mvc-model" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Model đại diện cho dữ liệu của ứng dụng và các quy tắc nghiệp vụ. Khi định nghĩa Model, chúng ta sẽ không thao
					tác gì về giao diện người dùng hoặc cách dữ liệu được hiển thị. Thay vào đó, chúng ta chỉ quan tâm đến việc
					tương tác với DB, định nghĩa các quy tắc dữ liệu ...
					<br />
					<b>Trách nhiệm chính:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Quản lý dữ liệu của ứng dụng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Tương tác với cơ sở dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Thực hiện các phép xử lý dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Định nghĩa các quy tắc nghiệp vụ của dữ liệu. </span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3">
					<b>Note:</b>Trong Laravel: Models thường được đặt trong thư mục <FilePath>app/Models</FilePath>. Laravel sử
					dụng Eloquent ORM để tương tác với cơ sở dữ liệu một cách dễ dàng. Ví dụ:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="vs2015" />
				<PageHeading text="2. View" addOnClass="text-left mt-3" markedAs="mvc-view" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					View là thành phần chịu trách nhiệm hiển thị dữ liệu cho người dùng. View không chứa logic nghiệp vụ và không
					tương tác trực tiếp với Model.
					<br />
					<b>Trách nhiệm chính:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Hiển thị dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Xử lý giao diện người dùng.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Nhận đầu vào từ người dùng và gửi nó đến Controller. </span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3">
					<b>Note:</b>Views thường được đặt trong thư mục <FilePath>resources/views</FilePath>. Laravel sử dụng Blade,
					một engine template mạnh mẽ và dễ sử dụng, để xây dựng giao diện. Ví dụ:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="vs2015" />
				<PageHeading text="3. Controller" addOnClass="text-left mt-3" markedAs="mvc-controller" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Ta có thể thấy rằng <b>Model</b> và <b>View</b> không làm việc trực tiếp với nhau, chúng cũng không hề can
					thiệp vào logic của đối tượng còn lại. Như vậy, ta cần một đối tượng thứ 3 để làm cầu nối giữa hai bên,
					<b>Controller</b> đóng vai trò là cầu nối giữa <b>Model</b> và <b>View</b>. Controller nhận đầu vào từ người
					dùng, xử lý các yêu cầu và tương tác với Model để lấy dữ liệu, sau đó chuyển dữ liệu đó đến View để hiển thị.
					<br />
					<b>Trách nhiệm chính:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Nhận (từ View) và xử lý yêu cầu từ người dùng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Tương tác với Model để truy xuất và lưu trữ dữ liệu.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Lấy dữ liệu sau khi xử lí và gửi dữ liệu đến View để hiển thị. </span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3">
					<b>Note:</b> Controllers thường được đặt trong thư mục <FilePath>app/Http/Controllers</FilePath>. Ví dụ:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="vs2015" />
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
				projectStructure: [
					{
						name: 'app',
						desc: 'Chứa mã nguồn chính của ứng dụng, bao gồm các controller, middleware, models, và các lớp khác.',
						structure: [
							{
								name: 'Console/',
								desc: 'Chứa các lệnh artisan.',
							},
							{
								name: 'Http/',
								desc: 'Chứa các controller, middleware và các lớp HTTP khác.',
							},
							{
								name: 'Models/',
								desc: 'Chứa các model của ứng dụng.',
							},
							{
								name: 'Providers/',
								desc: 'Chứa các service provider.',
							},
						],
					},
					{
						name: 'resources',
						desc: 'Chứa các tài nguyên của ứng dụng như JavaScript, CSS, và các view.',
						structure: [
							{
								name: 'js/',
								desc: 'Chứa các tập tin JavaScript.',
							},
							{
								name: 'lang/',
								desc: 'Chứa các tập tin ngôn ngữ.',
							},
							{
								name: 'views/',
								desc: 'Chứa các view blade của ứng dụng.',
							},
						],
					},
					{
						name: 'routes',
						desc: 'Chứa các tập tin định tuyến (đường dẫn) của ứng dụng.',
						structure: [
							{
								name: 'api.php',
								desc: 'Định nghĩa các endpoints API.',
							},
							{
								name: 'web.php',
								desc: 'Định nghĩa các routes kết nối với view tương ứng trên web.',
							},
						],
					},
					{
						name: 'database',
						desc: 'Chứa các tập tin liên quan đến cơ sở dữ liệu.',
						structure: [
							{
								name: 'factories/',
								desc: 'Chứa các factory để tạo các đối tượng mẫu cho việc kiểm thử.',
							},
							{
								name: 'migrations/',
								desc: 'Chứa các migration để tạo và sửa đổi các bảng trong cơ sở dữ liệu.',
							},
							{
								name: 'seeders/',
								desc: 'Chứa các seeder để điền dữ liệu mẫu vào cơ sở dữ liệu.',
							},
						],
					},
					{
						name: 'storage',
						desc: 'Chứa các tập tin đã được tạo ra và cần lưu trữ tạm thời.',
						structure: [
							{
								name: 'app/',
								desc: 'Chứa các tập tin do người dùng tải lên.',
							},
							{
								name: 'framework/',
								desc: 'Chứa các tập tin framework cần sử dụng.',
							},
							{
								name: 'logs/',
								desc: 'Chứa các tập tin log của ứng dụng.',
							},
						],
					},
					{
						name: 'bootstrap',
						desc: 'Chứa mã nguồn chính của ứng dụng, bao gồm các controller, middleware, models, và các lớp khác.',
						structure: [
							{
								name: 'cache/',
								desc: 'Chứa các tập tin cache của framework.',
							},
							{
								name: 'app.php',
								desc: 'Tệp khởi tạo ứng dụng.',
							},
						],
					},
					{
						name: 'Others',
						desc: 'Một số tệp/thư mục quan trọng khác.',
						structure: [
							{
								name: 'vendor/',
								desc: 'Chứa các thư viện của bên thứ ba được quản lý bởi Composer.',
							},
							{
								name: '.env',
								desc: 'Tập tin cấu hình môi trường của ứng dụng.',
							},
							{
								name: 'composer.json | package.json',
								desc: 'Tập tin cấu hình để quản lý các package | lib ngoài.',
							},
						],
					},
				],
				b1: `namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = ['name', 'email', 'password'];
}`,
				b2: `<!-- resources/views/users/index.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Users</title>
</head>
<body>
    <h1>Users List</h1>
    <ul>
        @foreach ($users as $user)
            <li>{{ $user->name }}</li>
        @endforeach
    </ul>
</body>
</html>
`,
				b3: `namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('users.index', compact('users'));
    }

    public function show($id)
    {
        $user = User::find($id);
        return view('users.show', compact('user'));
    }
}

`,
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-15' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
