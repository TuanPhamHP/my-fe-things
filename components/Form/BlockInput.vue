<template>
	<div :class="containerClass">
		<label v-if="title" class="block text-md font-regular leading-6 text-gray-900 mb-2">
			{{ title }}
			<span v-if="required" class="text-red-500">*</span>
		</label>
		<div :class="`relative rounded-${rounded} shadow-sm`">
			<input
				:value="modelValue"
				:type="inputType"
				:name="name"
				class="block w-full border-0 ring-inset ring-1 outline-none focus:ring-2 sm:text-sm sm:leading-6"
				:class="`${
					isError
						? 'error-input text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
						: 'ring-neutral-200 focus:ring-primary-500/50'
				} ${sizingClass} ${isDisabled ? 'text-neutral-900' : ''}  rounded-${rounded} ${
					suffix ? 'pr-10' : ''
				} ${inputClass}`"
				:placeholder="placeholder"
				aria-invalid="true"
				aria-describedby="email-error"
				:disabled="isDisabled"
				@input="onInput"
				@focus="handleFocusTextQuery"
			/>
			<Icon
				v-if="type === 'password' && localType === 'password'"
				name="ph:eye-closed-light"
				class="text-primary hover-primary cursor-pointer absolute right-[12px] top-[50%] translate-y-[-50%]"
				size="24px"
				@click="localType = 'text'"
			/>
			<Icon
				v-if="type === 'password' && localType === 'text'"
				name="solar:eye-broken"
				class="text-primary hover-primary cursor-pointer absolute right-[12px] top-[50%] translate-y-[-50%]"
				size="24px"
				@click="localType = 'password'"
			/>
			<span
				v-if="suffix"
				class="text-gray-900 absolute right-[12px] top-[50%] translate-y-[-50%] font-semibold text-xs"
				>{{ suffix }}</span
			>
		</div>
		<span
			class="text-xs flex justify-between text-right"
			:class="isError || modelValue.length >= maxLength ? 'text-red-600' : 'text-gray-400'"
		>
			<span v-if="isError" class="text-red-600">{{ errorMsg }}</span>
			<span v-if="counter" class="ml-auto">{{ modelValue.length }} / {{ maxLength }}</span>
		</span>
		<!-- <p v-if="isError" class="mt-2 text-sm text-red-600" id="email-error">{{ errorMsg }}</p> -->
	</div>
</template>

<script lang="ts">
	import { InputHTMLAttributes } from 'nuxt/dist/app/compat/capi';

	export default {
		props: {
			modelValue: {
				type: String,
				default: '',
			},
			title: {
				type: String,
				default: '',
			},
			suffix: {
				type: String,
				default: '',
			},

			placeholder: {
				type: String,
				default: '',
			},
			rounded: {
				type: String,
				default: 'md',
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
			counter: {
				type: Boolean,
				default: false,
			},
			selectOnFocus: {
				type: Boolean,
				default: false,
			},
			isDisabled: {
				type: Boolean,
				default: false,
			},
			maxLength: {
				type: Number,
				default: 250,
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
			inputType() {
				return this.localType || this.type;
			},
		},
		data() {
			return {
				localType: this.type === 'password' ? 'password' : '',
			};
		},
		emits: ['update:modelValue'],
		methods: {
			onInput(e: Event) {
				const target = e.target as InputHTMLAttributes;
				this.$emit('update:modelValue', target.value as String);
			},
			handleFocusTextQuery(e: Event) {
				if (!this.selectOnFocus) {
					return;
				}
				const target = e.target as HTMLInputElement;
				target.select();
				target.setSelectionRange(0, 99999);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.error-input {
		animation: bouncing 0.25s;
	}
	@keyframes bouncing {
		0% {
			transform: translate(2px, 1px);
		}
		20% {
			transform: translate(-2px, -1px);
		}
		40% {
			transform: translate(2px, 1px);
		}
		60% {
			transform: translate(-2px, -1px);
		}
		80% {
			transform: translate(2px, 1px);
		}
		100% {
			transform: translate(0px, 0px);
		}
	}
</style>
