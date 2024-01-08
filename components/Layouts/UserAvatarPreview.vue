<template>
	<div class="text-right ml-0">
		<div class="fm-w d-flex w-full items-center justify-center rounded-md text-sm focus:outline-none">
			<img
				v-if="imgWork"
				:src="user?.avatar"
				alt="user-avatar"
				:class="`object-fit-cover rounded-[${size}px] user-avatar`"
				:style="`width: ${size}px; height: ${size}px; border-radius: 100%;`"
				@error="failedImg"
			/>
			<p
				v-else
				:class="`
				flex items-center 
				justify-center text-uppercase 
				font-semibold text-primary text-xl ${background} user-avatar`"
				:style="`width: ${size}px; height: ${size}px; border-radius: 100%;`"
			>
				{{ user?.name.slice(0, 1) }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { PropType } from 'nuxt/dist/app/compat/capi';
	import { UserAvatar } from '~/models/index';

	export default {
		setup() {
			return {};
		},
		props: {
			user: {
				type: Object as PropType<UserAvatar>,
				default: {
					name: 'User',
					avatar: '',
				},
			},
			size: {
				type: Number,
				default: 32,
			},
			background: {
				type: String,
				default: 'bg-white',
			},
		},
		data() {
			return {
				imgWork: true,
			};
		},
		mounted() {
			if (!this.user.avatar) {
				this.imgWork = false;
			}
		},
		watch: {
			user: {
				deep: true,
				handler() {
					if (!this.user.avatar) {
						this.imgWork = false;
					}
				},
			},
		},
		methods: {
			failedImg() {
				this.imgWork = false;
			},
		},
	};
</script>
<style lang="scss" scoped>
	.fm-w {
		.user-avatar {
			border: 1px solid #fe9705;
			position: relative;
			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: calc(100% + 12px);
				height: calc(100% + 12px);

				border: 1px solid #fe9705;
				border-radius: 100%;
			}
		}
	}
</style>
