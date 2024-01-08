import {
	normalQuery,
	initPage,
	initSize,
	StringOrNull,
	AddressObj,
	District,
	Province,
	Ward,
	SimpleType,
	AddressComputed,
	CustomFileRespone,
} from './index';
import { toNumber } from '../helpers/formatter';

interface DriverAddress {
	address_line: string;
	district: District;
	province: Province;
	ward: Ward;
}

export interface driverQuery extends normalQuery {
	status_id?: number | string | null;
}

export class DriverQuery implements driverQuery {
	constructor(opt: driverQuery) {
		this.page = opt.page || initPage;
		this.size = opt.size || initSize;
		this.search = opt.search;
		this.status_id = opt.status_id;
	}
	page: string | number | undefined = initPage;
	size: string | number | undefined = initSize;
	search: string | undefined = '';
	status_id: number | string | null | undefined = null;
	getQuery() {
		return {
			page: this.page || initPage,
			size: this.size || initSize,
			search: this.search,
			status_id: this.status_id,
		};
	}
	parseFromRoute() {
		const obj = {} as driverQuery;
		obj.page = toNumber(this.page) || initPage;
		obj.size = toNumber(this.size) || initSize;
		obj.search = this.search;
		obj.status_id = toNumber(this.status_id);
		return obj;
	}
}

interface DriverRootAccountStatus {
	id: string | number;
	name: string | null;
}
interface DriverStatus {
	id: string | number;
	name: string | null;
}
interface DriverRootAccount {
	id: string | number;
	username: string | null;
	status: DriverRootAccountStatus | null;
}

export interface Driver {
	id: string | number;
	status: DriverStatus | null;
	address: AddressComputed | null;
	code: string;
	created_at: string;
	email: StringOrNull;
	id_no: StringOrNull;
	name: string;
	phone: StringOrNull;
	updated_at: string;
	username: StringOrNull;
}
export interface OrderDriver extends Driver {
	driver_license_files?: CustomFileRespone[];
	company_seal_files?: CustomFileRespone[];
	id_card_files?: CustomFileRespone[];
	passport_files?: CustomFileRespone[];
	transport_business_license_files?: CustomFileRespone[];
}
export interface DriverDetail extends Driver {}
export interface DriverCreateData {
	driver_weight_id: string | number;
	driver_type_id: string | number;
	plate_number: string;
	mooc_number: string;
	manufacturer?: StringOrNull;
}
