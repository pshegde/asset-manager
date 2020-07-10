import Vue from 'vue'
import Vuex from 'vuex'
import assets from './modules/assets'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    assets
  },
  strict: false
})