import { getAccessorType } from 'typed-vuex'

import * as offer from '@/store/offer'

export const state = () => { }
export const getters = {}
export const mutations = {}
export const actions = {}
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    offer,
  },
})

