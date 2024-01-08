<template>
	<div class="flex flex-col items-center pt-10">
		<img src="./assets/images/404-page.png" class="block mx-auto" alt="" />
		<div class="text-primary font-bold xl:text-5xl lg:text-4xl md:text-3xl text-3xl mt-10">
			Error: {{ customError?.statusCode }}
		</div>

		<div class="font-bold text-3xl xl:text-4xl my-10">
			{{
				customError?.statusCode && customError?.statusCode === 404
					? 'Xin lỗi, chúng tôi không thấy trang bạn đang tìm kiếm.'
					: customError?.message
			}}
		</div>

		<!-- <div v-if="customError?.statusCode === 404" class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
			The page you are looking for could not be found.
		</div> -->
		<SepNormalButton
			size="x-lagre"
			type="submit"
			:container-class="'block rounded-xl font-semibold text-white'"
			color="primary"
			@click="$router.push('/')"
		>
			Quay về trang chủ
		</SepNormalButton>
	</div>
</template>
<script lang="ts">
	import SepNormalButton from './components/Buttons/SepNormalButton.vue';
	export default {
		components: { SepNormalButton },
		setup() {
			const error = useError();
			const customError = {
				//@ts-ignore
				statusCode: error.value?.statusCode || 500,
				message: error.value?.message,
			};
			return {
				customError,
			};
		},
	};
</script>
