import { getCurrency, currencyValidNumb, currencyToNumber, getDataErrors } from './formatter';
import { setSnack } from './notification';
import { AddressComputed, AddressFull } from '../models/index';

const dirtyWait = (ms: number = 100) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(true);
		}, ms);
	});
};
const getShortFileName = (_str: string, numb: number = 32) => {
	if (!_str) {
		return '';
	}
	if (_str.length < numb) {
		return _str;
	}
	return _str.slice(0, numb) + '...' + _str.split('.').pop();
};
const formatBytes = (bytes: number, decimals = 2) => {
	if (bytes === 0) return '0 Bytes';
	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	const i = Math.floor(Math.log(bytes) / Math.log(k));
	console.log(bytes, k, i);

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
const truncateString = (string: string, limitLength: number, type: 'mid' | 'end') => {
	if (string.length <= limitLength) {
		return string;
	}
	return type === 'mid' ? `${string.slice(0, limitLength - 3)}...${string.slice(-3)}` : `${string.slice(0, 40)}...`;
};
const getFullAddress = (address: AddressComputed) => {
	const n = new AddressFull(address);
	return n.getFullAddress();
};
const getFullAddressTruncate = (address: AddressComputed, maxLength: number = 70) => {
	const n = new AddressFull(address);
	const s = n.getFullAddress();
	return s.length > maxLength ? `${truncateString(s, maxLength, 'end')}, ${n.province.full_name}` : s;
};
export default defineNuxtPlugin(() => {
	const globalHelpers = {
		dirtyWait,
		getCurrency,
		currencyValidNumb,
		currencyToNumber,
		getDataErrors,
		setSnack,
		getFullAddress,
		getFullAddressTruncate,
		truncateString,
		formatBytes,
		getShortFileName,
	};
	return {
		provide: {
			globalHelpers,
		},
	};
});
