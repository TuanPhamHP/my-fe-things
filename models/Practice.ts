import { SimpleType } from 'models';

export interface PracticeItem {
	id: number;
	vneseName: string;
	eng: string;
	description: string;
	link: string;
	previewImage: string;
	status_id: number;
	category: SimpleType[];
}
