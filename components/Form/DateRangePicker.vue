<template>
	<VueDatePicker
		v-model="date"
		range
		:multi-calendars="{ solo: true }"
		:placeholder="placeholder"
		:config="config"
		:format="formatRange"
		:preview-format="format"
		:day-names="['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']"
		locale="vi"
		auto-apply
	/>
</template>

<script lang="ts">
	import VueDatePicker from '@vuepic/vue-datepicker';
	import '@vuepic/vue-datepicker/dist/main.css';
	import { PropType } from 'vue';
	import { ref, reactive, onMounted } from 'vue';
	import { formatDateYMD } from '../../helpers/formatter';
	import viLocale from 'date-fns/locale/vi';

	export default {
		props: {
			firstSync: {
				type: Boolean,
				default: true,
			},
			placeholder: {
				type: String,
				default: 'Thời gian',
			},
			initialValue: {
				type: Array as PropType<string[]>,
				default() {
					return ['', ''];
				},
			},
		},
		setup() {
			const config = reactive<Record<string, any>>({ closeOnAutoApply: false });
			// For demo purposes assign range from the current date

			return {
				config,
			};
		},
		data() {
			return {
				date: ['', ''],
				viLocale: viLocale,
			};
		},
		components: { VueDatePicker },
		watch: {
			date: {
				deep: true,
				handler() {
					if (!Array.isArray(this.date)) {
						this.$emit('selected-date', ['', '']);
						return;
					}
					const date = this.date.map((o: string | Date) => {
						return formatDateYMD(o as string) || '';
					});
					this.$emit('selected-date', date);
				},
			},
			initialValue: {
				deep: true,
				handler() {
					if (this.firstSync) {
						//@ts-ignore
						this.date = this.initialValue.map((o: string): string | Date => {
							return o ? new Date(o) : '';
						});
					}
				},
			},
		},
		mounted() {},
		methods: {
			format(date: Date) {
				if (!date) {
					return '';
				}
				const day = date.getDate();
				const month = date.getMonth() + 1;
				const year = date.getFullYear();

				return `${day}/${month}/${year}`;
			},
			formatRange([start, end]: Date[]) {
				if (!start || !end) {
					return '';
				}
				const startday = start.getDate();
				const startmonth = start.getMonth() + 1;
				const startyear = start.getFullYear();
				const endday = end.getDate();
				const endmonth = end.getMonth() + 1;
				const endyear = end.getFullYear();

				return `${startday}/${startmonth}/${startyear} - ${endday}/${endmonth}/${endyear}`;
			},
		},
	};
</script>
<style lang="scss">
	.dp__input {
		border-color: #b8c1c9e4 !important;
		border-radius: 12px;
		height: 42px;
		font-size: 14px !important;
	}
	.dp__main .dp__theme_light {
		/* height: 42px; */
	}
</style>
