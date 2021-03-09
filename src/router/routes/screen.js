export default [
  {
    path: '/screen/barang',
    name: 'screen-barang',
    component: () => import('@/views/screens/barang/Daftar.vue'),
    meta: {
      pageTitle: 'Daftar',
      breadcrumb: [
        {
          text: 'Barang',
        },
        {
          text: 'Daftar',
          active: true,
        },
      ],
    },
  },
]
