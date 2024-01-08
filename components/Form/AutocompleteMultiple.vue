<template>
	<div>
		<label v-if="title" class="block text-md font-medium leading-6 text-gray-900 mb-2"
			>{{ title }}<span v-if="required" class="text-red-500"> {{ ' ' }}*</span></label
		>
		<div :class="`border flex align-center rounded-${rounded} ${isError ? 'border-red-500' : 'border-gray-300'}`">
			<Combobox v-model="selectedData" multiple
				><div class="relative mt-0 h-full w-full">
					<div
						:class="`relative w-full h-full cursor-default rounded-${rounded}  bg-white ${sizingClass}  text-left focus:outline-none`"
					>
						<ComboboxButton as="div" class="flex items-center pr-2 justify-between cursor-pointer overflow-hidden">
							<span
								v-if="!displayValue && !query && !selectedDatas.length"
								:class="`absolute left-4 ${isError ? 'text-red-500/50' : 'text-gray-400'}`"
							>
								{{ placeholder }}</span
							>
							<ul
								v-if="selectedDatas.length > 0"
								class="gap-1 max-w-full"
								:class="direction === 'row' ? 'flex items-start' : 'flex flex-col'"
							>
								<li
									v-for="item in selectedDatas"
									:key="item.id"
									class="py-1 px-2 flex items-start gap-2 bg-success-200 rounded text-gray-700 whitespace-nowrap text-sm"
								>
									{{ item.textComputed || item.name }}
									<Icon
										v-if="clearable"
										name="carbon:close"
										class="text-red-500 ml-auto cursor-pointer"
										size="18px"
										@click.stop="removeItem(item)"
									/>
								</li>
							</ul>
							<ComboboxInput
								class="w-full border-none text-gray-900 ring-0 outline-none focus:ring-0"
								@change="query = $event.target.value"
								@click="query = $event.target.value"
							/>
							<Icon :name="expandIconName" size="18px" class="min-w-[18px]" />
						</ComboboxButton>
					</div>
					<TransitionRoot
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						@after-leave="query = ''"
					>
						<ComboboxOptions
							class="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
							@scroll="onScroll"
						>
							<div
								v-if="!filteredItems.length && query"
								class="relative cursor-default select-none py-2 px-4 text-gray-700"
							>
								{{ emptyMessage }}
							</div>
							<div
								v-if="!filteredItems.length && !query"
								class="relative cursor-default select-none py-2 px-4 text-gray-700"
							>
								{{ emptyNoSearchMessage }}
							</div>
							<ComboboxOption
								v-for="item in filteredItems"
								as="template"
								:key="item.id"
								:value="item.id"
								v-slot="{ active }"
							>
								<li
									class="relative cursor-default select-none py-2 pl-10 pr-4 cursor-pointer"
									:class="`${
										selectedData.includes(item.id as never) || active
											? 'bg-teal-600 text-white'
											: 'text-gray-900  hover:bg-teal-600/30'
									}`"
								>
									<span class="block truncate">
										{{ item.textComputed || item.name }}
									</span>
									<span
										v-if="selectedData.includes(item.id as never)"
										class="absolute inset-y-0 left-0 flex items-center pl-3"
										:class="`${selectedData.includes(item.id as never) ? ' text-white' : 'text-teal-600'}`"
									>
										<Icon name="material-symbols:radio-button-checked-outline" size="16px" />
									</span>
								</li>
							</ComboboxOption>
						</ComboboxOptions>
					</TransitionRoot>
				</div>
			</Combobox>
		</div>
		<span class="text-xs flex justify-between text-right" :class="isError ? 'text-red-600' : 'text-gray-400'">
			<span v-if="isError" class="text-red-600">{{ errorMsg }}</span>
		</span>
	</div>
</template>

<script lang="ts">
	import { ref, computed } from 'vue';
	import { removeAscentNormal } from '../../helpers/formatter';
	type ItemName = number | string | null;
	import {
		Combobox,
		ComboboxInput,
		ComboboxButton,
		ComboboxOptions,
		ComboboxOption,
		TransitionRoot,
	} from '@headlessui/vue';
	interface Item {
		name: string | null;
		id: string | number;
		textComputed?: string;
	}
	export default {
		components: {
			Combobox,
			ComboboxInput,
			ComboboxButton,
			ComboboxOptions,
			ComboboxOption,
			TransitionRoot,
		},

		setup() {},
		props: {
			listItems: {
				type: Array as PropType<Item[]>,
				defautl: [],
			},
			additionalData: {
				type: Array as PropType<Item[]>,
				defautl: [],
			},
			clearable: {
				type: Boolean,
				default: false,
			},
			required: {
				type: Boolean,
				default: false,
			},
			placeholder: {
				type: String,
				default: 'Chọn',
			},
			emptyMessage: {
				type: String,
				default: 'Không tìm thấy kết quả phù hợp',
			},
			emptyNoSearchMessage: {
				type: String,
				default: 'Không tìm thấy kết quả phù hợp',
			},
			direction: {
				type: String,
				default: 'row',
			},
			rounded: {
				type: String,
				default: 'xl',
			},
			expandIconName: {
				type: String,
				default: 'tabler:caret-down-filled',
			},
			position: {
				type: String,
				default: 'bottom',
			},
			initData: {
				type: Array as PropType<string[] | number[]>,
				default: [],
			},
			size: {
				type: String,
				default: 'small',
			},
			title: {
				type: String,
				default: '',
			},
			isError: {
				type: Boolean,
				default: false,
			},

			errorMsg: {
				type: String,
				default: '',
			},
		},
		data() {
			return {
				query: '',
				selectedData: [] as number[] | string[],
				currentLength: 10,
				step: 10,
				refType: 1,
			};
		},
		computed: {
			listItemsComputed(): Item[] {
				return [...(this.additionalData || []), ...(this.listItems || [])];
			},
			filteredItems(): Item[] {
				return Array.isArray(this.listItemsComputed)
					? !this.query
						? this.listItemsComputed.slice(0, this.currentLength)
						: this.listItemsComputed.filter(item =>
								removeAscentNormal(`${item.name}`.toLowerCase()).includes(removeAscentNormal(this.query.toLowerCase()))
						  )
					: [];
			},
			sizingClass() {
				switch (this.size) {
					case 'xs':
						return 'px-2 py-1 text-xs';
					case 'sm':
						return 'px-2 py-1 text-sm';
					case 'md':
						return 'px-2.5 py-1.5 text-sm';
					case 'lg':
						return 'px-3 py-2 text-sm';
					case 'xl':
						return 'px-3.5 py-2.5 text-sm';
					case 'xxl':
						return this.selectedDatas.length ? 'px-4 py-2 text-sm' : 'px-4 py-3 text-sm';

					default:
						return 'py-2 pl-3 pr-10 sm:text-sm';
				}
			},
			selectedDatas(): Item[] {
				return this.listItemsComputed?.filter(o => this.selectedData.includes(o.id as never)) || [];
			},
			displayValue(): string {
				return this.selectedDatas ? this.selectedDatas.map(o => o.name).join(', ') || '' : '';
			},
			getPositionClass() {
				switch (this.position) {
					case 'top':
						return 'top-0 translate-y-[-100%]';
					case 'bottom':
						return 'top-[100%]';

					default:
						return 'top-[100%]';
				}
			},
		},
		watch: {
			initData() {
				if (this.initData !== this.selectedData) {
					this.selectedData = this.initData;
				}
			},
			selectedData() {
				this.$emit('selected', this.selectedData);
			},
		},
		mounted() {
			if (this.initData !== this.selectedData) {
				this.selectedData = this.initData;
			}
		},
		methods: {
			clearData() {
				this.selectedData = [];
			},
			removeItem(item: Item) {
				this.selectedData = this.selectedData.filter(o => o !== item.id) as string[] | number[];
			},
			onScroll(e: Event) {
				if (this.refType) {
					clearTimeout(this.refType);
				}
				this.refType = window.setTimeout(() => {
					if (this.currentLength >= this.listItemsComputed.length || !e.target) {
						return;
					}
					const target = e.target as HTMLElement;
					const scrH = target.scrollHeight;
					const scrT = target.scrollTop;
					const eH = target.clientHeight;
					const gap = scrH - scrT - eH;
					if (gap < 300) {
						this.currentLength += this.step;
					}
				}, 240);
			},
		},
	};
</script>
