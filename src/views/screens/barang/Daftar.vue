<template>
  <b-row class="match-height">
    <b-col lg="6">
      <form-daftar />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import FormDaftar from './Form.vue'

export default {
  components: {
    BRow,
    BCol,
    FormDaftar,
  },
}
</script>
