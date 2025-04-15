<template>
	<div class="relative overflow-x-auto mt-5 border rounded-lg">
		<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
				<tr>
					<th v-for="label in labels" :key="label" scope="col" class="px-5 py-3">{{ label }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in operators" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th scope="row" class="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
						{{ item.feature }}
					</th>
					<td class="px-5 py-4">{{ item.first }}</td>
					<td class="px-5 py-4" v-html="item.second"></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script lang="ts">
	import { PropType } from 'nuxt/dist/app/compat/capi';
	type OpeItem = {
		id: number;
		feature?: string;
		first?: string;
		second?: string;
	};
	export default {
		props: {
			operators: {
				type: Array as PropType<OpeItem[]>,
				default() {
					return [];
				},
			},
			labels: {
				type: Array as PropType<string[]>,
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
				// 		desc: 'Sử dụng để kiểm tra điều kiện trong Blade Template.',
				// 		syntax: '@if ($user->isAdmin()) <br/> Welcome, Admin! <br/> @else <br/> Welcome, User! <br/> @endif',
				// 	},
				// ],
			};
		},
	};
</script>
