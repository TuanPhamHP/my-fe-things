import { PracticeItem } from '~/models/Practice';
import { AppName, apiResponde } from '~~/models';
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
		vneseName: 'Array Methods',
		eng: 'array methods',
		description: 'Bài tập về một số các methods thông dụng của Array trong JS.',
		link: '/html-css-js-basic/practice/e_1',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['html-basic'],
	},
	{
		id: 'ee_1',
		vneseName: 'React JSX - 1',
		eng: 'array methods',
		description: 'Bài tập củng cố kỹ năng JSX trong reactjs P1.',
		link: '/reactjs/practice/ee_1',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['reactjs-basic'],
	},
	{
		id: 'ee_2',
		vneseName: 'React JSX - 2',
		eng: 'array methods',
		description: 'Bài tập củng cố kỹ năng JSX trong reactjs P2.',
		link: '/reactjs-basic/practice/ee_2',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['reactjs-basic'],
	},
	{
		id: 'e_2',
		vneseName: 'React Functional Component',
		eng: 'react functional component',
		description: 'Bài tập về React Functional Component trong ReactJs',
		link: '/reactjs-basic/practice/e_2',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['reactjs-basic'],
	},
	{
		id: 'e_3',
		vneseName: 'Todo List',
		eng: 'react todo list',
		description: 'Bài tập về CRUD state trong ReactJs',
		link: '/reactjs-basic/practice/e_3',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['reactjs-basic'],
	},
	// {
	// 	id: 'e_4',
	// 	vneseName: 'Array Methods',
	// 	eng: 'array methods',
	// 	description: 'Bài tập về một số các methods thông dụng của Array trong JS.',
	// 	link: '/html-css-js-basic/practice/e_1',
	// 	previewImage: 'parallax-3.jpeg',
	// 	status_id: 1,
	// 	category: [],
	// 	apps: ['html-basic'],
	// },
	{
		id: 'e_5',
		vneseName: 'Login/Register form',
		eng: 'react todo list',
		description: 'Bài tập về CRUD state trong ReactJs',
		link: '/reactjs-basic/practice/e_4',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['reactjs-basic'],
	},
	{
		id: 'htmle_02',
		vneseName: 'Simple Sidebar',
		eng: 'html header, header example',
		description: 'Series thực hành HTML,CSS,JS. Dựng một sidebar đơn giản',
		link: '/html-css-js-basic/practice/practice-sidebar-01',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['html-basic'],
	},
	{
		id: 'htmle_01',
		vneseName: 'Flexbox 01',
		eng: 'html header, header example',
		description: 'Series thực hành HTML,CSS,JS. Sử dụng flexbox để dựng giao diện',
		link: '/html-css-js-basic/practice/practice-flex-box-01',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['html-basic'],
	},
	{
		id: 'htmle_03',
		vneseName: 'DOM - Review ảnh',
		eng: 'html header, header example',
		description: 'Bài tập về DOM để thao tác với attributes',
		link: '/html-css-js-basic/practice/e_2',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['html-basic'],
	},
	{
		id: 'htmle_04',
		vneseName: 'DOM - Render list Data',
		eng: 'html header, header example',
		description: 'Bài tập về DOM để thao tác với attributes',
		link: '/html-css-js-basic/practice/e_2',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['html-basic'],
	},

	// PHP
	{
		id: 'php-1',
		vneseName: 'PHP Array',
		eng: 'html header, header example',
		description: 'Bài tập về array trong PHP',
		link: '/php/practice/e_1',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['php'],
	},

	{
		id: 'php-2',
		vneseName: 'PHP Class & Object',
		eng: 'html header, header example',
		description: 'Bài tập về Class & Object trong PHP',
		link: '/php/practice/e_2',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['php'],
	},
	{
		id: 'php-3',
		vneseName: 'PHP Form Handling',
		eng: 'html header, header example',
		description: 'Bài tập về xử lý form trong PHP',
		link: '/php/practice/e_3',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['php'],
	},
	{
		id: 'php-2_1',
		vneseName: 'PHP Pet-Project - #1',
		eng: 'html header, header example',
		description: 'Pet Project Admin E-commerce PHP. #1: Dựng layout cơ bản',
		link: '/php/practice/e_2_1',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['php'],
	},
	{
		id: 'php-2_2',
		vneseName: 'PHP Pet-Project - #2',
		eng: 'html header, header example',
		description: 'Pet Project Admin E-commerce PHP. #2: Dựng form và xử lý data',
		link: '/php/practice/e_2_2',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['php'],
	},
	{
		id: 'php-4',
		vneseName: 'PHP Blade View - P1',
		eng: 'html header, header example',
		description: 'Bài tập về xử lý view trong PHP',
		link: '/php/practice/e_4',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['php'],
	},
	// NEXTJS
	{
		id: 'nextjs-1',
		vneseName: 'Xây dựng Trang Quản lý Đơn Hàng Gà Rán',
		eng: 'html header, header example',
		description: 'Xây dựng Trang Quản lý Đơn Hàng Gà Rán',
		link: '/nextjs-basic/practice/e_1',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['nextjs-basic'],
	},
	// NODEJS
	{
		id: 'node-1',
		vneseName: 'Mapping Routes',
		eng: 'html header, header example',
		description: 'Bài tập về mapping routes trong Nodejs',
		link: '/nodejs/practice/e_1',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['nodejs'],
	},
	{
		id: 'node-2',
		vneseName: 'Create View Template',
		eng: 'html header, header example',
		description: 'Bài tập về tạo view trong Nodejs',
		link: '/nodejs/practice/e_2',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['nodejs'],
	},
	{
		id: 'node-3',
		vneseName: 'Đăng ký tài khoản & đăng nhập',
		eng: 'html header, header example',
		description: 'Bài tập Nodejs',
		link: '/nodejs/practice/e_3',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['nodejs'],
	},
	{
		id: 'node-4',
		vneseName: 'RESTful API',
		eng: 'html header, header example',
		description: 'Bài tập Nodejs về RESTful API',
		link: '/nodejs/practice/e_4',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['nodejs'],
	},
];

