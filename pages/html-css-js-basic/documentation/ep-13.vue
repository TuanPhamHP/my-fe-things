<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở bài này, chúng ta sẽ tìm hiểu về <b>Flexbox</b>. Flexbox (hay Flexible Box Layout) là một dạng layout trong
					CSS3 giúp bạn dễ dàng hơn trong việc thiết kế các giao diện phức tạp một cách linh hoạt.
					<br />
					<br />
					Trong <b>Flexbox</b> chúng ta có 2 đối tượng chính cần quan tâm đến là <b>Flex Container (flex cha)</b> và
					<b>Flex Items</b>
				</p>
				<div class="bg-neutral-100 rounded-lg px-3 py-3">
					<img src="@/assets/images/html5-basic/flex-01.svg" alt="just vibing" class="d-block h-[250px] mt-3" />
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Trong đó:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`flex-container`:</b>
						<div>
							<span> Là phần tử cha, có css <b>display: flex</b> hoặc <b> display: inline-flex</b>. </span>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`flex-item `:</b>
						<div>
							<span>Là các phần tử con trực tiếp của <b>Flex Container</b>. </span>
						</div>
					</li>
				</ul>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<!-- Flex Contaner -->
<div class='d-flex flex-parent'>
	<!-- Flex Item -->
	<div class='demo-item bg-coral'> Child 01 </div>
	<!-- Flex Item -->
	<div class='demo-item bg-goldenrod'> Child 02 </div>
	<!-- Flex Item -->
	<div class='demo-item bg-cadetblue'> Child 03 </div>
</div>
`"
							highlightjs
							lang="HTML"
							theme="atom-one-dark"
						/>
						<div class="py-1"></div>
						<VCodeBlock
							:code="`.d-flex{
	display:flex;
}
.demo-item{
	width: 80px;
	height:80px;
}
.flex-parent{
	width: 250px;
	height: 250px;
	background-color: #47c9b1;
}
`"
							highlightjs
							lang="CSS"
							theme="atom-one-dark"
						/>
					</div>
					<div class="col-span-1">
						<div class="flex w-fit mx-auto lg:mt-10" style="width: 250px; height: 250px; background-color: #47c9b1">
							<!-- Flex Item -->
							<div class="demo-item w-20 h-20" style="background-color: coral">Child 01</div>
							<!-- Flex Item -->
							<div class="demo-item w-20 h-20" style="background-color: goldenrod">Child 02</div>
							<!-- Flex Item -->
							<div class="demo-item w-20 h-20" style="background-color: cadetblue">Child 03</div>
						</div>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo, chúng ta sẽ tìm hiểu về các thuộc tính của flexbox
				</p>
				<div class="flex justify-between">
					<PageHeading text="Flex Container" addOnClass="text-left mb-3" markedAs="flex-container" />
				</div>
				<img
					src="https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg"
					alt="just vibing"
					class="d-block h-[150px] mt-3"
				/>
				<div class="flex">
					<div>
						<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							Các thuộc tính tiếp theo sẽ được áp dụng cho <b>Flex Container,</b> tức là chúng sẽ được khai báo và áp
							dụng riêng cho <b>Flex Container.</b>
							<br />
							<br />
							Trước hết, trong <b>flexbox</b> chúng ta sẽ có 2 khái niệm mới là:
						</p>

						<ul class="pl-5">
							<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
								<b class="min-w-[240px]">`Main Axis - Trục chính`:</b>
								<div>
									<span>
										Trục chính là trục chính dọc theo đó các flex items được đặt. Ví dụ khi trục chính là trục nằm ngang
										(trùng với trục X), thì phần tử sẽ được sắp xếp lên cùng một hàng, đồng thời trục chính cũng sẽ xác
										định hướng sắp xếp phần tử (Trái -> Phải hoặc ngược lại)
									</span>
								</div>
							</li>
							<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
								<b>`Cross Axis - Trục phụ `:</b>
								<div>
									<span>
										Trục phụ là trục vuông góc với trục chính. Có tác dụng quyết định vị trí xuất hiện của hàng tiếp
										theo trong flexbox.
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="py-3"></div>
				<PageHeading text="* flex-direction" addOnClass="text-left mb-3" markedAs="flex-direction" :lvl="2" />
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3 items-center">
					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							<b>flex-direction</b> được dùng để xác định hướng của trục chính.
							<br />
							<br />
							Các giá trị: <b>row (mặc định), row-reverse, column, column-reverse</b>.
						</p>
					</div>
					<div class="rounded-lg px-0 py-3 col-span-1">
						<img
							src="https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg"
							alt="just vibing"
							class="d-block rounded mt-3"
						/>

						<small class="text-slate-900 dark:text-white text-center block">Minh hoạ các hướng của trục chính</small>
					</div>
				</div>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<div class='d-flex flex-parent'>
	<!-- Flex Item -->
	<div class='demo-item bg-coral'> Child 01 </div>
	<!-- Flex Item -->
	<div class='demo-item bg-goldenrod'> Child 02 </div>
	<!-- Flex Item -->
	<div class='demo-item bg-cadetblue'> Child 03 </div>
</div>
`"
							highlightjs
							lang="HTML"
							theme="atom-one-dark"
						/>

						<div class="py-1"></div>
						<VCodeBlock
							:code="`
