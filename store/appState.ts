import { defineStore } from 'pinia';
import { breadCrumb } from 'models';
const currentStates = [0, 1, 2, 3, 4] as const;
type validAppStateNumb = (typeof currentStates)[number];
export const useAppStateStore = defineStore('appState', {
	state: () => ({
		globalLoading: true as boolean,
		globalSync: 0 as number,
		sideBarMini: true,
		currentViewTitle: '',
		onLogout: false,
		currentBreadCrumb: [
			{
				title: 'Trang chủ',
				route: '/',
			},
		] as breadCrumb[],
		currentState: 1, // 1: Check Auth | 2: Fetching Data | 3: Ready | 0: Errors
	}),

	actions: {
		setGlobalLoading(b: boolean) {
			this.globalLoading = b;
		},
		setAppState(n: validAppStateNumb) {
			this.currentState = n;
		},
		setCurrentViewTitle(s: string) {
			this.currentViewTitle = s;
		},
		setBreadCrumb(payload: breadCrumb[]) {
			this.currentBreadCrumb = payload;
		},
		setBreadCrumbWithHomePage(payload?: breadCrumb) {
			if (!payload) {
				this.currentBreadCrumb = [
					{
						title: 'Trang chủ',
						route: '/',
					},
				];
				return;
			}
			this.currentBreadCrumb = [
				{
					title: 'Trang chủ',
					route: '/',
				},
				payload,
			];
		},
		toggleSidebar() {
			this.sideBarMini = !this.sideBarMini;
		},
		triggerLogout(b: boolean) {
			this.onLogout = b;
		},
	},
});
