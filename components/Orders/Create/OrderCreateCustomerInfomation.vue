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
					required
					:isError="Boolean(dataErrors.customer_name) && flagSubmit"
					:errorMsg="dataErrors.customer_name"
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
					required
					:isError="Boolean(dataErrors.customer_phone) && flagSubmit"
					:errorMsg="dataErrors.customer_phone"
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
					required
					:isError="Boolean(dataErrors.company_name) && flagSubmit"
					:errorMsg="dataErrors.company_name"
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
					required
					:isError="Boolean(dataErrors.company_enterprise_code) && flagSubmit"
					:errorMsg="dataErrors.company_enterprise_code"
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
					required
					:isError="Boolean(dataErrors.company_enterprise_gdt_code) && flagSubmit"
					:errorMsg="dataErrors.company_enterprise_gdt_code"
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
					required
					:isError="Boolean(dataErrors.company_address) && flagSubmit"
					:errorMsg="dataErrors.company_address"
				/>
			</div>

			<div class="col-span-1">
				<FileUploader
					:title="'Tải lên Giấy phép đăng ký kinh doanh'"
					:suffixIconName="'bi:upload'"
					:local-file-removed="fileRemoved"
					@on-change="onChangeLicenseFiles"
				/>

				<div class="mt-2">
					<div v-for="item in businessLicenseFile" :key="item.name" class="flex items-center py-1">
						<span class="flex items-start gap-2 text-info-500">
							<FileIcon :file-name="item.original_name" /> {{ item.original_name }}</span
						>
						<span class="ml-auto cursor-pointer" @click="removeLocalFile(item)"
							><Icon name="carbon:close" size="18px" class="text-red-500" />
						</span>
						<!-- <span class="ml-auto">{{ $globalHelpers.formatBytes(item.sizes || 0) }}</span> -->
					</div>
				</div>
			</div>
			<div class="col-span-1">
				<FileUploader
					:title="'Tải lên dấu khống công ty khách hàng'"
					:suffixIconName="'bi:upload'"
					required
					:local-file-removed="fileRemoved"
					@on-change="onChangeSealFiles"
					:is-error="Boolean(dataErrors.companySealFile) && flagSubmit"
				/>

				<div class="mt-2">
					<div v-for="item in companySealFile" :key="item.name" class="flex items-center py-1">
						<span class="flex items-start gap-2 text-info-500">
							<FileIcon :file-name="item.original_name" /> {{ item.original_name }}</span
						>
						<span class="ml-auto cursor-pointer" @click="removeLocalFile(item)"
							><Icon name="carbon:close" size="18px" class="text-red-500" />
						</span>
						<!-- <span class="ml-auto">{{ $globalHelpers.formatBytes(item.sizes || 0) }}</span> -->
					</div>
				</div>
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
	export default {
		props: {
			createFlag: {
				type: Number,
				default: 1,
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
		mounted() {},
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
			};
		},
		computed: {
			dataRules(): Record<string, string[]> {
				return {
					customer_name: ['required'],
					customer_phone: ['required'],
					company_name: ['required'],
					company_address: ['required'],
					company_enterprise_code: ['required'],
					company_enterprise_gdt_code: ['required'],
					companySealFile: ['array:required'],
				};
			},
			dataErrors() {
				const obj = {
					customer_name: this.customer_name,
					customer_phone: this.customer_phone,
					company_name: this.company_name,
					company_address: this.company_address,
					company_enterprise_code: this.company_enterprise_code,
					company_enterprise_gdt_code: this.company_enterprise_gdt_code,
					companySealFile: this.companySealFile.map(o => o.id),
				};
				return this.$globalHelpers.getDataErrors(this.dataRules, obj);
			},
		},
		watch: {
			createFlag: {
				handler() {
					this.triggerSubmitData();
				},
			},
		},
		methods: {
			triggerSubmitData() {
				this.flagSubmit = true;
				if (Object.keys(this.dataErrors).length) {
					this.$emit('invalid-data', 'customer');
					return;
				}
				const obj = {
					customer_name: this.customer_name,
					customer_phone: this.customer_phone,
					company_name: this.company_name,
					company_address: this.company_address,
					company_enterprise_code: this.company_enterprise_code,
					company_enterprise_gdt_code: this.company_enterprise_gdt_code,
					companySealFile: this.companySealFile.map(o => o.id),
					businessLicenseFile: this.businessLicenseFile.map(o => o.id),
				};
				this.$emit('submit-data', {
					type: 'customer',
					data: {
						customer: obj,
					},
				});
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
