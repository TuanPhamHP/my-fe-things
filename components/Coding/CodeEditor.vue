<template>
	<div class="grid grid-cols-3 gap-2">
		<!-- Code Editors -->
		<div class="col-span-1 cursor-text">
			<p class="font-bold bg-[#EF6023] w-fit text-white py-1 px-2 rounded-t">HTML</p>
			<div
				ref="htmlEditor"
				class="editor-container bg-neutral-50 border border-gray-300 hover:border-[#EF6023] rounded-b rounded-r pt-1 hover:shadow"
			></div>
		</div>
		<div class="col-span-1 cursor-text">
			<p class="font-bold bg-[#1F89C5] w-fit text-white py-1 px-2 rounded-t">CSS</p>
			<div
				ref="cssEditor"
				class="editor-container bg-neutral-50 border border-gray-300 hover:border-[#1F89C5] rounded-b rounded-r pt-1 hover:shadow"
			></div>
		</div>
		<div class="col-span-1 cursor-text">
			<p class="font-bold bg-[#eab317] w-fit text-white py-1 px-2 rounded-t">JS</p>
			<div
				ref="jsEditor"
				class="editor-container bg-neutral-50 border border-gray-300 hover:border-[#eab317] rounded-b rounded-r pt-1 hover:shadow"
			></div>
		</div>
		<div class="col-span-3 mt-5">
			<h2 class="font-bold bg-green-400 w-fit text-gray-700 py-1 px-2 rounded-t mx-auto">Preview</h2>
			<iframe ref="preview" class="preview-container"></iframe>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
	import { EditorState } from '@codemirror/state';
	import { EditorView, basicSetup } from 'codemirror';
	import { html } from '@codemirror/lang-html';
	import { css } from '@codemirror/lang-css';
	import { javascript } from '@codemirror/lang-javascript';

	const htmlEditor = ref<HTMLElement | null>(null);
	const cssEditor = ref<HTMLElement | null>(null);
	const jsEditor = ref<HTMLElement | null>(null);
	const preview = ref<HTMLIFrameElement | null>(null);
	const activeTab = ref<'html' | 'css' | 'js'>('html'); // Tab mặc định

	// Khởi tạo code mặc định
	const htmlCode = ref(`<h1>Hello, World!</h1>`);
	const cssCode = ref(`body { font-family: Arial, sans-serif; color: blue; }`);
	const jsCode = ref(`console.log("Hello, CodeMirror!");`);

	// CodeMirror Views
	let htmlView: EditorView | null = null;
	let cssView: EditorView | null = null;
	let jsView: EditorView | null = null;

	// Cập nhật Preview
	const updatePreview = () => {
		if (preview.value) {
			const iframeDocument = preview.value.contentDocument;
			if (iframeDocument) {
				const fullCode = `
                <html>
                <head>
                    <style>${cssCode.value}</style>
                </head>
                <body>
                    ${htmlCode.value}
                    <script>
                        try {
                            ${jsCode.value}
                        } catch (e) {
                            console.error(e);
                        }
                    <\/script>
                </body>
                </html>`;
				iframeDocument.open();
				iframeDocument.write(fullCode);
				iframeDocument.close();
			}
		}
	};

	// Khởi tạo CodeMirror
	onMounted(() => {
		// HTML Editor
		if (htmlEditor.value) {
			const state = EditorState.create({
				doc: htmlCode.value,
				extensions: [
					basicSetup,
					html(),
					EditorView.updateListener.of(update => {
						if (update.docChanged) {
							htmlCode.value = update.state.doc.toString();
							updatePreview();
						}
					}),
				],
			});
			htmlView = new EditorView({ state, parent: htmlEditor.value });
		}

		// CSS Editor
		if (cssEditor.value) {
			const state = EditorState.create({
				doc: cssCode.value,
				extensions: [
					basicSetup,
					css(),
					EditorView.updateListener.of(update => {
						if (update.docChanged) {
							cssCode.value = update.state.doc.toString();
							updatePreview();
						}
					}),
				],
			});
			cssView = new EditorView({ state, parent: cssEditor.value });
		}

		// JavaScript Editor
		if (jsEditor.value) {
			const state = EditorState.create({
				doc: jsCode.value,
				extensions: [
					basicSetup,
					javascript(),
					EditorView.updateListener.of(update => {
						if (update.docChanged) {
							jsCode.value = update.state.doc.toString();
							updatePreview();
						}
					}),
				],
			});
			jsView = new EditorView({ state, parent: jsEditor.value });
		}

		updatePreview(); // Render preview lần đầu
	});

	// Cleanup CodeMirror khi component bị hủy
	onBeforeUnmount(() => {
		htmlView?.destroy();
		cssView?.destroy();
		jsView?.destroy();
	});
</script>

<style lang="scss" scoped>
	.tabs {
		display: flex;
		gap: 10px;
		margin-bottom: 10px;
	}
	.tabs button {
		padding: 10px;
		cursor: pointer;
		background: #ddd;
		border: none;
	}
	.tabs button.active {
		background: #333;
		color: white;
	}
	.editor-container {
		height: 250px;
	}
	.preview-container {
		width: 100%;
		min-height: 300px;
		border: 1px solid #ccc;
		background-color: #fff;
	}
</style>
