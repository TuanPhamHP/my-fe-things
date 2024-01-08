import { normalQuery, initPage, initSize, StringOrNull, SimpleType, CustomFileRespone } from './index';
import { toNumber } from '../helpers/formatter';

export interface vehicleQuery extends normalQuery {
	status_id?: number | string | null;
}

export class VehicleQuery implements vehicleQuery {
	constructor(opt: vehicleQuery) {
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
		const obj = {} as vehicleQuery;
		obj.page = toNumber(this.page) || initPage;
		obj.size = toNumber(this.size) || initSize;
		obj.search = this.search;
		obj.status_id = toNumber(this.status_id);
		return obj;
	}
}

export interface Vehicle {
	cont_number: StringOrNull;
	id: string | number;
	mooc_number: StringOrNull;
	plate_number: StringOrNull;
}
export interface OrderVehicle extends Vehicle {
	container_type: SimpleType;
	cont_image_files?: CustomFileRespone[];
	cont_registration_cert_files?: CustomFileRespone[];
	cont_registry_cert_files?: CustomFileRespone[];
	cont_sign_files?: CustomFileRespone[];
	mooc_registration_cert_files?: CustomFileRespone[];
	mooc_registry_cert_files?: CustomFileRespone[];
	vehicle_insurance_files?: CustomFileRespone[];
}

export interface VehicleCreateData {
	vehicle_weight_id: string | number;
	vehicle_type_id: string | number;
	plate_number: string;
	mooc_number: string;
	manufacturer?: StringOrNull;
}
