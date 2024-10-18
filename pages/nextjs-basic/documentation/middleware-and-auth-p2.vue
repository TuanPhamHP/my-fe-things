<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white mt-5">
					Ở bài này chúng ta sẽ tạo 'Auth Middleware' và HOC trong NextJs để tạo private route cho ứng dụng.
					<br />
				</p>

				<PageHeading text="Khởi tạo AuthContext" addOnClass="text-left mt-5" markedAs="init-context" />
				<p class="text-slate-900 dark:text-white mt-5">
					Ở đây chúng ta sẽ sử dụng context để lưu trữ, kiểm tra và xử lý trạng thái đăng nhập của User. Khởi tạo
					<FilePath>~/context/AuthContext.tsx</FilePath>
				</p>
				<div class="py-2"></div>
				<VCodeBlock :code="b3" highlightjs lang="tsx" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white mt-5">
					<FilePath>AuthContext.tsx</FilePath> tạo ra context với state là user (dùng để lưu trữ thông tin user).
					<br />
					Ở trong <b>Provider</b> của <FilePath>AuthContext.tsx</FilePath> chúng ta sẽ tiến hành kiểm tra xem người dùng
					đăng nhập hay chưa khi mounted thông qua hook <b>`useEffect()`</b> => nếu sử dụng Provider này vào global
					layouts thì mỗi khi người dùng vào trang hoặc f5 sẽ luôn tiến hành kiểm tra lại thông tin đăng nhập
				</p>

				<PageHeading text="Khởi tạo HOC" addOnClass="text-left mt-5" markedAs="init-hoc" />
				<p class="text-slate-900 dark:text-white my-5">
					Sau khi có <FilePath>AuthContext.tsx</FilePath>, chúng ta sẽ tạo ra một HOC sử dụng conditional rendering để
					xử lý việc render routes dựa vào context vừa tạo. Khởi tạo <FilePath>~/hoc/withAuth.tsx</FilePath>:
				</p>
				<VCodeBlock :code="b4" highlightjs lang="tsx" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5">
					Lưu ý: <FilePath>withAuth.tsx</FilePath> sử dụng <b>`useEffect()`</b> để check logic auth và xử lý , do đó khi
					ta muốn sử dụng <FilePath>withAuth.tsx</FilePath> để kiểm tra một component thì phải chuyển component đó thành
					'client-side'.
				</p>
				<PageHeading text="Sử dụng AuthProvider" addOnClass="text-left mt-5" markedAs="using-provider" />
				<p class="text-slate-900 dark:text-white my-5">
					Tiếp theo, chúng ta sẽ sử dụng <FilePath>AuthProvider</FilePath> để cung cấp context cho các page cần kiểm tra
					login, Ở đây mình sẽ sử dụng cho <FilePath>~/app/layout.tsx</FilePath> để áp dụng cho tất cả các routes
				</p>
				<VCodeBlock :code="b5" highlightjs lang="tsx" theme="tomorrow-night-bright" />
				<PageHeading text="Sử dụng withAuth" addOnClass="text-left mt-5" markedAs="using-with-auth" />
				<p class="text-slate-900 dark:text-white my-5">
					Tiếp theo, chúng ta sẽ sử dụng <FilePath>withAuth</FilePath> cho các page cần kiểm tra login:
				</p>
				<VCodeBlock
					:code="`
import withAuth from '@/hoc/withAuth';
// ...
export default withAuth(Page);
`"
					highlightjs
					lang="tsx"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5">
					Done, bạn có thể kiểm tra bằng cách vào các route khác '/login' và sẽ thấy
					<FilePath>withAuth.tsx</FilePath> hoạt động. Ngoài ra, bạn có thể tự custom lại logic check auth, navigate...
					tuỳ theo yêu cầu của ứng dụng. Bên cạnh đó, bạn có thể viết thêm context cho phần Authorization để nâng cấp
					logic.
				</p>
				<!-- END -->
				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import { apiResponde } from '@/models';
	import DocNextPage from '@/components/DocNextPage.vue';
	// @ts-ignore
	import FilePath from '@/components/FilePath.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, DocNextPage, FilePath, VCodeBlock },
		data() {
			return {
				b3: ` // ~/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

type User = {
	// Định nghĩa kiểu User
	// nên define & export tại ~/models
};

type AuthContextType = {
	user: User | null;
	loading: boolean;
	login: (userData: User) => void;
	logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface Props {}
export const AuthProvider: React.FC<PropsWithChildren<Props>> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const router = useRouter();

	useEffect(() => {
		// Logic checkuser
		const checkAuth = async () => {
			const user = localStorage.getItem('user');
			if (user) {
				setUser(JSON.parse(user));
			}
			setLoading(false);
		};

		checkAuth();
	}, []);

	const login = async (userData: User) => {
		// Mocked login logic
		localStorage.setItem('user', JSON.stringify(userData));
		setUser(userData);
		router.push('/');
	};

	const logout = () => {
		// Mocked logout logic
		localStorage.removeItem('user');
		setUser(null);
		router.push('/login');
	};

	return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
`,
				b4: ` // ~/hoc/withAuth.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

const withAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
	const WithAuthComponent: React.FC<P> = props => {
		const router = useRouter();
		const { user, loading } = useAuth();

		useEffect(() => {
			if (!loading && !user) {
				router.push('/login');
			}
		}, [loading, user, router]);

		if (loading || !user) {
			return <p>Loading...</p>;
		}

		return <WrappedComponent {...props} />;
	};

	return WithAuthComponent;
};

export default withAuth;
`,
				b5: ` // ~/app/layout.tsx
'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Suspense } from 'react';
import { AuthProvider } from '../context/AuthContext';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AuthProvider>
					<Suspense>{children}</Suspense>
				</AuthProvider>
			</body>
		</html>
	);
}
`,
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/html-css-js-basic/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/html-css-js-basic/documentation',
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
					.getPagination({ appIds: 'nextjs-basic', currentDocId: 'nextjs-8' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
