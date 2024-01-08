import { CustomFileRespone, SimpleType, StringOrNull } from './index';
import { Customer } from './Customer';
export interface DynamicFormType {
	id: number | string;
	name: 'files' | 'string';
}
export interface DynamicFormItem {
	id: string | number;
	sort_order: number;
	group: null;
	field_name: string;
	field_label: string;
	field_default_value: string | number | null;
	field_placeholder: string | null;
	required: 0 | 1;
	disabled: 0 | 1;
	options: null;
	form_type: DynamicFormType;
	title: SimpleType;
}

export interface JobFormItem {
	disabled: number;
	field_default_value: any;
	field_label: string;
	field_name: string;
	field_placeholder: string | null;
	form_type: SimpleType;
	group: null;
	id: string | number;
	options: SimpleType[] | null;
	required: number;
	sort_order: number;
	title: SimpleType;
	files: CustomFileRespone[];
	value: any;
}
export interface Job {
	created_at: string | null;
	id: string | number;
	updated_at: string | null;
	updated_by: Customer | null;
	status: {
		id: number | string;
		name: string;
		color_code?: string;
	};
	display_status: {
		id: number | string;
		name: string;
		color_code?: string;
		color: {
			background: StringOrNull;
			text: StringOrNull;
		};
	};
	type: {
		id: string | number;
		name: StringOrNull;
		form_items: JobFormItem[];
	};
}
export interface JobItem {
	id: string | number;
	created_at: string | null;
	updated_at: string | null;
	data_type: SimpleType;
	title: SimpleType;
	value: any;
	files: CustomFileRespone[];
}
export interface JobDetail extends Job {
	can_be_submitted: boolean;
	output_items: JobItem[];
	input_items: JobItem[];
}
