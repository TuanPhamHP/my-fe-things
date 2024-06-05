<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="State và Prop trong React" addOnClass="text-left" markedAs="topTitle" :lvl="0" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong phần này chúng ta sẽ làm quen với khái niệm <b>`State`</b> và <b>`Props`</b> trong ứng dụng ReactJs.
				</p>
				<PageHeading text="State" addOnClass="text-left" markedAs="react-state" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong ReactJS, <b>`state`</b> là một trong những khái niệm quan trọng nhất và được sử dụng để theo dõi trạng
					thái của một thành phần (component). Khi trạng thái thay đổi, React sẽ tự động render lại giao diện người dùng
					để hiển thị trạng thái mới.
				</p>
				<PageHeading text="I. Create & Update State" addOnClass="text-left" markedAs="create-state" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong RFC, <b>`state`</b> được khởi tạo thông qua hooks <b>`useState()`</b>
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<em
						>Đọc kỹ hơn về hook
						<b class="cursor-pointer underline" @click="$router.push('/reactjs-basic/documentation/hooks#use-state')"
							>useState()</b
						></em
					>
				</p>
				<TabGroup>
					<TabList class="gap-2 flex mb-1 w-fit bg-gray-100 rounded px-1 py-1">
						<Tab as="template" v-slot="{ selected }">
							<button
								:class="{
									'bg-blue-500 text-white': selected,
									' text-black': !selected,
									'px-3 py-1 rounded': true,
								}"
							>
								Demo
							</button>
						</Tab>
						<Tab as="template" v-slot="{ selected }">
							<button
								:class="{
									'bg-blue-500 text-white': selected,
									' text-black': !selected,
									'px-3 py-1 rounded': true,
								}"
							>
								Code
							</button>
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<div class="w-full rounded-lg bg-black px-4 py-3">
								<div class="gap-4 my-5">
									<p class="text-2xl text-white">{{ number }}</p>

									<button
										type="submit"
										@click="number++"
										class="text-white block mb-2 w-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										Add + 1
									</button>
									<button
										type="submit"
										@click="number++"
										class="text-white block mb-2 w-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										Add + 3
									</button>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<VCodeBlock
								:code="`import React, { useState } from 'react';

const ExampleComponent = () => {
	// Khởi tạo state có tên là number với giá trị ban đầu là 0
	const [number, setNumber] = useState(0);

	// tạo function tăng giá trị của 'number'
	const increaseNumber = ()=>{
		setNumber(number + 1)
	}

	const increaseTriple = ()=>{
		setNumber(number + 1)
		setNumber(number + 1)
		setNumber(number + 1)
	}

	return (
		<div >
			<p style={{ fontSize:'24px' }}>Current number value: { number }</p>
			<button onClick={increaseNumber} >Add + 1</button>
			<button onClick={increaseTriple} >Add + 3</button>
		</div>
	);
};

