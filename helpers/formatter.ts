import { format } from 'date-fns';
export const getForwarderStatusTextColor = (statusId?: string | number | null) => {
	switch (statusId) {
		case 1:
			return 'text-blue-700';
		case 2:
			return 'text-red-500';
		default:
			return 'text-gray-500';
	}
};
export const getCustomerStatusTextColor = (statusId?: string | number | null) => {
	switch (statusId) {
		case 1:
			return 'text-blue-700';
		case 2:
			return 'text-red-500';
		default:
			return 'text-gray-500';
	}
};
export const getAccountUserStatusTextColor = (isActive: boolean | null) => {
	return isActive ? 'text-blue-700' : 'text-red-500';
};

export const toNumber = (_data: any) => {
	if (_data === null || _data === undefined) {
		return null;
	}
	if (_data === 0 || _data === '0') {
		return 0;
	}
	return +_data || 0;
};

export const removeAscentNormal = (str: string | null | undefined, forceLowercase: boolean = false): string => {
	if (!str) return `${str}`;

	str = str.replace(/à|À|á|Á|ạ|Ạ|ả|Ả|ã|Ã|â|Â|ầ|Ầ|ấ|Ấ|ậ|Ậ|ẩ|Ẩ|ẫ|Ẫ|ă|Ă|ằ|Ằ|ắ|Ắ|ặ|Ặ|ẳ|Ẳ|ẵ|Ẵ/g, 'a');
	str = str.replace(/è|È|é|É|ẹ|Ẹ|ẻ|Ẻ|ẽ|Ẽ|ê|Ê|ề|Ề|ế|Ế|ệ|Ệ|ể|Ể|ễ|Ễ/g, 'e');
	str = str.replace(/ì|I|í|Í|ị|Ị|ỉ|Ỉ|ĩ|Ĩ/g, 'i');
	str = str.replace(/ò|Ò|ó|Ó|ọ|Ọ|ỏ|Ỏ|õ|Õ|ô|Ô|ồ|Ồ|ố|Ố|ộ|Ộ|ổ|Ổ|ỗ|Ỗ|ơ|Ơ|ờ|Ờ|ớ|Ớ|ợ|Ợ|ở|Ở|ỡ|Ỡ/g, 'o');
	str = str.replace(/ù|Ù|ú|Ú|ụ|Ụ|ủ|Ủ|ũ|Ũ|ư|Ư|ừ|Ừ|ứ|Ứ|ự|Ự|ử|Ử|ữ|Ữ/g, 'u');
	str = str.replace(/ỳ|Ỳ|ý|Ý|ỵ|Ỵ|ỷ|Ỷ|ỹ|Ỹ/g, 'y');
	str = str.replace(/đ|Đ/g, 'd');
	return forceLowercase ? str.toLowerCase() : str;
};
export const formatDateCustom = (date?: string | number | Date | null, formatString: string = 'dd/MM/yyyy') => {
	if (!date) {
		return '';
	}
	return format(new Date(date), formatString);
};

export const formatDateHMDMY = (date?: string | number | null) => {
	if (!date) {
		return '';
	}
	return formatDateCustom(new Date(date), 'hh:mm dd/MM/yyyy');
};
export const formatDateHM = (date?: string | number | null) => {
	if (!date) {
		return '';
	}
	return formatDateCustom(new Date(date), 'H:mm');
};
export const formatDateDMY = (date?: string | number | null) => {
	if (!date) {
		return '';
	}
	return formatDateCustom(new Date(date), 'dd/MM/yyyy');
};
export const formatDateYMD = (date?: string | number | null) => {
	if (!date) {
		return '';
	}
	return formatDateCustom(new Date(date), 'yyyy/MM/dd');
};

export const isNumb = (str: string | number) => {
	// return /^\d{1,2}$/.test(`${str}`);
	const regex = new RegExp('^\\d+(?:\\.\\d{0,2})?$', 'gm');
	return regex.test(`${str}`);
};
export const isIntNumb = (str: string | number) => {
	// return /^\d{1,2}$/.test(`${str}`);
	const regex = new RegExp('^[0-9]*$', 'gm');
	return regex.test(`${str}`);
};

