<template>
	<div v-if="unique" class="file-input-holder">
		<p v-if="title" class="block text-md font-regular leading-6 text-gray-900 mb-2">
			{{ title }}
			<span v-if="required" class="text-red-500">*</span>
		</p>
		<label
			:for="`input-file-${unique}`"
			class="order-attachments cursor-pointer py-2 border border-1 rounded-lg border-dashed block flex items-center gap-2 justify-center"
			:class="isError ? 'border-red-500 hover:bg-red-100' : 'border-info-400 hover:bg-info-100'"
		>
			<p class="text-neutral-400 text-sm text-center font-semibold">Nhấn vào đây để tải file lên</p>

			<Icon v-if="suffixIconName" :name="suffixIconName" class="text-neutral-400" />
		</label>
		<input :id="`input-file-${unique}`" type="file" class="none hidden" multiple @change="onChangeFile" />
	</div>
	<div class="mt-2">
		<div v-for="item in filesClipboard.slice(0, maxFile)" :key="item.id" class="flex items-center py-1">
			<span class="flex items-start gap-2 text-info-500">
				{{ $globalHelpers.getShortFileName(item.original_name) }}</span
			>
			<span class="ml-auto cursor-pointer" @click="$emit('removeLocalFile', item)">
				<Icon name="carbon:close" size="18px" class="text-red-500" />
			</span>
			<!-- <span class="ml-auto">{{ $globalHelpers.formatBytes(item.sizes || 0) }}</span> -->
		</div>
		<p
			v-if="filesClipboard.length > 3"
			class="text-info-500 flex items-center gap-2 mt-2 justify-center text-center w-25 py-2 cursor-pointer hover:bg-info-100/50 rounded mx-auto"
			@click="collapse = !collapse"
		>
			{{ collapse ? 'Xem thêm' : 'Thu gọn' }}
			<Icon :name="collapse ? 'tabler:caret-down-filled-light' : 'ph:caret-up-light'" />
		</p>
	</div>
</template>

<script lang="ts">
	import { CustomFileRespone, apiResponde } from '../../models/index';

	export default {
		props: {
			title: {
				type: String,
				default: '',
			},
			required: {
				type: Boolean,
				default: false,
			},
			isError: {
				type: Boolean,
				default: false,
			},
			localFileRemoved: {
				type: Array as PropType<(string | number)[]>,
				default: [],
			},
			suffixIconName: {
				type: String,
				default: '',
			},
			initData: {
				type: Array as PropType<CustomFileRespone[]>,
				default: [],
			},
		},
		emits: ['on-change', 'removeLocalFile'],
		data() {
			return {
				firstUpload: false,
				filesClipboard: [] as CustomFileRespone[],
				acceptedFileType: ['docx', 'xls', 'xlsx', 'png', 'jpg', 'jpeg', 'pdf'],
				fileSizeLimit: 1024 * 1024 * 5,
				unique: '',
				collapse: true,
			};
		},
		watch: {
			filesClipboard: {
				deep: true,
				handler() {
					this.$emit('on-change', [...this.filesClipboard]);
				},
			},
			localFileRemoved: {
				deep: true,
				handler() {
					if (this.localFileRemoved.length) {
						//@ts-ignore
						this.filesClipboard = this.filesClipboard.filter(
							(o: CustomFileRespone) => !this.localFileRemoved.includes(o.id)
						);
					}
				},
			},
		},
		computed: {
			maxFile() {
				const currentLength = this.filesClipboard.length;
				return this.filesClipboard.length > 3 ? (this.collapse ? 3 : currentLength) : currentLength;
			},
		},
		mounted() {
			if (Array.isArray(this.initData) && this.initData.length) {
				this.filesClipboard = [...this.initData];
			}
			this.generateUniqueInputForm();
		},
		methods: {
			getShortFileName(_str: string, numb: number = 32) {
				if (!_str) {
					return '';
				}
				if (_str.length < numb) {
					return _str;
				}
				return _str.slice(0, numb) + '...' + _str.split('.').pop();
			},
			generateUniqueInputForm() {
				const num = Math.floor(Math.random() * new Date().getTime());
				if (document.querySelector(`#input-file-${num}`)) {
					this.generateUniqueInputForm();
				} else {
					this.unique = `${num}`;
				}
			},
			onChangeFile(event: Event) {
				const target = event.target as HTMLInputElement;
				if (!target) {
					return;
				}
				const files = target.files as FileList;
				// if (files.length + this.filesClipboard.length > this.limitFiles.amount) {
				//   alert("Số lượng file quá lớn !")
				//   return
				// }
				this.firstUpload = true;
				for (let file of files) {
					const fileTypeByName = (file.name.split('.').pop()?.toLowerCase() || '') as string;

					if (!this.acceptedFileType.includes(fileTypeByName)) {
						this.$globalHelpers.setSnack({
							text: `không thể upload file: ${file.name} do định dạng file không phù hợp`,
							type: 'error',
						});
					} else if (file.size > this.fileSizeLimit) {
						this.$globalHelpers.setSnack({
							text: `không thể upload file: ${file.name} do kích thước quá lớn, kích thước tối đa: ${
								this.fileSizeLimit / 1024 ** 2
							}Mb .`,
							type: 'error',
						});
					} else if (file.type.includes('image')) {
						const reader = new FileReader();
						reader.onload = (event: ProgressEvent<FileReader>) => {
							const img = document.createElement('img') as HTMLImageElement;

							img.src = event.target?.result as string;
							const formData = new FormData();

							formData.append('upload_files[]', file);
							this.$api.fileHandlers
								.upload(formData)
								.then(
									res => {
										this.filesClipboard = this.filesClipboard.concat([
											//@ts-ignore
											{
												...res.data[0],
												sortName: this.getShortFileName(res.data[0].original_name) || 'unknown-file-name',
												name: res.data[0].name || res.data[0].original_name,
											},
										]);
									},
									(error: apiResponde) => {
										this.$globalHelpers.setSnack({
											text: `không thể upload file: ${file.name} do: ${error.data?.message}`,
											type: 'error',
										});
									}
								)
								.catch((error: any) => {
									this.$globalHelpers.setSnack({
										text: `không thể upload file: ${file.name} do: ${error}`,
										type: 'error',
									});
								});
						};
						reader.readAsDataURL(file);
					} else {
						const formData = new FormData();

						formData.append('upload_files[]', file);
						this.$api.fileHandlers
							.upload(formData)
							.then(
								res => {
									this.filesClipboard = this.filesClipboard.concat([
										//@ts-ignore
										{
											...res.data[0],
											sortName: this.getShortFileName(res.data[0].original_name) || 'unknown-file-name',
											name: res.data[0].name || res.data[0].original_name,
										},
									]);
								},
								(error: apiResponde) => {
									this.$globalHelpers.setSnack({
										text: `không thể upload file: ${file.name} do: ${error.data?.message}`,
										type: 'error',
									});
								}
							)
							.catch((error: any) => {
								this.$globalHelpers.setSnack({
									text: `không thể upload file: ${file.name} do: ${error}`,
									type: 'error',
								});
							});
					}
				}
			},
			getFileProgressClass(status_id: number) {
				switch (status_id) {
					case 3:
						return 'file-progress--on-queue';
					case 2:
						return 'file-progress--on-progress';
					case 4:
						return 'file-progress--on-failed';
					case 5:
						return 'file-progress--on-success';

					default:
						return '';
				}
			},
		},
	};
</script>
<style lang="scss" scoped>
	.order-attachments {
		height: 42px;
	}
</style>