export default ExampleComponent;`"
								highlightjs
								lang="javascript"
								theme="tomorrow-night-bright"
							/>
						</TabPanel>
					</TabPanels>
				</TabGroup>

				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Cần lưu ý là <b>`State`</b> chỉ thay đổi ở lần render tiếp theo.
					<br />
					Như vậy ở lần render đầu tiên, <b>`number`</b> có giá trị là 0, giá trị của <b>`number`</b> chỉ được update ở
					lần render tiếp theo.
					<br />
					ở function <b>`increaseTriple`</b> mặc dù <b>`setNumber(number + 1)`</b> được gọi 3 lần nhưng sau khi run thì
					number chỉ tăng thêm 1
					<br />
					<br />
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Khi hàm <b>`increaseTriple`</b> run:
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					1. <b>`setNumber(number + 1)`</b>: <b>`number`</b> bằng 0 => setNumber(0 + 1): ở lần render tiếp theo
					<b>`number`</b> sẽ được update lên 1
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					2. <b>`setNumber(number + 1)`</b>: <b>`number`</b> bằng 0 => setNumber(0 + 1): ở lần render tiếp theo
					<b>`number`</b> sẽ được update lên 1
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					3. <b>`setNumber(number + 1)`</b>: <b>`number`</b> bằng 0 => setNumber(0 + 1): ở lần render tiếp theo
					<b>`number`</b> sẽ được update lên 1
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Như vậy mặc dù <b>`setNumber(number + 1)`</b> được call tới 3 lần nhưng sau khi update thì <b>`number`</b> chỉ
					tăng lên 1 thay vì 3
				</p>
				<PageHeading text="II. State as a Snapshot" addOnClass="text-left" markedAs="state-snapshot" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Thực tế, trong React thì các state sẽ luôn sử dụng <b>`snapshot`</b> của chúng khi người dùng tác động tới UI.
					<br />
					<br />
					Ở đây tôi sẽ lấy một ví dụ đơn giản cho các bạn như sau:
				</p>
				<TabGroup>
					<TabList class="gap-2 flex mb-1 w-fit bg-gray-100 rounded px-1 py-1">
						<Tab as="template" v-slot="{ selected }">
							<button
								:class="{
									'bg-blue-500 text-white': selected,
									' text-black': !selected,
									'px-3 py-1 rounded': true,
								}"
							>
								Demo
							</button>
						</Tab>
						<Tab as="template" v-slot="{ selected }">
							<button
								:class="{
									'bg-blue-500 text-white': selected,
									' text-black': !selected,
									'px-3 py-1 rounded': true,
								}"
							>
								Code
							</button>
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<div class="w-full rounded-lg bg-black px-4 py-3">
								<div class="gap-4 my-5">
									<p class="text-2xl text-white">{{ number }}</p>

									<button
										type="submit"
										@click="demoFnc1"
										class="text-white block mb-2 w-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										Add
									</button>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<VCodeBlock
								:code="`import React, { useState } from 'react';

const ExampleComponent = () => {
	const [number, setNumber] = useState(0);

	const increaseNumber = ()=>{
		setNumber(number + 1);
		alert(number)
	}

	return (
		<div >
			<p style={{ fontSize:'24px' }}>Current number value: { number }</p>
			<button onClick={increaseNumber} >Add</button>
		</div>
	);
};

export default ExampleComponent;`"
								highlightjs
								lang="javascript"
								theme="tomorrow-night-bright"
							/>
						</TabPanel>
					</TabPanels>
				</TabGroup>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Như các bạn thấy, ở hàm <b>`increaseNumber`</b> tôi thêm phương thức <b>`alert(number)`</b> để in ra giá trị
					của <b>`number`</b> cho người dùng sau khi <b>`setNumber`</b>, nhưng giá trị được in ra vẫn là
					<b>`number`</b> trước khi update.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Điều này xảy ra do React sẽ không bao giờ thay đổi giá trị của một state khi chúng được render, với mỗi lần
					render thì react sẽ:
					<br />
					<br />
					1. Tạo ra một <b>`snapshot`</b> ứng với các giá trị của state, props tại lần render hiện tại.
					<br />
					<br />
					2. Khi bạn sử dụng <b>`useState()`</b>, React sẽ trả cho bạn <b>`snapshot`</b> của state tại lần render đó.
					<br />
					<br />
					3. Run các function nằm trong component với <b>`snapshot`</b> được tạo ở bước 1
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					=> Với mỗi lần render, giá trị của <b>`state` là fixed</b>
				</p>
				<PageHeading text="III. Batching State" addOnClass="text-left" markedAs="state-queuing" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Sẽ có những trường hợp bạn muốn update state nhiều lần liên tục trong 1 lần render duy nhất - Tương tự như ví
					dụ trên function <b>`increaseTriple()`</b> tại phần 1. <br />
					Để thực hiện việc này ta sẽ tìm hiểu về <b>`batching`</b> trpng React.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					<b>`Batching`</b> là một khái niệm trong ReactJS mà React sử dụng để cải thiện hiệu suất khi thực hiện các cập
					nhật trạng thái và render các thành phần.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Khi bạn thực hiện update state trong React, React không thực hiện việc cập nhật và render lại component mỗi
					lần bạn gọi hàm setState ngay lập tức . Thay vào đó, React thường sử dụng batching để gom nhóm nhiều cập nhật
					lại và thực hiện chúng một lần sau cùng để tối ưu hiệu suất.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					<b>Ví dụ:</b> Giống như khi bạn vào nhà hàng và gọi 3 món, người phục vụ thay vì đi vào báo với nhà bếp mỗi
					khi bạn nói một món thì họ sẽ đợi bạn nói hết một lượt, xác định là bạn đã gọi đủ rồi mới báo lại với nhà bếp
					để ra món.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					<b>Note: </b>

					<b>Batching Không Áp Dụng Cho Các Asynchronous Operations</b>
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-xl">
					<em>Vậy làm sao để tôi có thể update state nhiều lần ở cùng 1 render?</em>
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Ở phần trước các bạn đã hiểu về <b>`setState()`</b> là một hàm nhận vào giá trị mới của <b>`state`</b> để
					update. <br />
					Ngoài ra nó còn có thể nhận vào một callback return ra giá trị mới. Bằng cách này React sẽ hiểu rằng nó cần
					phải thực hiện tính toán với state thay vị chỉ tạo ra một <b>`snapshot`</b> và thay thế state.
				</p>
				<TabGroup>
					<TabList class="gap-2 flex mb-1 w-fit bg-gray-100 rounded px-1 py-1">
						<Tab as="template" v-slot="{ selected }">
							<button
								:class="{
									'bg-blue-500 text-white': selected,
									' text-black': !selected,
									'px-3 py-1 rounded': true,
								}"
							>
								Demo
							</button>
						</Tab>
						<Tab as="template" v-slot="{ selected }">
							<button
								:class="{
									'bg-blue-500 text-white': selected,
									' text-black': !selected,
									'px-3 py-1 rounded': true,
								}"
							>
								Code
							</button>
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<div class="w-full rounded-lg bg-black px-4 py-3">
								<div class="gap-4 my-5">
									<p class="text-2xl text-white">{{ number }}</p>

									<button
										type="submit"
										@click="number += 3"
										class="text-white block mb-2 w-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										Add + 3
									</button>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<VCodeBlock
								:code="`import React, { useState } from 'react';

