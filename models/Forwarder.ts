import { normalQuery, initPage, initSize, StringOrNull, AddressObj, District, Province, Ward } from './index';
import { toNumber } from '../helpers/formatter';

interface ForwarderAddress {
	address_line: string;
	district: District;
	province: Province;
	ward: Ward;
}

export interface forwarderQuery extends normalQuery {
	status_id?: number | string | null;
}

export class ForwarderQuery implements forwarderQuery {
	constructor(opt: forwarderQuery) {
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
		const obj = {} as forwarderQuery;
		obj.page = toNumber(this.page) || initPage;
		obj.size = toNumber(this.size) || initSize;
		obj.search = this.search;
		obj.status_id = toNumber(this.status_id);
		return obj;
	}
}

interface ForwarderRootAccountStatus {
	id: string | number;
	name: string | null;
}
interface ForwarderStatus {
	id: string | number;
	name: string | null;
}
interface ForwarderRootAccount {
	id: string | number;
	username: string | null;
	status: ForwarderRootAccountStatus | null;
}

export interface Forwarder {
	code: string;
	email: string | null;
	id: string | number;
	id_no: string | null;
	phone: string | null;
	address: ForwarderAddress | null;
	representative_name: string | null;
	root_account?: ForwarderRootAccount | null;
	created_at?: string | number | null;
	status: ForwarderStatus | null;
}
export interface ForwarderCreateData {
	representative_name: string;
	username: string;
	id_no?: string;
	phone: string;
	email?: string;
}
