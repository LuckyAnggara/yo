export default [
  {
    path: '/screen/barang/tambah',
    name: 'screen-barang-tambah',
    component: () => import('@/views/screens/barang/Tambah/Tambah.vue'),
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
    name: 'screen-barang',
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
  {
    path: '/screen/barang/detail/:id',
    name: 'screen-barang-detail',
    component: () => import('@/views/screens/barang/Detail/Detail.vue'),
    meta: {
      pageTitle: 'Daftar',
      breadcrumb: [
        {
          text: 'Barang',
          to: '/screen/barang/',
        },
        {
          text: 'Detail Data',
          active: true,
        },
      ],
    },
  },
  {
    path: '/screen/kontak/',
    name: 'screen-kontak',
    component: () => import('@/views/screens/kontak/Daftar.vue'),
    meta: {
      pageTitle: 'Daftar',
      breadcrumb: [
        {
          active: true,
          text: 'Kontak',
          to: '/screen/kontak/',
        },
      ],
    },
  },
]