.flex-row {
	flex-direction: row;
}
.flex-row-reverse {
	flex-direction: row-reverse;
}
.flex-column {
	flex-direction: column;
}
.flex-column-reverse {
	flex-direction: column-reverse;
}
`"
							highlightjs
							lang="CSS"
							theme="atom-one-dark"
						/>
					</div>
					<div class="col-span-1">
						<div class="flex gap-2 max-w-2xl mx-auto">
							<div class="flex flex-col gap-2 w-full">
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									Class được áp dụng cho <b>flex-container:</b>
								</p>
								<div
									v-for="item in flexDirectionActive"
									:key="item.id"
									class="flex items-center gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
									:class="`${
										selectedFlexDirection === item.id
											? 'text-info-700 dark:text-info-100 bg-info-300'
											: 'text-slate-900 dark:text-white'
									}`"
									@click="selectedFlexDirection = item.id"
								>
									<Icon :name="`${selectedFlexDirection === item.id ? 'ph:radio-button-fill' : 'ph:circle-light'}`" />
									{{ item.name }}
								</div>
							</div>

							<div
								class="parent-block transition-all"
								style="border: 1px solid #000; min-width: 250px; width: 250px; height: 250px; background-color: #47c9b1"
							>
								<div class="w-fit flex mx-auto" :class="selectedFlexDirectionComputed?.returnedClass">
									<!-- Flex Item -->
									<div class="demo-item w-20 h-20" style="background-color: coral">Child 01</div>
									<!-- Flex Item -->
									<div class="demo-item w-20 h-20" style="background-color: goldenrod">Child 02</div>
									<!-- Flex Item -->
									<div class="demo-item w-20 h-20" style="background-color: cadetblue">Child 03</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<PageHeading text="* flex-wrap" addOnClass="text-left mb-3" markedAs="flex-wrap" :lvl="2" />
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3 items-center">
					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							Trong trường hợp các flex-item có tổng kích thước theo trục chính lớn hơn của flex-container thì ta sẽ có
							2 cách giải quyết là:
							<br />
							<br />
							<b>1)</b> Tự động thu nhỏ các flex-item để chèn vừa 1 hàng.
							<br />
							<b>2)</b> Giữ nguyên kích thước của các flex-item, tạo thêm hàng trong flex-box để đặt các phần tử mới.
							<br />
							<br />
							<b>flex-wrap</b> được dùng để quyết định xem flexbox có một hay nhiều hàng.
							<br />
							<br />
							Các giá trị: <b>nowrap (mặc định), wrap, wrap-reverse</b>.
						</p>
					</div>
					<div class="rounded-lg px-0 py-3 col-span-1">
						<img
							src="https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg"
							alt="just vibing"
							class="d-block rounded mt-3"
						/>

						<small class="text-slate-900 dark:text-white text-center block"
							>Minh hoạ cách hoạt động của flex-wrap</small
						>
					</div>
				</div>

				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<div class='d-flex flex-parent'>
	<!-- Flex Item -->
	<div class='demo-item bg-coral'> Child 01 </div>
	<!-- Flex Item -->
	<div class='demo-item bg-goldenrod'> Child 02 </div>
	<!-- Flex Item -->
	<div class='demo-item bg-cadetblue'> Child 03 </div>
	<!-- Flex Item -->
	<div class='demo-item bg-burlywood'> Child 04 </div>
</div>
`"
							highlightjs
							lang="HTML"
							theme="atom-one-dark"
						/>
						<div class="py-1"></div>
						<VCodeBlock
							:code="`
