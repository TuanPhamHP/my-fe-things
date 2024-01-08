<template>
	<div>
		<label v-if="title" class="block text-md font-medium leading-6 text-gray-900 mb-2"
			>{{ title }}<span v-if="required" class="text-red-500"> {{ ' ' }}*</span></label
		>
		<div
			:class="`border flex h-full align-center rounded-${rounded}  ${isError ? 'border-red-500' : 'border-gray-200'}`"
		>
			<Combobox v-model="selectedData"
				><div class="relative mt-0 h-full w-full flex items-center">
					<div
						:class="`relative w-full h-full cursor-default rounded-${rounded}  bg-white ${sizingClass}  text-left focus:outline-none `"
					>
						<ComboboxButton as="div" class="h-full flex items-center pr-2 justify-between cursor-pointer">
							<span
								v-if="!displayValue && !query"
								class=""
								:class="`absolute left-4 ${isError ? 'text-red-500/50' : 'text-gray-400'}`"
							>
								{{ placeholder }}</span
							>
							<ComboboxInput
								class="w-full border-none text-gray-900 ring-0 outline-none focus:ring-0"
								:displayValue="() => displayValue"
								@change="query = $event.target.value"
								@click="query = ''"
							/>
							<Icon :name="expandIconName" :size="iconSize" :class="`min-w-[${iconSize}]`" />
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
							:class="getPositionClass"
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
									class="relative cursor-default select-none py-2 pr-4 cursor-pointer"
									:class="`${
										selectedData === item.id || active
											? 'bg-neutral-200 text-neutral-900'
											: 'text-gray-900  hover:bg-neutral-200/30'
									} ${showIconSelected ? ' pl-10' : ' pl-4'}`"
								>
									<span class="block truncate">
										{{ item.textComputed || item.name }}
									</span>
									<span
										v-if="selectedData === item.id && showIconSelected"
										class="absolute inset-y-0 left-0 flex items-center pl-3"
										:class="`${selectedData === item.id ? ' text-primary-500' : 'text-teal-600'}`"
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
				type: Array as PropType<Item[] | any[]>,
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
			showIconSelected: {
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
			rounded: {
				type: String,
				default: 'xl',
			},
			expandIconName: {
				type: String,
				default: 'ic:outline-arrow-drop-down',
			},
			position: {
				type: String,
				default: 'bottom-right',
			},
			initData: {
				type: Number as PropType<ItemName>,
				default: 'Chọn',
			},
			iconSize: {
				type: String,
				default: '18px',
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
				selectedData: null as number | string | null,
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
						return 'px-4 py-3 text-sm';

					default:
						return 'py-2 pl-3 pr-10 sm:text-sm';
				}
			},
			selectedDataObj(): Item | null {
				return this.listItemsComputed?.find(o => o.id === this.selectedData) || null;
			},
			displayValue(): string {
				return this.selectedDataObj ? this.selectedDataObj.textComputed || this.selectedDataObj.name || '' : '';
			},
			getPositionClass() {
				switch (this.position) {
					case 'top':
						return 'top-0 translate-y-[-100%]';
					case 'bottom':
						return 'top-[100%]';
					case 'bottom-right':
						return 'top-[100%] right-0';

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
				this.selectedData = null;
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
