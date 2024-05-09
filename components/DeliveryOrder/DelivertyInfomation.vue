<template>
	<div>
		<div class="pb-8 flex gap-6 items-center">
			<div class="flex">
				<UserAvatarPreview :user="user" :size="100" background="bg-primary-300" />
			</div>
			<div>
				<p class="display-xs font-bold mb-3 flex items-center gap-10">
					Mã phiếu giao: {{ detailData.code }}
					<span
						class="text-lg font-semibold flex items-center gap-1"
						:style="`color: ${detailData.status?.color_code}`"
					>
						<Icon :name="`${deliveryOrderStatusIcon as string}`" size="18px" />
						{{ detailData.status?.name }}</span
					>
				</p>
				<p class="flex items-start mb-2" style="width: 180px">
					<span class="text-md text-gray-400">Tài xế:</span>
					<span class="text-md text-gray-700 font-semibold ml-auto">{{ detailData.driver?.name }}</span>
				</p>
				<p class="flex items-start mb-2" style="width: 180px">
					<span class="text-md text-gray-400">Liên hệ:</span>
					<span class="text-md text-gray-700 font-semibold ml-auto">{{ detailData.driver?.phone }}</span>
				</p>
				<p v-if="detailData.cont_code" class="flex items-start mb-2" style="width: 180px">
					<span class="text-md text-gray-400">Mã container:</span>
					<span class="text-md text-gray-700 font-semibold ml-auto">{{ detailData.cont_code }}</span>
				</p>
				<p v-if="detailData.seal_code" class="flex items-start mb-2" style="width: 180px">
					<span class="text-md text-gray-400">Mã seal:</span>
					<span class="text-md text-gray-700 font-semibold ml-auto">{{ detailData.seal_code }}</span>
				</p>
			</div>

			<div class="text-right ml-auto">
				<Menu v-if="listActionsComputed.length" as="div" class="relative inline-block text-left">
					<div>
						<MenuButton
							class="inline-flex w-full items-center rounded-md justify-center hover:bg-gray-200/50 px-3 py-2 text-sm focus:outline-none"
						>
							<Icon name="circum:edit" size="20px" class="text-primary" />
							<p class="pl-2 font-semibold text-primary">Thao tác</p>
						</MenuButton>
					</div>

					<transition
						enter-active-class="transition duration-100 ease-out"
						enter-from-class="transform scale-95 opacity-0"
						enter-to-class="transform scale-100 opacity-100"
						leave-active-class="transition duration-75 ease-in"
						leave-from-class="transform scale-100 opacity-100"
						leave-to-class="transform scale-95 opacity-0"
					>
						<MenuItems
							class="absolute z-10 right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rounded-[12px]"
						>
							<div class="px-1 py-1">
								<MenuItem v-for="item in listActionsComputed" :key="item.id" v-slot="{ active }">
									<button
										:class="[
											active ? 'bg-primary-300 text-dark' : 'text-gray-900',
											'group flex w-full items-center rounded-md px-2 py-2 text-sm',
										]"
										@click="item.action()"
									>
										{{ item.name }}
									</button>
								</MenuItem>
							</div>
							<!-- <div class="px-1 py-1">
								<MenuItem v-slot="{ active }">
									<button
										:class="[
											active ? 'bg-primary-300 text-dark' : 'text-gray-900',
											'group flex w-full items-center rounded-md px-2 py-2 text-sm',
										]"
									>
										Hủy điểm giao
									</button>
								</MenuItem>
							</div> -->
						</MenuItems>
					</transition>
				</Menu>
			</div>
		</div>
		<div class="grid xl:grid-cols-2 grid-cols-1 gap-5 divide-x">
			<div class="col-span-1">
				<p class="flex items-start mb-2 w-full">
					<span class="text-md text-gray-400">Loại xe:</span>
					<span class="text-md text-gray-700 font-semibold ml-auto">{{ detailData.vehicle?.manufacturer }}</span>
				</p>
				<p class="flex items-start mb-2 w-full">
					<span class="text-md text-gray-400">Biển kiểm soát:</span>
					<span class="text-md text-gray-700 font-semibold ml-auto">{{ detailData.vehicle?.plate_number }}</span>
				</p>

				<div class="mt-6">
					<div>
						<p class="ml-8 mb-2 bg-green-500 rounded px-2 py-1 w-fit text-white text-sm">Lấy</p>
						<div
							v-for="(item, idx) in detailData.pickup_addresses"
							:key="item.id"
							class="flex items-start gap-3 overflow-hidden relative"
							style="min-height: 45px"
						>
							<p class="absolute bottom-0 left-3" style="height: calc(100% - 24px); transform: translateX(-50%)">
								<img src="../../assets/images/icon/dashed.svg" alt="" />
							</p>
							<Icon name="solar:map-point-bold" size="24px" class="text-green-400" />
							<div class="ml-auto w-full">
								<p class="flex items-start mb-2 w-full gap-2">
									<span class="text-md text-gray-400" style="min-width: 120px">Điểm lấy {{ idx + 1 }}:</span>
									<span class="text-md text-gray-700 font-semibold ml-auto"
										>{{ item.merchandise_position }} - {{ getFullAddress(item.address) }}
									</span>
									<VTooltip v-if="item.status.id === 200" class="w-fit">
										<nuxt-link class="v-list-item px-0 flex items-center">
											<Icon
												name="material-symbols:check-circle-rounded"
												class="text-green-500"
												size="22px"
												style="min-width: 22px"
											/>
										</nuxt-link>
										<template #popper>Đơn hàng đã được lấy thành công</template>
									</VTooltip>
									<VTooltip v-if="item.status.id === 300" class="w-fit">
										<nuxt-link class="v-list-item px-0 flex items-center">
											<Icon
												name="material-symbols:error-circle-rounded"
												class="text-red-500"
												size="22px"
												style="min-width: 22px"
											/>
										</nuxt-link>
										<template #popper>Đơn hàng lấy thất bại</template>
									</VTooltip>
								</p>
								<p
									v-if="item.document"
									class="w-fit ml-auto cursor-pointer text-info flex items-center gap-1 border-b-1 border-info mb-4"
									@click="onViewDocument(item.document)"
								>
									<Icon name="streamline:interface-edit-attachment-2-attachment-link-paperclip-unlink" />
									Tài liệu
								</p>
							</div>
						</div>
					</div>

					<div>
						<div class="flex items-start gap-3 overflow-hidden relative">
							<p class="absolute bottom-0 left-3" style="height: 100%; transform: translateX(-50%)">
								<img src="../../assets/images/icon/dashed.svg" alt="" />
							</p>
							<p class="ml-8 mb-2 bg-orange-500 rounded px-2 py-1 w-fit text-white text-sm">Giao</p>
						</div>
						<div
							v-for="(item, idx) in detailData.deliver_addresses"
							:key="item.id"
							class="flex items-start gap-3 overflow-hidden relative"
							style="min-height: 45px"
						>
							<p
								v-if="detailData.deliver_addresses && idx < detailData.deliver_addresses.length - 1"
								class="absolute bottom-0 left-3"
								style="height: calc(100% - 24px); transform: translateX(-50%)"
							>
								<img src="../../assets/images/icon/dashed.svg" alt="" />
							</p>
							<Icon name="solar:map-point-bold" size="24px" class="text-orange-400" style="min-width: 24px" />
							<div class="ml-auto w-full">
								<p class="flex items-start mb-2 w-full gap-2">
									<span class="text-md text-gray-400" style="min-width: 120px">Điểm giao {{ idx + 1 }}:</span>
									<span class="text-md text-gray-700 font-semibold ml-auto"
										>{{ item.merchandise_position }} - {{ getFullAddress(item.address) }}
									</span>
									<VTooltip v-if="item.status.id === 200" class="w-fit">
										<nuxt-link class="v-list-item px-0 flex items-center">
											<Icon
												name="material-symbols:check-circle-rounded"
												class="text-green-500"
												size="22px"
												style="min-width: 22px"
											/>
										</nuxt-link>
										<template #popper>Đơn hàng đã được giao thành công</template>
									</VTooltip>
									<VTooltip v-if="item.status.id === 300" class="w-fit">
										<nuxt-link class="v-list-item px-0 flex items-center">
											<Icon
												name="material-symbols:error-circle-rounded"
												class="text-red-500"
												size="22px"
												style="min-width: 22px"
											/>
										</nuxt-link>
										<template #popper>Đơn hàng giao thất bại</template>
									</VTooltip>
								</p>
								<p
									v-if="item.document"
									class="w-fit ml-auto cursor-pointer text-info flex items-center gap-1 border-b-1 border-info mb-4"
									@click="onViewDocument(item.document)"
								>
									<Icon name="streamline:interface-edit-attachment-2-attachment-link-paperclip-unlink" />
									Tài liệu
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-span-1 pl-0 xl:pl-4">
				<div v-for="(item, idx) in listDeliveryOrderStatusesComputed" :key="item.id">
					<div class="flex items-start gap-3 overflow-hidden relative" style="min-height: 50px">
						<p
							v-if="idx < listDeliveryOrderStatusesComputed.length - 1"
							class="absolute bottom-0 left-2"
							style="height: calc(100% - 16px); transform: translateX(-50%)"
						>
							<img src="../../assets/images/icon/dashed.svg" alt="" />
						</p>
						<Icon
							name="mdi:circle"
							size="16px"
							:class="idx === 0 ? 'text-green-800' : 'text-gray-400'"
							style="min-width: 16px"
						/>
						<div class="flex items-start gap-4">
							<p class="flex flex-col gap-1" style="min-width: 90px">
								<span class="text-md text-gray-400 text-sm">{{ formatDateCustom(item.created_at, 'hh:mm') }}</span>
								<span class="text-md text-gray-400 text-sm">{{ formatDateCustom(item.created_at, 'dd/MM/yyyy') }}</span>
							</p>
							<p class="flex flex-col gap-1">
								<span class="text-md text-sm font-semibold" :class="idx === 0 ? 'text-green-800' : 'text-gray-400'">{{
									item.log_name
								}}</span>
								<span class="text-md text-sm" :class="idx === 0 ? 'text-green-800' : 'text-gray-400'">
									{{ item.description || '---' }}
								</span>
							</p>
						</div>
					</div>
				</div>
				<p
					v-if="detailData.activity_logs.length > 5"
					class="text-center text-primary-600 mx-auto cursor-pointer bg-primary-200 w-fit px-4 py-1 text-md rounded mt-1"
					@click="collapse = !collapse"
				>
					{{ collapse ? 'Xem thêm' : 'Thu gọn' }}
				</p>
			</div>
		</div>
		<DeliveryOrderControlsAddress
			:visible="visibleControlsAddress"
			:title="dialogControlsAddressTitle"
			:list-data="listAddress"
			:multiple="isMultipleAddress"
			@cancel="cancelControlsAddress"
			@submit="onSubmitControlsAddress"
		/>

		<DeliveryOrderDocumentView
			:visible="visibleDeliveryOrderDocumentView"
			:detail-data="selectedDocument"
			@cancel="closeViewDocument"
		/>
		<ConfirmModal
			:visible="visibleControlsAddressConfirm"
			:title="confirmObj.title"
			:message="confirmObj.msg"
			:button-cancel-text="'Quay lại'"
			:button-confirm-text="confirmObj.btnConfirmText"
			:loading="loadingUpdate"
			@submit="onControlsAddressConfirm"
			@cancel="cancelControlsAddressConfirm"
		/>
	</div>
