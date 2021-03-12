<template>
  <b-card>
    <b-row>
      <!-- User Info: Left col -->
      <b-col
        cols="21"
        xl="6"
        class="d-flex justify-content-between flex-column"
      >
        <!-- User Avatar & Action Buttons -->
        <div class="d-flex justify-content-start">
          <b-avatar
            :src="dataBarang.avatar"
            :text="avatarText(dataBarang.nama)"
            size="104px"
            rounded
          />
          <div class="d-flex flex-column ml-1">
            <div class="mb-1">
              <h2 class="mb-0">
                {{ dataBarang.nama }}
              </h2>
            </div>
            <div class="d-flex flex-wrap">
              <b-button
                :to="{ name: 'apps-users-edit', params: { id: dataBarang.id } }"
                variant="primary"
              >
                Edit
              </b-button>
              <b-button
                variant="outline-danger"
                class="ml-1"
              >
                Delete
              </b-button>
            </div>
          </div>
        </div>

        <!-- User Stats -->
        <div class="d-flex align-items-center mt-2">
          <div class="d-flex align-items-center mr-2">
            <b-avatar
              variant="light-primary"
              rounded
            >
              <feather-icon
                icon="DollarSignIcon"
                size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                23.3k
              </h5>
              <small>Penjualan Bulanan</small>
            </div>
          </div>

          <div class="d-flex align-items-center">
            <b-avatar
              variant="light-success"
              rounded
            >
              <feather-icon
                icon="TrendingUpIcon"
                size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                $99.87k
              </h5>
              <small>Profit Tahunan</small>
            </div>
          </div>
        </div>
      </b-col>

      <!-- Right Col: Table -->
      <b-col
        cols="12"
        xl="6"
      >
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="UserIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Jenis</span>
            </th>
            <td class="pb-50">
              {{ dataBarang.nama_jenis }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CheckIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Satuan</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ dataBarang.nama_satuan }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="StarIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Merek</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ dataBarang.nama_merek }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="FlagIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Harga</span>
            </th>
            <td class="pb-50">
              {{ formatRupiah(dataBarang.harga_1) }} <br>
              {{ formatRupiah(dataBarang.harga_2) }} <br>
              {{ formatRupiah(dataBarang.harga_3) }} <br>
            </td>
          </tr>
        </table>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BButton, BAvatar, BRow, BCol,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
// import useUsersList from '../users-list/useUsersList'

export default {
  components: {
    BCard,
    BButton,
    BRow,
    BCol,
    BAvatar,
  },
  props: {
    dataBarang: {
      type: Object,
      required: true,
    },
  },
  setup() {
    // const { resolveUserRoleVariant } = useUsersList()
    return {
      avatarText,
      // resolveUserRoleVariant,
    }
  },
  methods: {
    formatRupiah(value) {
      return `Rp. ${value
        .toFixed(0)
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`
    },
  },
}
</script>

<style></style>