/** direction như phần trên **/
.flex-nowrap {
	flex-wrap: no-wrap;
}
.flex-wrap {
	flex-wrap: wrap;
}
.flex-wrap-reverse {
	flex-wrap: wrap-reverse;
}
`"
							highlightjs
							lang="CSS"
							theme="atom-one-dark"
						/>
					</div>
					<div class="col-span-1">
						<div class="flex gap-2 max-w-2xl mx-auto items-center">
							<div class="flex flex-col gap-2 w-full">
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									Class được áp dụng cho <b>flex-container:</b>
								</p>
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									<b>flex-direction:</b>
								</p>
								<div
									v-for="item in flexDirectionActive"
									:key="item.id"
									class="flex items-center gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
									:class="`${
										selectedFlexDirection === item.id
											? 'text-info-700 dark:text-info-100 bg-info-300'
											: 'text-slate-900 dark:text-white'
									}`"
									@click="selectedFlexDirection = item.id"
								>
									<Icon :name="`${selectedFlexDirection === item.id ? 'ph:radio-button-fill' : 'ph:circle-light'}`" />
									{{ item.name }}
								</div>
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									<b>flex-wrap:</b>
								</p>
								<div
									v-for="item in flexWrapActive"
									:key="item.id"
									class="flex items-center gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
									:class="`${
										selectedFlexWrap === item.id
											? 'text-info-700 dark:text-info-100 bg-info-300'
											: 'text-slate-900 dark:text-white'
									}`"
									@click="selectedFlexWrap = item.id"
								>
									<Icon :name="`${selectedFlexWrap === item.id ? 'ph:radio-button-fill' : 'ph:circle-light'}`" />
									{{ item.name }}
								</div>
							</div>

							<div
								class="parent-block transition-all"
								style="border: 1px solid #000; min-width: 250px; width: 250px; height: 250px; background-color: #47c9b1"
							>
								<div
									class="w-fit flex mx-auto h-full w-full"
									:class="[selectedFlexDirectionComputed?.returnedClass, selectedFlexWrapComputed?.returnedClass]"
								>
									<!-- Flex Item -->
									<div class="demo-item w-20 h-20" style="background-color: coral">Child 01</div>
									<!-- Flex Item -->
									<div class="demo-item w-20 h-20" style="background-color: goldenrod">Child 02</div>
									<!-- Flex Item -->
									<div class="demo-item w-20 h-20" style="background-color: cadetblue">Child 03</div>
									<div class="demo-item w-20 h-20" style="background-color: burlywood">Child 04</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="py-3"></div>
				<!--  -->
				<PageHeading text="* justify-content" addOnClass="text-left mb-3" markedAs="justify-content" :lvl="2" />
				<div class="grid grid-cols-2 xl:grid-cols-3 gap-3 mt-3 items-start">
					<div class="col-span-2 mt-10">
						<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							Trong trường hợp các flex-item có tổng kích thước theo trục chính nhỏ hơn của flex-container thì ta sẽ có
							phần khoảng trống dư thừa trong container. Để thao tác với khoảng trống này ta dùng
							<b>justify-content</b> giúp căn chỉnh các item theo trục chính.
							<br />
							<br />
							Các giá trị: <b>flex-start (mặc định), flex-end, center, space-between, space-around, space-evenly</b>.
						</p>
					</div>
					<div class="rounded-lg px-0 py-3 col-span-1">
						<img
							src="https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg"
							alt="just vibing"
							class="d-block rounded mt-3"
						/>

						<small class="text-slate-900 dark:text-white text-center block"
							>Minh hoạ cách hoạt động của justify-content</small
						>
					</div>
				</div>

				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<div class='d-flex flex-parent'>
	<!-- Flex Item -->
	<div class='demo-item bg-coral'> Child 01 </div>
	<!-- Flex Item -->
	<div class='demo-item bg-goldenrod'> Child 02 </div>
</div>
`"
							highlightjs
							lang="HTML"
							theme="atom-one-dark"
						/>
						<div class="py-1"></div>
						<VCodeBlock
							:code="`
