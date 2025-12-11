<template>
	<div class="sm:w-[100px] sm:min-w-[100px]" :class="sideBarMini ? 'hidden sm:block' : 'block'">
		<div class="px-0 py-0 sidebar-wrapper bg-indigo-500 dark:bg-slate-700" :class="sideBarMini ? 'is-mini' : ''">
			<nav class="h-full flex flex-col main-nav">
				<div class="brand-caster mx-auto mb-5 xl: mb-[48px] h-[64px] cursor-pointer" @click="$router.push('/')">
					<img src="@/assets/images/sidebar-logo-01.png" class="block mx-auto h-full" alt="" />
					<!-- <img v-show="sideBarMini" src="@/assets/images/sidebar-logo.svg" class="block mx-auto" alt="" />
					<img v-show="!sideBarMini" src="@/assets/images/sidebar-logo-expand.svg" class="block mx-auto" alt="" /> -->
				</div>

				<ul
					class="px-[18px] py-4 flex-column items-center justify-center h-full list-route-wr"
					:class="sideBarMini ? '' : ''"
				>
					<li v-for="item in itemsComputedLast" :key="item.title" class="rounded-[32px]">
						<VTooltip v-if="!item.isGroup" class="w-full mb-2">
							<nuxt-link
								:to="item.path"
								class="v-list-item px-0 flex items-center justify-center rounded-[32px] hover:bg-zinc-100/25"
								:class="`${item.pathNameMatch.test(currentPathActive) ? 'bg-link-active' : ''} ${
									sideBarMini ? 'h-[64px] w-[64px]' : 'w-full'
								}`"
							>
								<div class="flex gap-[8px] items-center rounded-circle w-full">
									<div
										class="h-[64px] w-[64px] min-w-[64px] min-width-[64px] flex items-center justify-center rounded-[100%]"
										:class="`${item.pathNameMatch.test(currentPathActive) ? 'bg-white' : 'bg-transparent'}`"
									>
										<Icon
											v-if="item.icon"
											:class="`${item.pathNameMatch.test(currentPathActive) ? 'text-slate-900' : 'text-white'}`"
											:name="item.icon"
											size="18px"
										/>
									</div>
									<p v-show="!sideBarMini" class="w-full text-white whitespace-nowrap">
										{{ item.title }}
									</p>
								</div>
							</nuxt-link>
							<template #popper>{{ item.tooltip || item.title }}</template>
						</VTooltip>

						<div v-else class="" @click="sidebarMainClick">
							<div
								class="parent-route flex items-center text-slate-900 h-[64px] cursor-pointer hover:bg-zinc-100/25 rounded-[32px]"
								:class="`${item.pathNameMatch.test(currentPathActive) ? 'bg-link-active' : ''} ${
									sideBarMini ? 'min-w-fit' : 'gap-[8px]'
								}`"
								@click="
									() => {
										item.isOpen = !item.isOpen;
									}
								"
							>
								<div
									class="h-[64px] w-[64px] min-w-[64px] min-width-[64px] flex items-center justify-center rounded-[100%]"
									:class="`${item.pathNameMatch.test(currentPathActive) ? 'bg-white' : 'bg-transparent'}`"
								>
									<Icon
										v-if="item.icon"
										:class="item.pathNameMatch.test(currentPathActive) ? 'text-slate-900' : 'text-white'"
										:name="item.icon"
										size="18px"
									/>
								</div>
								<p class="w-full text-white" v-show="!sideBarMini">{{ item.title }}</p>
								<Icon
									v-show="!sideBarMini"
									class="min-w-[32px] mr-1 text-white"
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
										class="v-list-item px-0 flex items-center justify-center rounded-[32px]"
										:class="`${child.pathNameMatch.test(currentPathActive) ? 'font-semibold' : 'font-light'} ${
											sideBarMini ? 'h-[42px] w-[64px]' : 'w-full'
										}`"
									>
										<div class="flex gap-[8px] min-h-[42px] items-center rounded-circle w-full">
											<div
												v-if="child.icon"
												class="h-[42px] w-[64px] min-w-[64px] min-width-[64px] flex items-center justify-center rounded-[100%]"
												:class="`${child.pathNameMatch.test(currentPathActive) ? 'bg-white' : 'bg-transparent'}`"
											>
												<Icon
													:class="`${child.pathNameMatch.test(currentPathActive) ? 'text-white' : 'text-white'}`"
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
						class="parent-route flex items-center gap-[8px] text-white h-[64px] cursor-pointer hover:bg-zinc-100/25 rounded-[32px]"
					>
						<div
							class="h-[64px] w-[64px] min-w-[64px] min-width-[64px] flex items-center justify-center bg-transparent rounded-[100%]"
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
			class="cloak bg-gray-700 dark:bg-slate-900 fixed top-[0] bottom-[0] right-[0] left-[0]"
			@click="toggleSidebar"
		></div>
	</div>
</template>

<script lang="ts">
	import { ref, reactive, computed } from 'vue';
	import { useRoute } from 'vue-router';
	import { useAppStateStore } from '@/store/appState';
	import { storeToRefs } from 'pinia';
	import { AppName } from '@/models/index';
	interface SidebarItem {
		title: string;
		path: string;
		icon?: string;
		tooltip?: string;
		pathNameMatch: RegExp;
		isGroup: Boolean;
		disabled?: Boolean;
		permissionAccess: string[];
		listChild?: SidebarItem[];
		isOpen?: boolean;
		showByApp: AppName[];
	}
	export default {
		setup() {
			const appStateStore = useAppStateStore();
			const route = useRoute();
			const permissionsName: string[] = [];
			const { sideBarMini } = storeToRefs(appStateStore);
			const { toggleSidebar, triggerLogout } = appStateStore;
			const items = reactive<SidebarItem[]>([
				{
					title: 'Trang chủ',
					path: '/',
					pathNameMatch: /^index/,
					permissionAccess: [],
					icon: 'solar:home-angle-2-linear',
					isGroup: false,
					showByApp: [],
				},
				{
					title: 'Tài liệu',
					path: '/reactjs-basic/documentation',
					pathNameMatch: /^reactjs-basic-documentation/,
					permissionAccess: [],
					icon: 'solar:notebook-bookmark-outline',
					isGroup: false,
					tooltip: 'Tài liệu',
					showByApp: ['reactjs-basic'],
				},
				{
					title: 'Thực hành',
					path: '/reactjs-basic/practice',
					pathNameMatch: /^reactjs-basic-practice/,
					permissionAccess: [],
					icon: 'solar:programming-broken',
					isGroup: false,
					tooltip: 'Thực hành',
					showByApp: ['reactjs-basic'],
				},

				// html-css-js-basic

				{
					title: 'Tài liệu',
					path: '/html-css-js-basic/documentation',
					pathNameMatch: /^html-css-js-basic-documentation/,
					permissionAccess: [],
					icon: 'solar:notebook-bookmark-outline',
					isGroup: false,
					tooltip: 'Tài liệu',
					showByApp: ['html-basic'],
				},
				{
					title: 'Thực hành',
					path: '/html-css-js-basic/practice',
					pathNameMatch: /^html-css-js-basic-practice/,
					permissionAccess: [],
					icon: 'solar:programming-broken',
					isGroup: false,
					tooltip: 'Thực hành',
					showByApp: ['html-basic'],
				},
				// nextjs-basic

				{
					title: 'Tài liệu',
					path: '/nextjs-basic/documentation',
					pathNameMatch: /^nextjs-basic-documentation/,
					permissionAccess: [],
					icon: 'solar:notebook-bookmark-outline',
					isGroup: false,
					tooltip: 'Tài liệu',
					showByApp: ['nextjs-basic'],
				},
				{
					title: 'Thực hành',
					path: '/nextjs-basic/practice',
					pathNameMatch: /^nextjs-basic-practice/,
					permissionAccess: [],
					icon: 'solar:programming-broken',
					isGroup: false,
					tooltip: 'Thực hành',
					showByApp: ['nextjs-basic'],
				},
				// PHP
				{
					title: 'Tài liệu',
					path: '/php/documentation',
					pathNameMatch: /^php-documentation/,
					permissionAccess: [],
					icon: 'solar:notebook-bookmark-outline',
					isGroup: false,
					tooltip: 'Tài liệu',
					showByApp: ['php'],
				},
				{
					title: 'Thực hành',
					path: '/php/practice',
					pathNameMatch: /^php-practice/,
					permissionAccess: [],
					icon: 'solar:programming-broken',
					isGroup: false,
					tooltip: 'Thực hành',
					showByApp: ['php'],
				},
				// NodeJS
				{
					title: 'Tài liệu',
					path: '/nodejs/documentation',
					pathNameMatch: /^nodejs-documentation/,
					permissionAccess: [],
					icon: 'solar:notebook-bookmark-outline',
					isGroup: false,
					tooltip: 'Tài liệu',
					showByApp: ['nodejs'],
				},
				{
					title: 'Thực hành',
					path: '/nodejs/practice',
					pathNameMatch: /^nodejs-practice/,
					permissionAccess: [],
					icon: 'solar:programming-broken',
					isGroup: false,
					tooltip: 'Thực hành',
					showByApp: ['nodejs'],
				},
				// SQL
				{
					title: 'Tài liệu',
					path: '/sql/documentation',
					pathNameMatch: /^sql-documentation/,
					permissionAccess: [],
					icon: 'solar:notebook-bookmark-outline',
					isGroup: false,
					tooltip: 'Tài liệu',
					showByApp: ['sql'],
				},
				{
					title: 'Thực hành',
					path: '/sql/practice',
					pathNameMatch: /^sql-practice/,
					permissionAccess: [],
					icon: 'solar:programming-broken',
					isGroup: false,
					tooltip: 'Thực hành',
					showByApp: ['sql'],
				},
				// NEST
				{
					title: 'Tài liệu',
					path: '/nestjs/documentation',
					pathNameMatch: /^nestjs-documentation/,
					permissionAccess: [],
					icon: 'solar:notebook-bookmark-outline',
					isGroup: false,
					tooltip: 'Tài liệu',
					showByApp: ['nestjs'],
				},
				{
					title: 'Thực hành',
					path: '/nestjs/practice',
					pathNameMatch: /^nestjs-practice/,
					permissionAccess: [],
					icon: 'solar:programming-broken',
					isGroup: false,
					tooltip: 'Thực hành',
					showByApp: ['nestjs'],
				},
				// MONGO
				{
					title: 'Tài liệu',
					path: '/mongo-db/documentation',
					pathNameMatch: /^mongo-db-documentation/,
					permissionAccess: [],
					icon: 'solar:notebook-bookmark-outline',
					isGroup: false,
					tooltip: 'Tài liệu',
					showByApp: ['mongodb'],
				},
				{
					title: 'Thực hành',
					path: '/mongo-db/practice',
					pathNameMatch: /^mongo-db-practice/,
					permissionAccess: [],
					icon: 'solar:programming-broken',
					isGroup: false,
					tooltip: 'Thực hành',
					showByApp: ['mongodb'],
				},
				// PYTHON
				{
					title: 'Tài liệu',
					path: '/python/documentation',
					pathNameMatch: /^python-documentation/,
					permissionAccess: [],
					icon: 'solar:notebook-bookmark-outline',
					isGroup: false,
					tooltip: 'Tài liệu',
					showByApp: ['python'],
				},
				{
					title: 'Thực hành',
					path: '/python/practice',
					pathNameMatch: /^python-practice/,
					permissionAccess: [],
					icon: 'solar:programming-broken',
					isGroup: false,
					tooltip: 'Thực hành',
					showByApp: ['python'],
				},
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
							let match: RegExp;
							o.listChild.forEach(c => {
								// match = [...match, ...c.pathNameMatch];
								match = c.pathNameMatch;
							});
							o.pathNameMatch = o.pathNameMatch;
							o.isOpen = o.pathNameMatch.test(`${currentPathActive}`) ? true : false;
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

				const sideBar = this.sideBarMini ? this.itemsComputedV3 : this.itemsComputed;
				return sideBar.filter((item: SidebarItem) => {
					const currentPath = this.$globalHelpers.mapPathToApp(this.$route.path);

					return item.showByApp.length ? item.showByApp.includes(currentPath) : true;
				});
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
	.sidebar-wrapper {
		width: 325px;
		max-width: 325px;
		min-width: 325px;
		height: 100vh;
		overflow: hidden;
		position: sticky;
		top: 0;
		transition: 0.2s ease;
		z-index: 16;
		* {
			transition: 0.2s ease;
		}
		.bg-link-active {
			background-color: rgba(255, 255, 255, 0.21);
		}
		position: fixed;
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
				width: 64px;
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
		z-index: 13;
	}
</style>
