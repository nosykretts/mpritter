import axios from 'axios'

const state = {
  isLoggedIn: localStorage.getItem('token') !== null
}

const getters = {
  isLoggedIn: state => state.isLoggedIn
}

const actions = {
  signin ({ commit }, { email, password, username }) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/signin', {
          username,
          email,
          password
        })
        .then(({ data }) => {
          commit('signinSuccess', {
            token: data.data.token
          })
          resolve()
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  },
  signup ({ commit }, { name, email, username, password }) {
    axios
      .post('/auth/signup', {
        name,
        username,
        email,
        password
      })
      .then(() => {
        commit('signupSuccess')
      })
      .catch(err => {
        console.log(err)
      })
  },
  signout ({ commit }) {
    commit('signout')
  }
}

const mutations = {
  signinSuccess (state, { token }) {
    localStorage.setItem('token', `Bearer ${token}`)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    state.isLoggedIn = true
  },
  signupSuccess (state) {},
  signout (state) {
    localStorage.removeItem('token')
    console.log(localStorage.getItem('token'))
    axios.defaults.headers.common.Authorization = 'Bearer jwt'
    state.isLoggedIn = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
