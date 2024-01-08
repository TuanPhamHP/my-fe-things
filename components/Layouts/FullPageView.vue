<template>
	<TransitionRoot as="template" :show="Boolean(open)">
		<Dialog as="div" class="relative z-50">
			<TransitionChild
				as="template"
				enter="ease-out duration-300"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="ease-in duration-200"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
			</TransitionChild>
			<div class="fixed inset-0 z-10 overflow-y-auto">
				<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<TransitionChild
						as="template"
						enter="ease-out duration-300"
						enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enter-to="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leave-from="opacity-100 translate-y-0 sm:scale-100"
						leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<DialogPanel
							class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-0 sm:w-full max-w-full"
						>
							<div ref="fpvw" class="full-page-show" tabindex="2" @keydown="handleKeypressed">
								<div class="full-page-header bg-neutral-700 flex justify-end items-center gap-6 px-10">
									<Icon
										v-if="currentTye === 'image'"
										name="ph:download-fill"
										size="32px"
										class="text-white cursor-pointer"
										@click="onDownload(selectedImage)"
									/>
									<Icon name="carbon:close" size="32px" class="text-white cursor-pointer" @click="closeView" />
								</div>
								<div class="body--t flex">
									<div v-if="listImagePreview.length > 1" class="prev-t nav--mod-t flex items-center justify-center">
										<img
											v-if="currentTye === 'image'"
											src="../../assets/images/prev-btn.svg"
											alt=""
											height="48px"
											class="cursor-pointer nav-icon-t"
											@click="prevImage"
										/>
									</div>
									<div class="main-content-t w-full">
										<div class="image-fullsize flex items-center justify-center">
											<img
												v-if="currentTye === 'image'"
												id="fz-img"
												:src="returnImagesURL(selectedImage) || ''"
												draggable="false"
												alt=""
												:class="returnNatural(selectedImage)"
											/>
											<!-- VIDEO -->
											<video
												v-if="currentTye === 'video'"
												width="100%"
												controls
												class="video-preview cursor-pointer btn-no-outline"
												preload="none"
												autoplay
											>
												<source :src="listImagePreview[0].url + '#t=0.5'" type="video/mp4" />
											</video>
										</div>
										<div
											v-if="currentTye === 'image' && listImagePreview.length > 1"
											id="bottom-album"
											class="bottom-album pt-5"
										>
											<div
												id="wrapper-album"
												class="wrapper-album flex"
												:class="listImagePreview.length < 17 ? 'justify-center' : ''"
											>
												<span v-for="(src, idx) in listImagePreview" :key="idx + 'ss'">
													<img
														:src="src.url"
														alt=""
														:name="'imgIdx-' + idx"
														draggable="false"
														:class="selectedImage === src.url ? 'onselected-img' : ''"
														class="blr-img cursor-pointer"
														@click="setselectedImage(src.url)"
													/>
												</span>
											</div>
										</div>
									</div>
									<div v-if="listImagePreview.length > 1" class="next-t nav--mod-t flex items-center justify-center">
										<img
											v-if="currentTye === 'image'"
											src="../../assets/images/next-btn.svg"
											alt=""
											height="48px"
											class="cursor-pointer nav-icon-t"
											@click="nextImage"
										/>
									</div>
								</div>
								<!-- <canvas id="myCanvas" class="d-none"></canvas> -->
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script lang="ts">
	import { storeToRefs } from 'pinia';
	import { useInternalStore } from '../../store/Internal';
	import { StringOrNull } from 'models';
	import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
	export default {
		props: {
			onShow: {
				type: Boolean,
				default: false,
			},
			currentTye: {
				type: String,
				default: 'image',
			},
		},
		components: {
			Dialog,
			DialogPanel,
			TransitionChild,
			TransitionRoot,
		},
		setup() {
			const { listImagePreview, selectedImgIndex } = storeToRefs(useInternalStore());
			const { setListImagePreview, setSelectedImgIndex } = useInternalStore();
			return { listImagePreview, selectedImgIndex, setListImagePreview, setSelectedImgIndex };
		},
		data() {
			return {
				selectedImage: '' as string,
				open: true,
			};
		},
		computed: {
			imageUrlArray() {
				return this.currentTye === 'image' ? this.listImagePreview.map(o => o.url) : [];
			},
		},
		watch: {
			onShow() {
				if (this.onShow) {
					this.$nextTick(async () => {
						await this.dirtyWait(150);
						const fpvw = this.$refs.fpvw as HTMLElement;
						if (!fpvw) {
							return;
						}
						fpvw.focus();
						const fps = document.querySelector('.full-page-show') as HTMLElement;
						fps?.focus();
					});
					if (this.currentTye === 'image') {
						if (this.selectedImgIndex) {
							this.selectedImage = this.listImagePreview[this.selectedImgIndex].url;
						} else {
							this.selectedImage = this.listImagePreview[0].url;
						}
					}
					// this.open = this.onShow;
				}
			},
		},
		mounted() {
			if (this.currentTye === 'image') {
				if (this.selectedImgIndex) {
					this.selectedImage = this.listImagePreview[this.selectedImgIndex].url;
				} else {
					this.selectedImage = this.listImagePreview[0].url;
				}
			}
		},
		methods: {
			dirtyWait(ms = 100) {
				return new Promise(resolve => {
					setTimeout(() => {
						resolve(true);
					}, ms);
				});
			},
			returnNatural(_src: string) {
				const imgs = new Image();
				imgs.setAttribute('src', _src);

				return imgs.naturalHeight >= imgs.naturalWidth ? 'height-over-width' : 'height-under-width';
			},
			setselectedImage(img: string) {
				this.selectedImage = img;
			},
			returnImagesURL(_url: string) {
				return _url && _url.includes('http') ? _url : _url;
			},
			nextImage() {
				this.imageUrlArray.indexOf(this.selectedImage) === this.imageUrlArray.length - 1
					? (() => {
							this.selectedImage = this.imageUrlArray[0];
							setTimeout(() => {
								const wa = document.querySelector('#wrapper-album') as HTMLElement;
								wa.style.marginLeft = `0`;
							}, 10);
					  })()
					: (this.selectedImage = this.imageUrlArray[this.imageUrlArray.indexOf(this.selectedImage) + 1]);
				setTimeout(() => {
					const stI = document.querySelector('.onselected-img') as HTMLElement;
					const btA = document.querySelector('#bottom-album') as HTMLElement;
					const wa = document.querySelector('#wrapper-album') as HTMLElement;
					if (stI && btA && stI.offsetLeft > btA.clientWidth / 2) {
						const count = Math.floor(btA.clientWidth / 132);
						//@ts-ignore
						wa.style.marginLeft = `-${(+stI.getAttribute('name').replace('imgIdx-', '') - count) * 64}px`;
					}
				}, 1);
			},
			prevImage() {
				this.imageUrlArray.indexOf(this.selectedImage) === 0
					? (() => {
							this.selectedImage = this.imageUrlArray[this.imageUrlArray.length - 1];
							setTimeout(() => {
								const stI = document.querySelector('.onselected-img') as HTMLElement;
								const btA = document.querySelector('#bottom-album') as HTMLElement;
								const wa = document.querySelector('#wrapper-album') as HTMLElement;
								if (stI && btA && stI.offsetLeft > btA.clientWidth / 2) {
									const count = Math.floor(btA.clientWidth / 132);
									//@ts-ignore
									wa.style.marginLeft = `-${(+stI.getAttribute('name').replace('imgIdx-', '') - count) * 64}px`;
								}
							}, 1);
					  })()
					: (this.selectedImage = this.imageUrlArray[this.imageUrlArray.indexOf(this.selectedImage) - 1]);
				setTimeout(() => {
					const wa = document.querySelector('#wrapper-album') as HTMLElement;
					if (wa.style.marginLeft) {
						//@ts-ignore
						const c = Math.floor(wa.style.marginLeft.replace('px', '').replace('-', '') / 66);
						wa.style.marginLeft = `-${c - 1 > 0 ? (c - 1) * 60 : 0}px`;
					}
				}, 10);
			},
			download(url: string, name: string) {
				if (!url) {
					throw new Error('Resource URL not provided! You need to provide one');
				}

				if (!url.includes('http')) {
					url = 'https' + url;
					const a = document.createElement('a') as HTMLAnchorElement;
					a.href = url;
					// @ts-ignore
					a.style = 'display: none';

					if (name && name.length) a.download = name;
					document.body.appendChild(a);
					a.click();
					return;
				}
				fetch(url, {
					mode: 'no-cors',
				})
					.then(response => response.blob())
					.then(blob => {
						const blobURL = URL.createObjectURL(blob);
						const a = document.createElement('a') as HTMLAnchorElement;
						a.href = blobURL;
						// @ts-ignore
						a.style = 'display: none';
						a.target = '_blank';
						if (name && name.length) a.download = name;
						document.body.appendChild(a);
						a.click();
					})
					.catch(err => console.log(err));
			},
			closeView() {
				this.setListImagePreview([]);
				this.setSelectedImgIndex(0);
			},
			downloadImage() {
				if (this.currentTye === 'image') {
					this.download(this.selectedImage, `${this.selectedImage.split('/').pop()}`);
				} else {
					this.download(
						this.listImagePreview[0].url || '',

						//@ts-ignore
						this.listImagePreview[0].url.split('/').pop()
					);
				}
			},
			handleKeypressed(ev: KeyboardEvent) {
				if (ev.keyCode === 39) {
					this.nextImage();
				}
				if (ev.keyCode === 37) {
					this.prevImage();
				}
				if (ev.keyCode === 27) {
					this.closeView();
				}
			},
			onDownload(url: string) {
				const a = document.createElement('a') as HTMLAnchorElement;
				a.setAttribute('href', url);
				a.setAttribute('target', '_blank');
				a.setAttribute('download', url.replace(/^.*[\\\/]/, ''));
				document.body.appendChild(a);
				a.click();
				a.remove();
			},
			// onDownload(url: string) {
			// 	fetch(url, {
			// 		method: 'GET', // *GET, POST, PUT, DELETE, etc.
			// 		mode: 'no-cors', // no-cors, *cors, same-origin
			// 		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			// 		credentials: 'same-origin', // include, *same-origin, omit
			// 		headers: {
			// 			'Access-Control-Allow-Origin': '*',
			// 			Accept: '*/*',
			// 			'Sec-Fetch-Mode': 'cors',
			// 			'Sec-Fetch-Site': 'cross-site',
			// 		},
			// 	})
			// 		.then(response => response.blob())
			// 		.then(blob => {
			// 			const url = window.URL.createObjectURL(new Blob([blob], { type: 'image/png' }));
			// 			const a = document.createElement('a') as HTMLAnchorElement;
			// 			// var file = new Blob([blob], { type: 'image/jpeg' });
			// 			console.log(url);
			// 			a.setAttribute('href', url);
			// 			a.setAttribute('download', 'download_image' + new Date().getTime());

			// 			a.setAttribute('target', '_blank');
			// 			document.body.appendChild(a);
			// 			a.click();
			// 			a.remove();
			// 		});
			// },
		},
	};
