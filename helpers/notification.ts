import { snackOptions } from '../models';
import { useNotificationStore } from '../store/AppNotification';
export const setSnack = (snackOptions: snackOptions) => {
	useNotificationStore().setSnack(snackOptions);
};
