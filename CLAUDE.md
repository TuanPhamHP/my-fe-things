# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Zero to Hero** — nền tảng học lập trình online gồm nhiều khoá học (SQL, Node.js, PHP, Next.js, Nest.js, HTML/CSS/JS, React, Python, MongoDB). Mỗi khoá chia thành `/documentation` (lý thuyết) và `/practice` (bài thực hành).

- **Framework:** Nuxt 3 — SPA mode (`ssr: false`)
- **Language:** TypeScript (bắt buộc, không dùng `any`)
- **Styling:** Tailwind CSS + custom color palette + SCSS globals
- **State:** Pinia (setup store style)
- **Package Manager:** Yarn

## Commands

```bash
yarn dev          # Dev server tại http://localhost:4000
yarn build        # Production build
yarn start        # Production server tại port 5000
yarn generate     # Static site generation
yarn preview      # Preview production build
```

## Architecture

```
pages/            # File-based routing — mỗi khoá học là 1 folder
  sql/
    documentation/  # Bài giảng lý thuyết
    practice/       # Bài thực hành
  nodejs/ php/ nestjs/ reactjs-basic/ nextjs-basic/ python/ mongodb/ html-css-js-basic/
components/       # Auto-import, subfolder prefix: ui/Button.vue → <UiButton />
  Documentation/    # PageHeading, PageMarkBook, LessonSum
  Coding/           # CodeEditor, Preview
  Practice/         # PracticeCardPreview
  Layouts/          # Header, Sidebar, Breadcrumb
  global/           # Global components (auto-prefix `.global`)
composables/      # Logic tái sử dụng (useAuthHeader, usePagination, ...)
store/            # Pinia stores (auth, appState, AppNotification, Internal)
services/         # API layer — export qua services/index.ts thành $api plugin
helpers/          # Pure functions (cFetch, formatter, notification, globalHelpers)
models/           # TypeScript interfaces và types
layouts/          # default.vue (có sidebar + header khi đã login)
```

## Lesson Page Pattern

Mỗi trang bài giảng trong `pages/*/documentation/*.vue` tuân theo cấu trúc sau:

```vue
<template>
  <div class="punch-page-wrapper">
    <div class="page-data">
      <PageHeading text="Tiêu đề chính" :lvl="1" markedAs="section-id" />

      <p>Nội dung đoạn văn...</p>

      <PageHeading text="Tiêu đề phụ" :lvl="2" markedAs="sub-section-id" />

      <!-- Code block luôn bọc trong ClientOnly -->
      <ClientOnly>
        <VCodeBlock :code="exampleCode" highlightjs lang="sql" />
      </ClientOnly>

      <!-- Highlight file path hoặc inline code -->
      <FilePath>path/to/file.sql</FilePath>
      <!-- Với click-to-copy -->
      <FilePath textCoppy="COPY THIS">text hiển thị</FilePath>

      <!-- Terminal command -->
      <FakeTerminalUI textCoppy="npm install" />

      <!-- Điều hướng bài học -->
      <doc-next-page :pagination="pagePagination" />
    </div>

    <!-- TOC sidebar — tự động tạo từ PageHeading -->
    <PageMarkBook />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagePagination: null,
      exampleCode: `SELECT * FROM users;`,
    };
  },
  async mounted() {
    this.pagePagination = await this.$api.documentations.getPagination({
      appIds: 'sql',
      currentDocId: 'sql-unique-id',
    });
  },
};
</script>
```

**Lưu ý quan trọng:**
- `PageMarkBook` tự động query `.page-heading-lv1` và `.page-heading-lv2` để tạo TOC — vì vậy `markedAs` phải là unique string.
- Các trang bài giảng hiện dùng **Options API** (không phải Composition API).
- `VCodeBlock` **bắt buộc** bọc trong `<ClientOnly>` để tránh SSR mismatch.

## Component Props Reference

### `<PageHeading>`
| Prop | Type | Mô tả |
|------|------|--------|
| `text` | `string` | Nội dung tiêu đề |
| `lvl` | `1 \| 2 \| 3 \| 4` | Mức độ heading |
| `markedAs` | `string` | ID dùng cho TOC anchor (phải unique) |
| `addOnClass` | `string` | CSS class bổ sung |

### `<FilePath>`
| Prop | Type | Mô tả |
|------|------|--------|
| `textCoppy` | `string?` | Text để copy khi click |
| `containeClass` | `string?` | CSS class bổ sung |

### `<doc-next-page>`
| Prop | Type | Mô tả |
|------|------|--------|
| `pagination` | `{ next: { title, link }, prev: { title, link } }` | Dữ liệu điều hướng |

### `<VCodeBlock>` (từ `@wdns/vue-code-block`)
| Prop | Mô tả |
|------|--------|
| `code` | Code string |
| `lang` | Ngôn ngữ (sql, typescript, bash, ...) |
| `highlightjs` | Dùng highlight.js |

## API Layer (`$api`)

Services được inject toàn cục qua `services/index.ts` dưới dạng Nuxt plugin:

```js
// Trong Options API
this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-1' })

// Trong Composition API
const { $api } = useNuxtApp()
await $api.documentations.getList({ appIds: 'sql' })
```

**Fetch wrapper** (`helpers/cFetch.ts`) tự động thêm `Authorization: Bearer {token}` nếu user đã đăng nhập.

## State Management

```ts
// Auth
const authStore = useAuthStore()
authStore.user        // AuthUser | null
authStore.isLogged    // boolean
authStore.setUser(payload)
authStore.logout()

// App state (theme, loading, breadcrumbs)
const appState = useAppStateStore()

// Notifications
import { setSnack } from '~/helpers/notification'
setSnack({ text: 'Thành công!', type: 'success', delay: 3000 })
```

## Global Helpers (`this.$globalHelpers`)

```ts
dirtyWait(ms)                        // Promise timeout
getCurrency(num)                     // Format tiền tệ
truncateString(str, limit, type)     // Rút gọn chuỗi
formatBytes(bytes)                   // Format dung lượng file
mapPathToApp(path)                   // Map route → AppName
```

## Tailwind Color Palette

Custom palette dùng trong project (thay vì Tailwind mặc định):
- `neutral-{100-900}` — grayscale
- `primary-{100-900}` — cam (brand color)
- `accent-{100-900}` — cam/rust
- `error-*` / `warning-*` / `success-*` / `info-*` — semantic colors

## Key Conventions

- **TypeScript bắt buộc** — không dùng `any`
- **Naming:** Components `PascalCase`, pages `kebab-case`, composables `useX.ts`, stores `useXStore`
- **New components:** dùng `<script setup lang="ts">` + typed `defineProps<{}>()` / `defineEmits<{}>()`
- **Không** đặt business logic (API calls) trực tiếp trong pages hoặc components — tách ra composable
- **Tailwind** mobile-first (`sm:`, `md:`, `lg:`), không viết custom CSS nếu Tailwind đã có utility
- `utils/` và `helpers/` chỉ chứa pure functions — không import Vue/Nuxt

## Adding a New Lesson Page

1. Tạo file `pages/{course}/documentation/{lesson-name}.vue`
2. Dùng cấu trúc Options API như pattern ở trên
3. Gọi `this.$api.documentations.getPagination(...)` trong `mounted()` để lấy điều hướng
4. Mỗi `<PageHeading>` cần `markedAs` unique để TOC hoạt động đúng
5. Tất cả `<VCodeBlock>` phải trong `<ClientOnly>`