/** direction như phần trên **/
.justify-content-start {
	justify-content: flex-start;
}
.justify-content-center {
	justify-content: flex-center;
}
.justify-content-end {
	justify-content: flex-end;
}
.justify-content-between {
	justify-content: space-between;
}
.justify-content-around {
	justify-content: space-around;
}
.justify-content-evenly {
	justify-content: space-evenly;
}
`"
							highlightjs
							lang="CSS"
							theme="atom-one-dark"
						/>
					</div>
					<div class="col-span-1">
						<div class="flex gap-2 max-w-2xl mx-auto items-center">
							<div class="flex flex-col gap-2 w-full">
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									Class được áp dụng cho <b>flex-container:</b>
								</p>
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									<b>flex-direction:</b>
								</p>
								<div
									v-for="item in flexDirectionActive"
									:key="item.id"
									class="flex items-center gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
									:class="`${
										selectedFlexDirection === item.id
											? 'text-info-700 dark:text-info-100 bg-info-300'
											: 'text-slate-900 dark:text-white'
									}`"
									@click="selectedFlexDirection = item.id"
								>
									<Icon :name="`${selectedFlexDirection === item.id ? 'ph:radio-button-fill' : 'ph:circle-light'}`" />
									{{ item.name }}
								</div>
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									<b>justify-content:</b>
								</p>
								<div
									v-for="item in flexJustifyContentActive"
									:key="item.id"
									class="flex items-center gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
									:class="`${
										selectedJustifyContent === item.id
											? 'text-info-700 dark:text-info-100 bg-info-300'
											: 'text-slate-900 dark:text-white'
									}`"
									@click="selectedJustifyContent = item.id"
								>
									<Icon :name="`${selectedJustifyContent === item.id ? 'ph:radio-button-fill' : 'ph:circle-light'}`" />
									{{ item.name }}
								</div>
							</div>

							<div
								class="parent-block transition-all"
								style="border: 1px solid #000; min-width: 250px; width: 250px; height: 250px; background-color: #47c9b1"
							>
								<div
									class="w-fit flex mx-auto h-full w-full"
									:class="[selectedFlexDirectionComputed?.returnedClass, selectedFlexJustifyComputed?.returnedClass]"
								>
									<!-- Flex Item -->
									<div class="demo-item w-20 h-20" style="background-color: coral">Child 01</div>
									<!-- Flex Item -->
									<div class="demo-item w-20 h-20" style="background-color: goldenrod">Child 02</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--  -->
				<!--  -->
				<PageHeading text="* align-items" addOnClass="text-left mb-3" markedAs="align-items" :lvl="2" />
				<div class="grid grid-cols-2 xl:grid-cols-3 gap-3 mt-3 items-start">
					<div class="col-span-2 mt-10">
						<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							Trong trường hợp các hàng trong flex-container có dư thừa khoảng trống ta có thể thao tác với khoảng trống
							này bằng cách sử dụng
							<b>justify-content</b> giúp chỉnh các item theo trục phụ.
							<br />
							<br />
							Các giá trị: <b>stretch (mặc định), flex-start, flex-end, center, baseline</b>.
						</p>
					</div>
					<div class="rounded-lg px-0 py-3 col-span-1">
						<img
							src="https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg"
							alt="just vibing"
							class="d-block rounded mt-3"
						/>

						<small class="text-slate-900 dark:text-white text-center block"
							>Minh hoạ cách hoạt động của justify-content</small
						>
					</div>
				</div>

				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<div class='d-flex flex-parent'>
	<!-- Flex Item -->
	<div class='demo-item bg-coral'> Child 01 </div>
	<!-- Flex Item -->
	<div class='demo-item bg-goldenrod text-lg height-unset'> Child 02 </div>
</div>
`"
							highlightjs
							lang="HTML"
							theme="atom-one-dark"
						/>
						<div class="py-1"></div>
						<VCodeBlock
							:code="`
