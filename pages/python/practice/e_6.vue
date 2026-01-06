<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p class="text-slate-900 dark:text-white mt-0 leading-8">Giả sử xây dựng một Game RPG - CLI.</p>

		<PageHeading text="Yêu cầu" addOnClass="text-left mt-5" markedAs="env" />

		<p class="text-slate-900 dark:text-white mt-0 leading-8">Tạo các lớp sau:</p>
		<div class="rounded border border-gray-300 p-3 mb-3">
			<p class="text-slate-900 dark:text-white mt-0 leading-8">
				<FilePath>Charactor</FilePath>: lớp cha (base class) với các thuộc tính và phương thức chung cho tất cả nhân
				vật.
			</p>

			<SkyList :docs="docs" />
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
			<div class="col-span-1 rounded border border-gray-300 p-3">
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<FilePath>Warrior</FilePath>: lớp con kế thừa từ Charactor, đại diện cho nhân vật <b>Chiến binh</b>.
				</p>
				<SkyList :docs="warriors" />
			</div>
			<div class="col-span-1 rounded border border-gray-300 p-3">
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<FilePath>Mage</FilePath>: lớp con kế thừa từ Charactor, đại diện cho nhân vật <b>Pháp sư</b>.
				</p>
				<SkyList :docs="mages" />
			</div>
		</div>
		<div class="rounded border border-gray-300 p-3">
			<p class="text-slate-900 dark:text-white mt-0 leading-8">
				<FilePath>Boss</FilePath>: đại diện cho <b>Quái vật</b>.
			</p>
			<SkyList :docs="bosses" />
		</div>
		<PageHeading text="Gameplay" addOnClass="text-left mt-5" markedAs="env" />
		<p class="text-slate-900 dark:text-white mt-0 leading-8">Luồng game:</p>
		<ul class="pl-5">
			<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Người chơi chọn class (Warrior / Mage)
			</li>
			<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Game chạy theo vòng lặp:
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-400 list-disc">
						Player attack
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-400 list-disc">
						Boss mất máu
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-400 list-disc">
						Nếu boss chết → WIN
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-400 list-disc">
						Boss attack
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-400 list-disc">
						Player mất máu
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-red-400 list-disc">
						Nếu player chết → LOSE
					</li>
				</ul>
			</li>
		</ul>

		<DocNextPage :pagination="pagePagination" />
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { FilePath } from '../../../.nuxt/components';
	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		TabGroup,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
	} from '@headlessui/vue';
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
			TabGroup,
			TabList,
			Tab,
			TabPanels,
			TabPanel,
		},
		data() {
			return {
				counter: 0,
				pagePagination: {
					next: {
						title: 'Bài 2',
						link: '/nodejs/practice/e_2',
					},
					prev: {
						title: 'Danh sách',
						link: '/nodejs/practice',
					},
				},
				b1: ``,
				docs: [
					{
						id: 1,
						content: '<b>properties</b>',
						subList: [
							'name',
							'max_health',
							'health',
							'damage_range: dmg gây ra mỗi turn, nên là tuple (min_damage, max_damage)',
							'dmg_type: loại dmg gây ra, nên là string ("physical" hoặc "magic")',
						],
					},
					{
						id: 2,
						content: '<b>methods</b>',
						subList: [
							'<b>attack()</b>: trả về lượng damage ngẫu nhiên trong damage_range',
							'<b>take_damage(dmg)</b>: trừ máu, đảm bảo health >= 0',
							'<b>is_alive()</b>: trả về boolean',
						],
					},
				],
				warriors: [
					{
						id: 1,
						content: '<b>properties</b>',
						subList: ['dmg_type = "physical"', 'damage_range: trung bình', 'health: máu cao'],
					},
				],
				mages: [
					{
						id: 1,
						content: '<b>properties</b>',
						subList: ['dmg_type = "magic"', 'damage_range: cao', 'health: máu trung bình'],
					},
				],
				bosses: [
					{
						id: 1,
						content: '<b>properties</b>',
						subList: [
							'name',
							'max_health',
							'health',
							'damage_range: dmg gây ra mỗi turn, nên là tuple (min_damage, max_damage)',
							'reduce_dmg: khả năng giảm dmg nhận vào',
						],
					},
					{
						id: 2,
						content: '<b>methods</b>',
						subList: [
							'<b>attack()</b>: trả về lượng damage ngẫu nhiên trong damage_range',
							'<b>take_damage(dmg)</b>: trừ máu, đảm bảo health >= 0',
							'<b>is_alive()</b>: trả về boolean',
						],
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>