const ExampleComponent = () => {
	const [number, setNumber] = useState(0);

	const increase = ()=>{
		// thay vì truyền newValue vào thì ta sẽ truyền một callback
		setNumber(number => number + 1);
		setNumber(number => number + 1);
		setNumber(number => number + 1);
	}

	return (
		<div >
			<p style={{ fontSize:'24px' }}>Current number value: { number }</p>
			<button onClick={increase} >Add + 3</button>
		</div>
	);
};

export default ExampleComponent;`"
								highlightjs
								lang="javascript"
								theme="tomorrow-night-bright"
							/>
						</TabPanel>
					</TabPanels>
				</TabGroup>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Như các bạn thấy, ở hàm <b>`increase`</b> tôi đã gọi đến <b>`setNumber`</b> 3 lần, truyền vào 1 callback dùng
					để tính toán và trả ra một giá trị mới
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Điều này xảy ra do React sẽ không bao giờ thay đổi giá trị của một state khi chúng được render, với mỗi lần
					render thì react sẽ:
					<br />
					<br />
					1. <b>`setNumber(number => number + 1)`</b>: React nhận ra đây là một callback, nó sẽ lưu hàm này vào queue
					bằng tính năng <b>Batching</b> mà tôi đã giải thích ở trên
					<br />
					<br />
					2. <b>`setNumber(number => number + 1)`</b>: Tương tự ở trên.
					<br />
					<br />
					3. <b>`setNumber(number => number + 1)`</b>: Tương tự ở trên.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Sau khi Batching thì hàng chờ (queued) sẽ được mô tả như bảng sau:
				</p>
				<div class="relative overflow-x-auto">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" class="px-6 py-3">queued update</th>
								<th scope="col" class="px-6 py-3">number</th>
								<th scope="col" class="px-6 py-3">returns</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<b>number => number + 1</b>
								</th>
								<td class="px-6 py-4">0</td>
								<td class="px-6 py-4">1</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<b>number => number + 1</b>
								</th>
								<td class="px-6 py-4">1</td>
								<td class="px-6 py-4">2</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<b>number => number + 1</b>
								</th>
								<td class="px-6 py-4">2</td>
								<td class="px-6 py-4">3</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Kết thúc queue, ta có giá trị cuối được return là <b>3</b>
					<br />
					<br />
					=> React update <b>`number`</b> thành <b>3</b>
				</p>
				<PageHeading text="IV. Refs State" addOnClass="text-left" markedAs="state-refs" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Khi làm việc với State thì điều quan trọng là ta phải biết được khi nào thì state được coi là update, vì chỉ
					khi state được nhận định là đã update thì ReactJs mới re-render lại với giá trị state mới.
					<br />
					<br />
					Bạn cần lưu ý điều này khi state bạn tạo không phải là value dạng primitive (Number, String, Boolean ...) mà
					là dạng References (Object, Array ...). Với value dạng References (sẽ gọi tắt là Refs), React sẽ không quan
					tâm đến value của chúng, React chỉ ghi nhớ chúng thông qua giá trị ref được cấp phát. Từ đó React sẽ so sánh
					reference của giá trị mới với reference của giá trị cũ để xác định xem có cần render lại component hay không.
					<br />
					<br />
					Dưới đây là một ví dụ về việc sử dụng useState với object và array trong React:
				</p>
				<VCodeBlock
					:code="`import React, { useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState({ name: 'John', age: 27 });
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const handleUserInfoChange = () => {
		//✅ đã cấp phát một ref mới => react sẽ nhận định state này đã update
		setUserInfo({ ...userInfo, age: 28 }); 

		//❌ không cấp phát một ref mới => react không nhận định state này đã update nên UI không đổi
		// userInfo.age=28
		// setUserInfo(userInfo); 
  };

  const handleNumbersChange = () => {
		//✅ đã cấp phát một ref mới => react sẽ nhận định state này đã update
		const newNumbers = [...numbers];
		newNumbers.push(6);
		setNumbers(newNumbers);

		//❌ không cấp phát một ref mới => react không nhận định state này đã update nên UI không đổi
		// numbers.push(6)
		// setNumbers(numbers);
  };

  return (
    <div>
      <div>
        <p>Name: {userInfo.name}</p>
        <p>Age: {userInfo.age}</p>
        <button onClick={handleUserInfoChange}>Increase Age</button>
      </div>
      <div>
        <p>Numbers: {numbers.join(', ')}</p>
        <button onClick={handleNumbersChange}>Add Number</button>
      </div>
    </div>
  );
}

