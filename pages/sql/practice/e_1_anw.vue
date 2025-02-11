<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<VCodeBlock :code="b1" highlightjs lang="javascript" theme="vs2015" />
		<DocNextPage :pagination="pagePagination" />
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		TabGroup,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
	} from '@headlessui/vue';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			VCodeBlock,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			TabGroup,
			TabList,
			Tab,
			TabPanels,
			TabPanel,
		},
		data() {
			return {
				counter: 0,
				pagePagination: {
					next: {
						title: 'Bài 2',
						link: '/php/practice/e_2',
					},
					prev: {
						title: 'Danh sách',
						link: '/php/practice',
					},
				},
				b1: `const http = require('http');

// Khởi tạo server
const server = http.createServer((req, res) => {
    // Lấy URL và method của request
    const url = req.url;
    const method = req.method;

    // Thiết lập header chung cho mọi route
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // Route đến trang chủ
    if (url === '/' && method === 'GET') {
        res.writeHead(200); // Mã trạng thái 200: OK
        res.end('Trang chủ - Welcome to the Homepage!');

    // Route đến trang giới thiệu
    } else if (url === '/about' && method === 'GET') {
        res.writeHead(200);
        res.end('Giới thiệu - This is the About Page.');

    // Route đến trang liên hệ
    } else if (url === '/contact' && method === 'GET') {
        res.writeHead(200);
        res.end('Liên hệ - Contact us at: email@example.com');

    // Route không tồn tại (404)
    } else {
        res.writeHead(404);
        res.end('404 Not Found - The page you are looking for does not exist.');
    }
});

// Lắng nghe trên cổng 3000
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
`,
			};
		},
		computed: {},
		methods: {},
	};
</script>
