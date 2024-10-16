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
	{
		id: 6,
		name: 'NodeJS',
		en: 'NodeJS',
	},
];
let baseListData: DocumentItem[] = [
	{
		id: 1,
		vneseName: 'Cài đặt cơ bản',
		eng: 'Installation',
		description: 'Hướng dẫn cài đặt cơ bản để khởi tạo web-app của bạn với ReactJS.',
		link: '/reactjs-basic/documentation/installation',
		previewImage: 'course_reactjs.png',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 2,
		vneseName: 'Components',
		eng: 'Installation',
		description: 'Khái niệm về components, cách khởi tạo và sử dụng components.',
		link: '/reactjs-basic/documentation/components',
		previewImage: 'course_reactjs.png',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 5,
		vneseName: 'JSX (P1)',
		eng: 'JSX',
		description: 'Khái niệm về JSX, cách Viết JSX. JSX Rules.',
		link: '/reactjs-basic/documentation/jsx-in-react-p1',
		previewImage: 'course_reactjs.png',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 'r-6',
		vneseName: 'JSX (P2)',
		eng: 'JSX',
		description: 'Khái niệm về JSX, cách Viết JSX. JSX View.',
		link: '/reactjs-basic/documentation/jsx-in-react-p2',
		previewImage: 'course_reactjs.png',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 'r-6-1',
		vneseName: 'JSX (P3)',
		eng: 'JSX',
		description: 'Xử lý events với JSX.',
		link: '/reactjs-basic/documentation/jsx-in-react-p3',
		previewImage: 'course_reactjs.png',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 'r-7',
		vneseName: 'Conditional Rendering',
		eng: 'render list data',
		description: 'Cách sử dụng conditional rendering trong reactjs',
		link: '/reactjs-basic/documentation/conditional-rendering',
		previewImage: 'course_reactjs.png',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 'r-2-2',
		vneseName: 'Render list data',
		eng: 'render list data',
		description: 'Cách render một danh sách data ra view',
		link: '/reactjs-basic/documentation/render-list-data',
		previewImage: 'course_reactjs.png',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 3,
		vneseName: 'CSS Trong React',
		eng: 'Styled Component',
		description: 'Cách sử dụng css trong ReactJS, css module.',
		link: '/reactjs-basic/documentation/styled-component',
		previewImage: 'course_reactjs.png',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 4,
		vneseName: 'State & Props',
		eng: 'State and Props',
		description: 'Quản lý State và props trong ReactJS',
		link: '/reactjs-basic/documentation/state-and-prop',
		previewImage: 'course_reactjs.png',
		status_id: 1,
		apps: ['reactjs-basic'],
	},

	// {
	// 	id: 2,
	// 	vneseName: 'Hooks',
	// 	eng: 'Hooks',
	// 	description: 'Trình bày về một số hooks cơ bản của ReactJS. Eg: useState(), useEffect(), useContext() ...',
	// 	link: '/reactjs-basic/documentation/hooks',
	// 	previewImage: 'parallax-2.jpeg',
	// 	status_id: 1,
	// 	apps: ['reactjs-basic'],
	// },
	{
		id: 'r-2-1',
		vneseName: 'Effects & Life Cycle',
		eng: 'Effects & Life Cycle',
		description: 'Hook useEffect, life cycle của RFC.',
		link: '/reactjs-basic/documentation/effects-and-life-cycle',
		previewImage: 'course_reactjs.png',
		status_id: 1,
		apps: ['reactjs-basic'],
	},

	{
		id: 'r-8',
		vneseName: 'Routers',
		eng: 'routers',
		description: 'Setup và sử dụng routers trong ứng dụng react',
		link: '/reactjs-basic/documentation/routers',
		previewImage: 'course_reactjs.png',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 'r-9',
		vneseName: 'useContext trong react',
		eng: 'routers',
		description: 'Setup và sử dụng useContext trong ứng dụng react',
		link: '/reactjs-basic/documentation/context',
		previewImage: 'course_reactjs.png',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	// {
	// 	id: 'r-i-1',
	// 	vneseName: '[INTERMEDIATE] `STORE` trong ReactJs',
	// 	eng: 'store, zustand, redux',
	// 	description: 'Store - global state holder trong ứng dụng react',
	// 	link: '/reactjs-basic/documentation/global-store',
	// 	previewImage: 'parallax-16.jpg',
	// 	status_id: 1,
	// 	apps: ['reactjs-basic'],
	// },
	{
		id: 'r-i-2',
		vneseName: '[INTERMEDIATE] useReducer trong react',
		eng: 'routers',
		description: 'Setup và sử dụng useReducer trong ứng dụng react',
		link: '/reactjs-basic/documentation/use-reducer',
		previewImage: 'course_reactjs.png',
		status_id: 1,
		apps: ['reactjs-basic'],
	},
	{
		id: 6,
		vneseName: 'HTML - Thẻ và cấu trúc file',
		eng: 'html tag and structure',
		description: 'Thẻ trong HTML và cấu trúc cơ bản của một file HTML.',
		link: '/html-css-js-basic/documentation/ep-1',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 7,
		vneseName: 'HTML - Links, Image',
		eng: 'links, images, anchor, img, <a>, <img>',
		description: 'Giới thiệu về thẻ đường dẫn, ảnh và video...',
		link: '/html-css-js-basic/documentation/ep-2',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 8,
		vneseName: 'CSS - Intro & Syntax',
		eng: 'css3 introduction, syntax',
		description: 'Giới thiệu về CSS3, cách viết và cách sử dụng chúng',
		link: '/html-css-js-basic/documentation/ep-3',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 'r8-1',
		vneseName: 'CSS - Element spacing',
		eng: 'css3 introduction, syntax',
		description: 'Padding, Margin, Box-sizing ... Các CSS liên quan đến spacing của element',
		link: '/html-css-js-basic/documentation/ep-r8-1',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},

	{
		id: 9,
		vneseName: 'HTML - Table',
		eng: 'html table tag, table tag',
		description: 'Thẻ table trong HTML, cấu trúc và cách dùng',
		link: '/html-css-js-basic/documentation/ep-4',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 10,
		vneseName: 'HTML - Form',
		eng: 'html style tag, styling tag',
		description: 'Form trong HTML, các thẻ và cách dùng',
		link: '/html-css-js-basic/documentation/ep-5',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 11,
		vneseName: 'CSS - Pseudo',
		eng: 'pseudo class, pseudo element',
		description: 'Pseudo Classes và Pseudo Elements trong CSS. Một số loại Pseudo thường dùng',
		link: '/html-css-js-basic/documentation/ep-11',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 13,
		vneseName: 'Flexbox (P1)',
		eng: 'Flex box',
		description: 'Flex box trong Web UI',
		link: '/html-css-js-basic/documentation/ep-13',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 14,
		vneseName: 'Flexbox (P2)',
		eng: 'Flex box',
		description: 'Flex box trong Web UI',
		link: '/html-css-js-basic/documentation/ep-14',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 'js-r1',
		vneseName: 'JS - Data type (P1)',
		eng: 'javascript object, fnc, fn, methods, ms',
		description: 'Khái niệm cơ bản về các kiểu dữ liệu trong Javascript, một số bài toán thường gặp.',
		link: '/html-css-js-basic/documentation/js-basic-p1',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 15,
		vneseName: 'JS - Object',
		eng: 'javascript object, fnc, fn, methods, ms',
		description: 'Khái niệm cơ bản về Object, CRUD các trường trong object',
		link: '/html-css-js-basic/documentation/ep-15',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 16,
		vneseName: 'JS - Function vs Methods ???',
		eng: 'javascript function, fnc, fn, methods, ms',
		description: 'Phân biệt Function, Methods trong javascript.',
		link: '/html-css-js-basic/documentation/ep-16',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 17,
		vneseName: 'JS - Array',
		eng: 'javascript array',
		description: 'Giới thiệu về Array trong javascript, các bài toán Array cơ bản',
		link: '/html-css-js-basic/documentation/ep-17',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 18,
		vneseName: 'JS - Array map(), forEach(), filter()',
		eng: 'javascript array, map, foreach, filter',
		description: 'Giới thiệu về các method map(), forEach(), filter() của Array trong javascript',
		link: '/html-css-js-basic/documentation/ep-18',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 19,
		vneseName: 'JS - DOM (P1): Query',
		eng: 'javascript dom, document object model queryselector getelementby',
		description: 'Cơ bản về JS DOM. P1 - Tìm kiếm phần tử',
		link: '/html-css-js-basic/documentation/ep-19',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 20,
		vneseName: 'JS - DOM (P2): ClassList',
		eng: 'javascript dom, document object model class attributes',
		description: 'Cơ bản về JS DOM. P2 - Thao tác với classList, các methods của classList',
		link: '/html-css-js-basic/documentation/ep-20',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 21,
		vneseName: 'JS - DOM (P3): Attributes',
		eng: 'javascript dom, document object model class attributes',
		description: 'Cơ bản về JS DOM. P3 - Thao tác với Attributes, các methods của thường dùng',
		link: '/html-css-js-basic/documentation/ep-21',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},
	{
		id: 22,
		vneseName: 'JS - DOM (P4): Events, addEventListner',
		eng: 'javascript dom, document object model class addEventListner events',
		description: 'Cơ bản về JS DOM. P4 - Binding Function vào các sự kiện của một element',
		link: '/html-css-js-basic/documentation/ep-22',
		previewImage: 'course_hcj.png',
		status_id: 1,
		apps: ['html-basic'],
	},

	// NEXTJS
	{
		id: 'nextjs-1',
		vneseName: 'B1-1: Cài đặt cơ bản',
		eng: 'Installation',
		description: 'Hướng dẫn cài đặt cơ bản để khởi tạo web-app của bạn với NextJs.',
		link: '/nextjs-basic/documentation/installation',
		previewImage: 'course_nextjs.png',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	{
		id: 'nextjs-2',
		vneseName: 'B1-2: Routing (P1) - Path & UI',
		eng: 'Routing',
		description: 'Routing trong project NextJs.',
		link: '/nextjs-basic/documentation/routers',
		previewImage: 'course_nextjs.png',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	{
		id: 'nextjs-3',
		vneseName: 'B1-3: Routing (P2) - Nested Route & Dynamic Route',
		eng: 'Routing',
		description: 'Nested Route & Dynamic Route trong NextJs',
		link: '/nextjs-basic/documentation/route-nested-dynamic',
		previewImage: 'course_nextjs.png',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	{
		id: 'nextjs-4',
		vneseName: 'B1-4: Routing (P3) - Link and Navigation',
		eng: 'Routing',
		description: 'Component Link, useRouter() hooks và redirect trong NextJs',
		link: '/nextjs-basic/documentation/linking-and-navigation',
		previewImage: 'course_nextjs.png',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	{
		id: 'nextjs-5',
		vneseName: 'B1-5: Routing (P4) - Components',
		eng: 'Routing',
		description: 'Loading, Error handler page với nextjs router.',
		link: '/nextjs-basic/documentation/router-components',
		previewImage: 'course_nextjs.png',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	{
		id: 'nextjs-6',
		vneseName: 'B2-1: Rendering trong Next.js (SSR, SSG, CSR)',
		eng: 'Rendering in Next.js (SSR, SSG, CSR)',
		description: 'Hiểu sự khác biệt giữa SSR, SSG, CSR. Thực hành gọi API và xử lý dữ liệu trong Next.js.',
		link: '/nextjs-basic/documentation/rendering',
		previewImage: 'course_nextjs.png',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	{
		id: 'nextjs-9',
		vneseName: 'B2-2: Fetching data',
		eng: 'Fetching data',
		description: 'Fetching data trong NextJs.',
		link: '/nextjs-basic/documentation/fetching-data',
		previewImage: 'course_nextjs.png',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	{
		id: 'nextjs-7',
		vneseName: 'B2-3: Middleware And Authenticate (P1)',
		eng: 'Middleware And Authenticate',
		description: 'Middleware trong NextJs, ứng dụng middleware và HOC để tạo tính năng ProtectedRoutes cho NextJs ',
		link: '/nextjs-basic/documentation/middleware-and-auth',
		previewImage: 'course_nextjs.png',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	{
		id: 'nextjs-8',
		vneseName: 'B2-4: Middleware And Authenticate (P2)',
		eng: 'Middleware And Authenticate',
		description: 'Middleware trong NextJs, ứng dụng middleware và HOC để tạo tính năng ProtectedRoutes cho NextJs ',
		link: '/nextjs-basic/documentation/middleware-and-auth-p2',
		previewImage: 'course_nextjs.png',
		status_id: 1,
		apps: ['nextjs-basic'],
	},

	{
		id: 'nextjs-10',
		vneseName: 'B3-1: API đơn giản với NextJS (P1)',
		eng: 'Middleware And Authenticate',
		description: 'Cùng tạo các RESTful API đơn giản với NextJS ',
		link: '/nextjs-basic/documentation',
		previewImage: 'course_nextjs.png',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	{
		id: 'nextjs-10',
		vneseName: 'B3-2: API đơn giản với NextJS (P2)',
		eng: 'Middleware And Authenticate',
		description: 'Cùng tạo các RESTful API đơn giản với NextJS ',
		link: '/nextjs-basic/documentation',
		previewImage: 'course_nextjs.png',
		status_id: 1,
		apps: ['nextjs-basic'],
	},
	// PHP
	{
		id: 'php-1',
		vneseName: 'Cài đặt cơ bản',
		eng: 'Installation',
		description: 'Hướng dẫn cài đặt cơ bản để tạo và chạy file PHP của bạn.',
		link: '/php/documentation/installation',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-2',
		vneseName: 'PHP overview',
		eng: 'Installation',
		description: 'Tổng quát về PHP, một vài điểm khác biệt giữa version 7.x và 8.x.',
		link: '/php/documentation/php-overview',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-3',
		vneseName: 'PHP Basics & Syntax',
		eng: 'Installation',
		description: 'Các lý thuyết cơ bản trong php, syntax.',
		link: '/php/documentation/php-basic-and-syntax',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-4',
		vneseName: 'PHP Data Types',
		eng: 'Installation',
		description: 'Tổng quát về các kiểu dữ liệu trong PHP.',
		link: '/php/documentation/php-data-types',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-5',
		vneseName: 'PHP String',
		eng: 'Installation',
		description: 'String trong PHP.',
		link: '/php/documentation/php-string',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-6',
		vneseName: 'PHP Number',
		eng: 'Installation',
		description: 'Number trong PHP.',
		link: '/php/documentation/php-number',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-7',
		vneseName: 'PHP Variables & Operators',
		eng: 'Installation',
		description: 'Variables & Operators trong PHP.',
		link: '/php/documentation/php-variable-n-operator',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-10',
		vneseName: 'PHP Function & Array',
		eng: 'Installation',
		description: 'Function & Array trong PHP.',
		link: '/php/documentation/php-function-and-array',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-8',
		vneseName: 'PHP Statements - Conditional',
		eng: 'Installation',
		description: 'Statements về Conditional trong PHP.',
		link: '/php/documentation/php-statements-conditional',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-9',
		vneseName: 'PHP Statements - Loop & Jump',
		eng: 'Installation',
		description: 'Statements về Loop & Jump trong PHP.',
		link: '/php/documentation/php-statements-loop-n-jump',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},

	{
		id: 'php-11',
		vneseName: 'PHP Class - Object',
		eng: 'Installation',
		description: 'Class - Object trong PHP.',
		link: '/php/documentation/php-object-n-class',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-11.2',
		vneseName: 'PHP Include & Require',
		eng: 'PHP Include & Required',
		description: 'Include & Require trong PHP.',
		link: '/php/documentation/php-include-n-require',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-12',
		vneseName: 'PHP Form handling',
		eng: 'Installation',
		description: 'Xử lý form data trong PHP.',
		link: '/php/documentation/php-form-handling',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-13',
		vneseName: 'PHP OOP',
		eng: 'OOP',
		description: 'OOP trong PHP.',
		link: '/php/documentation/php-oop',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-13-1',
		vneseName: 'MVC Architecture',
		eng: 'MVC',
		description: 'Giới thiệu về MVC Architecture.',
		link: '/php/documentation/php-mvc',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-13-2',
		vneseName: 'PHP Database - (P1)',
		eng: 'Database',
		description: 'Thiết lập và kết nối databse trong PHP.',
		link: '/php/documentation/php-and-database-p1',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-13-3',
		vneseName: 'PHP Database - (P2)',
		eng: 'Database',
		description: 'Xử lý bài toán CRUD databse trong PHP với Model và Controller.',
		link: '/php/documentation/php-and-database-p2',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-13-4',
		vneseName: 'PHP Database - (P3)',
		eng: 'Database',
		description: 'Tạo View và sử dụng Model, Controller để hoàn thiện bài toán.',
		link: '/php/documentation/php-and-database-p3',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-13-5',
		vneseName: 'PHP Database - (P4)',
		eng: 'Database',
		description: 'Sử dụng $_SESSION để lưu kết quả',
		link: '/php/documentation/php-and-database-p4',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-13-6',
		vneseName: 'PHP Database - (P5)',
		eng: 'Database',
		description: 'Tạo ORM',
		link: '/php/documentation/php-and-database-p5',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-14',
		vneseName: 'Larvel - Setup',
		eng: 'AJAX',
		description: 'Setup ứng dụng laravel.',
		link: '/php/documentation/laravel-installation',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-15',
		vneseName: 'Larvel - Structure & Features',
		eng: 'Installation',
		description: 'Cấu trúc cơ bản của một Laravel Project. Một số concept, features nổi bật trong Laravel',
		link: '/php/documentation/laravel-structure-feature',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-16',
		vneseName: 'Larvel - Controller & Views',
		eng: 'AJAX',
		description: 'Làm việc với Controller và Views trong Laravel',
		link: '/php/documentation/laravel-controllers-and-views',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},

	{
		id: 'php-16-2',
		vneseName: 'Larvel - Blade (P1)',
		eng: 'AJAX',
		description: 'Làm việc với Blade trong Laravel',
		link: '/php/documentation/laravel-blade-p1',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-16-3',
		vneseName: 'Larvel - Blade (P2)',
		eng: 'AJAX',
		description: 'Làm việc với Blade trong Laravel',
		link: '/php/documentation/laravel-blade-p2',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-17',
		vneseName: 'Larvel - Database',
		eng: 'AJAX',
		description: 'Làm việc với Database trong Laravel',
		link: '/php/documentation/laravel-database',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-18',
		vneseName: 'Larvel - Eloquent ORM và Model',
		eng: 'AJAX',
		description: 'Làm quen với Eloquent ORM và Model trong Laravel',
		link: '/php/documentation/laravel-orm-and-model',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-19',
		vneseName: 'Larvel - Query Builder và Controller',
		eng: 'AJAX',
		description: 'Tìm hiểu về Query Builder và tạo Controller trong Laravel',
		link: '/php/documentation/laravel-controller',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},
	{
		id: 'php-20',
		vneseName: 'Larvel - Images & Files',
		eng: 'images',
		description: 'Xử lý ảnh local và upload files với laravel',
		link: '/php/documentation/laravel-images-and-files',
		previewImage: 'course_php.png',
		status_id: 1,
		apps: ['php'],
	},

	// NodeJS
	{
		id: 'node-1',
		vneseName: 'Cài đặt cơ bản',
		eng: 'Installation',
		description: 'Hướng dẫn cài đặt cơ bản để tạo và chạy file NodeJS của bạn.',
		link: '/nodejs/documentation/installation',
		previewImage: 'course_nodejs.png',
		status_id: 1,
		apps: ['nodejs'],
	},
	{
		id: 'node-2',
		vneseName: 'Tổng quan về NodeJs',
		eng: 'About nodejs',
		description: 'Giới thiệu tổng quan về Nodejs',
		link: '/nodejs/documentation/about-nodejs',
		previewImage: 'course_nodejs.png',
		status_id: 1,
		apps: ['nodejs'],
	},
	{
		id: 'node-3',
		vneseName: 'Runtime và Environment trong NodeJS',
		eng: 'About nodejs',
		description:
			'Hiểu cách Node.js thực thi mã JavaScript. Nắm rõ môi trường của Node.js, sự khác biệt với môi trường trình duyệt.',
		link: '/nodejs/documentation/runtime-and-env',
		previewImage: 'course_nodejs.png',
		status_id: 1,
		apps: ['nodejs'],
	},
	{
		id: 'node-4',
		vneseName: 'Các tính năng nổi bật trong Node.js ',
		eng: 'About nodejs',
		description: 'Các tính năng nổi bật trong Node.js như require, module, và cách tổ chức mã',
		link: '/nodejs/documentation/pros-in-node',
		previewImage: 'course_nodejs.png',
		status_id: 1,
		apps: ['nodejs'],
	},
	{
		id: 'node-5',
		vneseName: 'Request, Response ',
		eng: 'Request, Respone nodejs',
		description: 'Chi tiết về Request, Response trong NodeJs',
		link: '/nodejs/documentation/request-and-response',
		previewImage: 'course_nodejs.png',
		status_id: 1,
		apps: ['nodejs'],
	},
	{
		id: 'node-6',
		vneseName: 'Node Package, Express (P1) - Init Structure',
		eng: 'Request, Respone nodejs',
		description: 'Tìm hiểu và sử dụng Express trong NodeJs phần 1: init và xử lý response',
		link: '/nodejs/documentation/expressjs-p1',
		previewImage: 'course_nodejs.png',
		status_id: 1,
		apps: ['nodejs'],
	},
	{
		id: 'node-7',
		vneseName: 'Node Package, Express (P2) - EJS',
		eng: 'EJS template nodejs',
		description: 'Tìm hiểu và sử dụng Express trong NodeJs phần 2: ejs template',
		link: '/nodejs/documentation/expressjs-p2',
		previewImage: 'course_nodejs.png',
		status_id: 1,
		apps: ['nodejs'],
	},
	{
		id: 'node-8',
		vneseName: 'Node Package, Express (P3) - Express',
		eng: 'Request, Respone nodejs',
		description: 'Tìm hiểu và sử dụng Express trong NodeJs phần 3: mvc & express',
		link: '/nodejs/documentation/expressjs-p3',
		previewImage: 'course_nodejs.png',
		status_id: 1,
		apps: ['nodejs'],
	},

	{
		id: 'node-9',
		vneseName: 'NodeJs & SQL (P1) - Tạo kết nối',
		eng: 'Request, Respone nodejs',
		description: 'sử dụng mysql2 để kết nối với SQL trong nodejs',
		link: '/nodejs/documentation/connect-to-sql',
		previewImage: 'course_nodejs.png',
		status_id: 1,
		apps: ['nodejs'],
	},
	{
		id: 'node-10',
		vneseName: 'Authenticate trong NodeJs với JWT & bcryptjs ',
		eng: 'Request, Respone nodejs',
		description: 'sử dụng jwt và bcryptjs để thực hiện tính năng bảo mật trong nodejs',
		link: '/nodejs/documentation/jwt-and-bcrypt',
		previewImage: 'course_nodejs.png',
		status_id: 1,
		apps: ['nodejs'],
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

// Buổi 3 (2 tiếng): SSR, SSG và API Routes
// Mục tiêu: Phân biệt SSR, SSG, ISR và làm quen với API routes trong Next.js.

// SSR và SSG:

// getServerSideProps vs. getStaticProps
// ISR (Incremental Static Regeneration)
// Tạo API routes:

// Tạo API trong thư mục pages/api
// Xử lý GET và POST request
// Thực hành:

// Tạo trang hiển thị danh sách sản phẩm từ API (SSG)
// Tạo API để thêm sản phẩm mới

// Buổi 4 (2 tiếng): Quản lý State và Tích hợp API
// Mục tiêu: Kết hợp Hooks và các API call trong Next.js.

// Sử dụng useState và useEffect cho dữ liệu động

// Gọi API trong useEffect
// Tích hợp với các API bên ngoài:

// Fetch dữ liệu từ một REST API hoặc GraphQL
// Thực hành:

// Tạo form thêm sản phẩm và lưu vào API đã tạo
// Render lại danh sách sản phẩm sau khi thêm