export default App;`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Ở ví dụ trên tôi đã cho các bạn thấy được cách chúng ta làm việc với data dạng refs.
					<br />
					Về cơ bản, chúng ta cần phải cung cấp một refs mới cho state đó thì ReactJs mới 'thừa nhận' sự thay đổi và
					re-render UI. Thằng này tương tự với lý thuyết về việc cấp phát địa chỉ ô nhớ. 👌👌
				</p>
				<div class="py-5"></div>
				<PageHeading text="Props" addOnClass="text-left" markedAs="react-props" />
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Trong ReactJS, <b>`props`</b> là một từ viết tắt của <b>`properties` - (thuộc tính)</b> và được sử dụng để
					truyền dữ liệu từ một component cha xuống một component con trong cây component. Props là một cách để truyền
					thông tin giữa các component và giúp tạo ra sự tương tác linh hoạt giữa chúng.
					<br />
					Chúng ta sẽ bắt đầu tìm hiểu cơ bản về props trong ReactJs:
				</p>
				<PageHeading text="I. Truyền & Nhận Props" addOnClass="text-left" markedAs="passing-props" :lvl="2" />

				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Khi render một Component trong React, ta có thể truyền data vào trong component thông qua <b>`Props`</b>
				</p>
				<TabGroup>
					<TabList class="gap-2 flex mb-1 w-fit bg-gray-100 rounded px-1 py-1">
						<Tab as="template" v-slot="{ selected }">
							<button
								:class="{
									'bg-blue-500 text-white': selected,
									' text-black': !selected,
									'px-3 py-1 rounded': true,
								}"
							>
								Demo
							</button>
						</Tab>
						<Tab as="template" v-slot="{ selected }">
							<button
								:class="{
									'bg-blue-500 text-white': selected,
									' text-black': !selected,
									'px-3 py-1 rounded': true,
								}"
							>
								Code
							</button>
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<div class="w-full rounded-lg bg-black px-4 py-3">
								<div class="gap-4 my-5">
									<p class="text-2xl text-white">My message: Hi, my name is Tuấn</p>
									<p class="text-2xl text-white">Message from parent: Hi, my name is Tuấn</p>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<VCodeBlock
								:code="`import React, { useState } from 'react';

