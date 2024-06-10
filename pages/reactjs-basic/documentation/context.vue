<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Khi xây dựng một dự án bằng ReactJS thì một trong những vấn đề chúng ta thường gặp phải đó là việc quản lý
					state scope.
					<br />
					<br />
					Giả sử bạn đang ở <b>component A (lv1)</b> và ở <b>component C (lv3)</b> cần phải sử dụng một state của
					<b>A</b>, như vậy ta có thể truyền state đó qua props. Vấn đề nảy sinh ở đây là để truyền một props từ
					<b>A (lv1)</b> sang <b>C (lv3)</b> thì ta cần phải truyền qua một component <b>B (lv2)</b> trước, trong khi đó
					<b>B (lv2)</b> không có nhu cầu sử dụng tới props nói trên.
					<br />
					<br />
					Lúc này chúng ta sẽ nghĩ đến việc tạo ra một nơi để chứa các <b>globalState</b> và share ra toàn app, khi đó
					các components đều có quyền truy cập và sử dụng theo nhu cầu.
					<br />
					<br />
					<b>`useContext`</b> là một hook được sử dụng để tạo ra context trong React App, chúng cho phép truy cập dữ
					liệu từ một context trong cây component mà không cần phải truyền props qua nhiều cấp
				</p>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">B1: Setup Context:</p>
				<VCodeBlock
					:code="` // ~src/context/AuthContext.js
import React, { createContext, useState } from 'react';

// Tạo context
const AuthContext = createContext();

// Tạo provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Giá trị khởi tạo của user là null

  const login = (userData) => {
    setUser(userData); // Cập nhật thông tin người dùng khi đăng nhập
  };

  const logout = () => {
    setUser(null); // Xóa thông tin người dùng khi đăng xuất
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<PageHeading text="Khởi tạo Context" addOnClass="mt-3" markedAs="context-init" :lvl="2" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trước hết, chúng ta sẽ tạo một file có tên <b>AuthContext</b> dùng để khởi tạo context của chúng ta.
					<br />
					Ở đây <b>AuthContext</b> sẽ có nhiệm vụ là lưu trữ và xoá thông tin đăng nhập của người dùng,
					<b>AuthContext</b> sẽ được tạo ra bởi hàm <b>createContext()</b> của React, context này sẽ được sử dụng để
					chia sẻ trạng thái xác thực người dùng và các hàm liên quan (login, logout ...) trong toàn bộ ứng dụng.
					<br />
					<br />
					<PageHeading text="Khởi tạo Provider" addOnClass="mb-3" markedAs="context-init-provider" :lvl="2" />
					Tiếp theo chúng ta tạo một provider là <b>`{{ `AuthProvider ` }}`</b>
					<br />
					<br />
					<VCodeBlock
						:code="`// Tạo provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Giá trị khởi tạo của user là null
`"
						highlightjs
						lang="javascript"
						theme="tomorrow-night-bright"
					/>
					<br />
					<b>`{{ `AuthProvider ` }}`</b> là một component được tạo để bao bọc các component con của nó và cung cấp các
					giá trị của context cho các component đó. Chúng ta sử dụng useState để quản lý trạng thái user với giá trị
					khởi tạo là null. Trong component này chúng ta định nghĩa các phương thức <b>login, logout</b> dùng để thay
					đổi trạng thái của state
					<br />
					<br />
					<VCodeBlock
						:code="`const login = (userData) => {
    setUser(userData); // Cập nhật thông tin người dùng khi đăng nhập
  };

  const logout = () => {
    setUser(null); // Xóa thông tin người dùng khi đăng xuất
  };
`"
						highlightjs
						lang="javascript"
						theme="tomorrow-night-bright"
					/>

					<br />
					<br />
					Cuối cùng ta trả ra value(state, methods ...) ở trên cho context để các phần tử con có thể sử dụng.

					<br />
					<br />
					<VCodeBlock
						:code="`return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
`"
						highlightjs
						lang="javascript"
						theme="tomorrow-night-bright"
					/>
					<br />
					Trong đó:
					<p class="pl-5 block mb-1">
						<b>{{ `AuthContext.Provider` }}</b
						>: Đây là component Provider mà React cung cấp, nó cho phép các component con truy cập vào giá trị
						context.<br />
					</p>
					<p class="pl-5 block mb-1">
						<b>{{ `value` }}</b
						>: Giá trị mà Provider cung cấp cho các component con. Ở đây, chúng ta có object chứa user, login, và
						logout.<br />
					</p>
					<p class="pl-5 block mb-1">
						<b>{{ `children` }}</b
						>: là các component con (xem lại bài props) của AuthProvider. Các component con này sẽ có quyền truy cập vào
						giá trị context được cung cấp.<br />
					</p>
				</div>
				<PageHeading text="Sử dụng Context" addOnClass="mb-3" markedAs="context-apply" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">B2: Sử dụng Context</p>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Để áp dụng <b>AuthContext</b> cho toàn bộ app, chúng ta bao bọc app bằng AuthProvider là được.
				</p>
				<VCodeBlock
					:code="` // ~src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './AuthContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy, chúng ta vừa khai báo context <b>`AuthContext`</b> cho toàn app.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">
					B3: Sử dụng Context trong Component cụ thể
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Các component con có thể sử dụng useContext để truy cập vào giá trị của AuthContext.
				</p>
				<VCodeBlock
					:code="` import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const UserProfile = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <p>Xin chào, {user.name}!</p>
          <button onClick={logout}>Đăng xuất</button>
        </>
      ) : (
				<>
			 		<p>Vui lòng đăng nhập để tiếp tục</p>
					<button onClick={() => login({ name: 'Phạm Tuấn' })}>Đăng nhập</button>
			 	</>
      )}
    </div>
  );
};

export default UserProfile;
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Done :).</p>
				<div class="py-2"></div>

				<DocNextPage :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { apiResponde } from 'models';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, VCodeBlock, DocNextPage },
		data() {
			return {
				pagePagination: {
					prev: {
						title: 'Router',
						link: '/reactjs-basic/documentation/routers',
					},
				},
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'reactjs-basic', currentDocId: 'r-9' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
<!-- 
https://blog.logrocket.com/authentication-react-router-v6/
https://stackoverflow.com/questions/69923420/how-to-use-private-route-in-react-router-domv6
-->
