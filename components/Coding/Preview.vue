<template>
	<iframe :srcdoc="previewCode" class="preview"></iframe>
</template>
<script lang="ts">
	import { defineComponent, computed } from 'vue';

	export default defineComponent({
		props: {
			html: { type: String, required: true },
			css: { type: String, required: true },
			js: { type: String, required: true },
		},
		setup(props) {
			const previewCode = computed(
				() => `
      <html>
        <head>
          <style>${props.css}</style>
        </head>
        <body>
          ${props.html}
          <script>${props.js}<\/script>
        </body>
      </html>
    `
			);

			return { previewCode };
		},
	});
</script>
<style scoped>
	.preview {
		width: 100%;
		height: 400px;
		border: 1px solid #ccc;
		border-radius: 8px;
	}
</style>
