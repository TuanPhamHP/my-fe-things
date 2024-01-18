<template>
	<div class="text-right mx-3 rounded-half md:ml-auto hidden sm:block">
		<Menu as="div" class="relative block text-left">
			<div>
				<MenuButton
					class="flex w-full items-center justify-center hover:bg-neutral-200/50 rounded-half px-2 py-1 text-sm focus:outline-none"
				>
					<UserAvatarPreview :user="userAvatar" :size="32" />
					<p class="pl-2 font-semibold text-slate-900 dark:text-white">{{ user?.name }}</p>

					<Icon v-if="false" class="min-w-[32px] mr-1 text-slate-900" :name="'tabler:caret-down-filled'" size="18px" />
				</MenuButton>
			</div>

			<transition
				v-if="false"
				enter-active-class="transition duration-100 ease-out"
				enter-from-class="transform scale-95 opacity-0"
				enter-to-class="transform scale-100 opacity-100"
				leave-active-class="transition duration-75 ease-in"
				leave-from-class="transform scale-100 opacity-100"
				leave-to-class="transform scale-95 opacity-0"
			>
				<MenuItems
					class="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rounded-[12px]"
				>
					<div class="px-1 py-1">
						<MenuItem v-slot="{ active }">
							<button
								:class="[
									active ? 'bg-primary-300 text-dark' : 'text-gray-900',
									'group flex w-full items-center rounded-md px-2 py-2 text-sm',
								]"
								@click="$router.push('/my-infomation')"
							>
								<Icon class="min-w-[32px] mr-1" :name="'ph:user-thin'" size="24px" /> Thông tin tài khoản
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
								<Icon class="min-w-[32px] mr-1" :name="'solar:lock-keyhole-linear'" size="24px" /> Đổi mật khẩu
							</button>
						</MenuItem>
					</div> -->

					<div class="px-1 py-1">
						<MenuItem v-slot="{ active }">
							<button
								:class="[
									active ? 'bg-primary-300 text-dark' : 'text-gray-900',
									'group flex w-full items-center rounded-md px-2 py-2 text-sm',
								]"
								@click="triggerLogout(true)"
							>
								<Icon class="min-w-[32px] mr-1" :name="'solar:logout-2-outline'" size="24px" /> Đăng xuất
							</button>
						</MenuItem>
					</div>
				</MenuItems>
			</transition>
		</Menu>
	</div>
</template>

<script lang="ts">
	import { ref, reactive, computed } from 'vue';
	import { useAppStateStore } from '@/store/appState';
	import { useAuthStore } from '@/store/auth';
	import { storeToRefs } from 'pinia';
	import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
	import UserAvatarPreview from './UserAvatarPreview.vue';
	import { UserAvatar } from 'models';
	export default {
		components: { Menu, MenuButton, MenuItems, MenuItem, UserAvatarPreview },

		setup() {
			const appStateStore = useAppStateStore();
			const authStore = useAuthStore();
			const { triggerLogout } = appStateStore;
			const { user } = storeToRefs(authStore);
			const userAvatar: UserAvatar = { name: user.value?.name || '', avatar: user?.value?.avatar || '' };
			return {
				user,
				triggerLogout,
				userAvatar,
			};
		},
		data() {
			return {};
		},
		mounted() {},
		methods: {},
	};
</script>
