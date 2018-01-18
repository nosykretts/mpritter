import axios from 'axios'

const state = {
  isLoggedIn: localStorage.getItem('token') !== null
}

const getters = {
  isLoggedIn: state => state.isLoggedIn
}

const actions = {
  signin ({ commit }, { email, password }) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/signin', {
          email,
          password
        })
        .then(({ data }) => {
          commit('signinSuccess', {
            token: data.data.token,
            userId: data.data.userId
          })
          resolve()
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  },
  signup ({ commit }, { email, username, password }) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/signup', {
          username,
          email,
          password
        })
        .then(() => {
          commit('signupSuccess')
          resolve()
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  },
  signout ({ commit }) {
    commit('signout')
  }
}

const mutations = {
  signinSuccess (state, { token, userId }) {
    localStorage.setItem('token', `Bearer ${token}`)
    localStorage.setItem('userId', userId)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    state.isLoggedIn = true
  },
  signupSuccess (state) {},
  signout (state) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
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
