<template>
  <b-row>
    <b-col cols="12"
      ><b-card>
        <b-card-body>
          <div>
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

            <!-- table -->
            <vue-good-table
              :columns="columns"
              :rows="rows"
              :rtl="direction"
              :search-options="{
                enabled: true,
                externalQuery: searchTerm,
              }"
              :select-options="{
                enabled: true,
                selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
                selectionInfoClass: 'custom-class',
                selectionText: 'rows selected',
                clearSelectionText: 'clear',
                disableSelectInfo: true, // disable the select info panel on top
                selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
              }"
              :pagination-options="{
                enabled: true,
                perPage: pageLength,
              }"
            >
              <template slot="table-row" slot-scope="props">
                <!-- Column: Name -->
                <span v-if="props.column.field === 'nama'" class="text-nowrap">
                  <span class="text-nowrap">{{ props.row.nama }}</span>
                </span>

                <!-- Column: Status -->
                <span v-else-if="props.column.field === 'harga_1'">
                  {{ props.row.harga_1 }}
                </span>
              </template>

              <!-- pagination -->
              <template slot="pagination-bottom" slot-scope="props">
                <div class="d-flex justify-content-between flex-wrap">
                  <div class="d-flex align-items-center mb-0 mt-1">
                    <span class="text-nowrap ">
                      Showing 1 to
                    </span>
                    <b-form-select
                      v-model="pageLength"
                      :options="['3', '5', '10']"
                      class="mx-1"
                      @input="
                        (value) =>
                          props.perPageChanged({ currentPerPage: value })
                      "
                    />
                    <span class="text-nowrap">
                      of {{ props.total }} entries
                    </span>
                  </div>
                  <div>
                    <b-pagination
                      :value="1"
                      :total-rows="props.total"
                      :per-page="pageLength"
                      first-number
                      last-number
                      align="right"
                      prev-class="prev-item"
                      next-class="next-item"
                      class="mt-1 mb-0"
                      @input="
                        (value) => props.pageChanged({ currentPage: value })
                      "
                    >
                      <template #prev-text>
                        <feather-icon icon="ChevronLeftIcon" size="18" />
                      </template>
                      <template #next-text>
                        <feather-icon icon="ChevronRightIcon" size="18" />
                      </template>
                    </b-pagination>
                  </div>
                </div>
              </template>
            </vue-good-table>
          </div>
        </b-card-body> </b-card></b-col
  ></b-row>
</template>

<script>
import {
  // BBadge,
  BPagination,
  BFormGroup,
  BFormInput,
  BFormSelect,
  // BDropdown,
  BCard,
  BCardBody,
  // BDropdownItem,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import axios from 'axios'

export default {
  components: {
    VueGoodTable,
    // BBadge,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
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
          label: 'Nama',
          field: 'nama',
        },
        {
          label: 'Harga Jual Ke 1',
          field: 'harga_1',
        },
        {
          label: 'Harga Jual Ke 2',
          field: 'harga_2',
        },
        {
          label: 'Harga Jual Ke 3',
          field: 'harga_3',
        },
      ],
      rows: [],
      searchTerm: '',
      status: [
        {
          1: 'Current',
          2: 'Professional',
          3: 'Rejected',
          4: 'Resigned',
          5: 'Applied',
        },
        {
          1: 'light-primary',
          2: 'light-success',
          3: 'light-danger',
          4: 'light-warning',
          5: 'light-info',
        },
      ],
    }
  },
  computed: {
    statusVariant() {
      const statusColor = {
        /* eslint-disable key-spacing */
        Current: 'light-primary',
        Professional: 'light-success',
        Rejected: 'light-danger',
        Resigned: 'light-warning',
        Applied: 'light-info',
        /* eslint-enable key-spacing */
      }

      return (status) => statusColor[status]
    },
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false
      return this.dir
    },
  },
  created() {
    axios
      .get('http://127.0.0.1:8000/api/barang')
      .then((res) => {
        this.row = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
