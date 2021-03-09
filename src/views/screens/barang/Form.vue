<template>
  <b-card>
    <b-card-header class="pb-50">
      <h4>
        Tambah Data
      </h4>
    </b-card-header>
    <b-card-body>
      <b-form @submit.prevent>
        <b-row>
          <b-col cols="12">
            <b-form-group
              label="Nama Barang"
              label-for="nama_barang"
              label-cols-md="4"
            >
              <b-form-input id="nama_barang" placeholder="Nama Barang" />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Jenis Barang"
              label-for="jenis_barang"
              label-cols-md="4"
            >
              <b-form-select v-model="selected">
                <option
                  v-for="item in jenis"
                  v-bind:key="item.id"
                  v-bind:value="item.id"
                >
                  {{ item.nama }}
                </option>
              </b-form-select>
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group
              label="Merk Barang"
              label-for="merk_barang"
              label-cols-md="4"
            >
              <b-form-select v-model="selected">
                <option
                  v-for="item in jenis"
                  v-bind:key="item.id"
                  v-bind:value="item.id"
                >
                  {{ item.nama }}
                </option>
              </b-form-select>
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group label="Satuan" label-for="satuan" label-cols-md="4">
              <b-form-select v-model="selected">
                <option
                  v-for="item in jenis"
                  v-bind:key="item.id"
                  v-bind:value="item.id"
                >
                  {{ item.nama }}
                </option>
              </b-form-select>
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group
              label="Harga Jual ke 1"
              label-for="harga_1"
              label-cols-md="4"
            >
              <b-form-input id="harga_1" placeholder="Harga Jual ke 1" />
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group
              label="Harga Jual ke 2"
              label-for="harga_2"
              label-cols-md="4"
            >
              <b-form-input id="harga_2" placeholder="Harga Jual ke 2" />
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group
              label="Harga Jual ke 3"
              label-for="harga_3"
              label-cols-md="4"
            >
              <b-form-input id="harga_3" placeholder="Harga Jual ke 3" />
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group label="Catatan" label-for="catatan" label-cols-md="4">
              <b-form-textarea id="catatan" placeholder="Catatan" rows="3" />
            </b-form-group>
          </b-col>

          <!-- submit and reset -->
          <b-col offset-md="4">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              type="submit"
              variant="primary"
              class="mr-1"
            >
              Submit
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="reset"
              variant="outline-secondary"
            >
              Reset
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BForm,
  BButton,
  BCard,
  BCardHeader,
  BCardBody,
  BFormTextarea,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import axios from 'axios'

export default {
  components: {
    BFormSelect,
    BCardHeader,
    BFormTextarea,
    BCard,
    BCardBody,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Simple Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
      jenis: [],
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      axios
        .get('http://127.0.0.1:8000/api/barang/jenis')
        .then((res) => {
          // this.jenis = res.data
          this.jenis = res.data
          // console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
