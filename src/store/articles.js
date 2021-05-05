import {getArticles} from '../api/feed'

export default {
    state: {
        articles: null,
        isLoading: false,
        errors: null
    },

    mutations: {
        GET_ARTICLES_START(state) {
            state.articles = null
            state.isLoading = true
            state.errors = null
        },
        GET_ARTICLES_SUCCESS(state, payload) {
            state.articles = payload
            state.isLoading = false
            state.errors = null
        },
        GET_ARTICLES_FAILURE(state) {
            state.isLoading = false
        }
    },

    actions: {
        GET_ARTICLES({ commit }, payload) {
            return new Promise((res, rej) => {
                commit('GET_ARTICLES_START')
                getArticles(payload)
                    .then(result => {
                        commit('GET_ARTICLES_SUCCESS', result.data)
                        res(result.data)
                    })
                    .catch(() => {
                        rej()
                    commit('GET_ARTICLES_FAILURE')
                })    
            })
        }
    },

    getters: {
        getArticles(state) {
            return state.articles
        }
    }
}