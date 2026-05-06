export function usePagination(
	type: 'practice' | 'documentation',
	currentDocId: string,
	appIds: string,
) {
	const { $api } = useNuxtApp()

	const pagePagination = ref({
		next: { title: '', link: '' },
		prev: { title: '', link: '' },
	})

	onMounted(async () => {
		const service = type === 'practice'
			? ($api as any).trainingTask
			: ($api as any).documentations

		try {
			const res = await service.getPagination({ appIds, currentDocId })
			if (res?.data?.pagination) {
				pagePagination.value = res.data.pagination
			}
		} catch {}
	})

	return { pagePagination }
}
