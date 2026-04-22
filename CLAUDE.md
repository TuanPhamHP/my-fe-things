# my-fe-things

Web-app học tập, nơi chứa các bài giảng về các ngôn ngữ lập trình, framework liên quan. Chia làm 2 phần là lý thuyết và thực hành.

## Target Users

- **Học viên:** Học lý thuyết, thực hành các bài tập để nâng cao level.

## Tech Stack

- **Framework:** Nuxt 3
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Pinia
- **Package Manager:** Yarn

## Project Structure

```
app/
├── assets/
├── components/
├── composables/
├── layouts/
├── middleware/
├── pages/ # Quản lý Hành trình xe + Phân khu mỗi ngôn ngữ / frameworkd được tổ chức vào 1 thư mục gồm /documentation - lý thuyết và  /practice - thực hành
│   ├── sql/
│   │   ├──── documentation/  # các trang lý thuyết
│   │   ├──── practice/  # các bài thực hành
│   ├── nestjs/
│   ├── ....
├── plugins/
utils/
tests/
```

## Environment Variables

```env
NUXT_API_SECRET=
NUXT_PUBLIC_API_BASE=
NUXT_PORT=
PORT=
```

## Common Commands

```bash
yarn dev
yarn build
yarn generate     # Static build
yarn preview
yarn typecheck
yarn test
yarn test:e2e
yarn test:e2e:ui
```

## Component thường dùng trong bài giảng:

- Các section chính trong các bài giảng sẽ sử dụng `<PageHeading :level="headingLevel" ></PageHeading>` với `headingLevel` là mức độ quan trọng của tiêu đề.
- `<FilePath></FilePath>`: là UI-components thể hiện text là dạng file-path trong máy hoặc dùng để highlight.
- `<VCodeBlock></VCodeBlock>`: là component dùng để show code, thường sẽ dùng kèm `<ClientOnly></ClientOnly>`
- `<doc-next-page></doc-next-page>`: là component chuyển bài học tiếp/sau.

## Key Conventions

- Xem chi tiết: @docs/conventions.md
- Xem components: @docs/components.md
