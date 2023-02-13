import { Routes } from './type';

export const docsRoutes: Routes = [
  {
    label: 'ドキュメント',
    path: '/docs/overview',
  },
  {
    label: 'クイックスタート',
    path: '/docs/quick-start',
  },
  {
    label: 'チュートリアル',
    pages: [
      { label: 'はじめに', path: '/docs/tutorial/getting-started' },
      {
        label: 'スニペットを登録する',
        path: '/docs/tutorial/create-snippet-data',
      },
      {
        label: 'サイトのページに反映させる',
        path: '/docs/tutorial/display-snippet-data',
      },
      {
        label: '一覧ページを設ける',
        path: '/docs/tutorial/create-snippets-list',
      },
    ],
  },

  {
    label: 'ガイド',
    pages: [
      { label: 'はじめに', path: '/docs/guides/overview' },
      {
        label: '各種設定',
        path: '/docs/guides/settings',
      },
      { label: 'デプロイ', path: '/docs/guides/deployment' },
    ],
  },
];

export const allDocsRoutes: Routes = docsRoutes.flatMap((route) =>
  route.pages ? route.pages : [{ label: route.label, path: route.path }],
);
