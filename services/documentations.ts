import { apiResponde } from '~~/models';
import { removeAscentNormal } from '~/helpers/formatter';
import { DocumentItem } from 'models/Documentation';
const isSync = false;
const practiceCategories = [
	{
		id: 1,
		name: 'HTML',
		en: 'HTML',
	},
	{
		id: 2,
		name: 'CSS',
		en: 'CSS',
	},
	{
		id: 3,
		name: 'JS',
		en: 'JS',
	},
	{
		id: 4,
		name: 'ReactJS',
		en: 'ReactJS',
	},
	{
		id: 5,
		name: 'VueJS',
		en: 'VueJS',
	},
];
let baseListData: DocumentItem[] = [
	{
		id: 1,
		vneseName: 'Cài đặt cơ bản',
		eng: 'Installation',
		description: 'Hướng dẫn cài đặt cơ bản để khởi tạo web-app của bạn với ReactJS.',
		link: '/documentation/installation',
		previewImage: 'parallax-1.jpeg',
		status_id: 1,
	},
	{
		id: 2,
		vneseName: 'Hooks',
		eng: 'Hooks',
		description: 'Trình bày về một số hooks cơ bản của ReactJS. Eg: useState(), useEffect(), useContext() ...',
		link: '/documentation/hooks',
		previewImage: 'parallax-2.jpeg',
		status_id: 1,
	},
	{
		id: 3,
		vneseName: 'CSS Trong React',
		eng: 'Styled Component',
		description: 'Cách sử dụng css trong ReactJS, css module.',
		link: '/documentation/styled-component',
		previewImage: 'parallax-3.jpeg',
		status_id: 1,
	},
	{
		id: 4,
		vneseName: 'State & Props',
		eng: 'State and Props',
		description: 'Quản lý State và props trong ReactJS',
		link: '/documentation/state-and-prop',
		previewImage: 'parallax-5.jpg',
		status_id: 1,
	},
	{
		id: 5,
		vneseName: 'Render list data',
		eng: 'render list data',
		description: 'Cách render một danh sách data ra view',
		link: '/documentation/render-list-data',
		previewImage: 'parallax-6.jpg',
		status_id: 1,
	},
];
const getbaseListFromLocalStorage = (): DocumentItem[] | null => {
	const listData = localStorage.getItem('listDocumentItem');
	return listData ? JSON.parse(listData) : listData;
};
const saveCurrentList = (): void => {
	localStorage.setItem('listDocumentItem', JSON.stringify(baseListData));
};
const getPracticeCategory = (categoryId: number) => {
	return practiceCategories.find(o => o.id === categoryId);
};
const initSuccessResponse = (data: Record<string, any> | Record<string, any>[]): apiResponde => {
	return {
		success: true,
		message: 'Success',
		data,
		status: 200,
	};
};
const initFailResponse = (_msg: string): apiResponde => {
	return {
		success: false,
		message: _msg,
		data: {},
		error_code: 400,
		status: 400,
	};
};

const base = () => {
	return {
		syncData() {
			const localStorageData = getbaseListFromLocalStorage();
			if (!localStorageData) {
				saveCurrentList();
				return;
			}
			const rslt = baseListData.map(o => {
				const l = localStorageData.find(t => t.id === o.id);
				return l || o;
			});
			baseListData = [...rslt];
		},
		getListData(payload?: Record<string, any>): Promise<apiResponde> {
			return new Promise((res, rej) => {
				try {
					setTimeout(() => {
						const nData = baseListData.filter(o => {
							const isMatchSearch = payload?.search
								? removeAscentNormal(`${o.vneseName} ${o.eng}`, true).includes(removeAscentNormal(payload.search, true))
								: true;
							return isMatchSearch;
						});
						res(initSuccessResponse(nData));
					}, 200);
				} catch (error) {
					const rs = initFailResponse(JSON.stringify(error));
					rej(rs);
				}
			});
		},
		getDetail(id: string | number, payload?: Record<string, any>): Promise<apiResponde> {
			return new Promise((res, rej) => {
				try {
					setTimeout(() => {
						const rslt = baseListData.find(o => o.id === id);
						return rslt ? res(initSuccessResponse(rslt)) : rej(initFailResponse(`Not found`));
					}, 200);
				} catch (error) {
					const rs = initFailResponse(JSON.stringify(error));
					rej(rs);
				}
			});
		},
	};
};
export default base;
