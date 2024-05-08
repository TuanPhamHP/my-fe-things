import { AppName } from 'models';

export interface DocumentItem {
	id: number | string;
	vneseName: string;
	eng: string;
	description: string;
	link: string;
	previewImage: string;
	status_id: number;
	apps: AppName[];
}
