<template>
	<div>
		<h1 class="title-sm font-semibold text-accent-900">Thông tin đơn hàng</h1>
		<div class="pt-4 pb-4 grid grid-cols-2 gap-x-4 gap-y-3">
			<div class="col-span-1">
				<AutocompleteNormal
					:init-data="person_in_charge_id"
					placeholder="-- Chọn người phụ trách --"
					:list-items="listUsers"
					required
					clearable
					rounded="md"
					size="xxl"
					:title="'Người phụ trách'"
					@selected="changePersonInCharge"
					:isError="Boolean(dataErrors.person_in_charge_id) && flagSubmit"
					:errorMsg="dataErrors.person_in_charge_id"
				/>
			</div>
			<div class="col-span-1">
				<AutocompleteNormal
					:init-data="merchandise_type_id"
					placeholder="-- Chọn loại hàng hóa --"
					:list-items="listMechandiseTypes"
					required
					clearable
					rounded="md"
					size="xxl"
					:title="'Loại hàng hóa'"
					@selected="changeMerchandise"
					:isError="Boolean(dataErrors.merchandise_type_id) && flagSubmit"
					:errorMsg="dataErrors.merchandise_type_id"
				/>
			</div>

			<div class="col-span-1">
				<BlockInput
					v-model="pickup_address"
					title="Địa chỉ lấy hàng"
					placeholder="VD: Số 175, đường Trần Đăng Ninh, Phường Tam Thanh, Tha..."
					clearable
					rounded="md"
					size="xxl"
				/>
			</div>
			<div class="col-span-1">
				<SingleDatePickerNormal
					:init-data="detailData.pickup_time"
					title="Thời gian lấy hàng"
					placeholder="-- Chọn ngày giờ --"
					input-class="rounded-md"
					container-class="mb-0 min-w-[300px]"
					size="xxl"
					@date-change="changePickupTime"
				/>
			</div>
			<div class="col-span-1">
				<BlockInput
					v-model="deliver_address"
					title="Địa chỉ giao hàng"
					placeholder="VD: Số 175, đường Trần Đăng Ninh, Phường Tam Thanh, Tha..."
					clearable
					rounded="md"
					size="xxl"
				/>
			</div>
			<div class="col-span-1">
				<SingleDatePickerNormal
					:init-data="detailData.deliver_time"
					title="Thời gian giao hàng"
					placeholder="-- Chọn ngày giờ --"
					input-class="rounded-md"
					container-class="mb-0 min-w-[300px]"
					size="xxl"
					@date-change="changeDeliverTime"
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

	import { CustomFileRespone } from '../../../models/index';
	import Datepicker from 'vue3-datepicker';
	import { computed } from 'vue';
	import { OrderDetail } from 'models/Order';
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
		},
		mounted() {
			if (this.detailData) {
				this.syncData();
			}
		},
		data() {
			return {
				person_in_charge_id: null as string | number | null,
				merchandise_type_id: null as string | number | null,
				flagSubmit: false,
				pickup_address: '' as string,
				deliver_address: '' as string,
				pickup_time: null as string | number | null,
				deliver_time: null as string | number | null,
			};
		},
		computed: {
			dataRules(): Record<string, string[]> {
				return {
					person_in_charge_id: ['required'],
					merchandise_type_id: ['required'],
				};
			},
			dataErrors() {
				const obj = {
					person_in_charge_id: this.person_in_charge_id,
					merchandise_type_id: this.merchandise_type_id,
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
				this.person_in_charge_id = this.detailData.person_in_charge?.id || null;
				this.merchandise_type_id = this.detailData.merchandise_type?.id || null;
				this.deliver_address = this.detailData.deliver_address || '';
				this.pickup_address = this.detailData.pickup_address || '';
				this.deliver_time = this.detailData.deliver_time || '';
				this.pickup_time = this.detailData.pickup_time || '';
			},
			changePersonInCharge(val: string | number) {
				this.person_in_charge_id = val;
			},
			changeMerchandise(val: string | number) {
				this.merchandise_type_id = val;
			},
			changePickupTime(time: string) {
				this.pickup_time = time;
			},
			changeDeliverTime(time: string) {
				this.deliver_time = time;
			},

			triggerSubmitData() {
				this.flagSubmit = true;
				if (Object.keys(this.dataErrors).length) {
					this.$emit('invalid-data', 'generalInfo');
					return;
				}
				const obj = {
					person_in_charge_id: this.person_in_charge_id,
					merchandise_type_id: this.merchandise_type_id,
					deliver_address: this.deliver_address,
					pickup_address: this.pickup_address,
					deliver_time: this.deliver_time,
					pickup_time: this.pickup_time,
				};
				this.$emit('submit-data', {
					type: 'generalInfo',
					data: {
						generalInfo: obj,
					},
				});
			},
		},
	};
</script>
<style lang="scss" scoped></style>
