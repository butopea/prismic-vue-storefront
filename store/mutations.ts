import { MutationTree } from 'vuex'
import * as types from './mutation-types'
import Vue from 'vue'

export const mutations: MutationTree<any> = {
  [types.SET_PRISMIC_CMS_BLOCK] (state, { prismicUid, data }) {
    Vue.set(state.prismicCmsBlocks, prismicUid, data)
  },
  [types.SET_PRISMIC_CMS_PAGE] (state, { prismicUid, data }) {
    Vue.set(state.prismicCmsPages, prismicUid, data)
  }
}
