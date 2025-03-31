<template>
	<li class="pl-4">
		<div
			@click="toggle"
			:class="{ 'font-bold text-blue-500': isFolder, 'text-gray-700': !isFolder }"
			class="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-1 rounded"
		>
			<span v-if="isFolder">{{ isOpen ? '📂' : '📁' }}</span>
			<span v-else>📄</span>
			<span>{{ label }}</span>
			<span class="text-gray-500 text-sm ml-2">- {{ description }}</span>
		</div>
		<ul v-if="isFolder && isOpen && children && children.length" class="ml-4 border-l-2 border-gray-300 pl-2">
			<TreeItem v-for="child in children" :key="child.label" v-bind="child" />
		</ul>
	</li>
</template>

<script>
	export default {
		props: {
			label: String,
			isFolder: Boolean,
			description: String,
			children: Array,
		},
		data() {
			return {
				isOpen: false,
			};
		},
		methods: {
			toggle() {
				if (this.isFolder) {
					this.isOpen = !this.isOpen;
				}
			},
		},
	};
</script>
