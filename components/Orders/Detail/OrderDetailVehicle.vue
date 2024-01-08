<template>
	<div class="flex items-center justify-between w-full">
		<h1 class="title-sm font-semibold text-accent-900">Thông tin xe</h1>
		<p
			v-if="listDocs.length"
			class="cursor-pointer flex items-center gap-2 text-info-500 text-underline hover:bg-info-100/50 px-2 py-2 underline underline-offset-2 rounded"
			@click="viewDocs"
		>
			<Icon name="ic:outline-remove-red-eye" size="24px" class="min-w-[24px]" />
			Xem tài liệu
		</p>
	</div>
	<div class="pt-6 pb-4 px-0 grid grid-cols-3 gap-x-4 gap-y-4">
		<div class="col-span-1">
			<p class="text-md text-neutral-500 mb-2">Loại container</p>
			<p class="text-md font-semibold text-gray-900 py-2">
				{{ detailData.vehicle?.container_type.name || '---' }}
			</p>
		</div>
		<div class="col-span-1">
			<p class="text-md text-neutral-500 mb-2">Biển kiểm soát</p>
			<p class="text-md font-semibold text-gray-900 py-2">
				{{ detailData.vehicle?.plate_number || '---' }}
			</p>
		</div>
		<div class="col-span-1 grid grid-cols-2">
			<div class="col-span-1">
				<p class="text-md text-neutral-500 mb-2">Số container</p>
				<p class="text-md font-semibold text-gray-900 py-2">
					{{ detailData.vehicle?.cont_number || '---' }}
				</p>
			</div>
			<div class="col-span-1">
				<p class="text-md text-neutral-500 mb-2">Số mooc</p>
				<p class="text-md font-semibold text-gray-900 py-2">
					{{ detailData.vehicle?.mooc_number || '---' }}
				</p>
			</div>
		</div>

		<FileListViewModal
			:visible="visibleListDoc"
			:listFile="listDocs"
			:closeModal="closeListDocs"
			:title="`Tài liệu thông tin xe`"
			@remove-file="selectFileToRemove"
		/>
		<ConfirmModal
			:visible="visibleRemoveFile"
			:title="'Xác nhận'"
			:message="'Xoá tệp này?'"
			:button-cancel-text="'Quay lại'"
			:button-confirm-text="'Vẫn xóa'"
			:loading="loadingConfirm"
			@submit="onRemoveFile"
			@cancel="cancelRemoveFile"
		/>
	</div>
</template>
<script lang="ts">
	import { formatDateHMDMY } from '../../../helpers/formatter';
	import { Order } from '../../../models/Order';
	import { PropType } from 'nuxt/dist/app/compat/capi';
	import FileListViewModal from '../../Modal/FileListViewModal.vue';
	import ConfirmModal from '../../Modal/ConfirmModal.vue';
	import { CustomFileRespone, FileByGroup } from 'models';
	export default {
		props: {
			detailData: {
				type: Object as PropType<Order>,
				default: {},
			},
		},
		emits: ['refresh-detail'],
		components: { FileListViewModal, ConfirmModal },
		data() {
			return {
				visibleListDoc: false,
				selectedFileToRemove: null as CustomFileRespone | null,
				loadingConfirm: false,
			};
		},
		computed: {
			listDocs(): FileByGroup[] {
				return [
					{
						group_name: 'Đăng ký đầu xe',
						items: [...(this.detailData.vehicle?.cont_registration_cert_files || [])],
					},
					{
						group_name: 'Đăng kiểm đầu xe',
						items: [...(this.detailData.vehicle?.cont_registry_cert_files || [])],
					},
					{
						group_name: 'Bảo hiểm xe',
						items: [...(this.detailData.vehicle?.vehicle_insurance_files || [])],
					},
					{
						group_name: 'Phù hiệu xe',
						items: [...(this.detailData.vehicle?.cont_sign_files || [])],
					},
					{
						group_name: 'Ảnh xe',
						items: [...(this.detailData.vehicle?.cont_image_files || [])],
					},
					{
						group_name: 'Đăng ký mooc',
						items: [...(this.detailData.vehicle?.mooc_registration_cert_files || [])],
					},
					{
						group_name: 'Đăng kiểm mooc',
						items: [...(this.detailData.vehicle?.mooc_registry_cert_files || [])],
					},
				] as FileByGroup[];
			},
			visibleRemoveFile() {
				return !!(this.selectedFileToRemove && this.selectedFileToRemove.id);
			},
		},
		methods: {
			formatDateHMDMY,
			viewDocs() {
				this.visibleListDoc = true;
			},
			closeListDocs() {
				this.visibleListDoc = false;
			},
			selectFileToRemove(file: CustomFileRespone) {
				this.selectedFileToRemove = { ...file } as CustomFileRespone;
			},
			getShortFileName(_str: string, numb: number = 32) {
				if (!_str) {
					return '';
				}
				if (_str.length < numb) {
					return _str;
				}
				return _str.slice(0, numb) + '...' + _str.split('.').pop();
			},
			onRemoveFile() {
				if (!this.selectedFileToRemove) {
					return;
				}
				this.loadingConfirm = true;
				this.$api.fileHandlers
					.delete(this.selectedFileToRemove?.id as string, {})
					.then(
						res => {
							this.$globalHelpers.setSnack({
								text: 'Xóa tệp thành công',
								type: 'success',
							});
							this.selectedFileToRemove = null;
							this.visibleListDoc = false;
							this.$emit('refresh-detail');
						},
						err => {
							this.$globalHelpers.setSnack({
								text: err?.response?._data?.message || 'Xóa tệp thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {
						this.loadingConfirm = false;
					});
			},
			cancelRemoveFile() {
				this.selectedFileToRemove = null;
			},
		},
	};
</script>
