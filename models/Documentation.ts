import { AppName } from 'models';

export interface DocumentItem {
	id: number;
	vneseName: string;
	eng: string;
	description: string;
	link: string;
	previewImage: string;
	status_id: number;
	apps: AppName[];
}
