<template>
  <b-row>
    <b-col cols="12"
      ><b-card>
        <b-card-header class="pb-50">
          <h4>
            Data Barang
          </h4>
        </b-card-header>
        <b-card-body>
          <div>
            <!-- Add New Item Button -->
            <div class="flex justify-content-end">
              <b-form-group>
                <div class="d-flex align-items-center">
                  <b-button variant="primary" @click="toTambahScreen()">
                    <span class="text-nowrap">Add Item</span>
                  </b-button>
                </div>
              </b-form-group>
            </div>
            <!-- search input -->
            <div class="custom-search d-flex justify-content-end">
              <b-form-group>
                <div class="d-flex align-items-center">
                  <label class="mr-1">Search</label>
                  <b-form-input
                    v-model="searchTerm"
                    placeholder="Search"
                    type="text"
                    class="d-inline-block"
                  />
                </div>
              </b-form-group>
            </div>

            <!-- <b-col cols="12" md="6">
              <div class="d-flex align-items-center justify-content-end">
                <b-form-input
                  v-model="searchQuery"
                  class="d-inline-block mr-1"
                  placeholder="Search..."
                />
                <b-button
                  variant="primary"
                  @click="isAddNewUserSidebarActive = true"
                >
                  <span class="text-nowrap">Add User</span>
                </b-button>
              </div>
            </b-col> -->
            <!-- table -->
            <vue-good-table
              :columns="columns"
              :rows="rows"
              :line-numbers="true"
              :search-options="{
                enabled: true,
                placeholder: 'Pencarian Data',
                externalQuery: searchTerm,
              }"
              :pagination-options="{
                enabled: true,
                mode: 'records',
                perPage: 5,
                position: 'top',
                perPageDropdown: [5, 10, 20],
                dropdownAllowAll: false,
                setCurrentPage: 2,
                nextLabel: 'next',
                prevLabel: 'prev',
                rowsPerPageLabel: 'Data per halaman',
                ofLabel: 'of',
                pageLabel: 'page', // for 'pages' mode
                allLabel: 'All',
                infoFn: (params) => `my own page ${params.firstRecordOnPage}`,
              }"
              >>
            </vue-good-table>
          </div>
        </b-card-body>
      </b-card></b-col
    ></b-row
  >
</template>

<script>
import {
  BRow,
  BCol,
  // BBadge,
  // BPagination,
  BFormGroup,
  BFormInput,
  BButton,
  // BFormSelect,
  // BDropdown,
  BCard,
  BCardBody,
  // BDropdownItem,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import axios from 'axios'

export default {
  components: {
    BRow,
    BCol,
    VueGoodTable,
    // BBadge,
    // BPagination,
    BFormGroup,
    BFormInput,
    BButton,
    // BFormSelect,
    // BDropdown,
    // BDropdownItem,
    BCard,
    BCardBody,
  },
  data() {
    return {
      pageLength: 5,
      dir: false,
      columns: [
        {
          label: 'Kode',
          field: 'nama',
        },
        {
          label: 'Nama',
          field: 'nama',
        },
        {
          label: 'Jenis',
          field: 'nama_jenis',
        },
        {
          label: 'Merek',
          field: 'nama_merek',
        },
        {
          label: 'Satuan',
          field: 'nama_satuan',
        },
        {
          label: 'Harga Jual',
          field: this.fieldFn,
          html: true,
        },
      ],
      rows: [],
      searchTerm: '',
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/barang')
      .then((res) => {
        this.rows = res.data
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    fieldFn(rows) {
      return `${rows.harga_1} <br> ${rows.harga_2} <br> ${rows.harga_3}`
    },
    toTambahScreen() {
      this.$router.push({ name: 'screen-barang-tambah' })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
