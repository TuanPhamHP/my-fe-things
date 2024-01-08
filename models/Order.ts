import {
	normalQuery,
	initPage,
	initSize,
	StringOrNull,
	SimpleType,
	AddressComputed,
	Driver,
	CustomFileRespone,
} from './index';
import { Customer, OrderCustomer } from './Customer';
import { toNumber } from '../helpers/formatter';
import { Forwarder } from './Forwarder';
import { DeliveryOrder } from './DeliveryOrder';
import { OrderVehicle, Vehicle } from './Vehicle';
import { AccountUser } from './AccountUsers';
import { OrderDriver } from './Driver';
import { Job } from './Job';
export interface orderQuery extends normalQuery {
	is_active?: number | StringOrNull;
	status_id?: number | StringOrNull;
	person_in_charge_id?: number | StringOrNull;
}
interface OrderGroupStatus {
	id: string | number;
	name: StringOrNull;
}
interface OrderStatusLog extends SimpleType {
	set_at: string;
}
export interface VeihicleData {
	id: string | number;
	name: string | number;
	vehicle_type_id: string | number;
	vehicle_weight_id: string | number;
	num_of_vehicles: string | number;
	vehicle_weights?: SimpleType[];
}
export interface OrderVeihicleData {
	id: string | number;
	num_of_vehicles: string | number;
	vehicle_type_id: string | number | null;
	vehicle_weight_id: string | number | null;
	order_id: string | number;
	vehicle_type: SimpleType;
	vehicle_weight: SimpleType;
}
export interface OrderAdressData {
	id: string | number;
	expect_date_time: StringOrNull;
	merchandise_position: StringOrNull;
	sort_order?: number | null;
	order_id: StringOrNull | number;
	person_in_charge: StringOrNull;
	phone: StringOrNull;
	order_address_type: SimpleType;
	address: AddressComputed | null;
	textComputed?: StringOrNull;
}
export class OrderQuery implements orderQuery {
	constructor(opt: orderQuery) {
		this.page = opt.page || initPage;
		this.size = opt.size || initSize;
		this.search = opt.search;
		this.status_id = opt.status_id;
		this.is_active = opt.is_active;
		this.person_in_charge_id = opt.person_in_charge_id;
	}
	page: string | number | undefined = initPage;
	size: string | number | undefined = initSize;
	search: string | undefined = '';
	status_id: number | StringOrNull | undefined = '';
	is_active: number | StringOrNull | undefined = null;
	person_in_charge_id: number | StringOrNull | undefined = null;
	getQuery() {
		return {
			page: this.page || initPage,
			size: this.size || initSize,
			search: this.search,
			status_id: this.status_id,
			person_in_charge_id: this.person_in_charge_id,
		};
	}
	parseFromRoute() {
		const obj = {} as orderQuery;
		obj.page = toNumber(this.page) || initPage;
		obj.size = toNumber(this.size) || initSize;
		obj.search = this.search;
		obj.is_active = toNumber(this.is_active);
		obj.status_id = toNumber(this.status_id);
		obj.person_in_charge_id = toNumber(this.person_in_charge_id);
		return obj;
	}
}
export interface OrderCancelledForwarder extends Forwarder {
	reason: StringOrNull;
}
export interface DeliveryLog {
	arrival_time_at_border_gate: StringOrNull;
	created_at: string;
	id: string | number;
	merchandise_position: StringOrNull;
	recorded_time: StringOrNull;
	status: SimpleType;
	temperature_return: number | null;
	temperature_set: number | null;
	temperature_supply: number | null;
	updated_at: StringOrNull;
	updated_by: SimpleType;
	files: CustomFileRespone[];
}
export interface Order {
	id: string | number;
	code: string;
	created_at?: string | number | null;
	updated_at?: string | number | null;
	count_finished_jobs: string | number | null;
	count_jobs: string | number | null;
	estimate_arrived_border_gate_at?: string | number | null;
	deliver_address?: StringOrNull;
	deliver_time?: StringOrNull;
	pickup_address?: StringOrNull;
	pickup_time?: StringOrNull;
	driver: OrderDriver;
	customer: OrderCustomer | null;
	company: OrderCustomer | null;
	merchandise_type: SimpleType;
	status: SimpleType;
	vehicle: OrderVehicle | null;
	person_in_charge: AccountUser | null;
}

interface OrderCreateFormCustomer {
	customer_name: string;
	customer_phone: string;
	company_name: string;
	company_enterprise_code: string;
	company_enterprise_gdt_code: string;
	company_address: string;
	businessLicenseFile: number[];
	companySealFile: (number | string)[];
}
interface OrderCreateFormDriver {
	driver_name: string;
	driver_phone: string;
	driver_id_no: string;
	driverIdNoFile: (number | string)[];
	driverLicenseFile: (number | string)[];
	driverPassportFile: (number | string)[];
	businessLicenseFile: (number | string)[];
	companySealFile: (number | string)[];
}
interface OrderCreateFormVehicle {
	container_type_id: string | number;
	cont_number: string | number;
	mooc_number: string | number;
	plate_number: string | number;
	contRegistrationCertFile: (number | string)[];
	contRegistryCertFile: (number | string)[];
	vehicleInsuranceFile: (number | string)[];
	contSignFile: (number | string)[];
	contImageFile: (number | string)[];
	moocRegistrationCertFile: (number | string)[];
	moocRegistryCertFile: (number | string)[];
}
export interface OrderCreateForm {
	generalInfo: Record<string, any>;
	vehicle: OrderCreateFormVehicle;
	driver: OrderCreateFormDriver;
	customer: OrderCreateFormCustomer;
}
export interface OrderUpdateForm {
	generalInfo: Record<string, any>;
	vehicle: OrderCreateFormVehicle;
	driver: OrderCreateFormDriver;
}
export interface OrderCreateData {
	customer_id: string | number;
	merchandise_type: string | number;
	transport_type_id: string | number;
	packaging_specification_id: string | number;
	estimate_pickup_time: string | number;
	estimate_cost: string | number;
	weight: string | number;
	vehicles: VeihicleData[] | null;
}
export interface OrderUpdateData {
	customer_id: string | number;
	merchandise_type: string | number;
	transport_type_id: string | number;
	packaging_specification_id: string | number;
	estimate_pickup_time: string | number;
	estimate_cost: string | number;
	weight: string | number;
	vehicles: VeihicleData[] | null;
}

export interface OrderDetail extends Order {
	can_be_added_delivery_logs: boolean;
	jobs: Job[];
	status_logs: OrderStatusLog[] | null;
	company_seal_files: CustomFileRespone[];
	is_packed: boolean;
}
