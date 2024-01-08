import { defineStore } from 'pinia';
import { snackOptions, AppSnack } from '~/models/index';
export const useNotificationStore = defineStore('notification', {
	state: () => ({}),
	actions: {
		setSnack(snackOptions: snackOptions) {
			const snack = new AppSnack(snackOptions);
			const wrapper = document.querySelector('#snackbarWrapper');
			const gs = document.querySelector('#app');
			if (!wrapper || !gs) {
				return;
			}
			const div = document.createElement('div');
			div.innerText = snackOptions.text;
			div.classList.add('custom-snack', snack.getHTMLClass(), 'limit-line-3');
			var s = setTimeout(() => {
				div.remove();
			}, 5000);
			div.addEventListener('mouseenter', () => {
				clearTimeout(s);
			});
			div.addEventListener('mouseleave', () => {
				s = setTimeout(() => {
					div.remove();
				}, 1000);
			});
			wrapper?.appendChild(div);
		},
	},
});
