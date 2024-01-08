<template>
	<!-- <div style="min-width: 24px">
		<img v-if="fileTypeComputed === 'xls'" src="../../assets/images/icon/excelFile.svg" alt="" />
		<img v-if="fileTypeComputed === 'doc'" src="../../assets/images/icon/wordFile.svg" alt="" />
		<img v-if="fileTypeComputed === 'pdf'" src="../../assets/images/icon/pdfFile.svg" alt="" />
		<img v-if="fileTypeComputed === 'image'" src="../../assets/images/icon/imageFile.svg" alt="" />
	</div> -->
	<div></div>
</template>
<script lang="ts">
	import { storeToRefs } from 'pinia';
	import { useInternalStore } from '../../store/Internal';
	export default {
		props: {
			fileName: {
				type: String,
				default: '',
			},
		},
		setup() {
			const { fileType } = storeToRefs(useInternalStore());
			return {
				fileType,
			};
		},
		computed: {
			fileTypeComputed() {
				let type = 'unknow';
				const filePop = this.fileName.split('.').pop() || 'unknow';
				for (const key in this.fileType) {
					if (Object.prototype.hasOwnProperty.call(this.fileType, key)) {
						// @ts-ignore
						const t = this.fileType[key] as string[];
						if (t.includes(filePop)) {
							type = `${key}`;
						}
					}
				}
				return type;
			},
		},
	};
</script>
