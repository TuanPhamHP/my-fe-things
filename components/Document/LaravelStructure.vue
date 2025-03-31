<template>
	<div class="p-6 bg-gray-100 h-fit rounded-xl min-h-[200px]">
		<h2 class="text-2xl font-bold text-blue-600 mb-4">Cấu trúc thư mục Laravel 11.x</h2>
		<ul class="tree">
			<TreeItem label="project-root" isFolder :children="treeData" />
		</ul>
	</div>
</template>

<script>
	import TreeItem from './TreeItem.vue';

	export default {
		components: { TreeItem },
		data() {
			return {
				treeData: [
					{
						label: 'app',
						isFolder: true,
						description: 'Chứa logic ứng dụng',
						children: [
							{ label: 'Http', isFolder: true, description: 'Controllers, Middleware' },
							{ label: 'Models', isFolder: true, description: 'ORM Models' },
							{ label: 'Providers', isFolder: true, description: 'Service Providers' },
						],
					},
					{ label: 'bootstrap', isFolder: true, description: 'Khởi tạo ứng dụng' },
					{ label: 'config', isFolder: true, description: 'Cấu hình ứng dụng' },
					{ label: 'database', isFolder: true, description: 'Migration & Seeders' },
					{ label: 'public', isFolder: true, description: 'Tài nguyên công khai' },

					// 🌟 CẬP NHẬT CHI TIẾT THƯ MỤC RESOURCES
					{
						label: 'resources',
						isFolder: true,
						description: 'Views, CSS, JS, dịch đa ngữ',
						children: [
							{ label: 'css', isFolder: true, description: 'Tệp CSS toàn cục' },
							{ label: 'js', isFolder: true, description: 'Tệp JS frontend' },
							{
								label: 'views',
								isFolder: true,
								description: 'Blade templates',
								children: [
									{ label: 'layouts', isFolder: true, description: 'Giao diện layout' },
									{ label: 'components', isFolder: true, description: 'Các component nhỏ' },
									{ label: 'welcome.blade.php', isFolder: false, description: 'Trang chào mừng' },
								],
							},
						],
					},

					{
						label: 'routes',
						isFolder: true,
						description: 'Định tuyến web',
						children: [
							{ label: 'web.php', isFolder: false, description: 'Routes cho web' },
							{ label: 'api.php', isFolder: false, description: 'Routes cho API' },
						],
					},
					{ label: 'storage', isFolder: true, description: 'Lưu trữ logs & cache' },
					{ label: 'tests', isFolder: true, description: 'Kiểm thử ứng dụng' },
					{ label: 'vendor', isFolder: true, description: 'Composer Packages' },
					{ label: '.env', isFolder: false, description: 'Cấu hình môi trường' },
					{ label: 'artisan', isFolder: false, description: 'CLI Laravel' },
					{ label: 'composer.json', isFolder: false, description: 'Quản lý package' },
					{ label: 'vite.config.js', isFolder: false, description: 'Cấu hình Vite' },
				],
			};
		},
	};
</script>

<style>
	.tree {
		list-style: none;
		padding-left: 0;
	}
</style>
