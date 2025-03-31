<template>
	<div class="relative overflow-x-auto mt-5 border rounded-lg">
		<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
				<tr>
					<th scope="col" class="px-5 py-3">Operators</th>
					<th scope="col" class="px-5 py-3">Def</th>
					<th scope="col" class="px-5 py-3" style="min-width: 200px">EG</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in operators" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th
						v-if="item.label"
						colspan="3"
						scope="row"
						class="px-5 py-4 text-center font-semibold text-gray-900 whitespace-nowrap bg-neutral-200"
					>
						{{ item.label }}
					</th>
					<th
						v-if="!item.label"
						scope="row"
						class="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
					>
						{{ item.name }}
					</th>
					<td v-if="!item.label" class="px-5 py-4">{{ item.desc }}</td>
					<td v-if="!item.label" class="px-5 py-4" v-html="item.syntax"></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script lang="ts">
	export default {
		data() {
			return {
				operators: [
					{
						id: 0,
						label: 'Câu lệnh điều kiện (Conditional Statements)',
					},
					{
						id: 1,
						name: '@if, @elseif, @else, @endif',
						desc: 'Sử dụng để kiểm tra điều kiện trong Blade Template.',
						syntax: '@if ($user->isAdmin()) <br/> Welcome, Admin! <br/> @else <br/> Welcome, User! <br/> @endif',
					},
					{
						id: 2,
						name: '@unless',
						desc: 'Ngược lại với @if, chỉ hiển thị nội dung nếu điều kiện là false.',
						syntax: '@unless ($user->isAdmin()) <br/> You are not an admin. <br/> @endunless',
					},
					{
						id: 3,
						label: 'Vòng lặp (Loops)',
					},
					{
						id: 4,
						name: '@for, @endfor',
						desc: 'Dùng để lặp qua một phạm vi số.',
						syntax: '@for ($i = 0; $i < 5; $i++) <br/> Item {{ $i }} <br/> @endfor',
					},
					{
						id: 5,
						name: '@foreach, @endforeach',
						desc: 'Dùng để duyệt qua mảng hoặc Collection.',
						syntax: '@foreach ($users as $user) <br/> {{ $user->name }} <br/> @endforeach',
					},
					{
						id: 6,
						name: '@forelse, @empty, @endforelse',
						desc: 'Giống @foreach nhưng có thể xử lý trường hợp danh sách rỗng.',
						syntax:
							'@forelse ($users as $user) <br/> {{ $user->name }} <br/> @empty <br/> No users found. <br/> @endforelse',
					},
					{
						id: 7,
						name: '@while, @endwhile',
						desc: 'Dùng để thực hiện vòng lặp dựa trên điều kiện.',
						syntax: '@while ($count < 5) <br/> {{ $count++ }} <br/> @endwhile',
					},
					{
						id: 8,
						label: 'Kiểm tra biến và cấu trúc dữ liệu',
					},
					{
						id: 9,
						name: '@isset, @endisset',
						desc: 'Kiểm tra xem biến có tồn tại hay không.',
						syntax: '@isset($name) <br/> {{ $name }} <br/> @endisset',
					},
					{
						id: 10,
						name: '@empty, @endempty',
						desc: 'Kiểm tra xem biến có rỗng hay không.',
						syntax: '@empty($name) <br/> Name is empty. <br/> @endempty',
					},
					{
						id: 11,
						label: 'Xuất dữ liệu',
					},
					{
						id: 12,
						name: '{{ }}',
						desc: 'In giá trị biến ra giao diện và tự động escape HTML.',
						syntax: '{{ $name }}',
					},
					{
						id: 13,
						name: '{!! !!}',
						desc: 'In giá trị biến ra giao diện mà không escape HTML.',
						syntax: '{!! $htmlContent !!}',
					},
					{
						id: 14,
						label: 'Gồm file (Include & Component)',
					},
					{
						id: 15,
						name: '@include',
						desc: 'Nhúng file Blade khác vào template hiện tại.',
						syntax: "@include('header')",
					},
					{
						id: 16,
						name: '@includeIf',
						desc: 'Chỉ nhúng file nếu file đó tồn tại.',
						syntax: "@includeIf('header')",
					},
					{
						id: 17,
						name: '@component, @endcomponent',
						desc: 'Dùng để nhúng một component Blade.',
						syntax: "@component('alert') <br/> This is an alert. <br/> @endcomponent",
					},
					{
						id: 18,
						label: 'Kế thừa giao diện (Layout & Sections)',
					},
					{
						id: 19,
						name: '@extends',
						desc: 'Kế thừa một layout Blade.',
						syntax: "@extends('layouts.master')",
					},
					{
						id: 20,
						name: '@section, @endsection',
						desc: 'Định nghĩa một section để sử dụng trong layout.',
						syntax: "@section('content') <br/> This is content. <br/> @endsection",
					},
					{
						id: 21,
						name: '@yield',
						desc: 'Khai báo vị trí để chèn section.',
						syntax: "@yield('content')",
					},
					{
						id: 22,
						name: '@stack, @push, @endpush',
						desc: 'Dùng để đẩy nội dung vào stack, thường dùng cho script hoặc styles.',
						syntax: "@push('scripts') <br/> <br/> @endpush",
					},
					{
						id: 23,
						label: 'Kiểm tra quyền & Xác thực',
					},
					{
						id: 24,
						name: '@auth, @endauth',
						desc: 'Hiển thị nội dung nếu người dùng đã đăng nhập.',
						syntax: '@auth <br/> Welcome, user! <br/> @endauth',
					},
					{
						id: 25,
						name: '@guest, @endguest',
						desc: 'Hiển thị nội dung nếu người dùng chưa đăng nhập.',
						syntax: '@guest <br/> Please log in. <br/> @endguest',
					},
					{
						id: 26,
						name: '@can, @endcan',
						desc: 'Kiểm tra quyền của user.',
						syntax: "@can('edit-post') <br/> You can edit this post. <br/> @endcan",
					},
					{
						id: 27,
						label: 'Xử lý CSRF & Form',
					},
					{
						id: 28,
						name: '@csrf',
						desc: 'Tạo một CSRF token trong form.',
						syntax: '<form> @csrf </form>',
					},
					{
						id: 29,
						name: '@method',
						desc: 'Khai báo method HTTP khác trong form.',
						syntax: "<form method='POST'> @method('PUT') </form>",
					},
				],
			};
		},
	};
</script>
