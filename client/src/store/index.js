import Vue from 'vue'
import Vuex from 'vuex'
// import tweet from './modules/tweet'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // tweet,
    auth
  },
  strict: true
})
