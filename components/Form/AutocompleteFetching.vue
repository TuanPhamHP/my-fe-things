<template>
	<div>
		<label v-if="title" class="block text-md font-medium leading-6 text-gray-900 mb-2"
			>{{ title }}<span v-if="required" class="text-red-500"> {{ ' ' }}*</span></label
		>
		<div :class="`border flex align-center rounded-${rounded} border-gray-300`">
			<Combobox v-model="selectedData"
				><div class="relative mt-0 h-full w-full">
					<div
						:class="`relative w-full h-full cursor-default rounded-${rounded}  bg-white ${sizingClass}  text-left focus:outline-none `"
					>
						<ComboboxButton as="div" class="flex items-center pr-2 justify-between cursor-pointer">
							<span v-if="!displayValue && !query" class="text-gray-400" :class="'absolute left-4'">
								{{ placeholder }}</span
							>
							<ComboboxInput
								class="w-full border-none text-gray-900 ring-0 outline-none focus:ring-0"
								:displayValue="() => displayValue"
								@change="query = $event.target.value"
								@click="query = $event.target.value"
							/>
							<Icon :name="expandIconName" />
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
										selectedData === item.id || active
											? 'bg-teal-600 text-white'
											: 'text-gray-900  hover:bg-teal-600/30'
									}`"
								>
									<span class="block truncate">
										{{ item.name }}
									</span>
									<span
										v-if="selectedData === item.id"
										class="absolute inset-y-0 left-0 flex items-center pl-3"
										:class="`${selectedData === item.id ? ' text-white' : 'text-teal-600'}`"
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
		name: string;
		id: string | number;
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
				type: null as PropType<ItemName>,
				default: 'Chọn',
			},
			size: {
				type: String,
				default: 'small',
			},
			title: {
				type: String,
				default: '',
			},
		},
		data() {
			return {
				query: '',
				selectedData: null as number | string | null,
			};
		},
		computed: {
			filteredItems(): Item[] {
				return Array.isArray(this.listItems)
					? !this.query
						? this.listItems
						: this.listItems.filter(item =>
								removeAscentNormal(item.name.toLowerCase()).includes(removeAscentNormal(this.query.toLowerCase()))
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
				return this.listItems?.find(o => o.id === this.selectedData) || null;
			},
			displayValue(): string {
				return this.selectedDataObj ? this.selectedDataObj.name : '';
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
				this.selectedData = null;
			},
		},
	};
</script>
