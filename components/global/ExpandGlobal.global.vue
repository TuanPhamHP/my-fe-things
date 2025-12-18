<template>
	<div class="border rounded-xl px-2 py-3 mb-4 dark:hover:bg-neutral-100/25 hover:bg-neutral-300/25">
		<Disclosure>
			<DisclosureButton as="div" class="cursor-pointer">
				<slot name="header"></slot>
			</DisclosureButton>

			<!-- Use the built-in `transition` component to add transitions. -->
			<transition
				enter-active-class="transition duration-100 ease-out"
				enter-from-class="transform scale-95 opacity-0"
				enter-to-class="transform scale-100 opacity-100"
				leave-active-class="transition duration-75 ease-out"
				leave-from-class="transform scale-100 opacity-100"
				leave-to-class="transform scale-95 opacity-0"
			>
				<DisclosurePanel>
					<slot name="body"></slot>
				</DisclosurePanel>
			</transition>
		</Disclosure>
	</div>
</template>
<script lang="ts">
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	export default {
		components: { Disclosure, DisclosureButton, DisclosurePanel },

		setup() {
			return {};
		},
	};
</script>
