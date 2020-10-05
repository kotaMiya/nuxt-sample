import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex';

export interface IOffer {
  id: number;
  title: string;
}

export const state = () => ({
  offers: [] as IOffer[]
})

// export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  allOffers: state => {
    return state.offers;
  },
  singleOffer: (state, targetId: number) => {
    return state.offers.filter(offer => offer.id == targetId)
  },
})

export const mutations = mutationTree(state, {
  setOffers(state, offers: IOffer[]): void {
    state.offers = offers;
  },
})

export const actions = actionTree({ state, getters, mutations }, {
  async getOffers({ commit }) {
    try {
      const res = await this.$axios.$get('http://localhost:3000/api/offers');
      commit("setOffers", res.data);
    } catch (err) {
      console.log(err);
    }
  },
  // updateTitle({ getters, commit }): void {
  //   const currentTitle = getters.title
  //   commit('setTitle', `${currentTitle}huga`)
  // },
})

