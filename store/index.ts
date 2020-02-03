import { Module } from 'vuex'
import { PrismicState } from '../types/PrismicState'
import { mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'
import { state } from './state'

export const module: Module<PrismicState, any> = {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
