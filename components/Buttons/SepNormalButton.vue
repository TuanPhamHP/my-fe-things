<template>
	<button
		class="flex items-center justify-center gap-[12px] rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
		:class="`${sizingClass} ${containerClass} ${colorClass} ${textClass} ${textWeightClass} ${disabledClass}`"
		:type="type"
		:disabled="disabled || loading"
	>
		<slot />
		<Icon v-if="loading" name="line-md:loading-loop" size="18px" />
	</button>
</template>

<script lang="ts">
	import { InputHTMLAttributes } from 'nuxt/dist/app/compat/capi';
	import { PropType } from 'vue';
	import { buttonType } from '../../models/index';
	export default {
		props: {
			size: {
				type: String,
				default: 'small',
			},
			textSize: {
				type: String,
				default: '',
			},
			textWeight: {
				type: String,
				default: 'semibold',
			},
			type: {
				type: String as PropType<buttonType>,
				default: 'button',
			},
			containerClass: {
				type: String,
				default: '',
			},
			color: {
				type: String,
				default: '',
			},
			loading: {
				type: Boolean,
				default: false,
			},
			outline: {
				type: Boolean,
				default: false,
			},
			disabled: {
				type: Boolean,
				default: false,
			},
		},
		setup() {},
		data() {
			return {
				firstName: '',
			};
		},
		computed: {
			sizingClass() {
				switch (this.size) {
					case 'xs':
						return 'px-2 py-1';
					case 'sm':
						return 'px-2 py-1';
					case 'md':
						return 'px-2.5 py-1.5';
					case 'lg':
						return 'px-3 py-2';
					case 'xl':
						return 'px-3.5 py-2.5';
					case 'xxl':
						return 'px-8 py-5';
					case 'base':
						return 'px-5 py-3';
					case 'x-lagre':
						return 'px-8 py-3';
					default:
						return 'px-2.5 py-1.5';
				}
			},
			textClass() {
				switch (this.textSize) {
					case 'xs':
						return 'text-xs';
					case 'sm':
						return 'text-sm';
					case 'md':
						return 'text-md';
					case 'lg':
						return 'text-lg';
					case 'xl':
						return 'text-xl';
					case 'base':
						return 'text-base';
					case 'xl':
						return 'text-xl';
					case 'xxl':
						return 'text-xxl';
					default:
						return 'text-base';
				}
			},
			textWeightClass() {
				switch (this.textWeight) {
					case 'semibold':
						return 'font-semibold';
					case 'bold':
						return 'font-bold';
					default:
						return 'font-normal';
				}
			},
			colorClass() {
				switch (this.color) {
					case 'gradient-button':
						return 'bg-primary-500 text-white  bg-primary-500-hover focus-visible:outline-indigo-600';
					case 'outline':
						return 'bg-transparent bg-primary-500-hover focus-visible:outline-indigo-600 text-primary ';
					case 'outline-primary':
						return 'bg-transparent hover:bg-primary-500/50 focus-visible:outline-indigo-600 text-primary border border-primary-green';
					case 'outline-red':
						return 'bg-transparent hover:bg-red-500/20 focus-visible:outline-indigo-600 text-red-500 border border-red-500';

					default:
						return 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600';
				}
			},
			disabledClass() {
				return this.disabled ? 'opacity-75 pointer-events-none' : '';
			},
		},
		methods: {
			onInput(e: Event) {
				const target = e.target as EventTarget as HTMLInputElement;
				this.$emit('update:modelValue', target.value as String);
			},
		},
	};
</script>
