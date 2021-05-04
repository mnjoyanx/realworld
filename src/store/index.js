import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import articles from './articles'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        articles
    }
})