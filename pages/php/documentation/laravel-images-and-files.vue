<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Ở bài này, chúng ta sẽ cùng tìm hiểu cách xử lý files với <b>Laravel</b> và <b>Blade</b>
				</p>
				<PageHeading text="Setup" addOnClass="text-left" markedAs="setup" />
				<p class="text-slate-900 dark:text-white my-3">
					Để xử lý việc tải và lưu ảnh cục bộ trong Laravel, chúng ta có thể sử dụng cơ chế Storage của Laravel. Đồng
					thời, chúng ta cũng sẽ tạo form load ảnh.
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					B1 - Đầu tiên, chúng ta tạo form để upload ảnh từ client với blade:
				</p>
				<VCodeBlock :code="b0" highlightjs lang="html" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-3">
					Lưu ý rằng ở đây để có thể gửi được data dạng file thì ta cần thêm attribute
					<b>`enctype="multipart/form-data"`</b> cho <b>form</b> nha.
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					B2 - Tiếp theo, chúng ta sẽ tạo <FilePath>TodoController</FilePath> bằng artisan:
				</p>
				<FakeTerminalUI :textCoppy="'php artisan make:controller ImageController'">
					<p>php artisan make:controller ImageController</p>
				</FakeTerminalUI>

				<p class="text-slate-900 dark:text-white my-3">Trong Controller ta sẽ khai báo Model tương ứng vào:</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="vs2015" />

				<p class="text-slate-900 dark:text-white my-3">
					B3 - Tiếp theo, chúng ta tạo route ứng với việc upload ảnh ở <b>`web.php`</b>
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="vs2015" />

				<p class="text-slate-900 dark:text-white my-3">
					Done !!! Đến đây, nếu upload thành công thì file sẽ nằm trong thư mục
					<FilePath>public/storage/images</FilePath> <br />
					Đến đây nhớ phải tạo liên kết thư mục <FilePath>storage</FilePath> với thư mục <FilePath>public</FilePath>
					nha.
				</p>
				<FakeTerminalUI :textCoppy="'php artisan storage:link'">
					<p>php artisan storage:link</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white my-3">
					Lệnh này sẽ tạo ra một symbolic link từ thư mục <FilePath>storage/app/public</FilePath> sang
					<FilePath>public/storage</FilePath>, cho phép truy cập file từ URL.
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
	import { apiResponde } from '@/models';
	import DocNextPage from '@/components/DocNextPage.vue';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { FilePath } from '../../../.nuxt/components';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			VCodeBlock,
		},
		data() {
			return {
				b0: `<form action="{{ route('image.upload') }}" method="POST" enctype="multipart/form-data">
	@csrf
	<div class="form-group">
		<label for="image">Chọn ảnh:</label>
		<input type="file" name="image" class="form-control" required>
	</div>
	<button type="submit" class="btn btn-primary">Upload</button>
</form>`,
				b11: `use App/Http/Controllers/ImageController;

Route::post('/image/upload', [ImageController::class, 'upload'])->name('image.upload');
`,
				b1: `namespace App/Http/Controllers;

use Illuminate/Http/Request;
use Illuminate/Support/Facades/Storage;

class ImageController extends Controller
{
    public function upload(Request $request)
    {
        // Xác thực file ảnh
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Chỉ chấp nhận file ảnh
        ]);

        // Lưu file ảnh
        if ($request->hasFile('image')) {
            // Lấy file từ request
            $image = $request->file('image');
            
            // Tạo tên file duy nhất
            $imageName = time() . '_' . $image->getClientOriginalName();

            // Lưu ảnh vào thư mục 'public/images'
            $path = $image->storeAs('public/images', $imageName);
            
            // Lấy URL công khai của ảnh
            $imageUrl = Storage::url($path); // có thể lưu đường dẫn này vào database để sử dụng sau.

            // Trả về thông tin thành công
            return back()->with('success', 'Image uploaded successfully.')->with('image', $imageName);
        }

        return back()->with('error', 'Image upload failed.');
    }
}

`,
				b2: `use App/Http/Controllers/ImageController;

Route::post('/image/upload', [ImageController::class, 'upload'])->name('image.upload');
`,
				b3: `@if (session('success'))
	<div class="alert alert-success">
	{{ session('success') }}
	</div>
	<img src="{{ asset('storage/images/' . session('image')) }}" alt="Uploaded Image" width="300">
@endif

@if (session('error'))
	<div class="alert alert-danger">
	{{ session('error') }}
	</div>
@endif
`,
				b4: `public function update(Request $request, $id)
{
	// Tìm Todo theo ID
    $todo = $this->todo->find($id);

    // Kiểm tra nếu Todo có tồn tại
    if (!$todo) {
        // xử lý nếu không tìm thấy Todo tương ứng
    }

    // Cập nhật dữ liệu
    $todo->content = $request->input('content');
    $todo->status_id = $request->input('status_id');

    // Lưu thay đổi vào cơ sở dữ liệu
    $todo->save();
		return $this->index();
}
`,
				b5: ` public function destroy($id)
{
	// Tìm todo theo ID
	$todo = Todo::find($id);

	// Kiểm tra nếu todo không tồn tại
	if (!$todo) {
		return redirect()->route('todos.index')->with('error', 'Todo không tồn tại!');
	}

	// Xóa todo
	$todo->delete();

	// Chuyển hướng về danh sách todos với thông báo thành công
	return redirect()->route('todos.index')->with('success', 'Todo đã được xóa thành công!');
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-20' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
