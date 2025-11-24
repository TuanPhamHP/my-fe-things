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
	{
		id: 6,
		name: 'SQL',
		en: 'SQL',
	},
];
let baseListData: PracticeItem[] = [
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
		id: 'htmle_00',
		vneseName: 'Simple Intro',
		eng: 'html header, header example',
		description: 'Series thực hành HTML,CSS,JS. Dựng một web giới thiệu đơn giản',
		link: '/html-css-js-basic/practice/c_e_1',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['html-basic'],
	},
	{
		id: 'simple_p2',
		vneseName: 'Simple Landing',
		eng: 'html header, header example',
		description: 'Series thực hành HTML,CSS,JS. Dựng một web giới thiệu đơn giản',
		link: '/html-css-js-basic/practice/practice-p-02',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['html-basic'],
	},
	{
		id: 'htmle_012',
		vneseName: 'Simple Form',
		eng: 'html header, header example',
		description: 'Series thực hành HTML,CSS,JS. Dựng một web đăng ký thông tin đơn giản',
		link: '/html-css-js-basic/practice/c_e_2',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['html-basic'],
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
		id: 'c_e_3',
		vneseName: 'JS - Condition & Loop',
		eng: 'array methods',
		description: 'Bài tập về câu điều kiện và vòng lặp trong JS.',
		link: '/html-css-js-basic/practice/c_e_3',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['html-basic'],
	},

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
	// {
	// 	id: 'htmle_04',
	// 	vneseName: 'DOM - Render list Data',
	// 	eng: 'html header, header example',
	// 	description: 'Bài tập về DOM để thao tác với attributes',
	// 	link: '/html-css-js-basic/practice/e_2',
	// 	previewImage: 'course_practice-1.png',
	// 	status_id: 1,
	// 	category: [],
	// 	apps: ['html-basic'],
	// },
	{
		id: 'htmle_04',
		vneseName: 'DOM - Form handling',
		eng: 'html header, header example',
		description: 'Bài tập về DOM để xử lý dữ liệu với form Data',
		link: '/html-css-js-basic/practice/c_e_5',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['html-basic'],
	},
	// {
	// 	id: 'c_e_4',
	// 	vneseName: 'JS - Storage & JSON',
	// 	eng: 'array methods',
	// 	description: 'Bài tập về Storage & JSON trong JS.',
	// 	link: '/html-css-js-basic/practice/c_e_3',
	// 	previewImage: 'course_practice-1.png',
	// 	status_id: 1,
	// 	category: [],
	// 	apps: ['html-basic'],
	// },
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
		id: 'node-0',
		vneseName: 'Asynchronous in Nodejs',
		eng: 'html header, header example',
		description: 'Bài tập về Asynchronous trong Nodejs',
		link: '/nodejs/practice/e_0',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['nodejs'],
	},
	{
		id: 'node-5',
		vneseName: 'ExpressJS P1',
		eng: 'html header, header example',
		description: 'Bài tập Nodejs về Express P1',
		link: '/nodejs/practice/e_1',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['nodejs'],
	},

	// {
	// 	id: 'node-1',
	// 	vneseName: 'Mapping Routes',
	// 	eng: 'html header, header example',
	// 	description: 'Bài tập về mapping routes trong Nodejs',
	// 	link: '/nodejs/practice/e_1',
	// 	previewImage: 'course_practice-1.png',
	// 	status_id: 1,
	// 	category: [],
	// 	apps: ['nodejs'],
	// },
	// {
	// 	id: 'node-2',
	// 	vneseName: 'Create View Template',
	// 	eng: 'html header, header example',
	// 	description: 'Bài tập về tạo view trong Nodejs',
	// 	link: '/nodejs/practice/e_2',
	// 	previewImage: 'course_practice-1.png',
	// 	status_id: 1,
	// 	category: [],
	// 	apps: ['nodejs'],
	// },
	// {
	// 	id: 'node-3',
	// 	vneseName: 'Đăng ký tài khoản & đăng nhập',
	// 	eng: 'html header, header example',
	// 	description: 'Bài tập Nodejs',
	// 	link: '/nodejs/practice/e_3',
	// 	previewImage: 'course_practice-1.png',
	// 	status_id: 1,
	// 	category: [],
	// 	apps: ['nodejs'],
	// },
	{
		id: 'node-3.1',
		vneseName: 'Middleware',
		eng: 'html header, header example',
		description: 'Bài tập Nodejs về Middleware',
		link: '/nodejs/practice/e_3-1',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['nodejs'],
	},
	{
		id: 'node-6',
		vneseName: 'ExpressJS, Mongoose P1',
		eng: 'html header, header example',
		description: 'Bài tập Nodejs về Express, Mongoose P1',
		link: '/nodejs/practice/e_5',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['nodejs'],
	},
	{
		id: 'node-7',
		vneseName: 'ExpressJS, Mongoose P2',
		eng: 'html header, header example',
		description: 'Bài tập Nodejs về Express, Mongoose P2',
		link: '/nodejs/practice/e_6',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['nodejs'],
	},
	{
		id: 'node-8',
		vneseName: 'ExpressJS, Mongoose P3',
		eng: 'html header, header example',
		description: 'Bài tập Nodejs về Express, Mongoose P2',
		link: '/nodejs/practice/e_7',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['nodejs'],
	},
	// {
	// 	id: 'node-4',
	// 	vneseName: 'RESTful API',
	// 	eng: 'html header, header example',
	// 	description: 'Bài tập Nodejs về RESTful API',
	// 	link: '/nodejs/practice/e_4',
	// 	previewImage: 'course_practice-1.png',
	// 	status_id: 1,
	// 	category: [],
	// 	apps: ['nodejs'],
	// },
	// SQL
	{
		id: 'sql-1',
		vneseName: 'Bài tập cơ bản 1',
		eng: 'html header, header example',
		description: 'Bài tập cơ bản SQL (P1)',
		link: '/sql/practice/e_1',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['sql'],
	},
	{
		id: 'sql-2',
		vneseName: 'Bài tập cơ bản 2',
		eng: 'html header, header example',
		description: 'Bài tập cơ bản SQL (P2)',
		link: '/sql/practice/e_2',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['sql'],
	},
	{
		id: 'sql-3',
		vneseName: 'Bài tập cơ bản 3',
		eng: 'html header, header example',
		description: 'Bài tập cơ bản SQL (P3) - Constraints',
		link: '/sql/practice/e_3',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['sql'],
	},
	{
		id: 'sql-4',
		vneseName: 'Bài tập cơ bản 4',
		eng: 'html header, header example',
		description: 'Bài tập cơ bản SQL (P4) - Constraints',
		link: '/sql/practice/e_4',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['sql'],
	},
	{
		id: 'sql-5',
		vneseName: 'Bài tập cơ bản 5',
		eng: 'html header, header example',
		description: 'Bài tập cơ bản SQL (P5) - VIEW, PROCRDURE',
		link: '/sql/practice/e_5',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['sql'],
	},

	{
		id: 'sql-7',
		vneseName: 'Bài tập cơ bản 6',
		eng: 'html header, header example',
		description: 'Bài tập cơ bản SQL (P6) - Statements',
		link: '/sql/practice/e_6',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['sql'],
	},
	{
		id: 'sql-6',
		vneseName: 'Bài tập cơ bản 7',
		eng: 'html header, header example',
		description: 'Bài tập cơ bản SQL (P7) - Index',
		link: '/sql/practice/e_7',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['sql'],
	},

	{
		id: 'sql-9',
		vneseName: 'Ôn tập 1',
		eng: 'html header, header example',
		description: 'Bài ôn tập cơ bản SQL',
		link: '/sql/practice/e_9',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['sql'],
	},
	{
		id: 'sql-10',
		vneseName: 'Ôn tập 2',
		eng: 'html header, header example',
		description: 'Bài ôn tập cơ bản SQL',
		link: '/sql/practice/e_10',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['sql'],
	},
	// MongoDB
	{
		id: 'mongo-1',
		vneseName: 'Tạo Database, Collection',
		eng: 'database, collection',
		description: 'Tạo Database, Collection trong mongodb',
		link: '/mongo-db/practice/e_1',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['mongodb'],
	},
	{
		id: 'mongo-2',
		vneseName: 'Thao tác với Document',
		eng: 'document',
		description: 'Thao tác với Document trong mongodb',
		link: '/mongo-db/practice/e_2',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['mongodb'],
	},
	{
		id: 'mongo-3',
		vneseName: 'Truy vấn cơ bản',
		eng: 'document',
		description: 'Truy vấn cơ bản Document trong mongodb',
		link: '/mongo-db/practice/e_3',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['mongodb'],
	},
	{
		id: 'mongo-4',
		vneseName: 'Kết hợp Aggregation',
		eng: 'document',
		description: 'Truy vấn cơ bản Document trong mongodb kết hợp Aggregation',
		link: '/mongo-db/practice/e_4',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['mongodb'],
	},
	{
		id: 'mongo-5',
		vneseName: 'Ôn tập 1',
		eng: 'document',
		description: 'Ôn tập các bài với mongodb.',
		link: '/mongo-db/practice/e_5',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['mongodb'],
	},
	{
		id: 'mongo-6',
		vneseName: 'Ôn tập 2',
		eng: 'document',
		description: 'Ôn tập các bài với mongodb.',
		link: '/mongo-db/practice/e_6',
		previewImage: 'course_practice-1.png',
		status_id: 1,
		category: [],
		apps: ['mongodb'],
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
