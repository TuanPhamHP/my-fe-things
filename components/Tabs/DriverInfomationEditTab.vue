<template>
	<div>
		<h1 class="display-xs font-semibold">Thông tin chung</h1>
		<div class="py-8 flex gap-6 items-center">
			<div class="flex">
				<UserAvatarPreview :user="user" :size="100" background="bg-primary-300" />
			</div>
			<div>
				<p class="display-xs font-bold mb-3 flex items-center gap-2">
					<span v-if="!onEditName">
						{{ name }}
					</span>
					<input
						v-if="onEditName"
						v-model="name"
						class="display-xs font-bold outline-0 border-b-4 border-green-500"
						autofocus
						type="text"
					/>
					<Icon
						:name="onEditName ? 'solar:check-read-outline' : 'solar:pen-2-bold'"
						size="24px"
						title="Chỉnh sửa"
						class="text-blue-500 cursor-pointer min-w-[32px]"
						@click="editName"
					/>
				</p>

				<p
					class="text-md font-semibold status-badge pl-8"
					:class="[
						getForwarderStatusTextColor(detailData.status?.id),
						detailData?.status?.id === 1 ? 'is-active' : 'is-disabled',
					]"
				>
					{{ detailData?.status?.name }}
				</p>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div class="col-span-1">
				<BlockInputVue
					v-model="username"
					title="Tên đăng nhập"
					placeholder="Tên đăng nhập"
					container-class="mb-0"
					size="xxl"
					isDisabled
				/>
			</div>
			<div class="col-span-1">
				<p class="text-md text-gray-900 mb-2">Tỉnh / Thành phố</p>

				<AutocompleteNormal
					:init-data="province"
					placeholder="Chọn tỉnh / thành phố"
					:list-items="listProvinceComputed"
					clearable
					rounded="md"
					size="xxl"
					@selected="changeProvince"
				/>
			</div>

			<div class="col-span-1">
				<BlockInputVue
					v-model="code"
					title="Mã lái xe"
					placeholder="Mã lái xe"
					container-class="mb-0"
					size="xxl"
					isDisabled
				/>
			</div>
			<div class="col-span-1">
				<p class="text-md text-gray-900 mb-2">Quận / Huyện</p>

				<AutocompleteNormal
					:init-data="district"
					placeholder="Chọn quận / huyện"
					:empty-no-search-message="'Chọn tỉnh / thành phố trước'"
					:list-items="listDistrictComputed"
					clearable
					rounded="md"
					size="xxl"
					@selected="changeDistrict"
				/>
			</div>
			<div class="col-span-1">
				<BlockInputVue
					v-model="id_no"
					title="MST/CCCD"
					placeholder="VD: 036096002222"
					container-class="mb-0"
					size="xxl"
				/>
			</div>

			<div class="col-span-1">
				<p class="text-md text-gray-900 mb-2">Phường / Xã</p>
				<AutocompleteNormal
					:init-data="ward_code"
					placeholder="Chọn phường / xã"
					:empty-no-search-message="'Chọn quận / huyện trước'"
					:list-items="listWardsComputed"
					clearable
					rounded="md"
					size="xxl"
					@selected="changeWard"
				/>
			</div>
			<div class="col-span-1">
				<BlockInputVue
					v-model="phone"
					title="Số điện thoại"
					placeholder="VD: 0333444555"
					container-class="mb-0"
					size="xxl"
					required
					:isError="Boolean(dataErrors.phone) && flagSubmit"
					:errorMsg="dataErrors.phone"
				/>
			</div>
			<div class="col-span-1">
				<BlockInputVue
					v-model="address_line"
					title="Địa chỉ"
					placeholder="VD: Số nhà 48 - Ngõ 12 ...."
					container-class="mb-0"
					size="xxl"
				/>
			</div>
			<div class="col-span-1">
				<BlockInputVue
					v-model="email"
					title="Email"
					size="xxl"
					required
					counter
					:max-length="200"
					placeholder="VD: mrabc@gmail.com"
					container-class="mb-0"
					:isError="Boolean(dataErrors.email) && flagSubmit"
					:errorMsg="dataErrors.email"
				/>
			</div>
		</div>
		<div class="flex items-center gap-2 justify-end">
			<NormalButton
				v-if="detailData?.status?.id === 1"
				size="base"
				type="submit"
				:container-class="'block  rounded-xl font-normal'"
				:color="'outline-red'"
				:loading="loadingUpdate"
				@click="toggleStatusData"
			>
				Ngừng hoạt động
			</NormalButton>
			<NormalButton
				v-if="detailData?.status?.id !== 1"
				size="base"
				type="submit"
				:container-class="'block  rounded-xl font-normal'"
				:color="'outline-primary'"
				:loading="loadingUpdate"
				@click="toggleStatusData"
			>
				Kích hoạt lại
			</NormalButton>
			<NormalButton
				size="base"
				type="button"
				:container-class="'block rounded-xl font-normal'"
				:color="'gradient-button'"
				:loading="loadingUpdateData"
				@click="updateData"
			>
				<Icon :name="'carbon:rotate-360'" size="18px" /> Cập nhật
			</NormalButton>
		</div>
	</div>