.text-lg{
	font-size: 24px;
}
.height-unset{
	height: unset;
}
/** direction như phần trên **/
.align-items-stretch {
	align-items: stretch;
}
.align-items-start {
	align-items: flex-start;
}
.align-items-center {
	align-items: flex-center;
}
.align-items-end {
	align-items: flex-end;
}
.align-items-baseline {
	align-items: flex-baseline;
}
`"
							highlightjs
							lang="CSS"
							theme="atom-one-dark"
						/>
					</div>
					<div class="col-span-1">
						<div class="flex gap-2 max-w-2xl mx-auto items-center">
							<div class="flex flex-col gap-2 w-full">
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									Class được áp dụng cho <b>flex-container:</b>
								</p>
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									<b>flex-direction:</b>
								</p>
								<div
									v-for="item in flexDirectionActive"
									:key="item.id"
									class="flex items-center gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
									:class="`${
										selectedFlexDirection === item.id
											? 'text-info-700 dark:text-info-100 bg-info-300'
											: 'text-slate-900 dark:text-white'
									}`"
									@click="selectedFlexDirection = item.id"
								>
									<Icon :name="`${selectedFlexDirection === item.id ? 'ph:radio-button-fill' : 'ph:circle-light'}`" />
									{{ item.name }}
								</div>
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									<b>align-items:</b>
								</p>
								<div
									v-for="item in flexAlignItemsContentActive"
									:key="item.id"
									class="flex items-center gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
									:class="`${
										selectedAlignItemsContent === item.id
											? 'text-info-700 dark:text-info-100 bg-info-300'
											: 'text-slate-900 dark:text-white'
									}`"
									@click="selectedAlignItemsContent = item.id"
								>
									<Icon
										:name="`${selectedAlignItemsContent === item.id ? 'ph:radio-button-fill' : 'ph:circle-light'}`"
									/>
									{{ item.name }}
								</div>
							</div>

							<div
								class="parent-block transition-all"
								style="border: 1px solid #000; min-width: 250px; width: 250px; height: 250px; background-color: #47c9b1"
							>
								<div
									class="w-fit flex mx-auto h-full w-full"
									:class="[selectedFlexDirectionComputed?.returnedClass, selectedFlexAlignItemsComputed?.returnedClass]"
								>
									<!-- Flex Item -->
									<div class="demo-item w-20 h-20" style="background-color: coral">Child 01</div>
									<!-- Flex Item -->
									<div class="demo-item w-20 h-20" style="background-color: goldenrod; font-size: 24px; height: unset">
										Child 02
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Lưu ý:</b> Ở ví dụ trên để giá trị <b>`stretch`</b> hoạt động được thì ta cần xoá css set height của phần
					tử
				</p>
				<!--  -->

				<PageHeading text="Flex Items" addOnClass="text-left mb-3" markedAs="flex-item" />

				<img
					src="https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg"
					alt="just vibing"
					class="d-block h-[150px] mt-3"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo là các thuộc tính sẽ được áp dụng cho <b>Flex Item.</b>
				</p>
				<!--  -->
				<PageHeading text="* order" addOnClass="text-left mb-3" markedAs="item-order" :lvl="2" />
				<div class="grid grid-cols-2 xl:grid-cols-3 gap-3 mt-3 items-start">
					<div class="col-span-2">
						<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							<b>order</b> được dùng để quyết định thứ tự hiển thị của các item.
							<br />
							<br />
							Các giá trị: <b>0 (mặc định),</b> các giá trị cao hơn sẽ nằm sau, thấp hơn sẽ nằm trước. Nếu 2 item có
							cùng order thì sẽ được sắp xếp theo thứ tự trong HTML.
						</p>
					</div>
					<div class="rounded-lg px-0 py-3 col-span-1">
						<img
							src="https://css-tricks.com/wp-content/uploads/2018/10/order.svg"
							alt="just vibing"
							class="d-block rounded mt-3"
						/>

						<small class="text-slate-900 dark:text-white text-center block">Minh hoạ cách hoạt động của order</small>
					</div>
				</div>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<div class='d-flex flex-parent'>
	<!-- Flex Item -->
	<div class='demo-item bg-coral'> Child 01 </div>
	<!-- Flex Item -->
	<div class='demo-item bg-goldenrod'> Child 02 </div>
	<!-- Flex Item -->
	<div class='demo-item bg-cadetblue'> Child 03 </div>
</div>
`"
							highlightjs
							lang="HTML"
							theme="atom-one-dark"
						/>

						<div class="py-1"></div>
						<VCodeBlock
							:code="`
