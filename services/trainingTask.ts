import { PracticeItem } from '~/models/Practice';
import { apiResponde } from '~~/models';
import { removeAscentNormal } from '~/helpers/formatter';
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
let baseListData: PracticeItem[] = [
	{
		id: 'e_1',
		vneseName: 'Bài 1 - Array Methods',
		eng: 'array methods',
		description: 'Bài tập về một số các methods thông dụng của Array trong JS.',
		link: '/practice/e_1',
		previewImage: 'parallax-3.jpeg',
		status_id: 1,
		category: [],
	},
	{
		id: 'e_2',
		vneseName: 'Bài 2 - React Functional Component',
		eng: 'react functional component',
		description: 'Bài tập về React Functional Component trong ReactJs',
		link: '/practice/e_2',
		previewImage: 'parallax-4.jpg',
		status_id: 1,
		category: [],
	},
	{
		id: 'e_3',
		vneseName: 'Bài 3 - Todo List',
		eng: 'react todo list',
		description: 'Bài tập về CRUD state trong ReactJs',
		link: '/practice/e_3',
		previewImage: 'parallax-7.jpg',
		status_id: 1,
		category: [],
	},
];
const getbaseListFromLocalStorage = (): PracticeItem[] | null => {
	const listData = localStorage.getItem('listPracticeItem');
	return listData ? JSON.parse(listData) : listData;
};
const saveCurrentList = (): void => {
	localStorage.setItem('listPracticeItem', JSON.stringify(baseListData));
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
