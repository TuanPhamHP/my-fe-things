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

export interface DocumentFormItem {
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
export interface Document {
	id: string | number;
	created_at: string | null;
	updated_at: string | null;
	data_type: SimpleType;
	files: CustomFileRespone[];
	title: SimpleType;
	type: SimpleType;
	value: null;
}
export interface DocumentItem {
	id: string | number;
	created_at: string | null;
	updated_at: string | null;
	data_type: SimpleType;
	title: SimpleType;
	value: any;
	files: CustomFileRespone[];
}
export interface DocumentDetail extends Document {
	output_items: DocumentItem[];
	input_items: DocumentItem[];
}