</template>
<script lang="ts">
	import { storeToRefs } from 'pinia';
	import { useInternalStore } from '../../store/Internal';
	import UserAvatarPreview from '../../components/Layouts/UserAvatarPreview.vue';
	import DeliveryOrderControlsAddress from '../../components/Modal/DeliveryOrderControlsAddress.vue';
	import DeliveryOrderDocumentView from '../../components/Modal/DeliveryOrderDocumentView.vue';
	import ConfirmModal from '../../components/Modal/ConfirmModal.vue';
	import {
		DeliveryOrder,
		DeliveryOrderActivityLog,
		DeliveryOrderAddress,
		DeliveryOrderDocument,
		DeliveryOrderStatusLog,
	} from '../../models/DeliveryOrder';
	import { AddressComputed, AddressFull } from '../../models';
	import { PropType } from 'nuxt/dist/app/compat/capi';
	import NormalButton from '../../components/Buttons/NormalButton.vue';
	import { formatDateCustom } from '../../helpers/formatter';
	import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
	export default {
		components: {
			UserAvatarPreview,
			DeliveryOrderDocumentView,
			DeliveryOrderControlsAddress,
			NormalButton,
			Menu,
			MenuButton,
			MenuItems,
			MenuItem,
			ConfirmModal,
		},
		props: {
			detailData: {
				type: Object as PropType<DeliveryOrder>,
				default: {},
			},
		},
		setup() {
			const { listDeliveryOrderStatuses } = storeToRefs(useInternalStore());
			return { listDeliveryOrderStatuses };
		},
		data() {
			return {
				visibleControlsAddress: false,
				visibleControlsAddressConfirm: false,
				visibleDeliveryOrderDocumentView: false,
				selectedAddressId: 0 as string | number,
				controlsTypeId: 0 as number | string,
				selectedDocument: {} as DeliveryOrderDocument | null,
				loadingUpdate: false,
				collapse: true,
			};
		},
		computed: {
			user() {
				return {
					avatar: '',
					name: this.detailData.driver?.name || 'USER',
				};
			},

			deliveryOrderStatusIcon() {
				switch (this.detailData.status?.id) {
					case 100:
						return 'basil:file-upload-solid';
					case 110:
						return 'material-symbols:check-circle-rounded';
					case 111:
						return 'iconamoon:close-circle-1';
					case 200:
						return 'ic:outline-access-time-filled';
					case 210:
						return 'iconamoon:close-circle-1';
					case 300:
						return 'material-symbols:check-circle-rounded';
					case 400:
						return 'ic:outline-access-time-filled';
					case 500:
						return 'material-symbols:check-circle-rounded';
					case 600:
						return 'material-symbols:check-circle-rounded';
					default:
						return '';
				}
			},
			listDeliveryOrderStatusesComputed(): DeliveryOrderActivityLog[] {
				const rslt = this.detailData.activity_logs.map(o => {
					return o as DeliveryOrderActivityLog;
				});
				return this.collapse ? rslt.sort((a, b) => -1).slice(0, 5) : rslt.sort((a, b) => -1);
			},
			isMultipleAddress() {
				switch (this.controlsTypeId) {
					case 'cancelPickupAddress':
						return false;
					case 'cancelDeliverAddress':
						return false;
					case 'confirmedPickedUp':
						return true;
					case 'confirmedDelivered':
						return true;
					case 'confirmedPickedUpFailed':
						return true;

					default:
						return false;
				}
			},
			listAddress(): DeliveryOrderAddress[] {
				switch (this.controlsTypeId) {
					case 'cancelPickupAddress':
						return this.detailData.pickup_addresses?.filter(o => ![200, 400].includes(o.status.id)) || [];
					case 'cancelDeliverAddress':
						return this.detailData.deliver_addresses?.filter(o => ![200, 400].includes(o.status.id)) || [];
					case 'confirmedPickedUp':
						return this.detailData.pickup_addresses?.filter(o => ![200, 400].includes(o.status.id)) || [];
					case 'confirmedDelivered':
						return this.detailData.deliver_addresses?.filter(o => ![200, 400].includes(o.status.id)) || [];
					case 'confirmedPickedUpFailed':
						return this.detailData.pickup_addresses?.filter(o => ![200, 300, 400].includes(o.status.id)) || [];

					default:
						return [];
				}
			},
			dialogControlsAddressTitle(): string {
				switch (this.controlsTypeId) {
					case 'cancelPickupAddress':
						return 'Chọn điểm lấy muốn hủy';
					case 'cancelDeliverAddress':
						return 'Chọn điểm giao muốn hủy';
					case 'confirmedPickedUp':
						return 'Chọn điểm đã lấy';
					case 'confirmedDelivered':
						return 'Chọn điểm đã giao';
					case 'confirmedPickedUpFailed':
						return 'Chọn điểm không lấy được';

					default:
						return 'Không rõ';
				}
			},

			confirmObj() {
				switch (this.controlsTypeId) {
					case 'cancelPickupAddress':
						return {
							title: 'Hủy điểm lấy',
							msg: 'Hành đông này sẽ huỷ điểm lấy, bạn có muốn tiếp tục huỷ không?',
							btnConfirmText: 'Vẫn hủy',
						};
					case 'cancelDeliverAddress':
						return {
							title: 'Hủy điểm giao',
							msg: 'Hành đông này sẽ huỷ điểm giao, bạn có muốn tiếp tục huỷ không?',
							btnConfirmText: 'Vẫn hủy',
						};

					default:
						return {
							title: 'Xác nhận',
							msg: 'Xác nhận thực hiện thao tác?',
							btnConfirmText: 'Đồng ý',
						};
				}
			},
			listActions() {
				return [
					{
						id: 1,
						name: 'Hủy điểm lấy',
						isShow: this.detailData.can_be_canceled_pickup_address && this.detailData.pickup_addresses?.length,
						action: () => {
							this.triggerLog('cancelPickupAddress');
						},
					},
					{
						id: 2,
						name: 'Hủy điểm giao',
						isShow: this.detailData.can_be_canceled_deliver_address && this.detailData.deliver_addresses?.length,
						action: () => {
							this.triggerLog('cancelDeliverAddress');
						},
					},
					{
						id: 3,
						name: 'Hoàn thành',
						isShow: this.detailData.can_be_finished,
						action: () => {
							this.triggerLog('finish');
						},
					},
					{
						id: 4,
						name: 'Đã giao hàng',
						isShow: this.detailData.can_be_confirmed_delivered,
						action: () => {
							this.triggerLog('confirmedDelivered');
						},
					},

					{
						id: 6,
						name: 'Bắt đầu giao',
						isShow: this.detailData.can_be_started_deliver,
						action: () => {
							this.triggerLog('startedDeliver');
						},
					},
					{
						id: 7,
						name: 'Hủy phiếu',
						isShow: this.detailData.can_be_canceled,
						action: () => {
							this.triggerLog('cancel');
						},
					},
					{
						id: 8,
						name: 'Đi lấy lại',
						isShow: this.detailData.can_be_re_picked_up,
						action: () => {
							this.triggerLog('rePickup');
						},
					},
					{
						id: 9,
						name: 'Không lấy được',
						isShow: this.detailData.can_be_confirmed_picked_up_failed,
						action: () => {
							this.triggerLog('confirmedPickedUpFailed');
						},
					},
					{
						id: 10,
						name: 'Đã lấy',
						isShow: this.detailData.can_be_confirmed_picked_up,
						action: () => {
							this.triggerLog('confirmedPickedUp');
						},
					},
					{
						id: 11,
						name: 'Bắt đầu',
						isShow: this.detailData.can_be_started_pickup,
						action: () => {
							this.triggerLog('startedPickup');
						},
					},
					{
						id: 12,
						name: 'Nhận giao',
						isShow: this.detailData.can_be_accepted,
						action: () => {
							this.triggerLog('accept');
						},
					},
					{
						id: 13,
						name: 'Từ chối',
						isShow: this.detailData.can_be_refused,
						action: () => {
							this.triggerLog('refuse');
						},
					},
				];
			},
			listActionsComputed() {
				return this.listActions.filter(o => o.isShow);
			},
		},
		methods: {
			formatDateCustom,
			getFullAddress(address: AddressComputed) {
				const n = new AddressFull(address);
				return n.getFullAddress();
			},
			openControlsAddress(typeId: number | string) {
				this.controlsTypeId = typeId;
				this.visibleControlsAddress = true;
				// switch (typeId) {
				// 	case 1:
				// 		break;

				// 	default:
				// 		break;
				// }
			},
			cancelControlsAddress() {
				this.visibleControlsAddress = false;
				this.controlsTypeId = 0;
			},
			cancelControlsAddressConfirm() {
				this.visibleControlsAddressConfirm = false;
			},
			onSubmitControlsAddress(addressId: string | number) {
				this.visibleControlsAddressConfirm = true;
				this.selectedAddressId = addressId;
			},
			onControlsAddressConfirm() {
				this.loadingUpdate = true;
				const detailDataId = this.detailData.id;
				const selectedAddressId = this.selectedAddressId;
				switch (this.controlsTypeId) {
					case 'cancelPickupAddress':
						this.handleSameEndProcess(this.$api.deliveryOrders.cancelAddress(detailDataId, selectedAddressId));
						return;
					case 'cancelDeliverAddress':
						this.handleSameEndProcess(this.$api.deliveryOrders.cancelAddress(detailDataId, selectedAddressId));
						return;
					case 'confirmedPickedUp':
						const confirmedPickedUp = {
							pickup_address_ids: this.selectedAddressId,
						};
						this.handleSameEndProcess(this.$api.deliveryOrders.confirmPickedup(detailDataId, confirmedPickedUp));
						return;
					case 'confirmedDelivered':
						const confirmedDelivered = {
							deliver_address_ids: this.selectedAddressId,
						};
						this.handleSameEndProcess(this.$api.deliveryOrders.confirmedDelivered(detailDataId, confirmedDelivered));
						return;
					case 'confirmedPickedUpFailed':
						const confirmedPickedUpFailed = {
							pickup_address_ids: this.selectedAddressId,
						};
						this.handleSameEndProcess(
							this.$api.deliveryOrders.confirmedPickedUpFailed(detailDataId, confirmedPickedUpFailed)
						);
						return;
					case 'rePickup':
						this.handleSameEndProcess(this.$api.deliveryOrders.rePickup(detailDataId));
						return;
					case 'cancel':
						this.handleSameEndProcess(this.$api.deliveryOrders.cancel(detailDataId));
						return;
					default:
						this.loadingUpdate = false;
						this.$globalHelpers.setSnack({
							text: 'Thao tác không phù hợp do chưa được định nghĩa.',
							type: 'error',
						});
						break;
				}
			},
			onViewDocument(document: DeliveryOrderDocument) {
				this.selectedDocument = document;
				this.visibleDeliveryOrderDocumentView = true;
			},
			closeViewDocument() {
				this.selectedDocument = null;
				this.visibleDeliveryOrderDocumentView = false;
			},
			handleSameEndProcess(callback: Promise<any>) {
				callback
					.then(
						async res => {
							this.visibleControlsAddress = false;
							this.$globalHelpers.setSnack({
								text: 'Thao tác thành công',
								type: 'success',
							});
							await this.$globalHelpers.dirtyWait(100);
							this.$emit('force-get-detail');
						},
						err => {
							console.log(err);
							this.$globalHelpers.setSnack({
								text: err?.response?._data?.message || 'Thao tác thất bại',
								type: 'error',
							});
						}
					)
					.finally(async () => {
						await this.$globalHelpers.dirtyWait(300);
						this.loadingUpdate = false;
						this.visibleControlsAddressConfirm = false;
					});
			},
			triggerLog(logKey: string = '') {
				const detailDataId = this.detailData.id;
				const selectedAddressId = this.selectedAddressId;
				switch (logKey) {
					case 'cancelPickupAddress':
						this.openControlsAddress('cancelPickupAddress');
						return;
					case 'cancelDeliverAddress':
						this.openControlsAddress('cancelDeliverAddress');
						return;
					case 'accept':
						this.handleSameEndProcess(this.$api.deliveryOrders.accept(detailDataId));
						return;
					case 'startedPickup':
						this.handleSameEndProcess(this.$api.deliveryOrders.start(detailDataId));
						return;
					case 'startedDeliver':
						this.handleSameEndProcess(this.$api.deliveryOrders.startDeliver(detailDataId));
						return;
					case 'confirmedDelivered':
						this.openControlsAddress('confirmedDelivered');
						return;
					case 'refuse':
						this.handleSameEndProcess(this.$api.deliveryOrders.refuse(detailDataId));
						return;
					case 'finish':
						this.handleSameEndProcess(this.$api.deliveryOrders.finish(detailDataId));
						return;
					case 'rePickup':
						this.controlsTypeId = 'rePickup';
						this.visibleControlsAddressConfirm = true;
						return;
					case 'cancel':
						this.controlsTypeId = 'cancel';
						this.visibleControlsAddressConfirm = true;
						return;

					case 'confirmedPickedUp':
						this.openControlsAddress('confirmedPickedUp');
						return;
					case 'confirmedPickedUpFailed':
						this.openControlsAddress('confirmedPickedUpFailed');
						return;

					default:
						break;
				}
			},
		},
	};
</script>
<style lang="scss" scoped>
	.status-badge {
		position: relative;
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 0px;
			width: 20px;
			height: 20px;
			border-radius: 100%;
			background-color: #fe9705;
			z-index: 2;
			transform: translateY(-50%);
		}
		&.is-active {
			&::before {
				background-color: #22c55e;
			}
		}
	}
</style>