</script>

<style lang="scss" scoped>
	.full-page-show {
		/* position: relative; */
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.85);
		z-index: 123456;
	}
	.btn-close-preview-page {
		width: 42px;
		height: 42px;
		line-height: 42px;
		padding: 0;
	}
	.full-page-header {
		height: 70px;
	}
	.pd-040 {
		padding: 0 40px;
	}
	.nav--mod-t {
		width: 200px;
		min-width: 200px;
	}
	.main-content-t {
		height: calc(100vh - 112px);
	}
	.image-fullsize {
		height: calc(100% - 198px);
		.height-under-width {
			max-width: 100% !important;
			width: auto !important;
			height: auto !important;
			max-height: 100% !important;
		}
		.height-over-width {
			max-width: 100% !important;
			max-height: 100% !important;
			height: auto !important ;
			width: auto !important;
		}
		video {
			max-height: calc(100% - 0px);
		}
	}
	.nav-icon-t {
		transition: 0.2s ease;
		opacity: 0.8;
		&:hover {
			transform: scale(1.05);
			opacity: 1;
		}
	}
	.bottom-album {
		overflow: hidden;
		width: calc(100vw - 200px - 200px - 42px);
		margin: auto;
		.wrapper-album {
			transition: 0.2s ease;
			overflow-x: scroll;
			overflow-y: hidden;
			&::-webkit-scrollbar {
				width: 10px;
				height: 0;
			}
		}
		img {
			width: 64px;
			height: 64px;
			object-fit: cover;
			margin: 2px 3px;
			filter: brightness(0.5);
		}
		.onselected-img {
			filter: brightness(1);
		}
		&::-webkit-scrollbar {
			width: 10px;
			height: 0;
		}
	}
	.btn-close-img {
		position: fixed;
		right: 76px;
		top: 16px;
		transition: 0.2s ease;
		opacity: 0.8;
		&:hover {
			transform: scale(1.05);
			opacity: 1;
		}
	}
</style>