export const currencyValidNumb = (str: string | number) => {
	return !isNumb(`${str}`.replaceAll(',', '').replaceAll('-', ''));
};
export const currencyValidNumbInt = (str: string | number) => {
	return !isIntNumb(`${str}`.replaceAll(',', '').replaceAll('-', ''));
};

export const getCurrency = (str: string | number | null): string => {
	if (str === null) {
		return '';
	}
	if (!['string', 'number'].includes(typeof str)) {
		console.error('Provided params is not a String or Number type', str);
		return '';
	}

	if (+str === 0) return `${str}`;
	let val = String(str).trim().replaceAll(',', '');
	const isNegative = +val < 0;
	let absVal = String(str).trim().replaceAll(',', '').replaceAll('-', '');
	let hT = absVal.split('.');
	let head = hT[0].split('');
	if (head.length > 3) {
		let index = 3;
		while (head.length - index >= 1) {
			head.splice(head.length - index, 0, ',');
			index += 4;
		}
	}
	return hT.length > 1
		? `${isNegative ? '-' : ''}` + head.join('') + '.' + hT[1]
		: `${isNegative ? '-' : ''}` + head.join('');
};

export const currencyToNumber = (_str: string | number | null, invalidReturn = '') => {
	if (!['string', 'number'].includes(typeof _str)) {
		return invalidReturn || _str;
	}
	const tr = String(_str).replaceAll(',', '');
	if (_str !== 0 && _str !== '0' && !+tr) {
		return invalidReturn || _str;
	}
	return parseFloat(tr);
};

export const getDataErrors = (dataRules: Record<string, string[]>, dataObj: Record<string, any>) => {
	const obj: Record<string, string> = {};
	for (const key in dataRules) {
		if (Object.hasOwnProperty.call(dataRules, key)) {
			if (Array.isArray(dataRules[key])) {
				if (dataRules[key].includes('required')) {
					// @ts-ignore
					if (key && !dataObj[key]) {
						obj[key] = 'Không được để trống trường này.';
					}
				}
				if (dataRules[key].includes('array:required')) {
					// @ts-ignore
					if (Array.isArray(dataObj[key]) && !dataObj[key].length) {
						obj[key] = 'Không được để trống trường này.';
					}
				}
				if (dataRules[key].includes('number')) {
					// @ts-ignore
					const val = String(dataObj[key]);
					if (val && currencyValidNumb(val)) {
						obj[key] = 'Giá trị không đúng định dạng số';
					}
					const isInt = dataRules[key].find(o => o.includes('int'));
					if (isInt) {
						if (val && currencyValidNumbInt(val)) {
							obj[key] = 'Giá trị không đúng định dạng số nguyên';
						}
					}
					const k = dataRules[key].find(o => o.includes('gt:'));
					if (k) {
						const min = +k.replaceAll('gt:', '') as number;
						if (+String(val).replaceAll(',', '') < min) {
							obj[key] = `Giá trị nhập vào phải lớn hơn ${min}`;
						}
					}
				}
				if (dataRules[key].includes('email')) {
					// @ts-ignore
					const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

					if (key && !regex.test(String(dataObj[key]))) {
						obj[key] = 'Email không hợp lệ.';
					}
				}
				const maxLengthRule = dataRules[key].find(o => o.includes('max:'));
				if (maxLengthRule) {
					const maxLength = +(maxLengthRule.split(':').pop() || 0);
					// @ts-ignore
					if (key && dataObj[key].length > maxLength) {
						obj[key] = `Tối đa ${maxLength} kí tự.`;
					}
				}
				const minLengthRule = dataRules[key].find(o => o.includes('min:'));
				if (minLengthRule) {
					const minLength = +(minLengthRule.split(':').pop() || 0);
					// @ts-ignore
					if (key && dataObj[key].length < minLength) {
						obj[key] = `Tối thiểu ${minLength} kí tự.`;
					}
				}
			}
		}
	}
	return obj;
};
