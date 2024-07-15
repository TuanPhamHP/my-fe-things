import { defineStore } from 'pinia';
import {
	apiResponde,
	District,
	Province,
	TransportType,
	Ward,
	SimpleType,
	NormalUser,
	CustomFileRespone,
	YoutubeLink,
} from '../models/index';
import { VeihicleData } from '../models/Order';
import { Customer } from 'models/Customer';
import { useAppStateStore } from './appState';
import { Vehicle } from 'models/Vehicle';
import { Driver } from 'models/Driver';

export const useInternalStore = defineStore('internal', {
	state: () => ({
		fileType: {
			image: ['jpg', 'png', 'jpeg', 'gif', 'webp', 'JPG', 'PNG', 'JPEG', 'GIF', 'WEBP'],
			files: [
				'xlsx',
				'pdf',
				'docx',
				'txt',
				'text',
				'xls',
				'XLSX',
				'PDF',
				'DOCX',
				'TXT',
				'TEXT',
				'bpmn',
				'BPMN',
				'rar',
				'RAR',
				'zip',
				'ZIP',
				'apk',
				'APK',
				'exe',
				'EXE',
				'dll',
				'DLL',
				'json',
				'JSON',
			],
			pdf: ['pdf', 'PDF'],
			doc: ['docx', 'DOCX', 'doc'],
			xls: ['xls', 'xlsx', 'XLSX'],
			video: [
				'mp4',
				'MP4',
				'mpeg4',
				'MPEG4',
				'avi',
				'AVI',
				'mpg',
				'mpeg',
				'MPEG',
				'wmv',
				'WMV',
				'ogg',
				'Ogg',
				'OGG',
				'webm',
				'WebM',
				'WEBM',
				'mov',
				'MOV',
			],
		},
		forwarderStatuses: [
			{ id: 1, name: 'Đang hoạt động' },
			{ id: 2, name: 'Ngừng hoạt động' },
		],
		customerStatuses: [
			{ id: 1, name: 'Đang hoạt động' },
			{ id: 2, name: 'Ngừng hoạt động' },
		],
		acountUsersStatuses: [
			{ id: 'true', name: 'Đang hoạt động' },
			{ id: 'false', name: 'Ngừng hoạt động' },
		],

		listUsers: [] as NormalUser[],
		listMechandiseTypes: [] as SimpleType[],
		listContainerTypes: [] as SimpleType[],
		listDeliveryStatuses: [] as SimpleType[],
		//
		packingTypes: [] as SimpleType[],
		listDeliveryOrderStatuses: [] as SimpleType[],

		listVehicles: [] as VeihicleData[],

		listDeliveryOrderAddressStatuses: [] as SimpleType[],
		listOrderStatuses: [] as SimpleType[],

		allVehicles: [] as Vehicle[],
		listDriver: [] as Driver[],
		listProvince: [] as Province[],
		listDistrict: [] as District[],
		listWard: [] as Ward[],
		listImagePreview: [] as CustomFileRespone[],
		selectedImgIndex: 0 as number,
		listYouTubeLink: [
			{
				url: 'https://youtu.be/XHQ15MuYWFY',
				name: 'forEach()',
				parrentNode: 'array',
				programLang: 'js',
				lang: 'vi',
			},
			{
				url: 'https://youtu.be/noMBZLEBt0I',
				name: 'map()',
				parrentNode: 'array',
				programLang: 'js',
				lang: 'vi',
			},
			{
				url: 'https://youtu.be/DbXZq8-w4ts',
				name: 'filter()',
				parrentNode: 'array',
				programLang: 'js',
				lang: 'vi',
			},
		] as YoutubeLink[],
	}),

	actions: {
		setListImagePreview(imgs: CustomFileRespone[]) {
			this.listImagePreview = [...imgs];
		},
		setSelectedImgIndex(n: number) {
			this.selectedImgIndex = n;
		},
		getListProvince() {
			const { $api } = useNuxtApp();
			$api.internal
				.getListProvince({ pagination: false })
				.then(res => {
					const rs = res as apiResponde;
					const data: Province[] = rs.data.provinces;
					this.listProvince = data;
				})
				.catch(err => {
					console.log('failed by pinia');
				});
		},
		getListDistrict() {
			const { $api } = useNuxtApp();
			$api.internal
				.getListDistrict({ pagination: false })
				.then(res => {
					const rs = res as apiResponde;
					const data: District[] = rs.data.data.districts;
					this.listDistrict = data;
				})
				.catch(err => {
					console.log('failed by pinia');
				});
		},

		getListVehicles() {
			const { $api } = useNuxtApp();
			$api.vehicles
				.getListData({ pagination: false })
				.then(res => {
					const rs = res as apiResponde;
					const data: Vehicle[] = rs.data.vehicles;
					this.allVehicles = data;
				})
				.catch(err => {
					console.log('failed by pinia');
				});
		},
		getListDriver() {
			const { $api } = useNuxtApp();
			$api.drivers
				.getListData({ pagination: false })
				.then(res => {
					const rs = res as apiResponde;
					const data: Driver[] = rs.data.drivers;
					this.listDriver = data;
				})
				.catch(err => {
					console.log('failed by pinia');
				});
		},
		getListUsers() {
			const { $api } = useNuxtApp();
			$api.users
				.getListUsers({ pagination: false })
				.then(res => {
					const rs = res as apiResponde;
					const data: NormalUser[] = rs.data.users;
					this.listUsers = data;
				})
				.catch(err => {
					console.log('failed by pinia');
				});
		},
		getListMerchandiseTypes() {
			const { $api } = useNuxtApp();
			$api.internal
				.getListMerchandiseTypes({ pagination: false })
				.then(res => {
					const rs = res as apiResponde;
					const data: SimpleType[] = rs.data.items;
					this.listMechandiseTypes = data;
				})
				.catch(err => {
					console.log('failed by pinia');
				});
		},
		getListContainerTypes() {
			const { $api } = useNuxtApp();
			$api.internal
				.getListContainerTypes({ pagination: false })
				.then(res => {
					const rs = res as apiResponde;
					const data: SimpleType[] = rs.data.items;
					this.listContainerTypes = data;
				})
				.catch(err => {
					console.log('failed by pinia');
				});
		},
		getDeliveryStatuses() {
			const { $api } = useNuxtApp();
			$api.internal
				.getListDeliveryStatuses({ pagination: false })
				.then(res => {
					const rs = res as apiResponde;
					const data: SimpleType[] = rs.data.items;
					this.listDeliveryStatuses = data;
				})
				.catch(err => {
					console.log('failed by pinia');
				});
		},
		getListOrderStatuses() {
			const { $api } = useNuxtApp();
			$api.internal
				.getListOrderStatuses({ pagination: false })
				.then(res => {
					const rs = res as apiResponde;
					const data: SimpleType[] = rs.data.items;
					this.listOrderStatuses = data;
				})
				.catch(err => {
					console.log('failed by pinia');
				});
		},
	},
});
