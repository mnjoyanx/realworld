import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import feed from './feed'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        feed
    }
})