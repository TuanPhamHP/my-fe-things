<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Authentication với JWT trong Laravel" addOnClass="text-left" markedAs="jwt-auth" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Buổi này chúng ta bàn về <b>xác thực (authentication) qua API</b> — cụ thể là hướng đi
					<b>JWT (JSON Web Token)</b>. Sau buổi học, bạn sẽ nắm:
				</p>
				<SessionTarget :operators="cprs"></SessionTarget>

				<!-- ============================================================ -->
				<!-- PHẦN 1 — JWT LÀ GÌ                                             -->
				<!-- ============================================================ -->
				<PageHeading text="Phần 1 — JWT là gì?" addOnClass="text-left mt-8" markedAs="part-1-what-is-jwt" :lvl="2" />

				<PageHeading
					text="1.1. Các cách bảo mật API phổ biến"
					addOnClass="text-left mt-5"
					markedAs="api-auth-methods"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trước khi bàn JWT, cần thấy rõ nó nằm ở đâu trong "bức tranh" các cách bảo mật API. Có 5 nhóm hay gặp:
				</p>
				<div class="flex flex-col gap-4 mt-3">
					<div
						v-for="m in authMethods"
						:key="m.id"
						class="rounded-lg border border-neutral-200 dark:border-gray-600 overflow-hidden bg-white dark:bg-gray-800"
					>
						<!-- Header — tên + how -->
						<div class="px-5 py-3 bg-gray-50 dark:bg-gray-700 border-b border-neutral-200 dark:border-gray-600">
							<p class="font-semibold text-base text-gray-900 dark:text-white">{{ m.name }}</p>
							<p class="text-sm text-slate-700 dark:text-neutral-300 leading-6 mt-1" v-html="m.how"></p>
						</div>

						<!-- Body — 2 cột: (Ưu/Nhược) và (Code ví dụ) -->
						<div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
							<!-- Cột trái: Ưu + Nhược -->
							<div class="p-5 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-gray-600">
								<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<p class="text-xs uppercase font-semibold text-green-700 dark:text-green-400 mb-2">Ưu điểm</p>
										<ul class="text-sm text-slate-700 dark:text-neutral-300 leading-6 space-y-1">
											<li v-for="(pro, i) in m.pros" :key="'pro' + i" class="flex gap-2">
												<span>✅</span><span v-html="pro"></span>
											</li>
										</ul>
									</div>
									<div>
										<p class="text-xs uppercase font-semibold text-red-700 dark:text-red-400 mb-2">Nhược điểm</p>
										<ul class="text-sm text-slate-700 dark:text-neutral-300 leading-6 space-y-1">
											<li v-for="(con, i) in m.cons" :key="'con' + i" class="flex gap-2">
												<span>❌</span><span v-html="con"></span>
											</li>
										</ul>
									</div>
								</div>
								<div class="mt-4 pt-3 border-t border-neutral-200 dark:border-gray-600">
									<p class="text-xs uppercase font-semibold text-slate-500 dark:text-neutral-400 mb-1">Ví dụ thực tế</p>
									<p class="text-sm text-slate-700 dark:text-neutral-300 leading-6" v-html="m.example"></p>
								</div>
							</div>

							<!-- Cột phải: Code ví dụ -->
							<div class="p-5 bg-neutral-50 dark:bg-gray-900/40">
								<p class="text-xs uppercase font-semibold text-slate-500 dark:text-neutral-400 mb-2">Code ví dụ</p>
								<pre
									class="text-xs text-slate-900 dark:text-neutral-100 bg-white dark:bg-gray-900 border border-neutral-200 dark:border-gray-700 rounded p-3 font-mono leading-5 overflow-x-auto"
									v-text="m.code"
								></pre>
							</div>
						</div>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Điểm chung của Session và Token:</b> đều cần server "nhớ" ai là ai. Khác biệt:
					<b>Session lưu ở server</b> (state), còn <b>JWT tự chứa thông tin</b> (stateless) — server chỉ cần xác minh
					chữ ký là biết token còn hợp lệ hay không.
				</p>

				<PageHeading
					text="1.2. JWT — Anatomy của một token"
					addOnClass="text-left mt-5"
					markedAs="jwt-anatomy"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>JWT (JSON Web Token)</b> là một chuỗi text được chia thành <b>3 phần</b> ngăn nhau bởi dấu chấm:
					<FilePath>header.payload.signature</FilePath>. Ví dụ một JWT thật:
				</p>
				<div
					class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800 overflow-x-auto"
				>
					<pre class="text-xs text-slate-900 dark:text-white leading-6 font-mono whitespace-pre-wrap break-all">
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0MiIsIm5hbWUiOiJUdWFuIiwiaWF0IjoxNzE4MDAwMDAwLCJleHAiOjE3MTgwMDM2MDB9.KpAe7c7Rf1s7Ux3Xz3F9zH2yWtN1B7WQm9d0k9Rf4Xw</pre
					>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Mỗi phần là base64url encode của một object JSON — bạn có thể tự tay decode phần 1 và 2 bằng bất kỳ tool
					base64 nào (payload <b>KHÔNG</b> được mã hoá, chỉ được ký):
				</p>
				<ClientOnly>
					<VCodeBlock :code="bJwtParts" highlightjs lang="javascript" theme="atom-one-dark" />
				</ClientOnly>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
					<div
						v-for="p in jwtParts"
						:key="p.id"
						class="p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800"
					>
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">{{ p.title }}</p>
						<p class="text-sm text-slate-700 dark:text-neutral-300 leading-7" v-html="p.desc"></p>
					</div>
				</div>
				<div
					class="mt-4 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20"
				>
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						⚠️ <b>Điểm quan trọng cần nhớ:</b> payload trong JWT <b>KHÔNG</b> mã hoá — ai chặn được token đều đọc được
						nội dung. <b>Signature chỉ chống sửa</b>, không chống đọc. Vì vậy đừng nhét mật khẩu, số thẻ, hay bất kỳ dữ
						liệu nhạy cảm nào vào payload.
					</p>
				</div>

				<PageHeading text="1.3. Luồng hoạt động của JWT" addOnClass="text-left mt-5" markedAs="jwt-flow" :lvl="3" />
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<!-- Header 2 cột Client / Server -->
					<div class="grid grid-cols-2 gap-4 mb-4">
						<div
							class="text-center py-2 rounded bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 font-semibold text-sky-900 dark:text-sky-200"
						>
							👤 Client
						</div>
						<div
							class="text-center py-2 rounded bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-300 dark:border-emerald-700 font-semibold text-emerald-900 dark:text-emerald-200"
						>
							🖥️ Server
						</div>
					</div>

					<!-- Các bước -->
					<div class="flex flex-col gap-3">
						<div v-for="(step, i) in jwtFlowSteps" :key="i" class="grid grid-cols-2 gap-4 items-stretch">
							<!-- Cột Client -->
							<div
								class="p-3 rounded border text-sm leading-6"
								:class="
									step.side === 'client'
										? 'bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800 text-slate-900 dark:text-white'
										: 'border-transparent'
								"
							>
								<template v-if="step.side === 'client'">
									<span
										class="inline-block text-xs font-mono bg-sky-200 dark:bg-sky-800 text-sky-900 dark:text-sky-100 rounded px-1.5 py-0.5 mr-1"
										>{{ step.num }}</span
									>
									<span v-html="step.text"></span>
								</template>
							</div>

							<!-- Mũi tên (chèn giữa) -->
							<div
								v-if="step.side === 'client' && step.arrow === 'right'"
								class="col-span-2 -my-2 flex justify-center text-slate-400 dark:text-neutral-500 text-lg leading-none"
							>
								↓ ➡ ↓
							</div>
							<div
								v-else-if="step.side === 'server' && step.arrow === 'left'"
								class="col-span-2 -my-2 flex justify-center text-slate-400 dark:text-neutral-500 text-lg leading-none"
							>
								↓ ⬅ ↓
							</div>

							<!-- Cột Server -->
							<div
								class="p-3 rounded border text-sm leading-6"
								:class="
									step.side === 'server'
										? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-slate-900 dark:text-white'
										: 'border-transparent'
								"
							>
								<template v-if="step.side === 'server'">
									<span
										class="inline-block text-xs font-mono bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 rounded px-1.5 py-0.5 mr-1"
										>{{ step.num }}</span
									>
									<span v-html="step.text"></span>
								</template>
							</div>
						</div>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Bước <b>5</b> chính là điểm mạnh của JWT — server <b>không cần query DB</b> để biết token có hợp lệ hay không.
					Nó tự tính lại signature từ header + payload + SECRET, so với signature trong token. Trùng khớp = token thật +
					chưa bị sửa. Sau đó chỉ cần đọc <FilePath>sub</FilePath> (subject) để biết user ID.
				</p>

				<PageHeading text="1.4. Khi nào nên dùng JWT?" addOnClass="text-left mt-5" markedAs="when-jwt" :lvl="3" />
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
					<div class="p-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">✅ Nên dùng khi</p>
						<ul class="pl-5 text-sm text-slate-700 dark:text-neutral-300 leading-7 list-disc">
							<li>API tách rời frontend (SPA React/Vue/Next, mobile app native)</li>
							<li>Kiến trúc <b>stateless</b> — muốn scale ngang nhiều server không dính session</li>
							<li>Microservices — service A cấp token, service B verify được mà không cần gọi lại A</li>
							<li>Third-party integration — bạn cấp token cho đối tác gọi API</li>
						</ul>
					</div>
					<div class="p-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">🚫 Không nên dùng khi</p>
						<ul class="pl-5 text-sm text-slate-700 dark:text-neutral-300 leading-7 list-disc">
							<li>Web truyền thống — dùng Session/Cookie đơn giản hơn, có sẵn CSRF protection</li>
							<li>Cần <b>revoke token ngay lập tức</b> (VD banned user) — JWT stateless khó thu hồi</li>
							<li>Chỉ có 1 server nhỏ, ít user — thêm JWT là over-engineering</li>
							<li>Payload có dữ liệu nhạy cảm — không có gì bảo vệ khỏi việc bị đọc</li>
						</ul>
					</div>
				</div>

				<!-- ============================================================ -->
				<!-- PHẦN 2 — JWT TRONG LARAVEL                                     -->
				<!-- ============================================================ -->
				<PageHeading
					text="Phần 2 — JWT trong Laravel"
					addOnClass="text-left mt-8"
					markedAs="part-2-jwt-laravel"
					:lvl="2"
				/>

				<PageHeading
					text="2.1. Vì sao không dùng Sanctum / Passport / Custom Guard?"
					addOnClass="text-left mt-5"
					markedAs="why-not-others"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Laravel đưa ra 3 lựa chọn "chính thống" cho auth. Với mục tiêu <b>hiểu JWT</b>, cả 3 đều có vấn đề:
				</p>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
					<div class="p-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">❌ Sanctum</p>
						<p class="text-sm text-slate-700 dark:text-neutral-300 leading-7">
							Sanctum <b>KHÔNG phải JWT</b>. Nó tạo <b>opaque token</b> — chuỗi random lưu trong bảng
							<FilePath>personal_access_tokens</FilePath>. Học Sanctum xong bạn <b>không thấy được cấu trúc token</b>,
							không hiểu signature là gì, không thấy header/payload/signature — mất hết ý nghĩa của bài học JWT.
						</p>
					</div>
					<div class="p-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">❌ Passport</p>
						<p class="text-sm text-slate-700 dark:text-neutral-300 leading-7">
							Passport <b>có</b> dùng JWT bên trong, nhưng nó kéo theo cả <b>OAuth2 - Open Authorization</b> — grant
							types, clients, scopes, authorization code flow... Khái niệm JWT bị
							<b>chôn dưới 4-5 lớp trừu tượng</b> khác. SV mới học sẽ loạn: "cái nào là JWT? cái nào là OAuth?"
						</p>
					</div>
					<div class="p-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">❌ Custom Guard</p>
						<p class="text-sm text-slate-700 dark:text-neutral-300 leading-7">
							Tự viết Guard implement <FilePath>Illuminate\Contracts\Auth\Guard</FilePath> thì phải hiểu đủ 8 method,
							lifecycle, service provider... <b>Quá nhiều code hạ tầng</b> phải viết trước khi thấy JWT hoạt động. Không
							phù hợp buổi giảng 3 tiếng.
						</p>
					</div>
				</div>
				<div class="mt-4 p-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						✅ <b>Giải pháp sư phạm:</b> package <FilePath>php-open-source-saver/jwt-auth</FilePath> — bản được cộng
						đồng maintain của <FilePath>tymon/jwt-auth</FilePath> (đã ngưng bảo trì). Chỉ 1 package, config gọn, có sẵn
						Guard <FilePath>jwt</FilePath> để plug vào <FilePath>config/auth.php</FilePath>. SV thấy được token thật,
						decode được payload, hiểu được signature — <b>đúng mục tiêu bài học</b>.
					</p>
				</div>

				<PageHeading text="2.2. Cài đặt jwt-auth" addOnClass="text-left mt-5" markedAs="install-jwt-auth" :lvl="3" />
				<p class="text-slate-900 dark:text-white my-3 leading-8"><b>Bước 1:</b> cài package qua Composer:</p>
				<FakeTerminalUI textCoppy="composer require php-open-source-saver/jwt-auth" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Bước 2:</b> publish file config <FilePath>config/jwt.php</FilePath>:
				</p>
				<FakeTerminalUI :textCoppy="cmdVendorPublish" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Bước 3:</b> sinh <FilePath>JWT_SECRET</FilePath> — chuỗi bí mật dùng để ký token. Lệnh này tự động ghi vào
					<FilePath>.env</FilePath>:
				</p>
				<FakeTerminalUI textCoppy="php artisan jwt:secret" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Kiểm tra <FilePath>.env</FilePath> sẽ thấy dòng mới:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bEnv" highlightjs lang="bash" theme="atom-one-dark" />
				</ClientOnly>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						🔐 <b>Lưu ý:</b> mỗi môi trường (dev/staging/prod) phải có <FilePath>JWT_SECRET</FilePath> riêng và
						<b>tuyệt đối không commit lên git</b>. Nếu secret lộ, kẻ tấn công có thể ký token giả hợp lệ.
					</p>
				</div>

				<PageHeading
					text="2.3. Sửa User model — implement JWTSubject"
					addOnClass="text-left mt-5"
					markedAs="user-jwt-subject"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Model <FilePath>App\Models\User</FilePath> cần implement interface <FilePath>JWTSubject</FilePath> với 2
					method — cho package biết <b>lấy ID user</b> và <b>các claim thêm</b> vào payload:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bUserModel" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Method <FilePath>getJWTIdentifier()</FilePath> trả về giá trị sẽ đi vào claim
					<FilePath>sub</FilePath> (subject). Còn <FilePath>getJWTCustomClaims()</FilePath> cho phép nhét thêm data — VD
					role, email — thẳng vào payload để lần sau đọc được mà không cần query DB.
				</p>

				<PageHeading
					text="2.4. Đăng ký JWT guard trong config/auth.php"
					addOnClass="text-left mt-5"
					markedAs="auth-config"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Mở <FilePath>config/auth.php</FilePath> — đây là nơi định nghĩa các <b>guard</b>. Thêm guard tên
					<FilePath>api</FilePath> dùng driver <FilePath>jwt</FilePath>:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bAuthConfig" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Từ giờ, gọi <FilePath>auth('api')</FilePath> = dùng JWT guard. Gọi <FilePath>auth('web')</FilePath>
					= session bình thường. Cùng 1 app, nhiều cơ chế auth song song.
				</p>

				<PageHeading
					text="2.5. AuthController — Register / Login / Me / Logout"
					addOnClass="text-left mt-5"
					markedAs="auth-controller"
					:lvl="3"
				/>

				<!-- Prerequisite callout — nhắc lại điều kiện tiên quyết từ 2.3 -->
				<div class="mt-3 p-4 rounded-lg border border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						⚠️ <b>Điều kiện tiên quyết:</b> code dưới đây chỉ chạy được khi
						<FilePath>App\Models\User</FilePath> đã <b>implement <FilePath>JWTSubject</FilePath></b> như ở bài
						<b>2.3</b>. Package <FilePath>php-open-source-saver/jwt-auth</FilePath> gọi 2 method
						<FilePath>getJWTIdentifier()</FilePath> và <FilePath>getJWTCustomClaims()</FilePath> để phát hành
						token — nếu User thiếu contract này, <FilePath>JWTGuard::login()</FilePath> sẽ throw
						<FilePath>TypeError</FilePath>.
					</p>
				</div>

				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Đây là 4 endpoint cốt lõi cho mọi hệ thống auth. Tạo controller:
				</p>
				<FakeTerminalUI textCoppy="php artisan make:controller Api/AuthController" />
				<ClientOnly>
					<VCodeBlock :code="bAuthController" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Hiểu 3 method của <FilePath>auth('api')</FilePath></b> — cả 3 đều yêu cầu User implement
					<FilePath>JWTSubject</FilePath>:
				</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th class="px-4 py-3 whitespace-nowrap">Method</th>
								<th class="px-4 py-3">Cách hoạt động</th>
								<th class="px-4 py-3">Dùng ở đâu</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 align-top">
								<th class="px-4 py-3 font-mono text-gray-900 dark:text-white whitespace-nowrap">
									attempt($credentials)
								</th>
								<td class="px-4 py-3 leading-7">
									Query DB tìm user theo email → so hash password → nếu khớp, gọi ngầm
									<FilePath>login($user)</FilePath> để phát token. <b>Trả về token string</b> nếu OK,
									<b>false</b> nếu sai credentials.
								</td>
								<td class="px-4 py-3">Login</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 align-top">
								<th class="px-4 py-3 font-mono text-gray-900 dark:text-white whitespace-nowrap">
									login($user)
								</th>
								<td class="px-4 py-3 leading-7">
									Nhận thẳng 1 <FilePath>JWTSubject</FilePath> (không check password) → gọi
									<FilePath>$user->getJWTIdentifier()</FilePath> để lấy claim <FilePath>sub</FilePath>,
									<FilePath>getJWTCustomClaims()</FilePath> để nhét claim tùy biến → ký JWT bằng
									<FilePath>JWT_SECRET</FilePath> → trả về token string.
								</td>
								<td class="px-4 py-3">Register (sau khi tạo user xong thì cấp token ngay)</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 align-top">
								<th class="px-4 py-3 font-mono text-gray-900 dark:text-white whitespace-nowrap">
									user() / logout()
								</th>
								<td class="px-4 py-3 leading-7">
									<FilePath>user()</FilePath> đọc token từ header <FilePath>Authorization</FilePath>,
									verify signature + <FilePath>exp</FilePath> → query DB lấy User bằng claim
									<FilePath>sub</FilePath>. <FilePath>logout()</FilePath> đưa token vào blacklist trong
									cache (mặc định 60 phút).
								</td>
								<td class="px-4 py-3">Me / Logout</td>
							</tr>
						</tbody>
					</table>
				</div>

				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Tương đương:</b> <FilePath>auth('api')->login($user)</FilePath> và
					<FilePath>JWTAuth::fromUser($user)</FilePath> làm cùng 1 việc — cả 2 đều gọi
					<FilePath>$user->getJWTIdentifier()</FilePath> và <FilePath>getJWTCustomClaims()</FilePath> rồi ký
					token. Chọn cách nào là vấn đề gu code — dùng <FilePath>auth('api')</FilePath> thì đồng bộ với
					<FilePath>login</FilePath>/<FilePath>logout</FilePath> ở các method khác.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trong <FilePath>respondWithToken()</FilePath> có <FilePath>expires_in</FilePath> — mặc định
					<b>60 phút</b> (đổi trong <FilePath>config/jwt.php</FilePath> key <FilePath>ttl</FilePath>). Đơn vị
					config là <b>phút</b>, còn trả về client là <b>giây</b>, nên nhân 60.
				</p>

				<PageHeading text="2.6. Đăng ký route" addOnClass="text-left mt-5" markedAs="routes-jwt" :lvl="3" />
				<ClientOnly>
					<VCodeBlock :code="bRoutes" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="2.7. Test bằng curl / Postman" addOnClass="text-left mt-5" markedAs="test-jwt" :lvl="3" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Chạy dev server rồi thử 3 request theo thứ tự — đây là "khoảnh khắc" thấy JWT hoạt động thật:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bCurlTest" highlightjs lang="bash" theme="atom-one-dark" />
				</ClientOnly>
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						💡 <b>Bài tập thao tác:</b> copy token nhận được, paste vào
						<a class="text-sky-500 underline" href="https://jwt.io" target="_blank" rel="noopener">jwt.io</a> để thấy 3
						phần header/payload/signature được decode ra. Đây chính là điểm khác biệt so với Sanctum — với Sanctum,
						token chỉ là chuỗi random vô nghĩa.
					</p>
				</div>

				<!-- ============================================================ -->
				<!-- PHẦN 3 — LUYỆN TẬP AUTH VALIDATOR SERVICE                      -->
				<!-- ============================================================ -->
				<PageHeading
					text="Phần 3 — Luyện tập: AuthValidatorService"
					addOnClass="text-left mt-8"
					markedAs="part-3-practice"
					:lvl="2"
				/>

				<PageHeading text="3.1. Vấn đề đặt ra" addOnClass="text-left mt-5" markedAs="problem-statement" :lvl="3" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Bạn có <b>20 controller method</b> — cả trong <FilePath>routes/api.php</FilePath> lẫn
					<FilePath>routes/web.php</FilePath>. Mỗi method đều cần kiểm tra: <b>user có JWT hợp lệ không?</b> Nếu
					copy-paste đoạn check vào 20 chỗ = <b>sửa 1 rule phải mò 20 file</b>. Cần một chỗ tập trung.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Yêu cầu bài luyện:</b> viết <FilePath>AuthValidatorService</FilePath> có method
					<FilePath>validate()</FilePath> — trả về user nếu hợp lệ, throw exception nếu không. Áp dụng vào controller
					theo cách <b>1 dòng duy nhất</b> — copy-paste đơn giản nhất có thể.
				</p>

				<PageHeading text="3.2. Bước 1 — Tạo Service" addOnClass="text-left mt-5" markedAs="create-service" :lvl="3" />
				<FakeTerminalUI textCoppy="mkdir -p app/Services && touch app/Services/AuthValidatorService.php" />
				<ClientOnly>
					<VCodeBlock :code="bAuthService" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Ý tưởng thiết kế:</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Method <FilePath>validate()</FilePath> <b>static</b> — gọi thẳng không cần <FilePath>new</FilePath>, cho
						<b>copy-paste 1 dòng</b> dễ nhất có thể.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Nhận thêm param <FilePath>$guard</FilePath> — mặc định <FilePath>'api'</FilePath> — để dùng được cho cả web
						(session) lẫn api (JWT).
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Ném <FilePath>UnauthorizedException</FilePath> tự viết → global exception handler bắt → response 401 chuẩn,
						không dính vào Controller.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">Thêm exception class ngắn gọn:</p>
				<ClientOnly>
					<VCodeBlock :code="bException" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading
					text="3.3. Bước 2 — Áp dụng vào api.php"
					addOnClass="text-left mt-5"
					markedAs="apply-api"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trong mọi controller method của API, chỉ cần <b>1 dòng</b> ở đầu:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bApplyApi" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading
					text="3.4. Bước 3 — Áp dụng vào web.php"
					addOnClass="text-left mt-5"
					markedAs="apply-web"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Với route web dùng session, chỉ đổi tham số <FilePath>guard</FilePath> — cùng 1 API, cùng 1 dòng copy-paste:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bApplyWeb" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading
					text="3.5. Bước 4 — Global exception handler"
					addOnClass="text-left mt-5"
					markedAs="global-handler"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Để Laravel tự trả 401 khi service throw <FilePath>UnauthorizedException</FilePath>, đăng ký trong
					<FilePath>bootstrap/app.php</FilePath>:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bBootstrap" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading
					text="3.6. Kết quả — và câu hỏi tự nhiên tiếp theo"
					addOnClass="text-left mt-5"
					markedAs="whats-next"
					:lvl="3"
				/>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						✅ <b>Đã DRY:</b> logic check auth chỉ nằm 1 chỗ (<FilePath>AuthValidatorService</FilePath>). Sửa 1 rule (VD
						thêm check <FilePath>banned_at</FilePath>) = sửa 1 file.
					</p>
					<p class="text-slate-900 dark:text-white text-sm leading-7 mt-2">
						❓ <b>Nhưng vẫn khó chịu:</b> mỗi controller method vẫn phải
						<b>nhớ paste dòng <FilePath>AuthValidatorService::validate()</FilePath></b
						>. Quên 1 chỗ = endpoint đó lộ ra public. Có cách nào <b>tự động</b> chạy trước mọi request tới nhóm route
						được không?
					</p>
					<p class="text-slate-900 dark:text-white text-sm leading-7 mt-2">
						👉 <b>Đây chính là lý do Middleware ra đời.</b> Bài kế tiếp — <FilePath>Laravel Middleware</FilePath> — sẽ
						chuyển đoạn 1-dòng-copy-paste này thành <b>1 dòng <FilePath>->middleware('auth.jwt')</FilePath></b> áp cho
						cả route group.
					</p>
				</div>

				<PageHeading text="3.7. 🏋️ Bài tập về nhà" addOnClass="text-left mt-5" markedAs="homework" :lvl="3" />
				<ul class="pl-10">
					<li
						v-for="hw in homework"
						:key="hw.id"
						class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400"
						v-html="hw.content"
					></li>
				</ul>

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
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, DocNextPage, VCodeBlock },
		data() {
			return {
				cmdVendorPublish:
					'php artisan vendor:publish --provider="PHPOpenSourceSaver\\JWTAuth\\Providers\\LaravelServiceProvider"',
				jwtFlowSteps: [
					{
						num: '1',
						side: 'client',
						arrow: 'right',
						text: '<b>POST /login</b><br>Body: <code>{ email, password }</code>',
					},
					{
						num: '2',
						side: 'server',
						arrow: null,
						text: '<b>Verify user</b> (query DB, so password hash)<br>Sinh JWT, <b>ký</b> bằng <code>JWT_SECRET</code>',
					},
					{
						num: '3',
						side: 'server',
						arrow: 'left',
						text: 'Response:<br><code>{ access_token: "eyJ...", expires_in: 3600 }</code>',
					},
					{
						num: '4',
						side: 'client',
						arrow: null,
						text: '<b>Lưu token</b> vào <code>localStorage</code> hoặc cookie HttpOnly',
					},
					{
						num: '5',
						side: 'client',
						arrow: 'right',
						text: '<b>GET /api/me</b><br>Header: <code>Authorization: Bearer eyJ...</code>',
					},
					{
						num: '6',
						side: 'server',
						arrow: null,
						text: '<b>Verify signature</b> (không cần query DB!)<br>Kiểm tra <code>exp</code> — lấy user id từ claim <code>sub</code>',
					},
					{
						num: '7',
						side: 'server',
						arrow: 'left',
						text: 'Response:<br><code>{ user: { id: 42, name: "Tuan" } }</code>',
					},
				],
				bJwtParts: `// Header (phần 1 — decode base64url)
{
  "typ": "JWT",
  "alg": "HS256"
}

// Payload (phần 2 — decode base64url)
{
  "sub": "42",            // subject — user id
  "name": "Tuan",
  "iat": 1718000000,      // issued at — timestamp cấp
  "exp": 1718003600       // expires at — timestamp hết hạn (1h sau)
}

// Signature (phần 3 — KHÔNG decode được, đây là hash)
// = HMACSHA256(
//     base64url(header) + "." + base64url(payload),
//     JWT_SECRET
//   )`,
				bEnv: `# .env
APP_NAME=Laravel
APP_ENV=local
# ...
JWT_SECRET=aB3xK9pQ2mL7nR4vT8wY1zC5hF6jD0sE   # ← vừa được sinh`,
				bUserModel: `<?php
// app/Models/User.php
namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use PHPOpenSourceSaver\\JWTAuth\\Contracts\\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $fillable = ['name', 'email', 'password'];
    protected $hidden   = ['password', 'remember_token'];

    // ===== 2 method của JWTSubject =====

    /**
     * Giá trị này sẽ được nhét vào claim 'sub' của JWT payload.
     * Thường là primary key của user.
     */
    public function getJWTIdentifier(): mixed
    {
        return $this->getKey();
    }

    /**
     * Các claim TÙY BIẾN nhét thêm vào payload.
     * Rỗng cũng OK — nhưng nhớ đừng bỏ dữ liệu nhạy cảm vào đây.
     */
    public function getJWTCustomClaims(): array
    {
        return [
            'name'  => $this->name,
            'email' => $this->email,
        ];
    }
}`,
				bAuthConfig: `<?php
// config/auth.php
return [
    'defaults' => [
        'guard'     => 'web',
        'passwords' => 'users',
    ],

    'guards' => [
        // Guard web — session cho các trang HTML truyền thống
        'web' => [
            'driver'   => 'session',
            'provider' => 'users',
        ],

        // ===== THÊM guard 'api' dùng driver 'jwt' =====
        'api' => [
            'driver'   => 'jwt',      // ← key
            'provider' => 'users',
        ],
    ],

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model'  => \\App\\Models\\User::class,
        ],
    ],
];`,
				bAuthController: `<?php
// app/Http/Controllers/Api/AuthController.php
namespace App\\Http\\Controllers\\Api;

use App\\Http\\Controllers\\Controller;
use App\\Models\\User;
use Illuminate\\Http\\JsonResponse;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Hash;

class AuthController extends Controller
{
    /**
     * POST /api/auth/register
     */
    public function register(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name'     => 'required|string|max:100',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
        ]);
        $data['password'] = Hash::make($data['password']);

        $user  = User::create($data);
        $token = auth('api')->login($user);   // ← package tự ký JWT

        return $this->respondWithToken($token);
    }

    /**
     * POST /api/auth/login
     */
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');

        if (! $token = auth('api')->attempt($credentials)) {
            return response()->json(['message' => 'Email hoặc mật khẩu không đúng'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * GET /api/auth/me — cần token
     */
    public function me(): JsonResponse
    {
        return response()->json(auth('api')->user());
    }

    /**
     * POST /api/auth/logout — cần token
     */
    public function logout(): JsonResponse
    {
        auth('api')->logout();   // ← blacklist token
        return response()->json(['message' => 'Đã đăng xuất']);
    }

    private function respondWithToken(string $token): JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth('api')->factory()->getTTL() * 60, // giây
        ]);
    }
}`,
				bRoutes: `<?php
// routes/api.php
use App\\Http\\Controllers\\Api\\AuthController;
use Illuminate\\Support\\Facades\\Route;

Route::prefix('auth')->group(function () {
    // Public — không cần token
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login',    [AuthController::class, 'login']);

    // Protected — cần header Authorization: Bearer {token}
    // (Ở phần 3 dưới đây, tạm thời chúng ta CHƯA dùng middleware —
    //  sẽ dùng AuthValidatorService::validate() thay thế)
    Route::get('me',      [AuthController::class, 'me']);
    Route::post('logout', [AuthController::class, 'logout']);
});`,
				bCurlTest: `# 1. Đăng ký user mới
curl -X POST http://localhost:8000/api/auth/register \\
  -H "Accept: application/json" \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Tuan","email":"tuan@example.com","password":"secret123"}'

# → { "access_token": "eyJ0eXAi...", "token_type": "bearer", "expires_in": 3600 }

# 2. Login (nếu đã có user)
curl -X POST http://localhost:8000/api/auth/login \\
  -H "Accept: application/json" \\
  -H "Content-Type: application/json" \\
  -d '{"email":"tuan@example.com","password":"secret123"}'

# 3. Gọi endpoint cần auth — nhớ paste token vào Bearer
TOKEN="eyJ0eXAi..."
curl http://localhost:8000/api/auth/me \\
  -H "Accept: application/json" \\
  -H "Authorization: Bearer $TOKEN"

# → { "id": 1, "name": "Tuan", "email": "tuan@example.com", ... }`,
				bAuthService: `<?php
// app/Services/AuthValidatorService.php
namespace App\\Services;

use App\\Exceptions\\UnauthorizedException;
use App\\Models\\User;
use Illuminate\\Support\\Facades\\Auth;

class AuthValidatorService
{
    /**
     * Kiểm tra request hiện tại có auth hợp lệ không.
     *
     * @param  string  $guard  'api' cho JWT, 'web' cho session
     * @return User            trả về user đã login
     * @throws UnauthorizedException  nếu token/session không hợp lệ
     */
    public static function validate(string $guard = 'api'): User
    {
        $user = Auth::guard($guard)->user();

        if (! $user) {
            throw new UnauthorizedException("Không có quyền truy cập (guard: {$guard})");
        }

        // Tuỳ nhu cầu — check thêm banned_at, email_verified_at, ...
        // if ($user->banned_at) {
        //     throw new UnauthorizedException('Tài khoản đã bị khoá');
        // }

        return $user;
    }
}`,
				bException: `<?php
// app/Exceptions/UnauthorizedException.php
namespace App\\Exceptions;

use Exception;

class UnauthorizedException extends Exception
{
    protected $code = 401;
}`,
				bApplyApi: `<?php
// app/Http/Controllers/Api/CakeController.php
namespace App\\Http\\Controllers\\Api;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Cake;
use App\\Services\\AuthValidatorService;
use Illuminate\\Http\\Request;

class CakeController extends Controller
{
    public function index(Request $request)
    {
        $user = AuthValidatorService::validate();   // ← 1 dòng, copy-paste

        return Cake::where('user_id', $user->id)->get();
    }

    public function store(Request $request)
    {
        $user = AuthValidatorService::validate();   // ← 1 dòng, copy-paste

        return Cake::create([...$request->all(), 'user_id' => $user->id]);
    }

    public function destroy(Cake $cake)
    {
        $user = AuthValidatorService::validate();   // ← 1 dòng, copy-paste

        abort_if($cake->user_id !== $user->id, 403);
        $cake->delete();
        return response()->noContent();
    }
}`,
				bApplyWeb: `<?php
// app/Http/Controllers/Web/DashboardController.php
namespace App\\Http\\Controllers\\Web;

use App\\Http\\Controllers\\Controller;
use App\\Services\\AuthValidatorService;

class DashboardController extends Controller
{
    public function index()
    {
        $user = AuthValidatorService::validate('web');   // ← đổi guard sang 'web'

        return view('dashboard', compact('user'));
    }

    public function profile()
    {
        $user = AuthValidatorService::validate('web');   // ← copy-paste y hệt

        return view('profile', compact('user'));
    }
}`,
				bBootstrap: `<?php
// bootstrap/app.php
use App\\Exceptions\\UnauthorizedException;
use Illuminate\\Foundation\\Application;
use Illuminate\\Foundation\\Configuration\\Exceptions;
use Illuminate\\Foundation\\Configuration\\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        // Bắt UnauthorizedException — trả 401 JSON cho api, redirect /login cho web
        $exceptions->render(function (UnauthorizedException $e, $request) {
            if ($request->expectsJson()) {
                return response()->json(['message' => $e->getMessage()], 401);
            }
            return redirect('/login');
        });
    })
    ->create();`,
				authMethods: [
					{
						id: 1,
						name: 'Basic Auth',
						how: 'Client gửi <FilePath>Authorization: Basic base64(user:pass)</FilePath> ở MỌI request',
						pros: ['Đơn giản, chuẩn HTTP có sẵn', 'Không cần lưu state ở server'],
						cons: ['Password gửi kèm MỌI request', 'Không có cơ chế logout / expiry', 'Bắt buộc phải dùng HTTPS'],
						code: [
							'# Request',
							'GET /api/users HTTP/1.1',
							'Host: example.com',
							'Authorization: Basic dHVhbjpzZWNyZXQxMjM=',
							'#                 ^^^^^^^^^^^^^^^^^^^^^^^^',
							'#                 base64("tuan:secret123")',
						].join('\n'),
						example:
							'Trang <b>admin router Wi-Fi</b> (TP-Link, Tenda, Viettel Home) khi vào <FilePath>192.168.1.1</FilePath>, giao diện quản trị <b>camera Dahua/Hikvision</b>, trang admin nội bộ công ty chặn bằng <FilePath>.htpasswd</FilePath>',
					},
					{
						id: 2,
						name: 'API Key',
						how: 'Server cấp chuỗi key, client gửi trong header <FilePath>X-API-Key</FilePath> hoặc query',
						pros: ['Dễ cấp phát cho service-to-service', 'Rotate được từng key riêng', 'Không cần user/password'],
						cons: ['Key lộ = phải rotate cả hệ thống', 'Không gắn với user cụ thể', 'Khó phân quyền chi tiết'],
						code: [
							'# Cách 1 — Header (khuyến nghị)',
							'GET /v1/chat/completions HTTP/1.1',
							'Host: api.openai.com',
							'Authorization: Bearer sk-abc123xyz789',
							'',
							'# Cách 2 — Query string (không khuyến nghị,',
							'# key sẽ nằm trong URL log)',
							'GET /geocode?address=Hanoi&key=AIzaSy... HTTP/1.1',
						].join('\n'),
						example:
							'API thanh toán <b>VNPay / Momo / ZaloPay / VietQR</b>, API vận chuyển <b>GHN / GHTK / Viettel Post / J&amp;T</b>, API gửi SMS <b>eSMS / Viettel SMS Brandname</b>, API tra cứu doanh nghiệp <b>Masothue.com</b>',
					},
					{
						id: 3,
						name: 'Session + Cookie',
						how: 'Server lưu session ID trong DB/Redis, browser tự gửi cookie',
						pros: [
							'Chuẩn cho web truyền thống',
							'Revoke tức thì (xoá record ở server)',
							'Browser tự động gửi kèm request',
						],
						cons: [
							'Khó scale ngang (cần shared session store)',
							'Không phù hợp mobile / API bên thứ 3',
							'Dễ dính CSRF nếu quên bảo vệ',
						],
						code: [
							'# 1. Login — server set cookie',
							'HTTP/1.1 200 OK',
							'Set-Cookie: laravel_session=eyJpdiI6...;',
							'            Path=/; HttpOnly; Secure; SameSite=Lax',
							'',
							'# 2. Các request sau — browser tự đính kèm',
							'GET /dashboard HTTP/1.1',
							'Cookie: laravel_session=eyJpdiI6...',
						].join('\n'),
						example:
							'Web <b>Shopee / Tiki / Lazada / Sendo</b> khi đăng nhập, <b>VnExpress / Kenh14 / Zing</b> tài khoản đọc báo, Internet Banking web của <b>Vietcombank / Techcombank / VPBank</b>, mọi app Laravel dùng <b>Breeze/Jetstream</b> mặc định',
					},
					{
						id: 4,
						name: 'OAuth 2.0',
						how: 'Chuẩn 3-bên (user - app - provider) với authorization code, refresh token, scopes',
						pros: [
							'Chuẩn cho "Login with Google/GitHub"',
							'Có refresh token, scope, revoke',
							'User không cần chia password cho app',
						],
						cons: ['Nặng nề, nhiều khái niệm', 'Học đường cong dốc', 'Over-kill cho app nhỏ 1-tier'],
						code: [
							'# 1. Redirect user tới provider',
							'GET https://accounts.google.com/o/oauth2/auth',
							'    ?client_id=xxx.apps.googleusercontent.com',
							'    &redirect_uri=https://myapp.com/callback',
							'    &response_type=code',
							'    &scope=email+profile',
							'',
							'# 2. Provider redirect về kèm code',
							'GET https://myapp.com/callback?code=4/0AX4XfW...',
							'',
							'# 3. App đổi code lấy access_token',
							'POST https://oauth2.googleapis.com/token',
							'{ "code": "4/0AX...", "client_id": "...",',
							'  "client_secret": "...", "grant_type": "authorization_code" }',
						].join('\n'),
						example:
							'Nút <b>"Đăng nhập bằng Zalo"</b> (rất phổ biến ở VN), <b>"Đăng nhập bằng Google/Facebook"</b> trên Shopee Food / Baemin / Tiki, đăng nhập cổng dịch vụ công qua <b>VNeID</b> hoặc <b>VNPT SmartCA</b>',
					},
					{
						id: 5,
						name: 'JWT (JSON Web Token)',
						how: 'Server ký một token tự chứa thông tin, client gửi <FilePath>Bearer {token}</FilePath>',
						pros: [
							'Stateless — server không cần lưu session',
							'Scale ngang tốt (multi-server)',
							'Phù hợp SPA / mobile / microservices',
							'Payload tự chứa user info',
						],
						cons: [
							'Khó revoke ngay (phải dùng blacklist)',
							'Payload đọc được (chỉ ký, không mã hoá)',
							'Token bị leak = vô hiệu tới hạn hết',
						],
						code: [
							'# 1. Login — server trả token',
							'POST /api/auth/login HTTP/1.1',
							'{ "email": "tuan@x.com", "password": "***" }',
							'',
							'HTTP/1.1 200 OK',
							'{ "access_token": "eyJ0eXAiOiJKV1Qi...",',
							'  "token_type": "bearer", "expires_in": 3600 }',
							'',
							'# 2. Các request sau — đính token vào Bearer',
							'GET /api/me HTTP/1.1',
							'Authorization: Bearer eyJ0eXAiOiJKV1Qi.eyJzdWIi...',
						].join('\n'),
						example:
							'App mobile <b>Momo / ZaloPay / ViettelPay</b>, ngân hàng <b>Techcombank / TPBank / MB Bank</b> khi gọi API backend, app đặt xe <b>Grab / Be / Xanh SM</b>, hầu hết SPA React/Vue của startup VN gọi API riêng',
					},
				],
				jwtParts: [
					{
						id: 1,
						title: '1. Header',
						desc: 'Metadata — thuật toán ký (<FilePath>alg</FilePath>: HS256/RS256...) và loại (<FilePath>typ</FilePath>: JWT). Chỉ base64 encode, ai cũng đọc được.',
					},
					{
						id: 2,
						title: '2. Payload',
						desc: 'Data thật — <FilePath>sub</FilePath> (user id), <FilePath>exp</FilePath> (thời hạn), <FilePath>iat</FilePath> (thời điểm cấp), và các claim tuỳ biến. <b>KHÔNG mã hoá</b>.',
					},
					{
						id: 3,
						title: '3. Signature',
						desc: 'Hash <FilePath>HMAC(header + payload, SECRET)</FilePath>. Ai không có SECRET không thể tạo signature khớp → không sửa được payload.',
					},
				],
				homework: [
					{
						id: 1,
						content:
							'Thêm endpoint <FilePath>POST /api/auth/refresh</FilePath> — gọi <FilePath>auth("api")->refresh()</FilePath> để cấp token mới trước khi token cũ hết hạn.',
					},
					{
						id: 2,
						content:
							'Thêm check <FilePath>banned_at</FilePath> trong <FilePath>AuthValidatorService::validate()</FilePath> — user bị khoá thì throw exception dù JWT còn hạn.',
					},
					{
						id: 3,
						content:
							'Vẽ (giấy hoặc draw.io) sơ đồ request lifecycle của endpoint <FilePath>GET /api/cakes</FilePath> — từ browser → JWT parse → AuthValidatorService → Controller → DB → response.',
					},
					{
						id: 4,
						content:
							'Suy nghĩ: nếu có 20 controller cùng gọi <FilePath>AuthValidatorService::validate()</FilePath> ở dòng đầu, làm sao <b>tự động</b> chạy nó mà không phải nhớ paste? (Gợi ý — bài sau!)',
					},
				],
				cprs: [
					{ id: 1, content: `Phân biệt được <b>5 nhóm bảo mật API</b> phổ biến và biết JWT phù hợp cảnh nào` },
					{ id: 2, content: `Hiểu <b>cấu trúc 3 phần</b> của JWT: header, payload, signature — và giới hạn của chúng` },
					{ id: 3, content: `Cài đặt và cấu hình <FilePath>php-open-source-saver/jwt-auth</FilePath> từ đầu` },
					{
						id: 4,
						content: `Viết được <FilePath>AuthController</FilePath> với 4 endpoint: register / login / me / logout`,
					},
					{ id: 5, content: `Vì sao <b>Sanctum / Passport / Custom Guard</b> không phù hợp với mục tiêu học JWT` },
					{
						id: 6,
						content: `Viết <FilePath>AuthValidatorService</FilePath> cho cả web + api → tiền đề cho <b>Middleware</b> (bài sau)`,
					},
				],
				pagePagination: null,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-21-5' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
