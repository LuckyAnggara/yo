import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchSemuaBarang(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://127.0.0.1:8000/api/barang', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchBarang(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://127.0.0.1:8000/api/barang/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addBarang(ctx, data) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://127.0.0.1:8000/api/barang/store', data)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
