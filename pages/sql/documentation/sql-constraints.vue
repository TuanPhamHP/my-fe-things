<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Constraints trong SQL" addOnClass="text-left mt-5" markedAs="about-constraints" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Constraints (ràng buộc dữ liệu)</b> giúp đảm bảo tính toàn vẹn của dữ liệu khi thao tác với bảng. Chúng
					giúp kiểm soát những giá trị có thể nhập vào bảng và đảm bảo tính chính xác của dữ liệu.
				</p>
				<PageHeading text="Các loại Constraints quan trọng" addOnClass="text-left mt-5" markedAs="primary-constraints" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Khi sử dụng Constraints, chúng ta cần lưu ý các nhóm lệnh chính tạo lên cấu trúc của SQL và nhiệm vụ riêng của từng nhóm:
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img
						src="https://storage.googleapis.com/algodailyrandomassets/curriculum/databases/Constraints%20in%20SQL/constraints%20sql.PNG"
						alt=""
						class="rounded-lg mt-3 block max-w-[800px]"
					/>
				</div>

				<!-- ===================== PRIMARY KEY ===================== -->
				<PageHeading text="- PK - PRIMARY KEY" addOnClass="text-left h-0 opacity-0" markedAs="pk" :lvl="2" />
				<PageHeading text="1) PRIMARY KEY - Khóa chính" addOnClass="text-left mt-5" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Xác định cột duy nhất đại diện cho mỗi hàng trong bảng.</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Không được phép NULL và không trùng lặp.</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Mỗi bảng chỉ có một khóa chính (có thể là composite key).</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 mb-1 font-semibold text-sm">Cú pháp tổng quát:</p>
				<ClientOnly><VCodeBlock :code="syntaxPK" highlightjs lang="sql" theme="atom-one-dark" /></ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 mb-1 font-semibold text-sm">Ví dụ với <FilePath>company_db</FilePath>:</p>
				<ClientOnly><VCodeBlock :code="b1" highlightjs lang="sql" theme="atom-one-dark" /></ClientOnly>
				<div class="mt-4 rounded-xl border border-slate-200 dark:border-slate-500 overflow-hidden text-sm">
					<div class="px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-600 font-mono text-xs text-slate-500 dark:text-slate-400">
						▶ Demo — thử INSERT vi phạm PRIMARY KEY
					</div>
					<div class="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div>
							<p class="text-slate-500 dark:text-slate-400 mb-2 text-xs font-mono">Bảng users (company_db):</p>
							<table class="w-full text-xs border-collapse">
								<thead>
									<tr class="bg-slate-100 dark:bg-slate-700 text-left">
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-cyan-500">id 🔑</th>
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300">full_name</th>
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300">email</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="row in pkRows" :key="row.id" class="border-b border-slate-100 dark:border-slate-700">
										<td class="px-3 py-1.5 font-mono text-cyan-500">{{ row.id }}</td>
										<td class="px-3 py-1.5 text-slate-700 dark:text-slate-300">{{ row.full_name }}</td>
										<td class="px-3 py-1.5 text-slate-600 dark:text-slate-400">{{ row.email }}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="flex flex-col gap-2">
							<p class="text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">INSERT INTO users (id, full_name, email) VALUES (?, ?, ?);</p>
							<input v-model.number="pkInput.id" type="number" placeholder="id" class="border rounded px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white font-mono" />
							<input v-model="pkInput.full_name" type="text" placeholder="full_name" class="border rounded px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white" />
							<input v-model="pkInput.email" type="text" placeholder="email" class="border rounded px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white font-mono" />
							<button @click="tryInsertPK" class="mt-1 px-4 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded text-sm font-medium cursor-pointer">▶ Thực thi INSERT</button>
							<div v-if="pkFeedback" :class="pkFeedback.type === 'error' ? 'bg-red-950 text-red-400 border-red-800' : 'bg-emerald-950 text-emerald-400 border-emerald-800'" class="text-xs font-mono rounded px-3 py-2 whitespace-pre-wrap border">
								{{ pkFeedback.type === 'error' ? '❌' : '✅' }} {{ pkFeedback.message }}
							</div>
						</div>
					</div>
				</div>

				<!-- ===================== FOREIGN KEY ===================== -->
				<PageHeading text="- FK - FOREIGN KEY" addOnClass="text-left h-0 opacity-0" markedAs="fk" :lvl="2" />
				<PageHeading text="2) FOREIGN KEY - Khóa ngoại" addOnClass="text-left mt-5" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ràng buộc giá trị trong một cột phải tồn tại ở cột tham chiếu của bảng khác.</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Dùng để thiết lập quan hệ giữa các bảng (1-N, N-N).</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Có thể cấu hình hành vi khi bản ghi cha bị xóa: <FilePath>ON DELETE CASCADE</FilePath> hoặc <FilePath>ON DELETE SET NULL</FilePath>.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 mb-1 font-semibold text-sm">Cú pháp tổng quát:</p>
				<ClientOnly><VCodeBlock :code="syntaxFK" highlightjs lang="sql" theme="atom-one-dark" /></ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 mb-1 font-semibold text-sm">Ví dụ với <FilePath>company_db</FilePath>:</p>
				<ClientOnly><VCodeBlock :code="b2" highlightjs lang="sql" theme="atom-one-dark" /></ClientOnly>
				<div class="mt-4 rounded-xl border border-slate-200 dark:border-slate-500 overflow-hidden text-sm">
					<div class="px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-600 font-mono text-xs text-slate-500 dark:text-slate-400">
						▶ Demo — thử INSERT vi phạm FOREIGN KEY
					</div>
					<div class="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div class="flex flex-col gap-4">
							<div>
								<p class="text-slate-500 dark:text-slate-400 mb-2 text-xs font-mono">Bảng departments (dữ liệu hiện có):</p>
								<table class="w-full text-xs border-collapse">
									<thead>
										<tr class="bg-slate-100 dark:bg-slate-700 text-left">
											<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-cyan-500">id 🔑</th>
											<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300">name</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="d in fkDepts" :key="d.id" class="border-b border-slate-100 dark:border-slate-700">
											<td class="px-3 py-1.5 font-mono text-cyan-500">{{ d.id }}</td>
											<td class="px-3 py-1.5 text-slate-700 dark:text-slate-300">{{ d.name }}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div>
								<p class="text-slate-500 dark:text-slate-400 mb-2 text-xs font-mono">Bảng users (sau khi INSERT thành công):</p>
								<table class="w-full text-xs border-collapse">
									<thead>
										<tr class="bg-slate-100 dark:bg-slate-700 text-left">
											<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-cyan-500">id</th>
											<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300">full_name</th>
											<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-yellow-400">dept_id 🔗</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="row in fkRows" :key="row.id" class="border-b border-slate-100 dark:border-slate-700">
											<td class="px-3 py-1.5 font-mono text-cyan-500">{{ row.id }}</td>
											<td class="px-3 py-1.5 text-slate-700 dark:text-slate-300">{{ row.full_name }}</td>
											<td class="px-3 py-1.5 font-mono text-yellow-400">{{ row.department_id }}</td>
										</tr>
										<tr v-if="!fkRows.length">
											<td colspan="3" class="px-3 py-2 text-slate-400 text-center italic">Chưa có dữ liệu</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="flex flex-col gap-2">
							<p class="text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">INSERT INTO users (full_name, department_id) VALUES (?, ?);</p>
							<input v-model="fkInput.full_name" type="text" placeholder="full_name" class="border rounded px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white" />
							<input v-model.number="fkInput.department_id" type="number" placeholder="department_id (thử 99 để thấy lỗi)" class="border rounded px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white font-mono" />
							<button @click="tryInsertFK" class="mt-1 px-4 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded text-sm font-medium cursor-pointer">▶ Thực thi INSERT</button>
							<div v-if="fkFeedback" :class="fkFeedback.type === 'error' ? 'bg-red-950 text-red-400 border-red-800' : 'bg-emerald-950 text-emerald-400 border-emerald-800'" class="text-xs font-mono rounded px-3 py-2 whitespace-pre-wrap border">
								{{ fkFeedback.type === 'error' ? '❌' : '✅' }} {{ fkFeedback.message }}
							</div>
						</div>
					</div>
				</div>

				<!-- ===================== UNIQUE ===================== -->
				<PageHeading text="- UNIQUE" addOnClass="text-left h-0 opacity-0" markedAs="unique" :lvl="2" />
				<PageHeading text="3) UNIQUE - Duy nhất" addOnClass="text-left mt-5" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ràng buộc các giá trị trong cùng một cột không được trùng nhau.</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Khác với PRIMARY KEY: một bảng có thể có nhiều UNIQUE constraint và cho phép NULL (tối đa một lần).</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ví dụ: email, số điện thoại, mã nhân viên.</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 mb-1 font-semibold text-sm">Cú pháp tổng quát:</p>
				<ClientOnly><VCodeBlock :code="syntaxUnique" highlightjs lang="sql" theme="atom-one-dark" /></ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 mb-1 font-semibold text-sm">Ví dụ với <FilePath>company_db</FilePath>:</p>
				<ClientOnly><VCodeBlock :code="b3" highlightjs lang="sql" theme="atom-one-dark" /></ClientOnly>
				<div class="mt-4 rounded-xl border border-slate-200 dark:border-slate-500 overflow-hidden text-sm">
					<div class="px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-600 font-mono text-xs text-slate-500 dark:text-slate-400">
						▶ Demo — thử INSERT email trùng lặp (UNIQUE)
					</div>
					<div class="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div>
							<p class="text-slate-500 dark:text-slate-400 mb-2 text-xs font-mono">Bảng users (company_db):</p>
							<table class="w-full text-xs border-collapse">
								<thead>
									<tr class="bg-slate-100 dark:bg-slate-700 text-left">
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-slate-500">id</th>
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300">full_name</th>
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-purple-400">email 🔒</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="row in uniqueRows" :key="row.id" class="border-b border-slate-100 dark:border-slate-700">
										<td class="px-3 py-1.5 font-mono text-slate-500">{{ row.id }}</td>
										<td class="px-3 py-1.5 text-slate-700 dark:text-slate-300">{{ row.full_name }}</td>
										<td class="px-3 py-1.5 font-mono text-purple-400">{{ row.email }}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="flex flex-col gap-2">
							<p class="text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">INSERT INTO users (full_name, email) VALUES (?, ?);</p>
							<input v-model="uniqueInput.full_name" type="text" placeholder="full_name" class="border rounded px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white" />
							<input v-model="uniqueInput.email" type="text" placeholder="email (thử email đã có để thấy lỗi)" class="border rounded px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white font-mono" />
							<button @click="tryInsertUnique" class="mt-1 px-4 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded text-sm font-medium cursor-pointer">▶ Thực thi INSERT</button>
							<div v-if="uniqueFeedback" :class="uniqueFeedback.type === 'error' ? 'bg-red-950 text-red-400 border-red-800' : 'bg-emerald-950 text-emerald-400 border-emerald-800'" class="text-xs font-mono rounded px-3 py-2 whitespace-pre-wrap border">
								{{ uniqueFeedback.type === 'error' ? '❌' : '✅' }} {{ uniqueFeedback.message }}
							</div>
						</div>
					</div>
				</div>

				<!-- ===================== NOT NULL ===================== -->
				<PageHeading text="- NOT NULL" addOnClass="text-left h-0 opacity-0" markedAs="notnull" :lvl="2" />
				<PageHeading text="4) NOT NULL - Trường dữ liệu bắt buộc" addOnClass="text-left mt-5" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ràng buộc cột không được phép để trống (NULL) khi thêm hoặc cập nhật bản ghi.</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Khác với UNIQUE: không yêu cầu giá trị phải duy nhất, chỉ yêu cầu phải có giá trị.</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ví dụ: full_name, email, password.</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 mb-1 font-semibold text-sm">Cú pháp tổng quát:</p>
				<ClientOnly><VCodeBlock :code="syntaxNotNull" highlightjs lang="sql" theme="atom-one-dark" /></ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 mb-1 font-semibold text-sm">Ví dụ với <FilePath>company_db</FilePath>:</p>
				<ClientOnly><VCodeBlock :code="b4" highlightjs lang="sql" theme="atom-one-dark" /></ClientOnly>
				<div class="mt-4 rounded-xl border border-slate-200 dark:border-slate-500 overflow-hidden text-sm">
					<div class="px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-600 font-mono text-xs text-slate-500 dark:text-slate-400">
						▶ Demo — thử INSERT bỏ trống trường NOT NULL
					</div>
					<div class="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div>
							<p class="text-slate-500 dark:text-slate-400 mb-2 text-xs font-mono">Bảng users (company_db):</p>
							<table class="w-full text-xs border-collapse">
								<thead>
									<tr class="bg-slate-100 dark:bg-slate-700 text-left">
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-slate-500">id</th>
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-orange-400">full_name ✱</th>
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-orange-400">email ✱</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="row in notNullRows" :key="row.id" class="border-b border-slate-100 dark:border-slate-700">
										<td class="px-3 py-1.5 font-mono text-slate-500">{{ row.id }}</td>
										<td class="px-3 py-1.5 text-slate-700 dark:text-slate-300">{{ row.full_name }}</td>
										<td class="px-3 py-1.5 text-slate-600 dark:text-slate-400">{{ row.email }}</td>
									</tr>
								</tbody>
							</table>
							<p class="text-slate-400 text-xs mt-1">✱ NOT NULL</p>
						</div>
						<div class="flex flex-col gap-2">
							<p class="text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">INSERT INTO users (full_name, email) VALUES (?, ?);</p>
							<input v-model="notNullInput.full_name" type="text" placeholder="full_name (để trống để thấy lỗi)" class="border rounded px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white" />
							<input v-model="notNullInput.email" type="text" placeholder="email (để trống để thấy lỗi)" class="border rounded px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white font-mono" />
							<button @click="tryInsertNotNull" class="mt-1 px-4 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded text-sm font-medium cursor-pointer">▶ Thực thi INSERT</button>
							<div v-if="notNullFeedback" :class="notNullFeedback.type === 'error' ? 'bg-red-950 text-red-400 border-red-800' : 'bg-emerald-950 text-emerald-400 border-emerald-800'" class="text-xs font-mono rounded px-3 py-2 whitespace-pre-wrap border">
								{{ notNullFeedback.type === 'error' ? '❌' : '✅' }} {{ notNullFeedback.message }}
							</div>
						</div>
					</div>
				</div>

				<!-- ===================== CHECK ===================== -->
				<PageHeading text="- CHECK" addOnClass="text-left h-0 opacity-0" markedAs="check" :lvl="2" />
				<PageHeading text="5) CHECK - Điều kiện dữ liệu hợp lệ" addOnClass="text-left mt-5" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ràng buộc giá trị của cột phải thỏa mãn một điều kiện logic cụ thể.</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Có thể kiểm tra phạm vi, danh sách cho phép, hoặc so sánh giữa các cột.</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Ví dụ: <FilePath>salary &gt;= 0</FilePath>, <FilePath>age BETWEEN 18 AND 65</FilePath>, <FilePath>status IN ('Active', 'Inactive')</FilePath>.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 mb-1 font-semibold text-sm">Cú pháp tổng quát:</p>
				<ClientOnly><VCodeBlock :code="syntaxCheck" highlightjs lang="sql" theme="atom-one-dark" /></ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 mb-1 font-semibold text-sm">Ví dụ với <FilePath>company_db</FilePath>:</p>
				<ClientOnly><VCodeBlock :code="b5" highlightjs lang="sql" theme="atom-one-dark" /></ClientOnly>
				<div class="mt-4 rounded-xl border border-slate-200 dark:border-slate-500 overflow-hidden text-sm">
					<div class="px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-600 font-mono text-xs text-slate-500 dark:text-slate-400">
						▶ Demo — thử INSERT lương âm (CHECK salary &gt;= 0)
					</div>
					<div class="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div>
							<p class="text-slate-500 dark:text-slate-400 mb-2 text-xs font-mono">Bảng users (company_db):</p>
							<table class="w-full text-xs border-collapse">
								<thead>
									<tr class="bg-slate-100 dark:bg-slate-700 text-left">
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-slate-500">id</th>
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300">full_name</th>
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-green-400">salary ✓</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="row in checkRows" :key="row.id" class="border-b border-slate-100 dark:border-slate-700">
										<td class="px-3 py-1.5 font-mono text-slate-500">{{ row.id }}</td>
										<td class="px-3 py-1.5 text-slate-700 dark:text-slate-300">{{ row.full_name }}</td>
										<td class="px-3 py-1.5 font-mono text-green-400">{{ row.salary.toLocaleString() }}</td>
									</tr>
								</tbody>
							</table>
							<p class="text-slate-400 text-xs mt-1">✓ CHECK (salary &gt;= 0)</p>
						</div>
						<div class="flex flex-col gap-2">
							<p class="text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">INSERT INTO users (full_name, salary) VALUES (?, ?);</p>
							<input v-model="checkInput.full_name" type="text" placeholder="full_name" class="border rounded px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white" />
							<input v-model.number="checkInput.salary" type="number" placeholder="salary (thử số âm để thấy lỗi)" class="border rounded px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white font-mono" />
							<button @click="tryInsertCheck" class="mt-1 px-4 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded text-sm font-medium cursor-pointer">▶ Thực thi INSERT</button>
							<div v-if="checkFeedback" :class="checkFeedback.type === 'error' ? 'bg-red-950 text-red-400 border-red-800' : 'bg-emerald-950 text-emerald-400 border-emerald-800'" class="text-xs font-mono rounded px-3 py-2 whitespace-pre-wrap border">
								{{ checkFeedback.type === 'error' ? '❌' : '✅' }} {{ checkFeedback.message }}
							</div>
						</div>
					</div>
				</div>

				<!-- ===================== DEFAULT ===================== -->
				<PageHeading text="- DEFAULT" addOnClass="text-left h-0 opacity-0" markedAs="default" :lvl="2" />
				<PageHeading text="6) DEFAULT - Giá trị mặc định" addOnClass="text-left mt-5" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Tự động điền giá trị khi cột không được truyền dữ liệu trong câu lệnh INSERT.</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Có thể là hằng số, hàm như <FilePath>NOW()</FilePath>, hoặc giá trị boolean.</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ví dụ: status = 'Active', joined_at = NOW(), is_active = TRUE.</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-3 mb-1 font-semibold text-sm">Cú pháp tổng quát:</p>
				<ClientOnly><VCodeBlock :code="syntaxDefault" highlightjs lang="sql" theme="atom-one-dark" /></ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 mb-1 font-semibold text-sm">Ví dụ với <FilePath>company_db</FilePath>:</p>
				<ClientOnly><VCodeBlock :code="b7" highlightjs lang="sql" theme="atom-one-dark" /></ClientOnly>
				<div class="mt-4 rounded-xl border border-slate-200 dark:border-slate-500 overflow-hidden text-sm">
					<div class="px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-600 font-mono text-xs text-slate-500 dark:text-slate-400">
						▶ Demo — để trống trường status, xem DEFAULT tự điền 'Active'
					</div>
					<div class="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div>
							<p class="text-slate-500 dark:text-slate-400 mb-2 text-xs font-mono">Bảng users (company_db):</p>
							<table class="w-full text-xs border-collapse">
								<thead>
									<tr class="bg-slate-100 dark:bg-slate-700 text-left">
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-slate-500">id</th>
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300">full_name</th>
										<th class="px-3 py-1.5 font-mono border-b border-slate-200 dark:border-slate-600 text-blue-400">status ⬦</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="row in defaultRows" :key="row.id" class="border-b border-slate-100 dark:border-slate-700">
										<td class="px-3 py-1.5 font-mono text-slate-500">{{ row.id }}</td>
										<td class="px-3 py-1.5 text-slate-700 dark:text-slate-300">{{ row.full_name }}</td>
										<td class="px-3 py-1.5 font-mono text-blue-400">{{ row.status }}</td>
									</tr>
								</tbody>
							</table>
							<p class="text-slate-400 text-xs mt-1">⬦ DEFAULT 'Active'</p>
						</div>
						<div class="flex flex-col gap-2">
							<p class="text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">INSERT INTO users (full_name, status) VALUES (?, ?);</p>
							<input v-model="defaultInput.full_name" type="text" placeholder="full_name" class="border rounded px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white" />
							<input v-model="defaultInput.status" type="text" placeholder="status (để trống → tự điền 'Active')" class="border rounded px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white font-mono" />
							<button @click="tryInsertDefault" class="mt-1 px-4 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded text-sm font-medium cursor-pointer">▶ Thực thi INSERT</button>
							<div v-if="defaultFeedback" :class="defaultFeedback.type === 'error' ? 'bg-red-950 text-red-400 border-red-800' : 'bg-emerald-950 text-emerald-400 border-emerald-800'" class="text-xs font-mono rounded px-3 py-2 whitespace-pre-wrap border">
								{{ defaultFeedback.type === 'error' ? '❌' : '✅' }} {{ defaultFeedback.message }}
							</div>
						</div>
					</div>
				</div>

				<p class="text-slate-900 dark:text-white leading-8 mt-5">
					Lý thuyết đủ rồi, làm
					<a href="/sql/practice/e_3" target="_blank" rel="noreferrer" class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500">
						bài tập
					</a>
					nào.
				</p>
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
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

	interface Feedback { type: 'error' | 'success'; message: string }

	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, VCodeBlock, DocNextPage, Disclosure, DisclosureButton, DisclosurePanel },
		data() {
			return {
				pagePagination: {
					next: { title: 'HTML Styles', link: '/nodejs/documentation/ep-2' },
					prev: { title: 'Trở về danh sách Doc', link: '/nodejs/documentation' },
				},

				// ── Syntax blocks ──────────────────────────────────────────
				syntaxPK: `-- Cách 1: inline
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    ...
);

-- Cách 2: đặt tên constraint
CREATE TABLE users (
    id SERIAL,
    CONSTRAINT pk_users PRIMARY KEY (id)
);

-- Cách 3: thêm sau khi tạo bảng
ALTER TABLE users ADD CONSTRAINT pk_users PRIMARY KEY (id);`,

				syntaxFK: `CREATE TABLE users (
    department_id INT,
    CONSTRAINT fk_dept FOREIGN KEY (department_id)
        REFERENCES departments(id)
        ON DELETE SET NULL   -- hoặc CASCADE
        ON UPDATE CASCADE
);

-- Thêm sau khi tạo bảng
ALTER TABLE users
ADD CONSTRAINT fk_dept FOREIGN KEY (department_id)
    REFERENCES departments(id);`,

				syntaxUnique: `-- Inline
CREATE TABLE users (
    email VARCHAR(150) UNIQUE,
    ...
);

-- Đặt tên constraint
CONSTRAINT uq_email UNIQUE (email)

-- Thêm sau khi tạo bảng
ALTER TABLE users ADD CONSTRAINT uq_email UNIQUE (email);`,

				syntaxNotNull: `-- Khai báo khi tạo bảng
CREATE TABLE users (
    full_name VARCHAR(150) NOT NULL,
    email     VARCHAR(150) NOT NULL,
    ...
);

-- Thêm sau khi tạo bảng (PostgreSQL)
ALTER TABLE users ALTER COLUMN full_name SET NOT NULL;`,

				syntaxCheck: `-- Inline
CREATE TABLE users (
    salary DECIMAL(10,2) CHECK (salary >= 0),
    ...
);

-- Đặt tên constraint
CONSTRAINT chk_salary CHECK (salary >= 0)

-- Thêm sau khi tạo bảng
ALTER TABLE users ADD CONSTRAINT chk_salary CHECK (salary >= 0);`,

				syntaxDefault: `-- Khai báo khi tạo bảng
CREATE TABLE users (
    status    VARCHAR(20)   DEFAULT 'Active',
    joined_at TIMESTAMP     DEFAULT NOW(),
    is_active BOOLEAN       DEFAULT TRUE,
    ...
);

-- Thêm sau khi tạo bảng
ALTER TABLE users ALTER COLUMN status SET DEFAULT 'Active';`,

				// ── Example code blocks (company_db) ──────────────────────
				b1: `CREATE TABLE users (
    id            SERIAL PRIMARY KEY,
    full_name     VARCHAR(150) NOT NULL,
    email         VARCHAR(150) UNIQUE NOT NULL,
    department_id INT,
    salary        DECIMAL(10,2) DEFAULT 0
);
-- id là PRIMARY KEY: mỗi nhân viên có một ID duy nhất, không NULL`,

				b2: `CREATE TABLE departments (
    id   SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE users (
    id            SERIAL PRIMARY KEY,
    full_name     VARCHAR(150) NOT NULL,
    email         VARCHAR(150) UNIQUE NOT NULL,
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id)
        REFERENCES departments(id)
        ON DELETE SET NULL
);
-- department_id phải tồn tại trong bảng departments`,

				b3: `ALTER TABLE users ADD CONSTRAINT uq_email UNIQUE (email);

-- Thử INSERT trùng email:
INSERT INTO users (full_name, email) VALUES ('Le Van C', 'a@company.com');
-- ERROR: duplicate key value violates unique constraint "uq_email"`,

				b4: `ALTER TABLE users
    ALTER COLUMN full_name SET NOT NULL,
    ALTER COLUMN email     SET NOT NULL;

-- Thử INSERT thiếu tên:
INSERT INTO users (email) VALUES ('c@company.com');
-- ERROR: null value in column "full_name" violates not-null constraint`,

				b5: `ALTER TABLE users
    ADD CONSTRAINT chk_salary CHECK (salary >= 0);

-- Thử INSERT lương âm:
INSERT INTO users (full_name, email, salary)
VALUES ('Le Van C', 'c@company.com', -5000000);
-- ERROR: new row violates check constraint "chk_salary"`,

				b7: `ALTER TABLE users ADD COLUMN status VARCHAR(20) DEFAULT 'Active';

-- INSERT không truyền status:
INSERT INTO users (full_name, email) VALUES ('Le Van C', 'c@company.com');
-- Kết quả: cột status tự động = 'Active'`,

				// ── PRIMARY KEY demo state ─────────────────────────────────
				pkRows: [
					{ id: 1, full_name: 'Nguyen Van A', email: 'a@company.com' },
					{ id: 2, full_name: 'Tran Thi B',   email: 'b@company.com' },
				],
				pkInput: { id: 1, full_name: 'Le Van C', email: 'c@company.com' },
				pkFeedback: null as Feedback | null,

				// ── FOREIGN KEY demo state ─────────────────────────────────
				fkDepts: [
					{ id: 1, name: 'Engineering' },
					{ id: 2, name: 'Marketing' },
				],
				fkRows: [] as Array<{ id: number; full_name: string; department_id: number }>,
				fkInput: { full_name: 'Le Van C', department_id: 99 },
				fkFeedback: null as Feedback | null,
				fkNextId: 1,

				// ── UNIQUE demo state ──────────────────────────────────────
				uniqueRows: [
					{ id: 1, full_name: 'Nguyen Van A', email: 'a@company.com' },
					{ id: 2, full_name: 'Tran Thi B',   email: 'b@company.com' },
				],
				uniqueInput: { full_name: 'Le Van C', email: 'a@company.com' },
				uniqueFeedback: null as Feedback | null,
				uniqueNextId: 3,

				// ── NOT NULL demo state ────────────────────────────────────
				notNullRows: [
					{ id: 1, full_name: 'Nguyen Van A', email: 'a@company.com' },
				],
				notNullInput: { full_name: '', email: 'c@company.com' },
				notNullFeedback: null as Feedback | null,
				notNullNextId: 2,

				// ── CHECK demo state ───────────────────────────────────────
				checkRows: [
					{ id: 1, full_name: 'Nguyen Van A', salary: 20000000 },
					{ id: 2, full_name: 'Tran Thi B',   salary: 15000000 },
				],
				checkInput: { full_name: 'Le Van C', salary: -5000000 },
				checkFeedback: null as Feedback | null,
				checkNextId: 3,

				// ── DEFAULT demo state ─────────────────────────────────────
				defaultRows: [
					{ id: 1, full_name: 'Nguyen Van A', status: 'Active' },
				],
				defaultInput: { full_name: 'Le Van C', status: '' },
				defaultFeedback: null as Feedback | null,
				defaultNextId: 2,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-6' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},

			tryInsertPK() {
				const id = Number(this.pkInput.id);
				if (!id || !this.pkInput.full_name || !this.pkInput.email) {
					this.pkFeedback = { type: 'error', message: 'ERROR: Vui lòng điền đầy đủ id, full_name, email.' };
					return;
				}
				if (this.pkRows.find((r: any) => r.id === id)) {
					this.pkFeedback = { type: 'error', message: `ERROR: duplicate key value violates unique constraint "pk_users"\nDETAIL: Key (id)=(${id}) already exists.` };
					return;
				}
				this.pkRows.push({ id, full_name: this.pkInput.full_name, email: this.pkInput.email });
				this.pkFeedback = { type: 'success', message: `INSERT 0 1\n→ Bản ghi id=${id} đã được thêm vào bảng.` };
			},

			tryInsertFK() {
				const deptId = Number(this.fkInput.department_id);
				if (!this.fkInput.full_name) {
					this.fkFeedback = { type: 'error', message: 'ERROR: Vui lòng điền full_name.' };
					return;
				}
				if (!(this.fkDepts as any[]).find((d) => d.id === deptId)) {
					this.fkFeedback = { type: 'error', message: `ERROR: insert or update on table "users" violates foreign key constraint "fk_department"\nDETAIL: Key (department_id)=(${deptId}) is not present in table "departments".` };
					return;
				}
				this.fkRows.push({ id: this.fkNextId++, full_name: this.fkInput.full_name, department_id: deptId });
				this.fkFeedback = { type: 'success', message: `INSERT 0 1\n→ Nhân viên "${this.fkInput.full_name}" đã được thêm vào phòng ban id=${deptId}.` };
			},

			tryInsertUnique() {
				if (!this.uniqueInput.full_name || !this.uniqueInput.email) {
					this.uniqueFeedback = { type: 'error', message: 'ERROR: Vui lòng điền đầy đủ full_name và email.' };
					return;
				}
				if ((this.uniqueRows as any[]).find((r) => r.email === this.uniqueInput.email)) {
					this.uniqueFeedback = { type: 'error', message: `ERROR: duplicate key value violates unique constraint "uq_email"\nDETAIL: Key (email)=(${this.uniqueInput.email}) already exists.` };
					return;
				}
				this.uniqueRows.push({ id: this.uniqueNextId++, full_name: this.uniqueInput.full_name, email: this.uniqueInput.email });
				this.uniqueFeedback = { type: 'success', message: `INSERT 0 1\n→ Bản ghi với email "${this.uniqueInput.email}" đã được thêm.` };
			},

			tryInsertNotNull() {
				if (!this.notNullInput.full_name) {
					this.notNullFeedback = { type: 'error', message: `ERROR: null value in column "full_name" of relation "users" violates not-null constraint\nDETAIL: Failing row contains (null, ${this.notNullInput.email || 'null'}).` };
					return;
				}
				if (!this.notNullInput.email) {
					this.notNullFeedback = { type: 'error', message: `ERROR: null value in column "email" of relation "users" violates not-null constraint\nDETAIL: Failing row contains (${this.notNullInput.full_name}, null).` };
					return;
				}
				this.notNullRows.push({ id: this.notNullNextId++, full_name: this.notNullInput.full_name, email: this.notNullInput.email });
				this.notNullFeedback = { type: 'success', message: `INSERT 0 1\n→ Bản ghi "${this.notNullInput.full_name}" đã được thêm.` };
			},

			tryInsertCheck() {
				const salary = Number(this.checkInput.salary);
				if (!this.checkInput.full_name) {
					this.checkFeedback = { type: 'error', message: 'ERROR: Vui lòng điền full_name.' };
					return;
				}
				if (isNaN(salary) || salary < 0) {
					this.checkFeedback = { type: 'error', message: `ERROR: new row for relation "users" violates check constraint "chk_salary"\nDETAIL: Failing row contains salary = ${this.checkInput.salary}.` };
					return;
				}
				this.checkRows.push({ id: this.checkNextId++, full_name: this.checkInput.full_name, salary });
				this.checkFeedback = { type: 'success', message: `INSERT 0 1\n→ Nhân viên "${this.checkInput.full_name}" với salary=${salary.toLocaleString()} đã được thêm.` };
			},

			tryInsertDefault() {
				if (!this.defaultInput.full_name) {
					this.defaultFeedback = { type: 'error', message: 'ERROR: Vui lòng điền full_name.' };
					return;
				}
				const status = this.defaultInput.status.trim() || 'Active';
				this.defaultRows.push({ id: this.defaultNextId++, full_name: this.defaultInput.full_name, status });
				const note = this.defaultInput.status.trim() ? '' : ' (DEFAULT được áp dụng)';
				this.defaultFeedback = { type: 'success', message: `INSERT 0 1\n→ status = "${status}"${note}` };
				this.defaultInput.full_name = '';
				this.defaultInput.status = '';
			},
		},
	};
</script>
