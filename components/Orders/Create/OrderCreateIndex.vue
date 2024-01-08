<template>
	<div>
		<div class="punch-page-wrapper bg-white rounded-[24px] p-0 flex flex-col">
			<div class="px-6 pb-4">
				<div class="mb-3 flex items-center gap-3 bg-white sticky top-0 z-4 py-2">
					<NuxtLink to="/orders" class="w-10 h-10 flex items-center justify-center rounded-half hover:bg-gray-400/30">
						<Icon name="solar:arrow-left-linear" size="32px" />
					</NuxtLink>
					<span class="font-bold title-md"> Quay lại </span>
				</div>
				<OrderCreateGeneraInfomation :create-flag="createFlag" @invalid-data="invalidData" @submit-data="collectData" />
				<OrderCreateCustomerInfomation
					:create-flag="createFlag"
					@invalid-data="invalidData"
					@submit-data="collectData"
				/>
				<OrderCreateDriverInfomation :create-flag="createFlag" @invalid-data="invalidData" @submit-data="collectData" />
				<OrderCreateVehicleInfomation
					:create-flag="createFlag"
					@invalid-data="invalidData"
					@submit-data="collectData"
				/>
			</div>
			<div class="py-4"></div>
			<div
				class="btn-block border-t-2 border-neutral-200 sticky z-4 bg-white flex items-center py-4 justify-center gap-4"
			>
				<NormalButton
					size="xxl-md"
					type="submit"
					:container-class="'block  rounded-xl font-normal w-40'"
					:color="'outline-primary'"
					@click="onDraft"
				>
					Tạo nháp
				</NormalButton>
				<NormalButton
					size="xxl-md"
					type="button"
					:container-class="'block rounded-xl font-normal w-40'"
					:color="'gradient-button'"
					@click="onCreate"
					:loading="loadingCreate"
				>
					Tạo & Bắt đầu
				</NormalButton>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { storeToRefs } from 'pinia';
	import { useAppStateStore } from '../../../store/appState';
	import { useNotificationStore } from '../../../store/AppNotification';
	import NormalButton from '../../Buttons/NormalButton.vue';
	import SearchInput from '../../Form/SearchInput.vue';
	import SelectNormal from '../../Form/SelectNormal.vue';
	import OrderCreateGeneraInfomation from './OrderCreateGeneraInfomation.vue';
	import OrderCreateCustomerInfomation from './OrderCreateCustomerInfomation.vue';
	import OrderCreateDriverInfomation from './OrderCreateDriverInfomation.vue';
	import OrderCreateVehicleInfomation from './OrderCreateVehicleInfomation.vue';
	import { OrderCreateForm } from '../../../models/Order';

	export default {
		setup() {
			const { $api } = useNuxtApp();
			const notificationStore = useNotificationStore();
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();
			const api = $api;
			useHead({
				title: 'Tạo mới đơn hàng',
				meta: [{ name: 'description', content: 'Tạo mới đơn hàng' }],
			});
			return {
				api,
				notificationStore,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
			};
		},
		components: {
			NormalButton,
			SearchInput,
			SelectNormal,
			OrderCreateGeneraInfomation,
			OrderCreateCustomerInfomation,
			OrderCreateDriverInfomation,
			OrderCreateVehicleInfomation,
		},
		mounted() {},
		data() {
			return {
				createFlag: 1,
				invalidTab: ['generalInfo', 'customer', 'vehicle', 'driver'] as string[],
				formData: {} as OrderCreateForm,
				refSubmit: 1,
				loadingCreate: false,
				isDraft: false,
			};
		},
		watch: {
			formData: {
				deep: true,
				handler() {
					clearTimeout(this.refSubmit);
					this.refSubmit = window.setTimeout(() => {
						this.submitData();
					}, 150);
				},
			},
		},
		methods: {
			onCreate() {
				this.createFlag += 1;
				this.isDraft = false;
			},
			onDraft() {
				this.createFlag += 1;
				this.isDraft = true;
			},
			invalidData(data: 'generalInfo' | 'customer' | 'vehicle' | 'driver') {
				this.invalidTab = [...new Set([...this.invalidTab, data])];
				delete this.formData[data];
			},
			collectData(data: Record<string, any>) {
				console.log(data);
				this.invalidTab = this.invalidTab.filter(o => o !== data.type);
				this.formData = { ...this.formData, ...data.data };
			},

			submitData() {
				if (this.invalidTab.length) {
					this.notificationStore.setSnack({
						text: 'Vui lòng điền đủ thông tin.',
						type: 'error',
					});
					return;
				}
				console.log(this.formData);
				const body = { ...this.formData };
				const payload = new FormData();
				// generalInfo
				payload.append('person_in_charge_id', body.generalInfo.person_in_charge_id);
				payload.append('merchandise_type_id', body.generalInfo.merchandise_type_id);
				payload.append('deliver_address', body.generalInfo.deliver_address || '');
				payload.append('pickup_address', body.generalInfo.pickup_address || '');
				payload.append('pickup_time', body.generalInfo.pickup_time || '');
				payload.append('deliver_time', body.generalInfo.deliver_time || '');

				// customer
				payload.append('customer_name', body.customer.customer_name);
				payload.append('customer_phone', body.customer.customer_phone);
				payload.append('company_name', body.customer.company_name);
				payload.append('company_enterprise_code', body.customer.company_enterprise_code);
				payload.append('company_enterprise_gdt_code', body.customer.company_enterprise_gdt_code);
				payload.append('company_address', body.customer.company_address);

				if (body.customer.businessLicenseFile) {
					body.customer.businessLicenseFile.forEach(o => {
						payload.append('customer_business_license_file_ids[]', `${o}`);
					});
				}
				if (body.customer.companySealFile) {
					body.customer.companySealFile.forEach(o => {
						payload.append('customer_company_seal_file_ids[]', `${o}`);
					});
				}
				// driver
				payload.append('driver_name', body.driver.driver_name);
				payload.append('driver_phone', body.driver.driver_phone);
				payload.append('driver_id_no', body.driver.driver_id_no);

				if (body.driver.driverIdNoFile) {
					body.driver.driverIdNoFile.forEach(o => {
						payload.append('driver_id_no_file_ids[]', `${o}`);
					});
				}

				if (body.driver.driverLicenseFile) {
					body.driver.driverLicenseFile.forEach(o => {
						payload.append('driver_license_file_ids[]', `${o}`);
					});
				}
				if (body.driver.driverPassportFile) {
					body.driver.driverPassportFile.forEach(o => {
						payload.append('driver_passport_file_ids[]', `${o}`);
					});
				}
				if (body.driver.businessLicenseFile) {
					body.driver.businessLicenseFile.forEach(o => {
						payload.append('driver_business_license_file_ids[]', `${o}`);
					});
				}
				if (body.driver.companySealFile) {
					body.driver.companySealFile.forEach(o => {
						payload.append('driver_company_seal_file_ids[]', `${o}`);
					});
				}

				// vehicle
				payload.append('container_type_id', `${body.vehicle.container_type_id}`);
				payload.append('cont_number', `${body.vehicle.cont_number}`);
				payload.append('mooc_number', `${body.vehicle.mooc_number}`);
				payload.append('plate_number', `${body.vehicle.plate_number}`);
				if (body.vehicle.contRegistrationCertFile) {
					body.vehicle.contRegistrationCertFile.forEach(o => {
						payload.append('cont_registration_cert_file_ids[]', `${o}`);
					});
				}
				if (body.vehicle.contRegistryCertFile) {
					body.vehicle.contRegistryCertFile.forEach(o => {
						payload.append('cont_registry_cert_file_ids[]', `${o}`);
					});
				}
				if (body.vehicle.vehicleInsuranceFile) {
					body.vehicle.vehicleInsuranceFile.forEach(o => {
						payload.append('vehicle_insurance_file_ids[]', `${o}`);
					});
				}
				if (body.vehicle.contSignFile) {
					body.vehicle.contSignFile.forEach(o => {
						payload.append('cont_sign_file_ids[]', `${o}`);
					});
				}
				if (body.vehicle.contImageFile) {
					body.vehicle.contImageFile.forEach(o => {
						payload.append('cont_image_file_ids[]', `${o}`);
					});
				}
				if (body.vehicle.moocRegistrationCertFile) {
					body.vehicle.moocRegistrationCertFile.forEach(o => {
						payload.append('mooc_registration_cert_file_ids[]', `${o}`);
					});
				}
				if (body.vehicle.moocRegistryCertFile) {
					body.vehicle.moocRegistryCertFile.forEach(o => {
						payload.append('mooc_registry_cert_file_ids[]', `${o}`);
					});
				}

				if (this.isDraft) {
					payload.append('save_draft', '1');
				}
				this.loadingCreate = true;
				this.api.orders
					.create(payload)
					.then(
						res => {
							this.notificationStore.setSnack({ text: 'Tạo đơn hàng thành công!', type: 'success' });
							this.$router.push(`/orders/${res.data.order.id}`);
						},
						err => {
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Tạo đơn hàng thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {
						this.loadingCreate = false;
					});
			},
		},
	};
</script>
<style lang="scss" scoped>
	.punch-page-wrapper {
		height: calc(100vh - 68px - 24px - 24px);
	}
	.btn-block {
		bottom: 0;
		right: 0;
		left: 100px;
		height: 108px;
		z-index: 4;
	}
</style>
