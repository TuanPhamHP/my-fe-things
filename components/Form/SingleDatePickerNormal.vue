<template>
	<div :class="containerClass">
		<label v-if="title" class="block text-md font-medium leading-6 text-gray-900 mb-2"
			>{{ title }}

			<span v-if="required" class="text-red-500">*</span></label
		>
		<div class="relative rounded-md shadow-sm cursor-pointer" :class="title ? '' : 'h-full'">
			<Datepicker
				v-model="picked"
				class="block w-full h-full border-0 cursor-pointer ring-inset ring-1 pl-4 focus:ring-2 outline-none sm:text-sm sm:leading-6"
				:class="`${
					isError
						? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
						: 'ring-gray-200 focus:ring-primary/50'
				} ${sizingClass} ${inputClass}`"
				:locale="viLocale"
				:inputFormat="'yyyy-MM-dd H:mm'"
				:minimum-view="'time'"
			/>
			<Icon
				name="solar:calendar-line-duotone"
				class="text-gray-400 hover:text-gray-900 hover-primary cursor-pointer absolute right-[24px] top-[50%] translate-y-[-50%]"
				size="18px"
			/>
		</div>
		<p v-if="isError" class="mt-2 text-sm text-red-600" id="email-error">{{ errorMsg }}</p>
	</div>
</template>

<script lang="ts">
	import Datepicker from 'vue3-datepicker';
	import viLocale from 'date-fns/locale/vi';
	import { format } from 'date-fns';
	import { PropType } from 'nuxt/dist/app/compat/capi';

	export default {
		props: {
			modelValue: {
				type: String,
				default: '',
			},
			initData: {
				type: String as PropType<string | number | Date | null>,
				default: '',
			},
			title: {
				type: String,
				default: '',
			},

			placeholder: {
				type: String,
				default: '',
			},
			type: {
				type: String,
				default: 'text',
			},
			name: {
				type: String,
				default: '',
			},
			containerClass: {
				type: String,
				default: '',
			},
			inputClass: {
				type: String,
				default: '',
			},
			isError: {
				type: Boolean,
				default: false,
			},
			required: {
				type: Boolean,
				default: false,
			},
			errorMsg: {
				type: String,
				default: '',
			},
			size: {
				type: String,
				default: 'small',
			},
		},
		components: { Datepicker },
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
						return 'px-2.5 py-1.5 text-sm';
				}
			},
		},
		watch: {
			picked() {
				if (this.picked) {
					this.$emit('date-change', format(this.picked, 'yyyy-MM-dd H:mm:ss'));
				}
			},
			initData() {
				if (this.initData) {
					this.picked = new Date(this.initData) || new Date();
				}
			},
		},
		data() {
			return {
				picked: new Date() as any,
				viLocale: viLocale,
			};
		},

		mounted() {
			if (this.initData) {
				this.picked = new Date(this.initData) || new Date();
			} else {
				this.picked = new Date();
			}
		},
		methods: {},
	};
</script>

<style></style>