.order-negative-1 {
	order: -1;
}
.order-0 {
	order: 0;
}
.order-1 {
	order: 1;
}
`"
							highlightjs
							lang="CSS"
							theme="atom-one-dark"
						/>
					</div>
					<div class="col-span-1">
						<div class="flex gap-2 max-w-2xl mx-auto">
							<div class="flex flex-col gap-2 w-full">
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									Class được áp dụng cho <b>child-02:</b>
								</p>
								<div
									v-for="item in flexItemsOrder"
									:key="item.id"
									class="flex items-center gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
									:class="`${
										selectedItem === item.id
											? 'text-info-700 dark:text-info-100 bg-info-300'
											: 'text-slate-900 dark:text-white'
									}`"
									@click="selectedItem = item.id"
								>
									<Icon :name="`${selectedItem === item.id ? 'ph:radio-button-fill' : 'ph:circle-light'}`" />
									{{ item.name }}
								</div>
							</div>

							<div
								class="parent-block transition-all"
								style="border: 1px solid #000; min-width: 250px; width: 250px; height: 250px; background-color: #47c9b1"
							>
								<div class="w-fit flex mx-auto">
									<!-- Flex Item -->
									<div class="demo-item w-20 h-20" style="background-color: coral">Child 01</div>
									<!-- Flex Item -->
									<div
										class="demo-item w-20 h-20"
										style="background-color: goldenrod"
										:class="selectedItemOrderComputed?.returnedClass"
									>
										Child 02
									</div>
									<!-- Flex Item -->
									<div class="demo-item w-20 h-20" style="background-color: cadetblue">Child 03</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--  -->
				<PageHeading text="* flex-grow" addOnClass="text-left mb-3" markedAs="item-grow" :lvl="2" />
				<div class="grid grid-cols-2 xl:grid-cols-3 gap-3 mt-3 items-start">
					<div class="col-span-2">
						<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							<b>flex-grow</b> được dùng để xác định độ giãn tự động của các item.
							<br />
							<br />
							Các giá trị: <b>0 (mặc định), number</b>sẽ quyết định phần tử chiếm bao nhiêu phần dư của container.
							<br />
							<br />
							VD: 2 phần tử con có width: 100px, Container có width là 230px => còn dư 230 - 100 * 2 = 30px;
							<br />
							set grow lần lượt là child-01 = 1 và child-02 = 2 => tổng grow là 1+ 2 = 3 phần tương ứng với 30px
							<br />
							=> child-01 chiếm 1/3 = 10px và có tổng width = 100px(ban đầu) + 10px(vừa chiếm) = 110px
							<br />
							=> child-02 chiếm 2/3 = 20px và có tổng width = 100px(ban đầu) + 20px(vừa chiếm) = 120px
						</p>
					</div>
					<div class="rounded-lg px-0 py-3 col-span-1">
						<img
							src="https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg"
							alt="just vibing"
							class="d-block rounded mt-3"
						/>

						<small class="text-slate-900 dark:text-white text-center block"
							>Minh hoạ cách hoạt động của flex-grow</small
						>
					</div>
				</div>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<div class='d-flex flex-parent'>
	<!-- Flex Item -->
	<div class='demo-item bg-coral flex-grow-1'> Child 01 </div>
	<!-- Flex Item -->
	<div class='demo-item bg-goldenrod'> Child 02 </div>
</div>
`"
							highlightjs
							lang="HTML"
							theme="atom-one-dark"
						/>

						<div class="py-1"></div>
						<VCodeBlock
							:code="`.flex-parent {
	width: 230px;
}
.demo-item{
	width: 100px;
}
.flex-grow-1 {
	flex-grow: 1;
}
.flex-grow-2 {
	flex-grow: 2;
}
`"
							highlightjs
							lang="CSS"
							theme="atom-one-dark"
						/>
					</div>
					<div class="col-span-1">
						<div class="flex gap-2 max-w-2xl mx-auto">
							<div class="flex flex-col gap-2 w-full">
								<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
									Class được áp dụng cho <b>child-02:</b>
								</p>
								<div
									v-for="item in flexItemsGrow"
									:key="item.id"
									class="flex items-center gap-2 cursor-pointer hover:bg-info-400/50 px-1 py-1 rounded-lg"
									:class="`${
										selectedItemGrow === item.id
											? 'text-info-700 dark:text-info-100 bg-info-300'
											: 'text-slate-900 dark:text-white'
									}`"
									@click="selectedItemGrow = item.id"
								>
									<Icon :name="`${selectedItemGrow === item.id ? 'ph:radio-button-fill' : 'ph:circle-light'}`" />
									{{ item.name }}
								</div>
							</div>

							<div
								class="parent-block transition-all"
								style="border: 1px solid #000; min-width: 230px; width: 230px; height: 250px; background-color: #47c9b1"
							>
								<div class="w-full flex mx-auto">
									<!-- Flex Item -->
									<div class="demo-item w-20 h-20 grow" style="background-color: coral">Child 01</div>
									<!-- Flex Item -->
									<div
										class="demo-item w-20 h-20"
										style="background-color: goldenrod"
										:class="selectedItemGrowComputed?.returnedClass"
									>
										Child 02
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--  -->
				<!-- END -->
				<p class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
					(❁´◡`❁) Bài viết đã dài, còn các thuộc tính khác như: <b>flex-shrink, flex-basis, align-self ...</b> Các bạn
					vui lòng tìm hiểu thêm nhé.
					<br />
					Ở bài tiếp theo, chúng ta sẽ cùng tìm hiểu về cách vận dụng flexbox trong việc dựng Layout
				</p>
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
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
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
		},
		data() {
			return {
				imageTag: `<img src="https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg" alt="just vibing memes">`,
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
				margin: 1,
				boxSizing: 1,
				selectedFlexDirection: 1,
				flexDirectionActive: [
					{
						id: 1,
						name: 'flex-row',
						returnedClass: 'flex',
					},
					{
						id: 2,
						name: 'flex-row-reverse',
						returnedClass: 'flex-row-reverse',
					},
					{
						id: 3,
						name: 'flex-col',
						returnedClass: 'flex-col',
					},
					{
						id: 4,
						name: 'flex-col-reverse',
						returnedClass: 'flex-col-reverse',
					},
				],

				selectedFlexWrap: 1,
				flexWrapActive: [
					{
						id: 1,
						name: 'flex-nowrap',
						returnedClass: 'flex-nowrap',
					},
					{
						id: 2,
						name: 'flex-wrap',
						returnedClass: 'flex-wrap',
					},
					{
						id: 3,
						name: 'flex-wrap-reverse',
						returnedClass: 'flex-wrap-reverse',
					},
				],

				selectedJustifyContent: 1,
				flexJustifyContentActive: [
					{
						id: 1,
						name: 'justify-content-start',
						returnedClass: 'justify-start',
					},
					{
						id: 2,
						name: 'justify-content-center',
						returnedClass: 'justify-center',
					},
					{
						id: 3,
						name: 'justify-content-end',
						returnedClass: 'justify-end',
					},
					{
						id: 4,
						name: 'justify-space-between',
						returnedClass: 'justify-between',
					},
					{
						id: 5,
						name: 'justify-space-around',
						returnedClass: 'justify-around',
					},
					{
						id: 6,
						name: 'justify-space-evenly',
						returnedClass: 'justify-evenly',
					},
				],

				selectedAlignItemsContent: 1,
				flexAlignItemsContentActive: [
					{
						id: 1,
						name: 'align-items-stretch',
						returnedClass: 'items-stretch',
					},
					{
						id: 2,
						name: 'align-items-start',
						returnedClass: 'items-start',
					},
					{
						id: 3,
						name: 'align-items-center',
						returnedClass: 'items-center',
					},
					{
						id: 4,
						name: 'align-items-end',
						returnedClass: 'items-end',
					},
					{
						id: 5,
						name: 'align-items-baseline',
						returnedClass: 'items-baseline',
					},
				],

				selectedItem: 1,
				flexItemsOrder: [
					{
						id: 1,
						name: 'order-0',
						returnedClass: 'order-0',
					},
					{
						id: 2,
						name: 'order-negative-1',
						returnedClass: 'order-first',
					},
					{
						id: 3,
						name: 'order-1',
						returnedClass: 'order-1',
					},
				],
				selectedItemGrow: 1,
				flexItemsGrow: [
					{
						id: 1,
						name: 'flex-grow-1',
						returnedClass: 'grow',
					},
					{
						id: 2,
						name: 'flex-grow-2',
						returnedClass: 'grow-[2]',
					},
				],
			};
		},
		mounted() {
			this.getPagination();
		},
		computed: {
			selectedFlexDirectionComputed() {
				return this.flexDirectionActive.find(o => o.id === this.selectedFlexDirection);
			},
			selectedFlexWrapComputed() {
				return this.flexWrapActive.find(o => o.id === this.selectedFlexWrap);
			},
			selectedFlexJustifyComputed() {
				return this.flexJustifyContentActive.find(o => o.id === this.selectedJustifyContent);
			},
			selectedFlexAlignItemsComputed() {
				return this.flexAlignItemsContentActive.find(o => o.id === this.selectedAlignItemsContent);
			},
			selectedItemOrderComputed() {
				return this.flexItemsOrder.find(o => o.id === this.selectedItem);
			},
			selectedItemGrowComputed() {
				return this.flexItemsGrow.find(o => o.id === this.selectedItemGrow);
			},
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 13 }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},

			getBoxSizingClassName(boxSizing: number) {
				switch (boxSizing) {
					case 1:
						return 'box-sizing-border';
					case 2:
						return 'box-sizing-content';

					default:
						return 'unknow';
				}
			},
		},
	};
</script>
