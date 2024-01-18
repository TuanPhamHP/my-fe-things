<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full">
			<h1 :class="`text-slate-900 dark:text-white font-bold text-3xl md:text-3xl `">Meme generator</h1>

			<div class="flex gap-2 py-10">
				<div>
					<p class="text-slate-900 dark:text-white font-semibold mb-2">Chiều rộng:</p>
					<div v-for="item in listImageSizeOption" :key="item.id" class="flex items-center mb-1">
						<!-- <input :id="`imageOpt-${item.id}`" type="radio" name="imageOpt" class="hidden" /> -->
						<label
							:for="`imageOpt-${item.id}`"
							class="text-sm font-medium text-slate-900 dark:text-white flex items-center gap-2 cursor-pointer px-1 py-1 rounded hover:bg-green-100 hover:dark:bg-gray-300 hover:dark:text-slate-900"
							@click="selectedImageOption = item.id"
						>
							<Icon
								v-if="selectedImageOption === item.id"
								name="ph:check-circle-fill"
								size="18px"
								class="text-green-500"
							/>
							<Icon v-else="selectedImageOption === item.id" name="ph:circle" size="18px" class="text-gray-500" />
							{{ item.name }}</label
						>
					</div>
					<p class="text-slate-900 dark:text-white font-semibold mb-2">Ratio:</p>
					<div v-for="item in listImageRatioOption" :key="item.id" class="flex items-center mb-1">
						<!-- <input :id="`imageOpt-${item.id}`" type="radio" name="imageOpt" class="hidden" /> -->
						<label
							:for="`imageRatio-${item.id}`"
							class="text-sm font-medium text-slate-900 dark:text-white flex items-center gap-2 cursor-pointer px-1 py-1 rounded hover:bg-green-100 hover:dark:bg-gray-300 hover:dark:text-slate-900"
							@click="selectedImageRatio = item.id"
						>
							<Icon
								v-if="selectedImageRatio === item.id"
								name="ph:check-circle-fill"
								size="18px"
								class="text-green-500"
							/>
							<Icon v-else="selectedImageRatio === item.id" name="ph:circle" size="18px" class="text-gray-500" />
							{{ item.name }}</label
						>
					</div>
				</div>
				<div>
					<label
						id="labelMemeImageBackground"
						for="memeImageBackground"
						class="rounded-xl px-1 py-1 overflow-hidden bg-gray-200 dark:bg-gray-300 flex items-center justify-center cursor-pointer border-4 border-dashed border-slate-900"
						:class="[selectedImageOptionDetail ? ` w-[${selectedImageOptionDetail.width}]` : ' w-[300px] h-[400px]']"
						:style="`${selectedImageRatioDetail ? `aspect-ratio: ${selectedImageRatioDetail.value}` : ''}`"
					>
						<Icon v-if="!myFile" name="solar:album-outline" size="38px" class="text-gray-500 dark:text-slate-900" />
						<img v-if="myFile" :src="myFile.src" alt="" class="object-contain w-full h-full" />
					</label>
					<input id="memeImageBackground" class="hidden" type="file" accept="image/*" @change="imageChange" />

					<div></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import FileUploader from '@/components/Form/FileUploader.vue';
	import { CustomFileRespone } from '../../models/index';

	export default {
		components: { FileUploader },
		data() {
			return {
				selectedImageOption: 1,

				fileRemoved: [] as (string | number)[],
				listImageSizeOption: [
					{
						id: 1,
						name: '300px',
						width: '300px',
					},
					{
						id: 2,
						name: '400px',
						width: '400px',
					},
					{
						id: 5,
						name: '500px',
						width: '500px',
					},
				],
				listImageRatioOption: [
					{
						id: 1,
						name: '1 / 1',
						value: '1 / 1',
					},
					{
						id: 2,
						name: '16 / 9',
						value: '16 / 9',
					},
					{
						id: 3,
						name: '4 / 3',
						value: '4 / 3',
					},
				],
				selectedImageRatio: 1,
				myFile: null as Record<string, any> | null,
			};
		},
		computed: {
			selectedImageOptionDetail() {
				return this.listImageSizeOption.find(o => o.id === this.selectedImageOption);
			},
			selectedImageRatioDetail() {
				return this.listImageRatioOption.find(o => o.id === this.selectedImageRatio);
			},
		},
		methods: {
			async imageChange(event: Event) {
				if (!event.target) {
					return;
				}
				const target = event.target as HTMLInputElement & EventTarget;
				const files = target.files;
				if (!files) {
					return;
				}
				for (const file of files) {
					const target = await this.onChangesImage(file);
					this.myFile = target;
				}
			},
			getImageDimensions(img: HTMLImageElement): any {
				return new Promise(resolve => {
					img.onload = () => {
						resolve({ width: img.width, height: img.height });
					};
				});
			},
			onChangesImage(file: File): Promise<Record<string, any>> {
				return new Promise(resolve => {
					if (file.type.includes('image')) {
						const reader = new FileReader();
						reader.onload = async event => {
							if (!event.target) {
								return;
							}
							const img = document.createElement('img');
							img.src = `${event.target.result || ''}`;
							const { width, height } = await this.getImageDimensions(img);
							resolve({
								_id: `${new Date().getTime()}_${Math.random()}`,
								name: file.name,
								src: event.target.result,
								url: event.target.result,
								type: 'image',
								width,
								height,
								blob: file,
								sizes: file.size,
							});
						};
						reader.readAsDataURL(file);
					} else {
						resolve({
							_id: `${new Date().getTime()}_${Math.random()}`,
							name: file.name,
							type: 'file',
							blob: file,
							sizes: file.size,
						});
					}
				});
			},
		},
	};
</script>
<style lang="scss" scoped></style>
