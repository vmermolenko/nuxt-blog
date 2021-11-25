export const strict = false
////////////////state
export const state = () => ({
  tours: [],
  SelectedCategory: ['all'],
  turForZakaz: '',
  filteredTurs: [],
});
////////////////getters
export const getters = {
  getTours(state) {
    return state.tours
  },
  isAuthenticated(state) {
    return state.auth.loggedIn; // auth object as default will be added in vuex state, when you initialize nuxt auth
  },
  getUserInfo(state) {
    return state.auth.user;
  },
  SelectedCategory(state) {
    return state.SelectedCategory
  },
  getTurForZakaz(state) {
    return state.turForZakaz
  },
  getFilteredTurs(state){
    return state.filteredTurs
  },

};
////////////////mutation
export const mutations =
{
  setEditTour(state, editedTour){
    for (var i = 0; i < state.tours.length; i++) {
      var cur = state.tours[i];
      if (cur.id === editedTour.id) {
          state.tours.splice(i, 1);
          break;
      }
    }
    state.tours.push(editedTour)
  },
  setTurs(state, newTur){
    state.tours.push(newTur)
  },
  deleteTur(state, id){
    for (var i = 0; i < state.tours.length; i++) {
      var cur = state.turs[i];
      if (cur.id === id) {
          state.tours.splice(i, 1);
          break;
      }
    }
  },
  setTurForZakaz(state, title){
    state.turForZakaz = title
  },
  setFilterByCategory(state, newArray){
    state.SelectedCategory = newArray
  },
  updateTours(state, tours) {
    state.tours = tours
  }
};
////////////////actions
export const actions =
{
  getToursActions(state, newTur){
    state.tours.push(newTur)
  },
  async getAllTours({ commit }) {
    const headers = {
      'Content-Type': 'application/json'
    };
    const gettours = await this.$axios.$get(process.env.baseURL + '/api/turs/all', headers)
    .then((response) => {
        //console.log('response.', response);
        commit('updateTours', response)
    }).catch((error) => {
        //console.warn('error: ', error);
    })
  },
  async getTourById({ commit }) {
    const headers = {
      'Content-Type': 'application/json'
    };
    const gettours = await this.$axios.$get(process.env.baseURL + '/api/turs/all', headers)
    .then((response) => {
        //console.log('response.', response);
        commit('updateTours', response)
    }).catch((error) => {
        //console.warn('error: ', error);
    })
  },
  async setTourCreate({dispatch}) {
    const headers = {
      'Content-Type': 'application/json'
    };
    const gettours = await this.$axios.$post(process.env.baseURL + '/api/turs', headers)
    .then((response) => {
        //console.log('response.', response)
    }).catch((error) => {
        //console.warn('error: ', error);
    })

    await dispatch('getAllTours')
  },
  async setTourDelete({dispatch}, id) {
    //console.log('setTourDelete ' , id);
    const headers = {
      'Content-Type': 'application/json'
    };
    const gettours = await this.$axios.$delete(process.env.baseURL + `/api/turs/${id}` , headers)
    .then((response) => {
        //console.log('response.', response)
    }).catch((error) => {
        //console.warn('error: ', error);
    })

    await dispatch('getAllTours')
  },
  async setTourUpdate({dispatch}, payload) {
    //console.log('setTourUpdate:  ' , payload);
    const headers = {
      'Content-Type': 'application/json'
    };
    const gettours = await this.$axios.$put(process.env.baseURL + `/api/turs/${payload.id}`, payload,  headers)
    .then((response) => {
        //console.log('response.', response)
    }).catch((error) => {
        //console.warn('error: ', error);
    })

    //await dispatch('getAllTours')
  },
};


