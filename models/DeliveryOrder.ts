import {
	normalQuery,
	initPage,
	initSize,
	StringOrNull,
	District,
	Province,
	Ward,
	SimpleType,
	Driver,
	AddressComputed,
	File,
} from './index';
import { toNumber } from '../helpers/formatter';
import { Order } from './Order';
import { Forwarder } from './Forwarder';

// interface DeliveryOrderAddress {
// 	address_line: string;
// 	district: District;
// 	province: Province;
// 	ward: Ward;
// }

export interface deliveryOrderQuery extends normalQuery {
	status_id?: number | string | null;
}

export class DeliveryOrderQuery implements deliveryOrderQuery {
	constructor(opt: deliveryOrderQuery) {
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
		const obj = {} as deliveryOrderQuery;
		obj.page = toNumber(this.page) || initPage;
		obj.size = toNumber(this.size) || initSize;
		obj.search = this.search;
		obj.status_id = toNumber(this.status_id);
		return obj;
	}
}

export interface DeliveryOrderDocument {
	files: File[];
	id: string | number;
	cont_code: StringOrNull;
	document_code: StringOrNull;
	merchandise_type: SimpleType[];
	merchandises: Array<{
		quantity: string | number;
		merchandise_type: {
			id: string | number;
			description: StringOrNull;
			name: StringOrNull;
		};
	}>;
	note: StringOrNull;
	seal_code: StringOrNull;
}
interface DeliveryOrderStatus extends SimpleType {
	code: StringOrNull;
	color_code: StringOrNull;
}
interface DeliveryVehicle {
	id: string | number;
	manufacturer: StringOrNull;
	mooc_number: StringOrNull;
	plate_number: StringOrNull;
}
export interface DeliveryOrderAddress {
	id: number | string;
	address: AddressComputed;
	merchandise_position: StringOrNull;
	expect_date_time: StringOrNull;
	person_in_charge: StringOrNull;
	phone: StringOrNull;
	document: DeliveryOrderDocument | null;
	status: SimpleType;
}
export interface DeliveryOrderStatusLog extends SimpleType {
	set_at: string;
	log?: {
		id: string | number;
		name: string | number;
		set_at: string;
	};
	details: StringOrNull;
}
export interface DeliveryOrderActivityLog extends SimpleType {
	log_name: StringOrNull;
	created_at: string;

	description: StringOrNull;
}
export interface DeliveryOrder {
	can_be_accepted: boolean;
	can_be_canceled: boolean;
	can_be_canceled_deliver_address: boolean;
	can_be_canceled_pickup_address: boolean;
	can_be_confirmed_delivered: boolean;
	can_be_confirmed_picked_up: boolean;
	can_be_confirmed_picked_up_failed: boolean;
	can_be_finished: boolean;
	can_be_re_picked_up: boolean;
	can_be_refused: boolean;
	can_be_started_deliver: boolean;
	can_be_started_pickup: boolean;

	code: string;
	id: string | number;
	cont_code: StringOrNull;
	seal_code: StringOrNull;
	order: Order | null;
	forwarder: Forwarder | null;
	num_of_deliver_address: number;
	num_of_pickup_address: number;
	status: DeliveryOrderStatus | null;
	created_at?: string | number | null;
	updated_at?: string | number | null;
	driver: Driver | null;
	vehicle: DeliveryVehicle | null;
	pickup_addresses: DeliveryOrderAddress[] | null;
	deliver_addresses: DeliveryOrderAddress[] | null;
	status_logs: DeliveryOrderStatusLog[];
	activity_logs: DeliveryOrderActivityLog[];
}
export interface DeliveryOrderCreateData {
	representative_name: string;
	username: string;
	id_no?: string;
	phone: string;
	email?: string;
}
