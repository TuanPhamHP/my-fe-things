import { AppName, SimpleType } from 'models';

export interface PracticeItem {
	id: number | string;
	vneseName: string;
	eng: string;
	description: string;
	link: string;
	previewImage: string;
	status_id: number;
	category: SimpleType[];
	apps: AppName[];
}
