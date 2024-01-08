<template>
	<div class="mx-0 my-0 login-wrapper flex align-center justify-center">
		<div id="loginForm" class="d-flex align-center justify-center w-100 my-auto">
			<div class="bg-white pa-12 w-100 flex z-10 relative rounded overflow-hidden">
				<div class="mx-auto min-width-[500px] flex form-container">
					<div class="preview-img p-6 bg-primary-100 h-100 flex-col flex bg-primary-100">
						<div class="flex items-center gap-[16px]">
							<img class="block" src="@/assets/images/login-logo.svg" alt="" />
						</div>
						<img class="block mx-auto my-auto" src="@/assets/images/login-sub-img.svg" alt="" />
					</div>
					<form @submit.prevent="onSubmit" class="py-6 px-5 md:px-10 form-login my-auto w-[400px]">
						<p class="mb-2 text-md">Xin chào bạn</p>
						<p class="text-xl font-bold mb-3 md:mb-8">Đăng nhập để tiếp tục</p>
						<BlockInputVue
							v-model="login"
							title="Tên đăng nhập"
							placeholder="Tên đăng nhập"
							container-class="mb-4"
							rounded="lg"
							size="xxl"
							:isError="Boolean(dataErrors.login) && flagSubmit"
							:errorMsg="dataErrors.login"
						/>
						<BlockInputVue
							v-model="password"
							title="Mật khẩu"
							placeholder="Mật khẩu"
							rounded="lg"
							type="password"
							container-class="mb-4 md:mb-6"
							size="xxl"
							:isError="Boolean(dataErrors.password) && flagSubmit"
							:errorMsg="dataErrors.password"
						/>
						<div>
							<div class="mb-4 text-sm leading-6">
								<input
									v-model="rememberMe"
									id="rememberMe"
									name="rememberMe"
									type="checkbox"
									class="appearance-none hidden h-0"
								/>
								<label for="rememberMe" class="font-medium text-neutral-900 cursor-pointer flex gap-[8px] items-center">
									<Icon
										v-show="rememberMe"
										name="fluent:checkbox-checked-20-filled"
										size="24px"
										class="rouned m-0 p-0 text-primary-500"
									/>
									<Icon
										v-show="!rememberMe"
										name="fluent:checkbox-unchecked-20-regular"
										size="24px"
										class="rouned m-0 p-0 text-gray-300"
									/>
									Nhớ tài khoản</label
								>
							</div>
							<NormalButton
								size="xxl"
								type="submit"
								:container-class="'block w-full rounded-xl font-semibold'"
								:loading="loading"
								:text-size="'md'"
							>
								Đăng nhập
							</NormalButton>

							<p v-if="loginErrorMsg" class="mt-2 text-sm text-red-600 text-center" id="email-error">
								{{ loginErrorMsg }}
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import BlockInputVue from '~~/components/Form/BlockInput.vue';
	import NormalButton from '~~/components/Buttons/NormalButton.vue';
	import { CookieOptions, apiResponde } from '~~/models';
	import { useAuthStore } from '~~/store/auth';
	import { useAppStateStore } from '~/store/appState';
	import { useNotificationStore } from '~~/store/AppNotification';

	export default {
		setup() {
			useHead({
				title: 'My App',
				meta: [{ name: 'description', content: 'My amazing site.' }],
				bodyAttrs: {
					class: 'test',
				},
			});

			const notificationStore = useNotificationStore();
			const authStore = useAuthStore();
			const { $api } = useNuxtApp();
			const router = useRouter();
			const rememberMe = ref<Boolean>(true);
			const CookieOptions: CookieOptions = { maxAge: 30 * 24 * 60 * 60, sameSite: 'lax' };
			const authCookie = useCookie('auth-token', CookieOptions);

			const getUserInfo = async (_token?: string) => {
				await $api.user
					.getUserInfo(_token || '')
					.then((res: apiResponde) => {
						const rs = res as apiResponde;
						const user: Record<string, any> = rs.data.user;
						if (_token) {
							authStore.setUser({ ...user, name: user.name, id: user.id, token: _token });
							authStore.setToken(_token);
							authCookie.value = _token;
						}
						router.push('orders/');
					})
					.catch((err: any) => {
						console.log(err);
					});
			};
			onMounted(() => {
				if (authCookie.value) {
					getUserInfo(authCookie.value);
				}
			});
			const api = $api;
			return {
				getUserInfo,
				notificationStore,
				authStore,
				authCookie,
				router,
				api,
				rememberMe,
			};
		},
		components: { BlockInputVue, NormalButton },
		data: (): Record<string, any> => ({
			form: false,
			login: '' as string,
			password: '' as string,
			loading: false,
			showForm: false,
			error: null,
			flagSubmit: false,
			loginErrorMsg: '',
		}),
		computed: {
			dataRules(): Record<string, string[]> {
				return {
					login: ['required'],
					password: ['required'],
				};
			},

			dataErrors() {
				return this.$globalHelpers.getDataErrors(this.dataRules, { login: this.login, password: this.password });
			},
		},
		mounted() {
			setTimeout(() => {
				this.showForm = true;
			}, 300);
			if (this.rememberMe) {
				this.login = localStorage.getItem('account') || '';
				this.password = localStorage.getItem('password') || '';
			}
		},
		updated() {
			console.log('updated');
		},
		methods: {
			clearAuth() {
				this.authStore.logout();
			},
			async onSubmit() {
				this.flagSubmit = true;
				if (Object.keys(this.dataErrors).length) {
					return;
				}
				const body = {
					login: this.login,
					password: this.password,
				};
				this.loading = true;
				await this.api.user
					.login(body)
					.then(
						(res: apiResponde) => {
							const rs = res as apiResponde;
							const user: Record<string, any> = rs.data.user;
							this.authStore.setUser({ ...user, name: user.name, id: user.id, token: rs.data.token });
							this.authStore.setToken(rs.data.token);
							this.authCookie = rs.data.token;
							this.authStore.getUserInfo();
							this.loginErrorMsg = '';
							if (this.rememberMe) {
								localStorage.setItem('account', this.login);
								localStorage.setItem('password', this.password);
							} else {
								localStorage.removeItem('account');
								localStorage.removeItem('password');
							}
							this.router.push('/orders');
						},
						(error: apiResponde) => {
							this.loginErrorMsg = error.data?.message || 'Đăng nhập thất bại, vui lòng thử lại.';
							this.notificationStore.setSnack({ text: 'Failed on Login: ' + error.data?.message, type: 'error' });
							console.log('exception...');
							console.log(error.status);
							console.log(error.data);
						}
					)
					.catch((err: any) => {
						this.loginErrorMsg = err || 'Đăng nhập thất bại, vui lòng thử lại.';

						this.error = err;
					})
					.finally(() => {
						this.loading = false;
					});
			},
			required(v: string) {
				return !!v || 'Field is required';
			},
			setLoginText(e: Event) {
				const input = e.target as HTMLInputElement | null;
				if (input) {
					this.login = input.value;
				}
			},
			setSnack() {
				this.notificationStore.setSnack({ text: 'Test snackbar' + new Date().getTime(), type: 'success' });
				this.notificationStore.setSnack({ text: 'Test snackbar' + new Date().getTime(), type: 'error' });
				this.notificationStore.setSnack({ text: 'Test snackbar' + new Date().getTime(), type: 'info' });
				this.notificationStore.setSnack({ text: 'Test snackbar' + new Date().getTime(), type: 'warning' });
			},
		},
	};
</script>

<style lang="scss">
	.login-wrapper {
		background-image: url('../assets/images/login-banner.png');
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		min-height: 100vh;
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(66, 65, 65, 0.163);
			z-index: 2;
		}
		.form-container {
			width: 850px;
			max-width: 90vw;
			height: 580px;
			max-height: 90vh;
			.preview-img {
				flex-grow: 1;
			}
			.form-login {
				flex-grow: 2;
			}
		}
	}
</style>
