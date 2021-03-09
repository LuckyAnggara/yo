export default [
  {
    path: '/screen/barang/tambah',
    name: 'screen-barang-tambah',
    component: () => import('@/views/screens/barang/Tambah.vue'),
    meta: {
      pageTitle: 'Tambah',
      breadcrumb: [
        {
          text: 'Barang',
          to: '/screen/barang/',
        },
        {
          text: 'Tambah',
          active: true,
        },
      ],
    },
  },
  {
    path: '/screen/barang/',
    name: 'screen-barang-daftar',
    component: () => import('@/views/screens/barang/Daftar.vue'),
    meta: {
      pageTitle: 'Daftar',
      breadcrumb: [
        {
          active: true,
          text: 'Barang',
          to: '/screen/barang/',
        },
      ],
    },
  },
]
