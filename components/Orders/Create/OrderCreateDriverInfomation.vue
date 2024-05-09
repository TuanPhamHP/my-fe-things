<template>
	<div>
		<h1 class="title-sm font-semibold text-accent-900">Thông tin lái xe</h1>
		<div class="pt-4 pb-4 grid grid-cols-1 xl:grid-cols-3 gap-x-4 gap-y-3">
			<div class="col-span-1">
				<BlockInput
					v-model="driver_name"
					title="Tên lái xe"
					placeholder="VD: Nguyễn văn A"
					clearable
					rounded="md"
					size="xxl"
					required
					:isError="Boolean(dataErrors.driver_name) && flagSubmit"
					:errorMsg="dataErrors.driver_name"
				/>
			</div>
			<div class="col-span-1">
				<BlockInput
					v-model="driver_phone"
					title="Số điện thoại"
					placeholder="VD: 0987654321"
					clearable
					rounded="md"
					size="xxl"
					required
					:isError="Boolean(dataErrors.driver_phone) && flagSubmit"
					:errorMsg="dataErrors.driver_phone"
				/>
			</div>
			<div class="col-span-1">
				<BlockInput
					v-model="driver_id_no"
					title="Số CCCD/CMT"
					placeholder="VD: 031234567"
					clearable
					rounded="md"
					size="xxl"
					required
					:isError="Boolean(dataErrors.driver_id_no) && flagSubmit"
					:errorMsg="dataErrors.driver_id_no"
				/>
			</div>

			<div class="col-span-1">
				<FileUploaderWithPreview
					:title="'Tải lên CCCD/CMT'"
					:suffixIconName="'clarity:image-line'"
					required
					:local-file-removed="fileRemoved"
					@on-change="onChangeDriverIdNoFile"
					:is-error="Boolean(dataErrors.driverIdNoFile) && flagSubmit"
					@removeLocalFile="removeLocalFile"
				/>
			</div>

			<div class="col-span-1">
				<FileUploaderWithPreview
					:title="'Tải lên Giấy phép lái xe'"
					:suffixIconName="'clarity:image-line'"
					required
					:local-file-removed="fileRemoved"
					@on-change="onChangeDriverLicenseFile"
					:is-error="Boolean(dataErrors.driverLicenseFile) && flagSubmit"
					@removeLocalFile="removeLocalFile"
				/>
			</div>

			<div class="col-span-1">
				<FileUploaderWithPreview
					:title="'Tải lên Giấy thông hành'"
					:suffixIconName="'clarity:image-line'"
					required
					:local-file-removed="fileRemoved"
					@on-change="onChangeDriverPassportFile"
					:is-error="Boolean(dataErrors.driverPassportFile) && flagSubmit"
					@removeLocalFile="removeLocalFile"
				/>
			</div>

			<div class="col-span-1">
				<FileUploaderWithPreview
					:title="'Tải lên Giấy phép kinh doanh vận tải'"
					:suffixIconName="'clarity:image-line'"
					required
					:local-file-removed="fileRemoved"
					@on-change="onChangeBusinessLicenseFile"
					:is-error="Boolean(dataErrors.businessLicenseFile) && flagSubmit"
					@removeLocalFile="removeLocalFile"
				/>
			</div>

			<div class="col-span-1">
				<FileUploaderWithPreview
					:title="'Tải lên dấu khống công ty vận tải'"
					:suffixIconName="'clarity:image-line'"
					required
					:local-file-removed="fileRemoved"
					@on-change="onChangeCompanySealFile"
					:is-error="Boolean(dataErrors.companySealFile) && flagSubmit"
					@removeLocalFile="removeLocalFile"
				/>
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
	import FileUploaderWithPreview from '../../Form/FileUploaderWithPreview.vue';
	import FileIcon from '../../Layouts/FileIcon.vue';
	import FilesShowOff from '../../Orders/FilesShowOff.vue';

	import { CustomFile } from '../../../models/index';
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
			const { listContainerTypes } = storeToRefs(useInternalStore());
			const api = $api;

			return {
				api,
				listContainerTypes,
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
			FileUploaderWithPreview,
		},
		mounted() {},
		data() {
			return {
				flagSubmit: false,
				driver_name: '' as string,
				driver_phone: '' as string,
				driver_id_no: '' as string,
				driverIdNoFile: [] as CustomFile[],

				driverLicenseFile: [] as CustomFile[],
				driverPassportFile: [] as CustomFile[],
				businessLicenseFile: [] as CustomFile[],
				companySealFile: [] as CustomFile[],
				contImageFile: [] as CustomFile[],

				fileRemoved: [] as (string | number)[],
			};
		},
		computed: {
			dataRules(): Record<string, string[]> {
				return {
					driver_name: ['required'],
					driver_phone: ['required'],
					driver_id_no: ['required'],

					driverIdNoFile: ['array:required'],
					driverLicenseFile: ['array:required'],
					driverPassportFile: ['array:required'],
					businessLicenseFile: ['array:required'],
					companySealFile: ['array:required'],
				};
			},
			dataErrors() {
				const obj = {
					driver_name: this.driver_name,
					driver_phone: this.driver_phone,
					driver_id_no: this.driver_id_no,
					driverIdNoFile: this.driverIdNoFile,
					driverLicenseFile: this.driverLicenseFile,
					driverPassportFile: this.driverPassportFile,
					businessLicenseFile: this.businessLicenseFile,
					companySealFile: this.companySealFile,
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
					this.$emit('invalid-data', 'driver');
					return;
				}
				const obj = {
					driver_name: this.driver_name,
					driver_phone: this.driver_phone,
					driver_id_no: this.driver_id_no,
					driverIdNoFile: this.driverIdNoFile.map(o => o.id),
					driverLicenseFile: this.driverLicenseFile.map(o => o.id),
					driverPassportFile: this.driverPassportFile.map(o => o.id),
					businessLicenseFile: this.businessLicenseFile.map(o => o.id),
					companySealFile: this.companySealFile.map(o => o.id),
					contImageFile: this.contImageFile.map(o => o.id),
				};
				this.$emit('submit-data', {
					type: 'driver',
					data: {
						driver: obj,
					},
				});
			},
			onChangeDriverLicenseFile(arr: CustomFile[]) {
				this.driverLicenseFile = [...arr];
			},
			onChangeDriverIdNoFile(arr: CustomFile[]) {
				this.driverIdNoFile = [...arr];
			},
			onChangeDriverPassportFile(arr: CustomFile[]) {
				this.driverPassportFile = [...arr];
			},
			onChangeBusinessLicenseFile(arr: CustomFile[]) {
				this.businessLicenseFile = [...arr];
			},
			onChangeCompanySealFile(arr: CustomFile[]) {
				this.companySealFile = [...arr];
			},
			removeLocalFile(item: CustomFile) {
				if (item.id) {
					this.fileRemoved.push(item.id);
				}
			},
		},
	};
</script>
<style lang="scss" scoped></style>