const ChildComponent = (props)=>{
	// props là một object đại diện cho các data được truyền vào từ component cha
	return 	<p>Message from parent: { props.parrentMessage }</p>;
}

const ExampleComponent = () => {
	const [message, setMessage] = useState('Hi, my name is Tuấn');

	return (
		<div >
			<p>My message: {message}</p>
			{/* gọi đến component con và truyền prop có tên là 'parrentMessage', giá trị là 'message' */} 
			<ChildComponent parrentMessage={message} />
		</div>
	);
};

export default ExampleComponent;`"
								highlightjs
								lang="javascript"
								theme="tomorrow-night-bright"
							/>
						</TabPanel>
					</TabPanels>
				</TabGroup>

				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					RFC được khởi tạo là một hàm, như vậy <b>`props`</b> được truyền vào như một tham số của hàm.
					<br />
					<br />
					<b>`Props`</b> được coi như một immutable (bất biến) object, để truy cập vào các props được truyền vào thì ta
					truy cập như cách đọc một trường trong object. Bởi vì tính bất biến của nó nên Child component KHÔNG thể thay
					đổi giá trị của props nhận vào.
					<br />
					<br />
					Trong ví dụ trên, một prop có tên là <b>`parrentMessage`</b> được tạo ra và truyền vào giá trị
					<b>`message`</b> từ component cha. ở component con ta truy xuất đến prop này bằng cách gọi
					<b>`props.parrentMessage`</b> với props là tham số đầu vào của component con.

					<br />
					<br />
					Trong thực tế, người ta thường dùng syntax destructuring để rút gọn việc lấy props ở component con:
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Destructuring là một cú pháp trong JavaScript cho phép bạn rút gọn cách truy cập thông tin từ các cấu trúc dữ
					liệu như mảng hoặc đối tượng. Cú pháp này giúp làm mã nguồn trở nên ngắn gọn hơn và dễ đọc hơn khi bạn cần
					trích xuất giá trị từ các cấu trúc phức tạp.
				</p>
				<VCodeBlock
					:code="`const myObject = {a:1, b:2, c:3}
// trích xuất các biến có tên trùng với key trong Object
const {a, b, c} = myObject;
console.log(a); // expected output: 1
console.log(b); // expected output: 2
console.log(c); // expected output: 3
// ngoài ta ta có thể áp dụng với mảng
					`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">Áp dụng:</p>
				<VCodeBlock
					:code="`import React, { useState } from 'react';

const ChildComponent = ({parrentMessage})=>{
	// sử dụng syntax destructoring để lấy ra prop có key tương ứng
	// thay vì nhận tham trị là props, ta sử dụng object {parrentMessage};
	// cách viết này tương tự với: const { parrentMessage } = props; 
	// như vậy ta đã trích xuất được props parrentMessage vào một biến có tên tương ứng
	return 	<p>Message from parent: { parrentMessage }</p>;
}`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<div class="mb-5"></div>
				<PageHeading
					text="II. Giá trị mặc định của props"
					addOnClass="text-left"
					markedAs="default-value-props"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					Giống như tham số của một hàm, các props cũng có thể được khởi tạo với giá trị mặc định.
					<br />
					Trong trường hợp Component cha không truyền vào giá trị thì prop đó sẽ lấy giá trị khởi tạo.
				</p>
				<TabGroup>
					<TabList class="gap-2 flex mb-1 w-fit bg-gray-100 rounded px-1 py-1">
						<Tab as="template" v-slot="{ selected }">
							<button
								:class="{
									'bg-blue-500 text-white': selected,
									' text-black': !selected,
									'px-3 py-1 rounded': true,
								}"
							>
								Demo
							</button>
						</Tab>
						<Tab as="template" v-slot="{ selected }">
							<button
								:class="{
									'bg-blue-500 text-white': selected,
									' text-black': !selected,
									'px-3 py-1 rounded': true,
								}"
							>
								Code
							</button>
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<div class="w-full rounded-lg bg-black px-4 py-3">
								<div class="gap-4 my-5">
									<p class="text-2xl text-white">My message: Hi, my name is Tuấn</p>
									<p class="text-2xl text-white">My name is: Child Component</p>
									<p class="text-2xl text-white">Message from parent: Hi, my name is Tuấn</p>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<VCodeBlock
								:code="`import React, { useState } from 'react';

