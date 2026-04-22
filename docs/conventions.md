# Conventions

## Naming

| Loại           | Convention                         | Ví dụ                                |
| -------------- | ---------------------------------- | ------------------------------------ |
| Component      | PascalCase                         | `BookingForm.vue`, `ServiceCard.vue` |
| Composable     | camelCase + `use` prefix           | `useBooking.ts`, `useAuth.ts`        |
| Service        | camelCase + `.service` suffix      | `booking.service.ts`                 |
| Store          | camelCase + `use` + `Store` suffix | `useAuthStore`, `useBookingStore`    |
| Page           | kebab-case (Nuxt convention)       | `booking-confirmation.vue`           |
| Util           | camelCase                          | `formatDate.ts`, `validatePhone.ts`  |
| Type/Interface | PascalCase                         | `BookingPayload`, `ServiceItem`      |

## TypeScript

- **Luôn dùng TypeScript**, không dùng `any` trừ trường hợp bất khả kháng
- Define types/interfaces cho mọi API response trong `services/http/types.ts` hoặc file types riêng trong service
- Dùng `interface` cho object shapes, `type` cho union/computed types

## Components

- Ưu tiên **Composition API** với `<script setup lang="ts">`
- Props phải định nghĩa type rõ ràng với `defineProps<{}>()`
- Emit phải định nghĩa với `defineEmits<{}>()`
- Không dùng Options API

```vue
<!-- ✅ Đúng -->
<script setup lang="ts">
	interface Props {
		serviceId: string;
		label?: string;
	}
	const props = defineProps<Props>();
	const emit = defineEmits<{ submit: [id: string] }>();
</script>

<!-- ❌ Sai -->
<script>
	export default { props: ['serviceId'] };
</script>
```

## Services

- Mỗi service chỉ xử lý một domain (auth, user, booking, ...)
- Service function luôn return typed response, không return raw fetch response
- Xử lý error tại service layer, throw error có message rõ ràng
- Re-export tất cả qua `services/index.ts`

## Pinia Stores

- Dùng **setup store** style

```ts
// ✅ Đúng
export const useAuthStore = defineStore('auth', () => {
	const token = ref<string | null>(null);
	const isLoggedIn = computed(() => !!token.value);
	return { token, isLoggedIn };
});
```

## Tailwind CSS

- Không viết custom CSS nếu Tailwind đã có utility
- Dùng `@apply` trong component `<style>` chỉ khi class quá dài và lặp nhiều lần
- Responsive prefix: mobile-first (`sm:`, `md:`, `lg:`)

## File Organization

- Mỗi file chỉ export một concern chính
- Không đặt business logic trong `pages/` — tách ra composable hoặc service
- `utils/` chỉ chứa pure functions, không import Vue/Nuxt
