<template>
	<div>
		<h1 class="title-sm font-semibold text-accent-900">Thông tin xe</h1>
		<div class="pt-4 pb-4 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-3">
			<div class="col-span-1">
				<AutocompleteNormal
					:init-data="container_type_id"
					placeholder="-- Chọn loại container --"
					:list-items="listContainerTypes"
					required
					clearable
					rounded="md"
					size="xxl"
					:title="'Loại container'"
					@selected="changeContainerType"
					:isError="Boolean(dataErrors.container_type_id) && flagSubmit"
					:errorMsg="dataErrors.container_type_id"
				/>
			</div>
			<div class="col-span-1">
				<BlockInput
					v-model="plate_number"
					title="Biểm kiểm soát"
					placeholder="VD: 30H-999-999"
					clearable
					rounded="md"
					size="xxl"
					required
					:isError="Boolean(dataErrors.plate_number) && flagSubmit"
					:errorMsg="dataErrors.plate_number"
				/>
			</div>
			<div class="col-span-1"></div>
			<div class="col-span-1">
				<BlockInput
					v-model="cont_number"
					title="Số container"
					placeholder="VD: 999-999"
					clearable
					rounded="md"
					size="xxl"
					required
					:isError="Boolean(dataErrors.cont_number) && flagSubmit"
					:errorMsg="dataErrors.cont_number"
				/>
			</div>
			<div class="col-span-1">
				<FileUploaderWithPreview
					:init-data="detailData.vehicle?.cont_registration_cert_files"
					:title="'Đăng ký đầu xe'"
					:suffixIconName="'clarity:image-line'"
					required
					:local-file-removed="fileRemoved"
					@on-change="onChangeContRegistrationCertFile"
					:is-error="Boolean(dataErrors.contRegistrationCertFile) && flagSubmit"
				/>
			</div>
			<div class="col-span-1">
				<FileUploaderWithPreview
					:init-data="detailData.vehicle?.cont_registry_cert_files"
					:title="'Đăng kiểm đầu xe'"
					:suffixIconName="'clarity:image-line'"
					required
					:local-file-removed="fileRemoved"
					@on-change="onChangeContRegistryCertFile"
					:is-error="Boolean(dataErrors.contRegistryCertFile) && flagSubmit"
				/>
			</div>
			<div class="col-span-1">
				<FileUploaderWithPreview
					:init-data="detailData.vehicle?.vehicle_insurance_files"
					:title="'Bảo hiểm xe'"
					:suffixIconName="'clarity:image-line'"
					:local-file-removed="fileRemoved"
					@on-change="onChangeVehicleInsuranceFile"
				/>
			</div>
			<div class="col-span-1">
				<FileUploaderWithPreview
					:init-data="detailData.vehicle?.cont_sign_files"
					:title="'Phù hiệu xe'"
					:suffixIconName="'clarity:image-line'"
					:local-file-removed="fileRemoved"
					required
					@on-change="onChangeContSignFile"
					:is-error="Boolean(dataErrors.contSignFile) && flagSubmit"
				/>
			</div>
			<div class="col-span-1">
				<FileUploaderWithPreview
					:init-data="detailData.vehicle?.cont_image_files"
					:title="'Ảnh xe'"
					:suffixIconName="'clarity:image-line'"
					:local-file-removed="fileRemoved"
					@on-change="onChangeContImageFile"
				/>
			</div>
			<div class="col-span-1">
				<BlockInput
					v-model="mooc_number"
					title="Số mooc"
					placeholder="VD: 999-999"
					clearable
					rounded="md"
					size="xxl"
					required
					:isError="Boolean(dataErrors.mooc_number) && flagSubmit"
					:errorMsg="dataErrors.mooc_number"
				/>
			</div>

			<div class="col-span-1">
				<FileUploaderWithPreview
					:init-data="detailData.vehicle?.mooc_registration_cert_files"
					:title="'Đăng ký mooc'"
					:suffixIconName="'clarity:image-line'"
					:local-file-removed="fileRemoved"
					required
					@on-change="onChangeMoocRegistrationCertFile"
					:is-error="Boolean(dataErrors.moocRegistrationCertFile) && flagSubmit"
				/>
			</div>

			<div class="col-span-1">
				<FileUploaderWithPreview
					:init-data="detailData.vehicle?.mooc_registry_cert_files"
					:title="'Đăng kiểm mooc'"
					:suffixIconName="'clarity:image-line'"
					:local-file-removed="fileRemoved"
					required
					@on-change="onChangeMoocRegistryCertFile"
					:is-error="Boolean(dataErrors.moocRegistryCertFile) && flagSubmit"
				/>
			</div>
			<!-- END -->
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

	import { CustomFileRespone } from '../../../models/index';
	import Datepicker from 'vue3-datepicker';
	import { computed } from 'vue';
	import { OrderDetail } from '../../../models/Order';
	export default {
		props: {
			createFlag: {
				type: Number,
				default: 1,
			},
			detailData: {
				type: Object as PropType<OrderDetail>,
				default: {},
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
		mounted() {
			if (this.detailData) {
				this.syncData();
			}
		},
		data() {
			return {
				flagSubmit: false,
				container_type_id: null as string | number | null,
				plate_number: '' as string,
				cont_number: '' as string,
				mooc_number: '' as string,
				contRegistrationCertFile: [] as CustomFileRespone[],
				contRegistryCertFile: [] as CustomFileRespone[],
				vehicleInsuranceFile: [] as CustomFileRespone[],
				contSignFile: [] as CustomFileRespone[],
				contImageFile: [] as CustomFileRespone[],
				moocRegistrationCertFile: [] as CustomFileRespone[],
				moocRegistryCertFile: [] as CustomFileRespone[],

				fileRemoved: [] as (string | number)[],
			};
		},
		computed: {
			dataRules(): Record<string, string[]> {
				return {
					container_type_id: ['required'],
					cont_number: ['required'],
					mooc_number: ['required'],
					plate_number: ['required'],
					contRegistrationCertFile: ['array:required'],
					contRegistryCertFile: ['array:required'],
					contSignFile: ['array:required'],
					moocRegistrationCertFile: ['array:required'],
					moocRegistryCertFile: ['array:required'],
				};
			},
			dataErrors() {
				const obj = {
					container_type_id: this.container_type_id,
					cont_number: this.cont_number,
					mooc_number: this.mooc_number,
					plate_number: this.plate_number,
					contRegistrationCertFile: this.contRegistrationCertFile,
					contRegistryCertFile: this.contRegistryCertFile,
					contSignFile: this.contSignFile,
					moocRegistrationCertFile: this.moocRegistrationCertFile,
					moocRegistryCertFile: this.moocRegistryCertFile,
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
			detailData: {
				deep: true,
				handler() {
					this.syncData();
				},
			},
		},
		methods: {
			syncData() {
				if (!this.detailData) {
					return;
				}
				this.container_type_id = this.detailData.vehicle?.container_type.id || null;
				this.cont_number = this.detailData.vehicle?.cont_number || '';
				this.mooc_number = this.detailData.vehicle?.mooc_number || '';
				this.plate_number = this.detailData.vehicle?.plate_number || '';
				this.contRegistrationCertFile = this.detailData.vehicle?.cont_registration_cert_files || [];
				this.contRegistryCertFile = this.detailData.vehicle?.cont_registry_cert_files || [];
				this.vehicleInsuranceFile = this.detailData.vehicle?.vehicle_insurance_files || [];
				this.contSignFile = this.detailData.vehicle?.cont_sign_files || [];
				this.contImageFile = this.detailData.vehicle?.cont_image_files || [];
				this.moocRegistrationCertFile = this.detailData.vehicle?.mooc_registration_cert_files || [];
				this.moocRegistryCertFile = this.detailData.vehicle?.mooc_registry_cert_files || [];
			},
			changeContainerType(id: string | number) {
				this.container_type_id = id;
			},

			triggerSubmitData() {
				this.flagSubmit = true;
				if (Object.keys(this.dataErrors).length) {
					this.$emit('invalid-data', 'vehicle');
					return;
				}
				const obj = {
					container_type_id: this.container_type_id,
					cont_number: this.cont_number,
					mooc_number: this.mooc_number,
					plate_number: this.plate_number,
					contRegistrationCertFile: this.contRegistrationCertFile.map(o => o.id),
					contRegistryCertFile: this.contRegistryCertFile.map(o => o.id),
					vehicleInsuranceFile: this.vehicleInsuranceFile.map(o => o.id),
					contSignFile: this.contSignFile.map(o => o.id),
					contImageFile: this.contImageFile.map(o => o.id),
					moocRegistrationCertFile: this.moocRegistrationCertFile.map(o => o.id),
					moocRegistryCertFile: this.moocRegistryCertFile.map(o => o.id),
				};
				this.$emit('submit-data', {
					type: 'vehicle',
					data: {
						vehicle: obj,
					},
				});
			},
			onChangeContRegistryCertFile(arr: CustomFileRespone[]) {
				this.contRegistryCertFile = [...arr];
			},
			onChangeContRegistrationCertFile(arr: CustomFileRespone[]) {
				this.contRegistrationCertFile = [...arr];
			},
			onChangeVehicleInsuranceFile(arr: CustomFileRespone[]) {
				this.vehicleInsuranceFile = [...arr];
			},
			onChangeContSignFile(arr: CustomFileRespone[]) {
				this.contSignFile = [...arr];
			},
			onChangeContImageFile(arr: CustomFileRespone[]) {
				this.contImageFile = [...arr];
			},
			onChangeMoocRegistrationCertFile(arr: CustomFileRespone[]) {
				this.moocRegistrationCertFile = [...arr];
			},
			onChangeMoocRegistryCertFile(arr: CustomFileRespone[]) {
				this.moocRegistryCertFile = [...arr];
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
