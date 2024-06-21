import { toNumber } from '../helpers/formatter';
export const initPage = 1;
export const initSize = 10;
export type StringOrNull = string | null;

const appNames = ['html-basic', 'reactjs-basic', 'nextjs-basic', 'php', null] as const;

const sameSite = [true, 'lax', 'strict', 'none', undefined] as const;
type sameSiteType = (typeof sameSite)[number];

const buttonTypes = ['button', 'submit', 'reset', undefined] as const;
export type buttonType = (typeof buttonTypes)[number];
export type AppName = (typeof appNames)[number];

const snackStatus = ['error', 'info', 'success', 'warning'] as const;
type snackType = (typeof snackStatus)[number];
export interface CookieOptions {
	maxAge: number;
	sameSite: sameSiteType;
}
export interface AuthUser {
	name: string;
	token: string;
	id: number;
	avatar?: string;
}
export interface NormalUser {
	avatar: StringOrNull;
	code: StringOrNull;
	email: StringOrNull;
	id: number | string;
	is_active: boolean;
	name: string;
	position: SimpleType | null;
}
export interface snackOptions {
	text: string;
	type: snackType;
	delay?: number;
}

export class AppSnack implements snackOptions {
	constructor(opt: snackOptions) {
		this.text = opt.text;
		this.type = opt.type;
	}
	text: string = '';
	type: snackType = 'success';
	getHTMLClass() {
		return 'custom-snack--' + this.type;
	}
}
export interface apiResponde {
	success: boolean;
	message: string;
	data: Record<string, any>;
	error_code?: string | null | number;
	status?: string | null | number;
}

export interface breadCrumb {
	title: string;
	route: string;
}
export interface UserAvatar {
	name: string;
	avatar: string;
}

// FORWARDER QUERY

export interface normalQuery {
	page?: string | number;
	size?: string | number;
	search?: string;
}
export interface PagigationData {
	total: number;
	total_pages: number;
	per_page: number;
	page: number;
}

export class Pagigation implements PagigationData {
	constructor(opt: PagigationData) {
		this.total = opt.total;
		this.total_pages = opt.total_pages;
		this.per_page = opt.per_page;
		this.page = opt.page;
	}
	total: number;
	total_pages: number;
	per_page: number;
	page: number;
	getFrom(): number {
		return Math.min((this.page - 1) * this.per_page + 1, this.total);
	}
	getTo(): number {
		return Math.min(this.page * this.per_page, this.total);
	}
	ableToViewNext() {
		return this.page < this.total_pages;
	}
	ableToViewPrevious() {
		return this.page > 1;
	}
}

export interface TransportType {
	id: number;
	name: StringOrNull;
}
export interface Driver {
	id: number;
	email: StringOrNull;
	code: string;
	id_no: string | null;
	name: string | null;
	phone: string | null;
	username: string | null;
	status: SimpleType;
}
export interface SimpleType {
	id: number;
	name: string;
}

export interface AddressObj {
	code: StringOrNull;
	full_name: StringOrNull;
	full_name_en: StringOrNull;
	name: StringOrNull;
	name_en: StringOrNull;
	province_code: StringOrNull;
}

export interface District extends AddressObj {
	province_code: StringOrNull;
}

export interface Province extends AddressObj {}
export interface Ward extends AddressObj {
	district_code: StringOrNull;
}
export interface AddressComputed {
	address_line: StringOrNull;
	district: District;
	province: Province;
	ward: Ward;
	id?: string | number;
}

export class AddressFull implements AddressComputed {
	constructor(opt: AddressComputed) {
		this.address_line = opt.address_line;
		this.district = opt.district;
		this.province = opt.province;
		this.ward = opt.ward;
	}
	address_line;
	district;
	province;
	ward;
	getFullAddress() {
		return `${this.address_line}, ${this.ward.full_name}, ${this.district.full_name}, ${this.province.full_name}`;
	}
	getAddressWithoutProvince() {
		return `${this.address_line}, ${this.ward.full_name}, ${this.district.full_name}`;
	}
}

// export interface File {
// 	disk: string;
// 	extension: string;
// 	id: number | string;
// 	mime_type: string;
// 	original_name: string;
// 	path: string;
// 	size: number | string;
// 	type: string;
// 	url: string;
// }

export interface CustomFile extends File {
	_id?: string | number;
	id?: string | number;
	blob: File;
	type: string;
	sizes?: number;
	status?: number;
	sortName?: string;
}
export interface CustomFileRespone extends File {
	disk: string;
	extension: string;
	id: number | string;
	mime_type: string;
	original_name: string;
	path: string;
	size: number;
	type: string;
	url: string;
	sortName?: StringOrNull;
}

export interface FileByGroup {
	group_name: string;
	items: CustomFileRespone[];
}
