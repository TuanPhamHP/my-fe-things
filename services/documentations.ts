import { AppName, apiResponde } from '~~/models';
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
		link: '/reactjs-basic/documentation/installation',
		previewImage: 'parallax-1.jpeg',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 2,
		vneseName: 'Hooks',
		eng: 'Hooks',
		description: 'Trình bày về một số hooks cơ bản của ReactJS. Eg: useState(), useEffect(), useContext() ...',
		link: '/reactjs-basic/documentation/hooks',
		previewImage: 'parallax-2.jpeg',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 'r-2-1',
		vneseName: 'Effects & Life Cycle',
		eng: 'Effects & Life Cycle',
		description: 'Hook useEffect, life cycle của RFC.',
		link: '/reactjs-basic/documentation/effects-and-life-cycle',
		previewImage: 'parallax-11.jpg',
		status_id: 1,
		apps: ['reactjs-basic'],
	},

	{
		id: 3,
		vneseName: 'CSS Trong React',
		eng: 'Styled Component',
		description: 'Cách sử dụng css trong ReactJS, css module.',
		link: '/reactjs-basic/documentation/styled-component',
		previewImage: 'parallax-3.jpeg',
		status_id: 1,
		apps: ['reactjs-basic'],
	},

	{
		id: 4,
		vneseName: 'State & Props',
		eng: 'State and Props',
		description: 'Quản lý State và props trong ReactJS',
		link: '/reactjs-basic/documentation/state-and-prop',
		previewImage: 'parallax-5.jpg',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 5,
		vneseName: 'Render list data',
		eng: 'render list data',
		description: 'Cách render một danh sách data ra view',
		link: '/reactjs-basic/documentation/render-list-data',
		previewImage: 'parallax-6.jpg',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 'r-6',
		vneseName: 'Conditional Rendering',
		eng: 'render list data',
		description: 'Cách sử dụng conditional rendering trong reactjs',
		link: '/reactjs-basic/documentation/conditional-rendering',
		previewImage: 'parallax-7.jpg',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 'r-7',
		vneseName: 'Routers',
		eng: 'routers',
		description: 'Setup và sử dụng routers trong ứng dụng react',
		link: '/reactjs-basic/documentation/routers',
		previewImage: 'parallax-14.jpg',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 'r-9',
		vneseName: 'useContext trong react',
		eng: 'routers',
		description: 'Setup và sử dụng useContext trong ứng dụng react',
		link: '/reactjs-basic/documentation/context',
		previewImage: 'parallax-15.jpg',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 6,
		vneseName: 'HTML - Thẻ và cấu trúc file',
		eng: 'html tag and structure',
		description: 'Thẻ trong HTML và cấu trúc cơ bản của một file HTML.',
		link: '/html-css-js-basic/documentation/ep-1',
		previewImage: 'parallax-6.jpg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 7,
		vneseName: 'HTML - Links, Image',
		eng: 'links, images, anchor, img, <a>, <img>',
		description: 'Giới thiệu về thẻ đường dẫn, ảnh và video...',
		link: '/html-css-js-basic/documentation/ep-2',
		previewImage: 'parallax-3.jpeg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 8,
		vneseName: 'CSS - Intro & Syntax',
		eng: 'css3 introduction, syntax',
		description: 'Giới thiệu về CSS3, cách viết và cách sử dụng chúng',
		link: '/html-css-js-basic/documentation/ep-3',
		previewImage: 'parallax-2.jpeg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 'r8-1',
		vneseName: 'CSS - Element spacing',
		eng: 'css3 introduction, syntax',
		description: 'Padding, Margin, Box-sizing ... Các CSS liên quan đến spacing của element',
		link: '/html-css-js-basic/documentation/ep-r8-1',
		previewImage: 'parallax-11.jpg',
		status_id: 1,
		apps: ['html-basic'],
	},

	{
		id: 9,
		vneseName: 'HTML - Table',
		eng: 'html table tag, table tag',
		description: 'Thẻ table trong HTML, cấu trúc và cách dùng',
		link: '/html-css-js-basic/documentation/ep-4',
		previewImage: 'parallax-13.jpg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 10,
		vneseName: 'HTML - Form',
		eng: 'html style tag, styling tag',
		description: 'Form trong HTML, các thẻ và cách dùng',
		link: '/html-css-js-basic/documentation/ep-5',
		previewImage: 'parallax-14.jpg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 11,
		vneseName: 'CSS - Pseudo',
		eng: 'pseudo class, pseudo element',
		description: 'Pseudo Classes và Pseudo Elements trong CSS. Một số loại Pseudo thường dùng',
		link: '/html-css-js-basic/documentation/ep-11',
		previewImage: 'parallax-9.jpg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 13,
		vneseName: 'Flexbox (P1)',
		eng: 'Flex box',
		description: 'Flex box trong Web UI',
		link: '/html-css-js-basic/documentation/ep-13',
		previewImage: 'parallax-15.jpg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 14,
		vneseName: 'Flexbox (P2)',
		eng: 'Flex box',
		description: 'Flex box trong Web UI',
		link: '/html-css-js-basic/documentation/ep-14',
		previewImage: 'parallax-16.jpg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 'js-r1',
		vneseName: 'JS - Data type (P1)',
		eng: 'javascript object, fnc, fn, methods, ms',
		description: 'Khái niệm cơ bản về các kiểu dữ liệu trong Javascript, một số bài toán thường gặp.',
		link: '/html-css-js-basic/documentation/js-basic-p1',
		previewImage: 'parallax-11.jpg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 15,
		vneseName: 'JS - Object',
		eng: 'javascript object, fnc, fn, methods, ms',
		description: 'Khái niệm cơ bản về Object, CRUD các trường trong object',
		link: '/html-css-js-basic/documentation/ep-15',
		previewImage: 'parallax-8.webp',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 16,
		vneseName: 'JS - Function vs Methods ???',
		eng: 'javascript function, fnc, fn, methods, ms',
		description: 'Phân biệt Function, Methods trong javascript.',
		link: '/html-css-js-basic/documentation/ep-16',
		previewImage: 'parallax-7.jpg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 17,
		vneseName: 'JS - Array',
		eng: 'javascript array',
		description: 'Giới thiệu về Array trong javascript, các bài toán Array cơ bản',
		link: '/html-css-js-basic/documentation/ep-17',
		previewImage: 'parallax-4.jpg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 18,
		vneseName: 'JS - Array map(), forEach(), filter()',
		eng: 'javascript array, map, foreach, filter',
		description: 'Giới thiệu về các method map(), forEach(), filter() của Array trong javascript',
		link: '/html-css-js-basic/documentation/ep-18',
		previewImage: 'parallax-5.jpg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 19,
		vneseName: 'JS - DOM (P1): Query',
		eng: 'javascript dom, document object model queryselector getelementby',
		description: 'Cơ bản về JS DOM. P1 - Tìm kiếm phần tử',
		link: '/html-css-js-basic/documentation/ep-19',
		previewImage: 'parallax-1.jpeg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 20,
		vneseName: 'JS - DOM (P2): ClassList',
		eng: 'javascript dom, document object model class attributes',
		description: 'Cơ bản về JS DOM. P2 - Thao tác với classList, các methods của classList',
		link: '/html-css-js-basic/documentation/ep-20',
		previewImage: 'parallax-3.jpeg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 21,
		vneseName: 'JS - DOM (P3): Attributes',
		eng: 'javascript dom, document object model class attributes',
		description: 'Cơ bản về JS DOM. P3 - Thao tác với Attributes, các methods của thường dùng',
		link: '/html-css-js-basic/documentation/ep-21',
		previewImage: 'parallax-9.jpg',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 22,
		vneseName: 'JS - DOM (P4): Events, addEventListner',
		eng: 'javascript dom, document object model class addEventListner events',
		description: 'Cơ bản về JS DOM. P4 - Binding Function vào các sự kiện của một element',
		link: '/html-css-js-basic/documentation/ep-22',
		previewImage: 'parallax-10.jpg',
		status_id: 1,
		apps: ['html-basic'],
	},

	// NEXTJS
	{
		id: 'nextjs-1',
		vneseName: 'Cài đặt cơ bản',
		eng: 'Installation',
		description: 'Hướng dẫn cài đặt cơ bản để khởi tạo web-app của bạn với NextJs.',
		link: '/nextjs-basic/documentation/installation',
		previewImage: 'parallax-1.jpeg',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	{
		id: 'nextjs-2',
		vneseName: 'Routing (P1) - Path & UI',
		eng: 'Routing',
		description: 'Routing trong project NextJs.',
		link: '/nextjs-basic/documentation/routers',
		previewImage: 'parallax-2.jpeg',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	{
		id: 'nextjs-3',
		vneseName: 'Routing (P2) - Nested Route & Dynamic Route',
		eng: 'Routing',
		description: 'Nested Route & Dynamic Route trong NextJs',
		link: '/nextjs-basic/documentation/route-nested-dynamic',
		previewImage: 'parallax-3.jpeg',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	{
		id: 'nextjs-4',
		vneseName: 'Routing (P3) - Link and Navigation',
		eng: 'Routing',
		description: 'Component Link, useRouter() hooks và redirect trong NextJs',
		link: '/nextjs-basic/documentation/linking-and-navigation',
		previewImage: 'parallax-4.jpg',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	{
		id: 'nextjs-5',
		vneseName: 'Routing (P4) - Components',
		eng: 'Routing',
		description: 'Loading, Error handler page với nextjs router.',
		link: '/nextjs-basic/documentation/router-components',
		previewImage: 'parallax-4.jpg',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
];
class PaginationDefault {
	constructor(
		prev: { link: string; vneseName: string } | DocumentItem | null,
		next: { link: string; vneseName: string } | DocumentItem | null
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
					title: 'Trở về danh sách Doc',
					link: '/',
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
