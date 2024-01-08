<template>
	<div :class="`border flex align-center rounded-${rounded} border-gray-300`">
		<Listbox v-model="selectedData">
			<div class="relative mt-0 h-full w-full">
				<ListboxButton
					:class="`relative w-full h-full cursor-default rounded-${rounded}  bg-white ${sizingClass}  text-left focus:outline-none `"
				>
					<span class="block truncate" :class="selectedDataObj ? '' : 'text-gray-400'">{{
						selectedDataObj?.name || placeholder
					}}</span>

					<span
						v-if="!selectedData || !clearable"
						class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
					>
						<Icon :name="expandIconName" />
					</span>
				</ListboxButton>
				<span
					v-if="clearable && selectedData"
					class="absolute cursor-pointer top-[50%] translate-y-[-50%] hover:bg-red-500/25 z-10 inset-y-0 right-1 flex items-center justify-center px-1 rounded-half h-[24px] text-red-500"
					title="Xóa"
					@click="clearData"
				>
					<Icon :name="'ic:baseline-clear'" />
				</span>
				<transition
					leave-active-class="transition duration-100 ease-in"
					leave-from-class="opacity-100"
					leave-to-class="opacity-0"
				>
					<ListboxOptions
						class="absolute z-10 bg-white mt-1 max-h-60 w-full min-w-[200px] overflow-auto rounded-md bg-white py-1 text-base shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
						:class="getPositionClass"
					>
						<ListboxOption v-if="!listItems?.length" as="template">
							<li class="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900">
								<span class="font-normal block truncate">Không có dữ liệu</span>
							</li>
						</ListboxOption>
						<ListboxOption
							v-slot="{ active, selected }"
							v-for="item in listItems"
							:key="item.name"
							:value="item.id"
							as="template"
							:class="'hover:bg-green-500/25 cursor-pointer'"
						>
							<li
								:class="[
									selectedData === item.id || selected ? 'bg-green-100 text-green-900' : 'text-gray-900',
									'relative cursor-default select-none py-2 pl-10 pr-4 cursor-pointer',
								]"
							>
								<span
									:class="[selectedData === item.id || selected ? 'font-medium' : 'font-normal', 'block truncate ']"
									>{{ item.name }}</span
								>
								<span
									v-if="selectedData === item.id || selected"
									class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600"
								>
									<Icon name="material-symbols:radio-button-checked-outline" size="16px" />
								</span>
							</li>
						</ListboxOption>
					</ListboxOptions>
				</transition>
			</div>
		</Listbox>
	</div>
</template>

<script lang="ts">
	import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
	import { PropType } from 'vue';
	interface Item {
		name: string;
		id: string | number | boolean;
	}
	export default {
		components: { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption },
		props: {
			listItems: {
				type: Array as PropType<Item[]>,
				defautl: [],
			},
			clearable: {
				type: Boolean,
				default: false,
			},
			placeholder: {
				type: String,
				default: 'Chọn',
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
				type: Number as PropType<number | string | null>,
				default: '',
			},
			size: {
				type: String,
				default: 'small',
			},
		},
		data() {
			return {
				selectedData: null as number | string | null,
			};
		},
		computed: {
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
			selectedDataObj() {
				return this.listItems?.find(o => o.id === this.selectedData) || null;
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
					console.log(this.initData);
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