class PaginationDefault {
	constructor(
		prev: { link: string; vneseName: string } | PracticeItem | null,
		next: { link: string; vneseName: string } | PracticeItem | null
	) {
		this.next = next
			? {
					title: next.vneseName || '',
					link: next.link,
			  }
			: {
					title: '',
					link: '/',
			  };
		this.prev = prev
			? {
					title: prev.vneseName || '',
					link: prev.link,
			  }
			: {
					title: 'Trở về danh sách Bài tập',
					link: '/html-css-js-basic/practice',
			  };
	}
	next: {
		title: string;
		link: string;
	} = {
		title: '',
		link: '/',
	};
	prev: {
		title: string;
		link: string;
	} = {
		title: 'Trở về danh sách Doc',
		link: '/html-css-js-basic/documentation',
	};
}
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
			// if (!localStorageData) {
			// 	saveCurrentList();
			// 	return;
			// }
			saveCurrentList();
			const rslt = baseListData.map(o => {
				const l = localStorageData?.find(t => t.id === o.id);
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
							let isMatchApp = true;
							if (payload?.appIds as string) {
								const appIds = payload?.appIds.split(',') as AppName[];
								isMatchApp = appIds.some(appId => o.apps.includes(appId));
							}
							return isMatchSearch && isMatchApp;
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

		getPagination(payload?: Record<string, any>): Promise<apiResponde> {
			return new Promise((res, rej) => {
				try {
					setTimeout(() => {
						const currentDoc = payload?.currentDocId as number;
						const nData = baseListData.filter(o => {
							let isMatchApp = true;
							if (payload?.appIds as string) {
								const appIds = payload?.appIds.split(',') as AppName[];
								isMatchApp = appIds.some(appId => o.apps.includes(appId));
							}
							return isMatchApp;
						});
						const idx = nData.findIndex(o => o.id === currentDoc);
						if (idx === -1) {
							res(initSuccessResponse({ pagination: new PaginationDefault(null, null) }));
						} else {
							res(
								initSuccessResponse({
									pagination: new PaginationDefault(nData[idx - 1] || null, nData[idx + 1]),
								})
							);
						}
					}, 10);
				} catch (error) {
					const rs = initFailResponse(JSON.stringify(error));
					rej(rs);
				}
			});
		},
	};
};
export default base;