const ChildComponent = ({parrentMessage, myName = 'Child Component'})=>{
	// trong trường hợp component cha không truyền vào props 'myName' nên khi render 
	// 'myName' sẽ nhận giá trị mặc định là 'Child Component'
	return 	(
		<div>
			<p>My name is: { myName }</p>	
			<p>Message from parent: { parrentMessage }</p>	
		</div>
	);
}

const ExampleComponent = () => {
	const [message, setMessage] = useState('Hi, my name is Tuấn');

	return (
		<div >
			<p>My message: {message}</p>
			{/* gọi đến component con và truyền prop có tên là 'parrentMessage', giá trị là 'message' */} 
			<ChildComponent parrentMessage={message} />
		</div>
	);
};

export default ExampleComponent;
`"
								highlightjs
								lang="javascript"
								theme="tomorrow-night-bright"
							/>
						</TabPanel>
					</TabPanels>
				</TabGroup>
				<div class="mb-5"></div>
				<PageHeading text="III. `Children` Props" addOnClass="text-left" markedAs="children-props" :lvl="2" />

				<p class="text-slate-900 dark:text-white my-5 leading-9 text-lg text-content">
					<b>`children`</b> là một prop đặc biệt trong React, nó cho phép bạn truyền một component, view khác làm prop.
				</p>
				<TabGroup>
					<TabList class="gap-2 flex mb-1 w-fit bg-gray-100 rounded px-1 py-1">
						<Tab as="template" v-slot="{ selected }">
							<button
								:class="{
									'bg-blue-500 text-white': selected,
									' text-black': !selected,
									'px-3 py-1 rounded': true,
								}"
							>
								Demo
							</button>
						</Tab>
						<Tab as="template" v-slot="{ selected }">
							<button
								:class="{
									'bg-blue-500 text-white': selected,
									' text-black': !selected,
									'px-3 py-1 rounded': true,
								}"
							>
								Code
							</button>
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<div class="w-full rounded-lg bg-black px-4 py-3">
								<div class="gap-4 my-5">
									<p class="text-2xl text-white">My message: Hi, my name is Tuấn</p>
									<b class="text-2xl text-red-500">I am a special prop that call 'children'</b>
									<p class="text-2xl text-white">Message from parent: Hi, my name is Tuấn</p>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<VCodeBlock
								:code="`import React, { useState } from 'react';

const ChildComponent = ({parrentMessage, children)=>{
	return 	(
		<div>
			{children}
			<p>Message from parent: { parrentMessage }</p>	
		</div>
	);
}

const ExampleComponent = () => {
	const [message, setMessage] = useState('Hi, my name is Tuấn');
	return (
		<div >
			<p>My message: {message}</p>
			<ChildComponent parrentMessage={message} >
				<b style={{ color:'red' }}>I am a special prop that call 'children'</b>
			</ChildComponent>
		</div>
	);
};

export default ExampleComponent;
`"
								highlightjs
								lang="javascript"
								theme="tomorrow-night-bright"
							/>
						</TabPanel>
					</TabPanels>
				</TabGroup>

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
	import { apiResponde } from 'models';
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
				pagePagination: {
					next: {
						title: 'Render List Data',
						link: 'reactjs-basic/documentation/render-list-data',
					},
					prev: {
						title: 'Hooks',
						link: 'reactjs-basic/documentation/hooks',
					},
				},
				number: 0,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'reactjs-basic', currentDocId: 4 })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
			demoFnc1() {
				this.number++;
				alert(this.number - 1);
			},
		},
	};
</script>
