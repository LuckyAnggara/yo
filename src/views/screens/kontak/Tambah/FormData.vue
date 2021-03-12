<template>
  <b-card>
    <b-card-header class="pb-50">
      <h4>
        Detail Data
      </h4>
    </b-card-header>
    <b-card-body>
      <b-form @submit.prevent v-on:submit="create" autocomplete="off">
        <b-row>
          <b-col cols="12">
            <b-form-group
              label="Nama Barang"
              label-for="nama_barang"
              label-cols-md="4"
            >
              <b-form-input
                v-model="form.nama"
                id="nama_barang"
                placeholder="Nama Barang"
                required
              />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Jenis Barang"
              label-for="jenis_barang"
              label-cols-md="4"
            >
              <v-select
                v-model="form.jenis_id"
                placeholder="Jenis Barang"
                :reduce="nama => nama.id"
                label="nama"
                :options="jenisBarang"
              />
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group
              label="Merk Barang"
              label-for="merk_barang"
              label-cols-md="4"
            >
              <v-select
                v-model="form.merek_id"
                placeholder="Merek Barang"
                :reduce="nama => nama.id"
                label="nama"
                :options="merekBarang"
              />
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group label="Satuan" label-for="satuan" label-cols-md="4">
              <v-select
                v-model="form.satuan_id"
                placeholder="Satuan Barang"
                :reduce="nama => nama.id"
                label="nama"
                :options="satuanBarang"
              />
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group
              label="Harga Jual ke 1"
              label-for="harga_1"
              label-cols-md="4"
            >
              <b-form-input
                v-model="form.harga_1"
                id="harga_1"
                placeholder="Harga Jual ke 1"
                required
                type="number"
              />
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group
              label="Harga Jual ke 2"
              label-for="harga_2"
              label-cols-md="4"
            >
              <b-form-input
                v-model="form.harga_2"
                id="harga_2"
                placeholder="Harga Jual ke 2"
                required
                type="number"
              />
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group
              label="Harga Jual ke 3"
              label-for="harga_3"
              label-cols-md="4"
            >
              <b-form-input
                v-model="form.harga_3"
                id="harga_3"
                placeholder="Harga Jual ke 3"
                required
                type="number"
              />
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
  BForm,
  BButton,
  BCard,
  BCardHeader,
  BCardBody,
  BFormTextarea,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from 'axios'

export default {
  components: {
    vSelect,
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
      form: {
        nama: '',
        jenis_id: '',
        merek_id: '',
        satuan_id: '',
        harga_1: '',
        harga_2: '',
        harga_3: '',
        catatan: '',
      },
      selected: '',
      jenisBarang: [],
      merekBarang: [],
      satuanBarang: [],
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    success() {
      this.$swal({
        title: 'Success!',
        text: 'Data has been created!!',
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
      this.$router.push({
        name: 'screen-barang',
      })
    },
    error() {
      this.$swal({
        title: 'Error!',
        text: "Oopss there' a problem!",
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },
    load() {
      axios
        .get('http://127.0.0.1:8000/api/barang/jenis')
        .then(res => {
          this.jenisBarang = res.data
        })
        .catch(err => {
          console.log(err)
        })
      axios
        .get('http://127.0.0.1:8000/api/barang/satuan')
        .then(res => {
          this.satuanBarang = res.data
        })
        .catch(err => {
          console.log(err)
        })
      axios
        .get('http://127.0.0.1:8000/api/barang/merek')
        .then(res => {
          this.merekBarang = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    create() {
      axios
        .post('http://127.0.0.1:8000/api/barang/store', this.form)
        .then(res => {
          if (res.status === 200) {
            this.success()
          } else {
            this.error()
          }
        })
        .catch(err => {
          // handle error
          console.log(err)
        })
    },
  },
}
</script>
