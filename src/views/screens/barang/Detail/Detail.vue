<template>
  <div>
    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="dataBarang === undefined"
    >
      <h4 class="alert-heading">
        Error fetching user data
      </h4>
      <div class="alert-body">
        No user found with this user id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-users-list' }"
        >
          User List
        </b-link>
        for other users.
      </div>
    </b-alert>

    <template v-if="dataBarang">
      <!-- First Row -->
      <b-row>
        <b-col
          cols="12"
          xl="9"
          lg="8"
          md="7"
        >
          <barang-info-card :data-barang="dataBarang" />
        </b-col>
        <b-col
          cols="12"
          md="5"
          xl="3"
          lg="4"
        >
          <user-view-user-plan-card />
        </b-col>
      </b-row>

      <!-- <b-row>
        <b-col
          cols="12"
          lg="6"
        >
          <user-view-user-timeline-card />
        </b-col>
        <b-col
          cols="12"
          lg="6"
        >
          <user-view-user-permissions-card />
        </b-col>
      </b-row> -->

      <invoice-list />
    </template>
  </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
import { ref, onUnmounted } from '@vue/composition-api'
import {
  BRow, BCol, BAlert, BLink,
} from 'bootstrap-vue'
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'
import barangStoreModule from '../barangStoreModule'
import BarangInfoCard from './BarangInfoCard.vue'
import UserViewUserPlanCard from './UserViewUserPlanCard.vue'
// import UserViewUserTimelineCard from './UserViewUserTimelineCard.vue'
// import UserViewUserPermissionsCard from './UserViewUserPermissionsCard.vue'

export default {
  components: {
    BRow,
    BCol,
    BAlert,
    BLink,

    // Local Components
    BarangInfoCard,
    UserViewUserPlanCard,
    // UserViewUserTimelineCard,
    // UserViewUserPermissionsCard,

    InvoiceList,
  },
  setup() {
    const dataBarang = ref(null)

    const BARANG_APP_STORE_MODULE_NAME = 'app-barang'

    // Register module
    if (!store.hasModule(BARANG_APP_STORE_MODULE_NAME)) {
      store.registerModule(BARANG_APP_STORE_MODULE_NAME, barangStoreModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(BARANG_APP_STORE_MODULE_NAME)) {
        store.unregisterModule(BARANG_APP_STORE_MODULE_NAME)
      }
    })

    store
      .dispatch('app-barang/fetchBarang', { id: router.currentRoute.params.id })
      .then(response => {
        dataBarang.value = response.data
      })
      .catch(error => {
        if (error.response.status === 404) {
          dataBarang.value = undefined
        }
      })

    return {
      dataBarang,
    }
  },
}
</script>

<style></style>