</template>
<script lang="ts">
	import { computed } from 'vue';
	import { useInternalStore } from '../../store/Internal';
	import { useNotificationStore } from '../../store/AppNotification';
	import UserAvatarPreview from '../../components/Layouts/UserAvatarPreview.vue';
	import { Driver } from '../../models/Driver';
	import { District, Ward } from '../../models';
	import { PropType } from 'nuxt/dist/app/compat/capi';
	import NormalButton from '../Buttons/NormalButton.vue';
	import BlockInputVue from '../Form/BlockInput.vue';
	import AutocompleteNormal from '../Form/AutocompleteNormal.vue';
	import SelectNormal from '../Form/SelectNormal.vue';
	import { storeToRefs } from 'pinia';
	import { getForwarderStatusTextColor } from '../../helpers/formatter';
	export default {
		components: { UserAvatarPreview, NormalButton, BlockInputVue, SelectNormal, AutocompleteNormal },
		props: {
			detailData: {
				type: Object as PropType<Driver>,
				default: {},
			},
			getDetailData: {
				type: Function,
				default() {},
			},
		},
		setup() {
			const { $api } = useNuxtApp();
			const { listProvince } = storeToRefs(useInternalStore());

			const notificationStore = useNotificationStore();
			const listProvinceComputed = computed(() => {
				return listProvince.value.map(o => ({
					...o,
					name: (o.full_name || '') as string,
					id: (o.code || '') as string,
				}));
			});
			const api = $api;
			return {
				listProvinceComputed,
				notificationStore,
				api,
			};
		},
		data() {
			return {
				account_name: '' as string,
				name: '' as string,
				username: '' as string,
				id_no: '' as string,
				phone: '' as string,
				email: '' as string,
				code: '' as string,
				address_line: '' as string,
				province: null as string | number | null,
				district: null as string | number | null,
				ward_code: null as string | number | null,
				listDistrict: [] as District[],
				listWard: [] as Ward[],
				open: false,
				loadingUpdateData: false,
				loadingUpdate: false,
				flagSubmit: false,
				onEditName: false,
				isInitData: true,
			};
		},
		computed: {
			user() {
				return {
					avatar: '',
					name: this.detailData.name || 'USER',
				};
			},
			dataRules(): Record<string, string[]> {
				return {
					name: ['required', 'max:200'],
					username: ['required', 'max:50'],
					phone: ['required'],
					email: ['required', 'max:200'],
				};
			},
			dataErrors() {
				const obj: Record<string, string> = {};
				for (const key in this.dataRules) {
					if (Object.hasOwnProperty.call(this.dataRules, key)) {
						if (Array.isArray(this.dataRules[key])) {
							if (this.dataRules[key].includes('required')) {
								// @ts-ignore
								if (key && !this[key]) {
									obj[key] = 'Không được để trống trường này.';
								}
							}
							const maxLengthRule = this.dataRules[key].find(o => o.includes('max:'));
							if (maxLengthRule) {
								const maxLength = +(maxLengthRule.split(':').pop() || 0);
								// @ts-ignore
								if (key && this[key].length > maxLength) {
									obj[key] = `Tối đa ${maxLength} kí tự.`;
								}
							}
						}
					}
				}
				return obj;
			},
			listDistrictComputed() {
				return this.listDistrict.map(o => ({
					...o,
					name: (o.full_name || '') as string,
					id: (o.code || '') as string,
				}));
			},
			listWardsComputed() {
				return this.listWard.map(o => ({
					...o,
					name: (o.full_name || '') as string,
					id: (o.code || '') as string,
				}));
			},
		},
		watch: {
			forwarder: {
				deep: true,
				handler() {
					this.syncData();
				},
			},
			province: {
				handler() {
					if (this.isInitData) {
						this.getListDistrict();
						return;
					}
					if (this.province) {
						this.listDistrict = [];
						this.district = null;
						this.getListDistrict();
					} else {
						this.listDistrict = [];
						this.district = null;
					}
				},
			},
			district: {
				handler() {
					if (this.isInitData) {
						this.getListWard();
						return;
					}
					if (this.district) {
						this.listWard = [];
						this.ward_code = null;
						this.getListWard();
					} else {
						this.listWard = [];
						this.ward_code = null;
					}
				},
			},
		},
		mounted() {
			this.syncData();
		},
		methods: {
			getForwarderStatusTextColor,
			syncData() {
				if (this.detailData) {
					this.name = this.detailData.name || '';
					this.username = this.detailData?.username || '';
					this.id_no = this.detailData.id_no || '';
					this.phone = this.detailData.phone || '';
					this.email = this.detailData.email || '';
					this.code = this.detailData.code || '';
					this.address_line = this.detailData.address?.address_line || '';
					this.province = this.detailData.address?.province?.code || '';
					if (this.detailData.address?.province?.code) {
						this.syncAddress();
					}
				}
			},
			changeProvince(val: string | number) {
				this.province = val;
			},
			changeDistrict(val: string | number) {
				this.district = val;
			},
			changeWard(val: string | number) {
				this.ward_code = val;
			},
			syncAddress() {
				this.getListDistrict(true);
			},
			getListDistrict(syncDistrict = false) {
				this.api.internal.getListDistrict({ province_code: this.province, pagination: false }).then(
					res => {
						this.listDistrict = res.data.districts;
						if (syncDistrict) {
							this.district = this.detailData.address?.district?.code || null;
							this.getListWard(true);
						}
					},
					err => {
						this.notificationStore.setSnack({
							text: err?.response?._data?.message || 'Lấy danh sách quận/huyện thất bại',
							type: 'error',
						});
					}
				);
			},
			getListWard(syncWard = false) {
				this.api.internal.getListWards({ district_code: this.district, pagination: false }).then(
					res => {
						this.listWard = res.data.wards;
						if (syncWard) {
							this.ward_code = this.detailData.address?.ward?.code || null;
						}
					},
					err => {
						this.notificationStore.setSnack({
							text: err?.response?._data?.message || 'Lấy danh sách quận/huyện thất bại',
							type: 'error',
						});
					}
				);
			},
			updateData() {
				this.flagSubmit = false;
				this.loadingUpdateData = true;
				this.flagSubmit = true;
				if (Object.keys(this.dataErrors).length) {
					this.loadingUpdateData = false;
					this.notificationStore.setSnack({ text: 'Vui lòng điền đủ thông tin', type: 'error' });

					return;
				}
				const payload = {
					name: this.name,
					email: this.email,
					phone: this.phone,
					id_no: this.id_no,
					province_code: this.province,
					district_code: this.district,
					ward_code: this.ward_code,
					address_line: this.address_line,
				};
				this.api.drivers
					.update(this.detailData.id, payload)
					.then(
						res => {
							this.notificationStore.setSnack({ text: 'Cập nhật lái xe thành công!', type: 'success' });
							this.$router.push(`/drivers/${this.$route.params.id}`);
						},
						err => {
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Cập nhật lái xe thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {
						this.loadingUpdateData = false;
					});
			},
			editName() {
				if (this.onEditName) {
					const payload = {
						name: this.name,
					};
					this.api.drivers
						.update(this.detailData.id, payload)
						.then(
							res => {
								this.notificationStore.setSnack({ text: 'Cập nhật lái xe thành công!', type: 'success' });
								this.onEditName = false;
								this.$router.push(`/forwarders/${this.$route.params.id}`);
							},
							err => {
								this.notificationStore.setSnack({
									text: err?.response?._data?.message || 'Cập nhật lái xe thất bại',
									type: 'error',
								});
							}
						)
						.finally(() => {
							this.loadingUpdateData = false;
						});
				} else {
					this.onEditName = true;
				}
			},

			toggleStatusData() {
				if (!this.detailData) {
					return;
				}
				if (this.detailData.status?.id === 1) {
					this.deactiveData(this.detailData.id);
				} else {
					this.activeData(this.detailData.id);
				}
			},
			async deactiveData(id: number | string) {
				this.loadingUpdate = true;
				await this.api.drivers.updateStatus(id, { status_id: 2 }).then(
					res => {
						this.getDetailData();
						this.notificationStore.setSnack({ text: 'Thao tác thành công', type: 'success' });

						this.$nextTick(() => {
							this.loadingUpdate = false;
						});
					},
					err => {
						this.notificationStore.setSnack({
							text: err?.response?._data?.message || 'Thao tác thất bại',
							type: 'error',
						});
					}
				);
			},
			async activeData(id: number | string) {
				this.loadingUpdate = true;
				await this.api.drivers.updateStatus(id, { status_id: 1 }).then(
					res => {
						this.getDetailData();
						this.notificationStore.setSnack({ text: 'Thao tác thành công', type: 'success' });
						this.$nextTick(() => {
							this.loadingUpdate = false;
						});
					},
					err => {
						this.notificationStore.setSnack({
							text: err?.response?._data?.message || 'Thao tác thất bại',
							type: 'error',
						});

						this.loadingUpdate = false;
					}
				);
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
