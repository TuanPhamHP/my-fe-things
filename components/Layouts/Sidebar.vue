<template>
	<div class="min-w-[100px] sidebar-wrapper-container" :class="sideBarMini ? 'is-mini' : ''">
		<div class="px-0 py-0 sidebar-wrapper bg-primary-900" :class="sideBarMini ? 'is-mini' : ''">
			<nav class="h-full flex flex-col main-nav">
				<div class="brand-caster mx-auto mb-5 md: mb-[48px] h-[40px] w-full">
					<img v-show="sideBarMini" src="@/assets/images/sidebar-logo.svg" class="block mx-auto" alt="" />
					<img v-show="!sideBarMini" src="@/assets/images/sidebar-logo-expand.svg" class="block" alt="" />
				</div>

				<ul
					class="px-[18px] py-4 flex-column items-center justify-center h-full list-route-wr"
					:class="sideBarMini ? '' : ''"
				>
					<li v-for="item in itemsComputedLast" :key="item.title" class="">
						<VTooltip v-if="!item.isGroup" class="w-full mb-6">
							<nuxt-link
								:to="item.path"
								class="v-list-item mx-auto px-0 py-1 flex items-center justify-center hover:bg-zinc-100/25"
								:class="`${
									item.pathNameMatch.includes(currentPathActive) ? (sideBarMini ? '' : 'bg-primary-100') : ''
								} ${sideBarMini ? 'h-[40px] w-[40px] rounded-[32px]' : 'w-full rounded-lg'}`"
							>
								<div class="flex gap-[8px] items-center rounded-circle w-full">
									<div
										class="h-[40px] w-[40px] min-w-[40px] min-width-[40px] flex items-center justify-center rounded-[100%]"
										:class="`${
											item.pathNameMatch.includes(currentPathActive)
												? sideBarMini
													? 'bg-white'
													: 'bg-transparent'
												: 'bg-transparent'
										}`"
									>
										<Icon
											v-if="item.icon"
											:class="`${item.pathNameMatch.includes(currentPathActive) ? 'text-primary-500' : 'text-white'}`"
											:name="item.icon"
											size="24px"
										/>
									</div>
									<p
										v-show="!sideBarMini"
										class="w-full whitespace-nowrap"
										:class="`${item.pathNameMatch.includes(currentPathActive) ? 'text-primary-500' : 'text-white'}`"
									>
										{{ item.title }}
									</p>
								</div>
							</nuxt-link>
							<template #popper>{{ item.tooltip || item.title }}</template>
						</VTooltip>

						<div v-else class="" @click="sidebarMainClick">
							<div
								class="parent-route flex items-center text-white h-[40px] cursor-pointer hover:bg-zinc-100/25 rounded-[32px]"
								:class="`${item.pathNameMatch.includes(currentPathActive) ? 'bg-link-active' : ''} ${
									sideBarMini ? 'min-w-fit' : 'gap-[8px]'
								}`"
								@click="
									() => {
										item.isOpen = !item.isOpen;
									}
								"
							>
								<div
									class="h-[40px] w-[40px] min-w-[40px] min-width-[40px] flex items-center justify-center rounded-[100%] mx-auto"
									:class="`${item.pathNameMatch.includes(currentPathActive) ? 'bg-white' : 'bg-transparent'}`"
								>
									<Icon
										v-if="item.icon"
										:class="item.pathNameMatch.includes(currentPathActive) ? 'text-primary' : ''"
										:name="item.icon"
										size="18px"
									/>
								</div>
								<p class="w-full" v-show="!sideBarMini">{{ item.title }}</p>
								<Icon
									v-show="!sideBarMini"
									class="min-w-[32px] mr-1"
									:class="item.isOpen ? 'rotate-90' : ''"
									:name="'tabler:caret-right-filled'"
									size="24px"
								/>
							</div>

							<div
								v-for="child in item.listChild"
								:key="child.title"
								class="list-child rounded-[32px]"
								:class="` ${item.isOpen ? 'child-expand' : 'child-collapse'}`"
							>
								<VTooltip class="w-full my-2">
									<nuxt-link
										:to="child.path"
										class="v-list-item mx-auto px-0 flex items-center justify-center rounded-[32px]"
										:class="`${child.pathNameMatch.includes(currentPathActive) ? 'font-semibold' : 'font-light'} ${
											sideBarMini ? 'h-[42px] w-[40px]' : 'w-full'
										}`"
									>
										<div class="flex gap-[8px] min-h-[42px] items-center rounded-circle w-full">
											<div
												v-if="child.icon"
												class="h-[42px] w-[40px] min-w-[40px] min-width-[40px] flex items-center justify-center rounded-[100%]"
												:class="`${child.pathNameMatch.includes(currentPathActive) ? 'bg-white' : 'bg-transparent'}`"
											>
												<Icon
													:class="`${child.pathNameMatch.includes(currentPathActive) ? 'text-primary' : 'text-white'}`"
													:name="child.icon"
													size="18px"
												/>
											</div>
											<p v-show="!sideBarMini" class="w-full py-1 text-white whitespace-nowrap">
												{{ child.title }}
											</p>
										</div>
									</nuxt-link>
									<template #popper>{{ child.tooltip || child.title }}</template>
								</VTooltip>
							</div>
						</div>
					</li>
				</ul>
				<div class="px-[18px] logout-btn" @click="triggerLogout(true)">
					<div
						class="parent-route flex items-center gap-[8px] text-white h-[40px] cursor-pointer hover:bg-zinc-100/25 rounded-[32px]"
					>
						<div
							class="h-[40px] w-[40px] min-w-[40px] min-width-[40px] mx-auto flex items-center justify-center bg-transparent rounded-[100%]"
						>
							<Icon :name="'solar:logout-2-outline'" size="18px" />
						</div>
						<p class="w-full" v-show="!sideBarMini">Đăng xuất</p>
					</div>
				</div>
			</nav>
		</div>
		<div
			v-if="!sideBarMini"
			class="cloak bg-gray-700 fixed top-[0] bottom-[0] right-[0] left-[0]"
			@click="toggleSidebar"
		></div>
	</div>
</template>

<script lang="ts">
	import { ref, reactive, computed } from 'vue';
	import { useRoute } from 'vue-router';
	import { useAppStateStore } from '@/store/appState';
	import { storeToRefs } from 'pinia';
	interface SidebarItem {
		title: string;
		path: string;
		icon?: string;
		tooltip?: string;
		pathNameMatch: string[];
		isGroup: Boolean;
		disabled?: Boolean;
		permissionAccess: string[];
		listChild?: SidebarItem[];
		isOpen?: boolean;
	}
	export default {
		setup() {
			const appStateStore = useAppStateStore();
			const route = useRoute();
			const permissionsName: string[] = [];
			const { sideBarMini } = storeToRefs(appStateStore);
			const { toggleSidebar, triggerLogout } = appStateStore;
			const items = reactive<SidebarItem[]>([
				// {
				// 	title: 'Đơn hàng',
				// 	path: '/',
				// 	pathNameMatch: ['index'],
				// 	permissionAccess: [],
				// 	icon: 'solar:book-outline',
				// 	isGroup: false,
				// },
				{
					title: 'Quản lý đơn hàng',
					path: '/orders',
					pathNameMatch: ['orders', 'orders-id', 'orders-id-edit', 'orders-new'],
					permissionAccess: [],
					icon: 'solar:book-outline',
					isGroup: false,
					tooltip: 'Quản lý đơn hàng',
				},
				// {
				// 	title: 'Quản lý lái xe',
				// 	path: '/drivers',
				// 	pathNameMatch: ['drivers', 'drivers-id', 'drivers-id-edit'],
				// 	permissionAccess: [],
				// 	icon: 'mingcute:steering-wheel-line',
				// 	isGroup: false,
				// 	tooltip: 'Quản lý lái xe',
				// },

				// {
				// 	title: 'Danh sách khách hàng',
				// 	path: '/customers',
				// 	pathNameMatch: ['customers', 'customers-id', 'customers-id-edit'],
				// 	permissionAccess: [],
				// 	icon: 'solar:users-group-two-rounded-outline',
				// 	isGroup: false,
				// 	tooltip: 'Danh sách khách hàng',
				// },
				// {
				// 	title: 'Quản lý nhân viên',
				// 	path: '/users',
				// 	pathNameMatch: ['users', 'users-id', 'users-id-edit'],
				// 	permissionAccess: [],
				// 	icon: 'clarity:user-line',
				// 	isGroup: false,
				// 	tooltip: 'Quản lý nhân viên',
				// },
				// {
				// 	title: 'Đơn hàng',
				// 	path: '',
				// 	pathNameMatch: ['orders', 'orders-id', 'orders-id-edit'],
				// 	permissionAccess: [],
				// 	icon: 'guidance:calendar',
				// 	isGroup: true,
				// 	isOpen: true,
				// 	listChild: [
				// 		{
				// 			title: 'Danh sách đơn hàng',
				// 			path: '/orders',
				// 			pathNameMatch: ['orders'],
				// 			permissionAccess: [],
				// 			// icon: 'guidance:calendar',
				// 			isGroup: false,
				// 		},
				// 		{
				// 			title: 'Tạo đơn hàng mới',
				// 			path: '/orders/new',
				// 			pathNameMatch: ['orders-new'],
				// 			permissionAccess: ['denied'],
				// 			// icon: 'guidance:calendar',
				// 			isGroup: false,
				// 		},
				// 		{
				// 			title: 'Phiếu giao hàng',
				// 			path: '/delivery-orders',
				// 			pathNameMatch: ['delivery-orders', 'delivery-orders-id', 'delivery-orders-id-edit'],
				// 			permissionAccess: [],
				// 			// icon: 'guidance:calendar',
				// 			isGroup: false,
				// 		},
				// 	],
				// },
			]);

			const currentPathActive = computed((): string => {
				return (route.name || 'nth') as string;
			});
			const itemsComputed = computed(() => {
				return items
					.filter(o => {
						if (o.isGroup && Array.isArray(o.listChild)) {
							const listChildPermission = o.listChild.map(o => o.permissionAccess || []).flat();
							o.permissionAccess = [...o.permissionAccess, ...listChildPermission];
						}
						return (
							!o.disabled &&
							(!o.permissionAccess.length ||
								(o.permissionAccess.length && o.permissionAccess.some(k => permissionsName.includes(k))))
						);
					})
					.map(o => {
						if (o.isGroup && Array.isArray(o.listChild)) {
							let match: string[] = [];
							o.listChild.forEach(c => {
								match = [...match, ...c.pathNameMatch];
							});
							o.pathNameMatch = [...o.pathNameMatch, ...match];
							o.isOpen = o.pathNameMatch.includes(`${currentPathActive}`) ? true : false;
						}
						return o;
					});
			});

			const itemsComputedV2 = computed(() => {
				let arr: SidebarItem[] = [];
				itemsComputed.value.forEach(o => {
					if (!o.isGroup) {
						arr.push(o);
					} else {
						if (Array.isArray(o.listChild)) {
							arr = arr.concat([...o.listChild]);
						}
					}
				});

				return arr;
			});
			const itemsComputedV3 = computed(() => {
				let arr: SidebarItem[] = [];
				itemsComputed.value.forEach(o => {
					if (!o.isGroup) {
						arr.push(o);
					} else {
						const obj = { ...o, listChild: [] };
						arr.push(obj);
					}
				});

				return arr;
			});
			return {
				itemsComputedV3,
				itemsComputedV2,
				itemsComputed,
				// itemsComputedLast,
				sideBarMini,
				currentPathActive,
				toggleSidebar,
				triggerLogout,
			};
		},
		computed: {
			itemsComputedLast() {
				// TODO: Check permission
				return this.sideBarMini ? this.itemsComputedV3 : this.itemsComputed;
			},
		},
		methods: {
			sidebarMainClick() {
				if (this.sideBarMini) {
					this.toggleSidebar();
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.sidebar-wrapper-container {
		width: 315px;
		max-width: 315px;
		min-width: 315px;
		transition: 0.2s ease;
		transform-origin: left;

		&.is-mini {
			width: 100px;
			max-width: 100px;
			min-width: 100px;
		}
	}
	.sidebar-wrapper {
		width: 315px;
		max-width: 315px;
		min-width: 315px;
		height: 100vh;
		overflow: hidden;
		position: sticky;
		top: 0;
		transition: 0.2s ease;
		transform-origin: left;
		z-index: 16;
		* {
			transition: 0.2s ease;
		}
		.bg-link-active {
			background-color: rgba(255, 255, 255, 0.21);
		}
		position: relative;
		top: 0;
		left: 0;

		.list-child {
			transition: 0.2s ease;
			padding-left: 72px;
			&.child-collapse {
				height: 0px;
				overflow: hidden;
			}
			&.child-expand {
				height: auto;
				overflow: hidden;
			}
		}
		&.is-mini {
			position: relative;
			width: 100px;
			max-width: 100px;
			min-width: 100px;
			.brand-caster {
				width: 40px;
			}
			.list-child {
				padding-left: 0;
			}
		}
	}

	.cloak {
		z-index: 4;
		opacity: 0.4;
	}
	.list-route-wr {
		overflow-y: scroll;
		&::-webkit-scrollbar {
			width: 8px;
		}

		&::-webkit-scrollbar-track {
			background: transparent;
			border-radius: 0px;
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 4px;
			background: #47584800;
			transition-delay: 1s;
		}
		&:hover {
			&::-webkit-scrollbar-thumb {
				border-radius: 4px;
				background: #2c382ddc;
			}
		}
	}
	.main-nav {
		padding: 32px 0;
	}
	.cloak {
		display: none;
		z-index: 13;
	}
	.sidebar-wrapper {
		width: 315px;
		max-width: 315px;
		min-width: 315px;
		&.is-mini {
			width: 100px;
			max-width: 100px;
			min-width: 100px;
		}
	}
	.non-group-active {
		background-color: red;
		border-radius: 8px !important;
	}
	@media only screen and (max-width: 1500px) {
		.cloak {
			display: block;
		}
		.sidebar-wrapper-container {
			width: 100px;
			max-width: 100px;
			min-width: 100px;
			transition: 0.2s ease;
			transform-origin: left;

			&.is-mini {
				width: 100px;
				max-width: 100px;
				min-width: 100px;
			}
		}
		.sidebar-wrapper {
			position: fixed;
			width: 280px;
			max-width: 280px;
			min-width: 100px;
		}
		.non-group-active {
			background-color: red;
			border-radius: 32px !important;
		}
	}
</style>
