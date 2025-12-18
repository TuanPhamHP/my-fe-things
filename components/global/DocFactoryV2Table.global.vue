<template>
	<div class="relative overflow-x-auto mt-2 border rounded-lg">
		<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
				<tr>
					<th v-for="header in headers" :key="header.id" scope="col" class="px-5 py-3">
						{{ header.name }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in items" :key="item.name" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th
						v-for="(hKey, idx) in headers"
						:key="idx"
						scope="row"
						class="px-5 py-4"
						:class="idx === 0 ? 'font-semibold text-gray-900 whitespace-nowrap dark:text-white' : ''"
					>
						{{ hKey.key ? item[hKey.key] : '' }}
					</th>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script lang="ts">
	import { PropType } from 'nuxt/dist/app/compat/capi';
	type OpeItem = {
		group?: string;
		command?: string;
		function?: string;
		syntax?: string;
		example?: string;
		label?: string;
		name?: string;
		description?: string;
	};

	type HeaderItem = {
		id: number;
		label?: string;
		name?: string;
		description?: string;
		syntax?: string;
		key: keyof OpeItem;
	};

	type TableItem = {
		header: HeaderItem[];
		items: OpeItem[];
	};
	export default {
		props: {
			items: {
				type: Array as PropType<OpeItem[]>,
				default() {
					return [];
				},
			},

			headers: {
				type: Array as PropType<HeaderItem[]>,
				default() {
					return [];
				},
			},
		},
		data() {
			return {
				// operators: [
				// 	{
				// 		id: 0,
				// 		label: 'Câu lệnh điều kiện (Conditional Statements)',
				// 	},
				// 	{
				// 		id: 1,
				// 		name: '@if, @elseif, @else, @endif',
				// 		description: 'Sử dụng để kiểm tra điều kiện trong Blade Template.',
				// 		syntax: '@if ($user->isAdmin()) <br/> Welcome, Admin! <br/> @else <br/> Welcome, User! <br/> @endif',
				// 	},
				// ],
			};
		},
	};
</script>
