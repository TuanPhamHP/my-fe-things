<template>
	<div :class="containerClass">
		<label v-if="title" class="block text-md font-medium leading-6 text-gray-900 mb-2">{{ title }}</label>
		<div class="relative rounded-md shadow-sm" :class="title ? '' : 'h-full'">
			<Icon
				name="solar:magnifer-linear"
				class="text-gray-400 hover-primary cursor-pointer absolute left-[12px] top-[50%] translate-y-[-50%]"
				size="18px"
			/>
			<input
				:value="modelValue"
				:type="type"
				:name="name"
				class="block w-full h-full border-0 ring-inset ring-1 pl-9 focus:ring-2 outline-none sm:text-sm sm:leading-6"
				:class="`${
					isError
						? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
						: 'ring-gray-300 focus:ring-primary/50'
				} ${sizingClass} ${inputClass}`"
				:placeholder="placeholder"
				aria-invalid="true"
				aria-describedby="email-error"
				@input="onInput"
				@focus="handleFocusTextQuery"
			/>
		</div>
		<p v-if="isError" class="mt-2 text-sm text-red-600" id="email-error">{{ errorMsg }}</p>
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
			errorMsg: {
				type: String,
				default: '',
			},
			size: {
				type: String,
				default: 'small',
			},
			selectOnFocus: {
				type: Boolean,
				default: true,
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
		},

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

<style></style>
