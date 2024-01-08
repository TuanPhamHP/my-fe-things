<template>
	<div>
		<h1 class="title-sm font-semibold text-accent-900">Thông tin khách hàng</h1>
		<div class="pt-4 pb-4 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-3">
			<div class="col-span-1">
				<BlockInput
					v-model="customer_name"
					title="Tên khách hàng"
					placeholder="VD: Nguyễn Văn A"
					clearable
					rounded="md"
					size="xxl"
					is-disabled
				/>
			</div>
			<div class="col-span-1">
				<BlockInput
					v-model="customer_phone"
					title="Số điện thoại"
					placeholder="VD: 0987654321"
					clearable
					rounded="md"
					size="xxl"
					is-disabled
				/>
			</div>
			<div class="col-span-1">
				<BlockInput
					v-model="company_name"
					title="Tên công ty"
					placeholder="VD: Công ty A"
					clearable
					rounded="md"
					size="xxl"
					is-disabled
				/>
			</div>
			<div class="col-span-1">
				<BlockInput
					v-model="company_enterprise_code"
					title="Mã công ty"
					placeholder="VD: AB091234"
					clearable
					rounded="md"
					size="xxl"
					is-disabled
				/>
			</div>
			<div class="col-span-1">
				<BlockInput
					v-model="company_enterprise_gdt_code"
					title="Mã số thuế"
					placeholder="VD: MST09570935"
					clearable
					rounded="md"
					size="xxl"
					is-disabled
				/>
			</div>
			<div class="col-span-1">
				<BlockInput
					v-model="company_address"
					title="Địa chỉ công ty "
					placeholder="VD: 175 Trần Đăng Ninh, Phường Tam Thanh, Thành phố Lạn..."
					clearable
					rounded="md"
					size="xxl"
					is-disabled
				/>
			</div>

			<div class="col-span-1">
				<p class="block text-md font-regular leading-6 text-gray-900 mb-2">Giấy phép đăng ký kinh doanh</p>
				<div class="mt-2">
					<div
						v-for="item in businessLicenseFile.slice(0, businessCollapse ? 3 : businessLicenseFile.length)"
						:key="item.name"
						class="flex items-center py-1"
					>
						<span class="flex items-start gap-2 text-info-500"> {{ item.original_name }}</span>
					</div>

					<p
						v-if="businessLicenseFile.length > 3"
						class="text-center text-primary-600 mx-auto cursor-pointer bg-primary-200 cursor-pointer w-full px-4 py-2 mt-3 text-md rounded"
						@click="businessCollapse = !businessCollapse"
					>
						{{ businessCollapse ? 'Xem thêm' : 'Thu gọn' }}
					</p>
				</div>
			</div>
			<div class="col-span-1">
				<p class="block text-md font-regular leading-6 text-gray-900 mb-2">Dấu khống công ty khách hàng</p>

				<div class="mt-2">
					<div
						v-for="item in companySealFile.slice(0, companySealFileCollapse ? 3 : companySealFile.length)"
						:key="item.name"
						class="flex items-center py-1"
					>
						<span class="flex items-start gap-2 text-info-500"> {{ item.original_name }}</span>
					</div>
				</div>
				<p
					v-if="companySealFile.length > 3"
					class="text-center text-primary-600 mx-auto cursor-pointer bg-primary-200 cursor-pointer w-full px-4 py-2 mt-3 text-md rounded"
					@click="companySealFileCollapse = !companySealFileCollapse"
				>
					{{ companySealFileCollapse ? 'Xem thêm' : 'Thu gọn' }}
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { storeToRefs } from 'pinia';
	import { useAppStateStore } from '../../../store/appState';
	import { useInternalStore } from '../../../store/Internal';
	import NormalButton from '../../Buttons/NormalButton.vue';
	import SearchInput from '../../Form/SearchInput.vue';
	import SelectNormal from '../../Form/SelectNormal.vue';
	import AutocompleteMultiple from '../../Form/AutocompleteMultiple.vue';
	import AutocompleteNormal from '../../Form/AutocompleteNormal.vue';
	import SingleDatePickerNormal from '../../Form/SingleDatePickerNormal.vue';
	import BlockInput from '../../Form/BlockInput.vue';
	import FileUploader from '../../Form/FileUploader.vue';
	import FileIcon from '../../Layouts/FileIcon.vue';
	import FilesShowOff from '../../Orders/FilesShowOff.vue';

	import { CustomFileRespone } from '../../../models/index';
	import Datepicker from 'vue3-datepicker';
	import { computed } from 'vue';
	import { OrderDetail } from 'models/Order';
	export default {
		props: {
			detailData: {
				type: Object as PropType<OrderDetail>,
				default: {},
			},
		},
		setup() {
			const { $api } = useNuxtApp();
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();
			const { customerStatuses, listUsers, listMechandiseTypes } = storeToRefs(useInternalStore());
			const api = $api;
			const listCustomersComputed = computed(() => {
				return [];
			});
			return {
				api,
				customerStatuses,
				listCustomersComputed,
				listUsers,
				listMechandiseTypes,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
			};
		},
		components: {
			NormalButton,
			SearchInput,
			SelectNormal,
			BlockInput,
			AutocompleteNormal,
			AutocompleteMultiple,
			Datepicker,
			SingleDatePickerNormal,
			FileUploader,
			FileIcon,
			FilesShowOff,
		},
		mounted() {
			if (this.detailData) {
				this.syncData();
			}
		},
		data() {
			return {
				flagSubmit: false,
				customer_name: '' as string,
				customer_phone: '' as string,
				company_name: '' as string,
				company_address: '' as string,
				company_enterprise_code: '' as string,
				company_enterprise_gdt_code: '' as string,
				businessLicenseFile: [] as CustomFileRespone[],
				companySealFile: [] as CustomFileRespone[],
				fileRemoved: [] as (string | number)[],
				businessCollapse: false,
				companySealFileCollapse: false,
			};
		},
		computed: {
			dataRules(): Record<string, string[]> {
				return {};
			},
			dataErrors() {
				const obj = {};
				return this.$globalHelpers.getDataErrors(this.dataRules, obj);
			},
		},
		watch: {
			detailData: {
				deep: true,
				handler() {
					this.syncData();
				},
			},
		},
		methods: {
			triggerSubmitData() {},
			syncData() {
				if (!this.detailData) {
					return;
				}
				this.customer_name = this.detailData.customer?.name || '';
				this.customer_phone = this.detailData.customer?.phone || '';
				this.company_name = this.detailData.customer?.company_name || '';
				this.company_address = this.detailData.customer?.address || '';
				this.company_enterprise_code = this.detailData.customer?.enterprise_code || '';
				this.company_enterprise_gdt_code = this.detailData.customer?.enterprise_gdt_code || '';
				this.businessLicenseFile = this.detailData.customer?.business_license_files || [];
				this.companySealFile = this.detailData.customer?.company_seal_files || [];
			},
			onChangeLicenseFiles(arr: CustomFileRespone[]) {
				this.businessLicenseFile = [...arr];
			},
			onChangeSealFiles(arr: CustomFileRespone[]) {
				this.companySealFile = [...arr];
			},
			removeLocalFile(item: CustomFileRespone) {
				if (item.id) {
					this.fileRemoved.push(item.id);
				}
			},
		},
	};
</script>
<style lang="scss" scoped></style>
