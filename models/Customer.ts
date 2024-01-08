import {
	normalQuery,
	initPage,
	initSize,
	StringOrNull,
	AddressObj,
	District,
	Province,
	Ward,
	CustomFile,
	CustomFileRespone,
} from './index';
import { toNumber } from '../helpers/formatter';

export interface customerQuery extends normalQuery {
	status_id?: number | StringOrNull;
}

export class CustomerQuery implements customerQuery {
	constructor(opt: customerQuery) {
		this.page = opt.page || initPage;
		this.size = opt.size || initSize;
		this.search = opt.search;
		this.status_id = opt.status_id;
	}
	page: string | number | undefined = initPage;
	size: string | number | undefined = initSize;
	search: string | undefined = '';
	status_id: number | StringOrNull | undefined = null;
	getQuery() {
		return {
			page: this.page || initPage,
			size: this.size || initSize,
			search: this.search,
			status_id: this.status_id,
		};
	}
	parseFromRoute() {
		const obj = {} as customerQuery;
		obj.page = toNumber(this.page) || initPage;
		obj.size = toNumber(this.size) || initSize;
		obj.search = this.search;
		obj.status_id = toNumber(this.status_id);
		return obj;
	}
}

export interface Customer {
	id: string | number;
	address: StringOrNull;
	company_name: StringOrNull;
	enterprise_code: StringOrNull;
	enterprise_gdt_code: StringOrNull;
	phone: StringOrNull;
	name: StringOrNull;
}
export interface OrderCustomer extends Customer {
	business_license_files?: CustomFileRespone[];
	company_seal_files?: CustomFileRespone[];
}
export interface CustomerCreateData {
	representative_name: string;
	username: string;
	id_no?: string;
	phone: string;
	email?: string;
}
