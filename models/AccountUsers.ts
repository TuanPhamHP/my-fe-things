import { normalQuery, initPage, initSize, StringOrNull, District, Province, Ward } from './index';
import { toNumber } from '../helpers/formatter';

export interface accountUserQuery extends normalQuery {
	is_active?: number | StringOrNull;
}

interface UserAddress {
	address_line: string;
	district: District;
	province: Province;
	ward: Ward;
}
export class AccountUserQuery implements accountUserQuery {
	constructor(opt: accountUserQuery) {
		this.page = opt.page || initPage;
		this.size = opt.size || initSize;
		this.search = opt.search;
		this.is_active = opt.is_active;
	}
	page: string | number | undefined = initPage;
	size: string | number | undefined = initSize;
	search: string | undefined = '';
	is_active: number | StringOrNull | undefined = null;
	getQuery() {
		return {
			page: this.page || initPage,
			size: this.size || initSize,
			search: this.search,
			status_id: this.is_active,
		};
	}
	parseFromRoute() {
		const obj = {} as accountUserQuery;
		obj.page = toNumber(this.page) || initPage;
		obj.size = toNumber(this.size) || initSize;
		obj.search = this.search;
		obj.is_active = toNumber(this.is_active);
		return obj;
	}
}

interface AccountUserDepartment {
	id: string | number;
	name: StringOrNull;
	system_code: StringOrNull;
	short_code: StringOrNull;
	parent_id: StringOrNull;
	level: StringOrNull;
	children: StringOrNull;
}
interface AccountUserPosition {
	id: string | number;
	name: StringOrNull;
	level: StringOrNull;
	departemnt?: AccountUserDepartment | null;
}

export interface AccountUser {
	id: string | number;
	name: StringOrNull;
	code: string;
	email: StringOrNull;
	avatar: StringOrNull;
	phone: StringOrNull;
	id_no: StringOrNull;
	is_active: boolean | null;
	position?: AccountUserPosition | null;
	created_at?: string | number | null;
	address: UserAddress | null;
}
